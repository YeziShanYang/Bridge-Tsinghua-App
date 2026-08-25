/* 渡 Dù · Bridge — WeChat Mini Program port of hospice-bridge-du.html
 * Single-page app shell: custom header + 4 custom tabs + 2 bottom sheets,
 * ported from the original's imperative DOM renderer to WXML data-binding.
 *
 * ENTER-AI-HOOK 1: askAI()     — same local keyword-match "search" engine
 *                                as the original. To go live, implement
 *                                getApp().globalData.duLLM(prompt) -> Promise<string>
 *                                and set getApp().globalData.DU_LIVE_AI = true.
 * ENTER-AI-HOOK 2: thread summaries ship pre-written (content.js) exactly
 *                  as in the original, for the same reason: the demo must
 *                  not depend on the network.
 */
var C = require('../../utils/content.js');

Page({
  data: {
    lang: 'en',
    tab: 0,
    sub: null, // null | 'thread' | 'kids' | 'dying'
    done: {}, // {stepIndex: true} — object map so WXML can look up done[idx] directly
    doneCount: 0,
    filter: 0,
    mapFilterOn: [true, false, false, false, false],
    selectedPin: 0,
    // pin positions as % of the map area, lifted from the original SVG's 414x214 viewBox
    pins: [
      { n: 1, left: 22.22, top: 27.1 },
      { n: 2, left: 42.99, top: 44.86 },
      { n: 3, left: 69.08, top: 29.91 },
      { n: 4, left: 79.71, top: 61.68 },
      { n: 5, left: 30.92, top: 70.09 },
      { n: 6, left: 57.0, top: 78.5 }
    ],
    sheet: null, // null | 'search' | 'safety'
    searchQuery: '',
    searchStage: 'empty', // empty | thinking | result
    searchResultHtml: '',
    toastText: '',
    toastShow: false,
    statusBarHeight: 20,
    navBarHeight: 44,
    headerRightPad: 90
  },

  onLoad: function () {
    this.setupSafeArea();
    this.refreshLang();
  },

  setupSafeArea: function () {
    try {
      var info = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      var menu = wx.getMenuButtonBoundingClientRect();
      var navBarHeight = (menu.top - info.statusBarHeight) * 2 + menu.height;
      var headerRightPad = (info.windowWidth - menu.left) + 16;
      this.setData({
        statusBarHeight: info.statusBarHeight || 20,
        navBarHeight: navBarHeight || 44,
        headerRightPad: headerRightPad || 90
      });
    } catch (e) { /* fall back to defaults already in data */ }
  },

  /* ================= language / content ================= */
  refreshLang: function () {
    var lang = this.data.lang;
    var tabsDisplay = C.tabs.map(function (t) {
      return { zh: t.zh, label: lang === 'en' ? t.en : t.py };
    });
    this.setData({
      brand: C.brand[lang],
      tabsDisplay: tabsDisplay,
      home: C.home[lang],
      forum: C.forum[lang],
      mapData: C.map[lang],
      words: C.words[lang],
      search: C.search[lang],
      safety: C.safety[lang],
      ui: C.ui[lang]
    });
  },

  onLangTap: function (e) {
    var lang = e.currentTarget.dataset.l;
    if (lang === this.data.lang) return;
    this.setData({ lang: lang, sub: null }, this.refreshLang.bind(this));
  },

  /* ================= chrome / tabs ================= */
  go: function (i) {
    if (i === this.data.tab) return;
    this.setData({ tab: i, sub: null, filter: 0 });
  },
  onTabTap: function (e) { this.go(e.currentTarget.dataset.i * 1); },
  onGateTap: function (e) {
    var go = e.currentTarget.dataset.go;
    this.go(go === 'words' ? 3 : go === 'map' ? 2 : 1);
  },

  /* ================= home: first ten days ================= */
  onStepTap: function (e) {
    var idx = e.currentTarget.dataset.idx * 1;
    var done = Object.assign({}, this.data.done);
    var ui = this.data.ui;
    if (done[idx]) { delete done[idx]; this.toast(ui.stepUndone); }
    else { done[idx] = true; this.toast(ui.stepDone); }
    this.setData({ done: done, doneCount: Object.keys(done).length });
  },

  /* ================= forum ================= */
  onForumFilterTap: function (e) {
    this.setData({ filter: e.currentTarget.dataset.i * 1 });
  },
  onPostTap: function (e) {
    var i = e.currentTarget.dataset.i * 1;
    var post = this.data.forum.posts[i];
    var ui = this.data.ui;
    if (post.open) this.setData({ sub: 'thread' });
    else this.toast(ui.openThread + ' · ' + ui.sampleData);
  },
  onSubBack: function () { this.setData({ sub: null }); },

  /* ================= care map ================= */
  onMapFilterTap: function (e) {
    var i = e.currentTarget.dataset.i * 1;
    var arr = this.data.mapFilterOn.slice();
    arr[i] = !arr[i];
    this.setData({ mapFilterOn: arr });
  },
  onPinTap: function (e) {
    var n = e.currentTarget.dataset.n * 1;
    var place = this.data.mapData.places.filter(function (x) { return x.n === n; })[0];
    this.setData({ selectedPin: n });
    if (place) this.toast(place.t + ' · ' + this.data.ui.sampleData);
  },

  /* ================= words ================= */
  onWordsTrackTap: function (e) {
    this.setData({ sub: e.currentTarget.dataset.go });
  },
  onMoreItemTap: function () { this.toast(this.data.ui.sampleData); },
  onSaveCardTap: function () { this.toast(this.data.ui.saved); },

  /* ================= sheets ================= */
  onSearchOpen: function () {
    this.setData({ sheet: 'search', searchQuery: '', searchStage: 'empty' });
  },
  onSafetyOpen: function () { this.setData({ sheet: 'safety' }); },
  onSheetClose: function () { this.setData({ sheet: null }); },

  onSearchInput: function (e) { this.setData({ searchQuery: e.detail.value }); },
  onSearchChip: function (e) {
    var q = e.currentTarget.dataset.q;
    this.setData({ searchQuery: q });
    this.askAI(q);
  },
  onSearchConfirm: function () { this.askAI(this.data.searchQuery); },

  /* ---- ENTER-AI-HOOK 1 : search --------------------------------- */
  askAI: function (q) {
    if (!q) return;
    var self = this;
    this.setData({ searchStage: 'thinking' });
    var app = getApp();
    var lang = this.data.lang;

    var deliver = function (html) {
      self.setData({ searchStage: 'result', searchResultHtml: html });
    };

    if (app.globalData.DU_LIVE_AI && typeof app.globalData.duLLM === 'function') {
      var prompt = 'You are the search inside 渡 (Dù) / Hospice Bridge, a palliative-care support app. ' +
        'Answer ONLY from the app\'s own material: the care map (hospices, palliative units, home teams, pain clinics, ' +
        'NGOs, offline groups) and the knowledge hub (talking with children by age; talking with someone who is dying; ' +
        'the four things that matter; the first-ten-days checklist). ' +
        'You are not a counsellor and not a clinician: never give medical advice, never diagnose, never act as a companion. ' +
        'If the question needs a person, say so plainly and point to the forum\'s Ask-a-specialist section or the map\'s phone lines. ' +
        'Answer in ' + (lang === 'en' ? 'English' : 'Simplified Chinese') + ', under 110 words, plain and warm, no bullet lists of platitudes. ' +
        'Question: ' + q;
      var done = false;
      var timer = setTimeout(function () { if (!done) { done = true; deliver(self.localAI(q)); } }, 9000);
      Promise.resolve(app.globalData.duLLM(prompt)).then(function (r) {
        if (done) return; done = true; clearTimeout(timer);
        deliver(String(r || '').replace(/\n/g, '<br>') || self.localAI(q));
      }).catch(function () {
        if (!done) { done = true; clearTimeout(timer); deliver(self.localAI(q)); }
      });
      return;
    }
    setTimeout(function () { deliver(self.localAI(q)); }, 620 + Math.random() * 420);
  },
  localAI: function (q) {
    var lang = this.data.lang, set = C.ai[lang], s = q.toLowerCase(), best = null, score = 0;
    set.forEach(function (e) {
      var n = 0;
      e.k.forEach(function (k) { if (s.indexOf(k.toLowerCase()) > -1) n++; });
      if (n > score) { score = n; best = e; }
    });
    if (!best || score === 0) return C.ai.fallback[lang];
    return best.a;
  },

  /* ================= compose (stub, matches prototype) =========== */
  onCompose: function () {
    var self = this, ui = this.data.ui;
    this.toast(ui.flagged);
    setTimeout(function () { self.toast(ui.posted); }, 2300);
  },

  /* ================= toast ================= */
  toast: function (msg) {
    var self = this;
    clearTimeout(this._toastTimer);
    this.setData({ toastText: msg, toastShow: true });
    this._toastTimer = setTimeout(function () { self.setData({ toastShow: false }); }, 2100);
  }
});
