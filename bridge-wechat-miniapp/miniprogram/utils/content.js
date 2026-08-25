/* Bilingual content data for the Bridge (渡) mini program. Ported from hospice-bridge-du.html verbatim. */
module.exports = {

/* ---------- chrome ---------- */
brand:{en:{name:"Bridge",sub:"渡 · the crossing"},zh:{name:"渡",sub:"HOSPICE BRIDGE"}},

tabs:[
 {zh:"渡口",en:"Home",py:"dùkǒu"},
 {zh:"同行",en:"Forum",py:"tóngxíng"},
 {zh:"寻路",en:"Care map",py:"xúnlù"},
 {zh:"言语",en:"Words",py:"yányǔ"}
],

/* ---------- home ---------- */
home:{
 en:{
  banner:"You don't have to cross this alone.",
  eyebrow:"First steps",
  title:"The first ten days",
  lede:"After a terminal diagnosis, most people freeze — not because they don't care, but because nobody says what to do first. Here is a first.",
  countLabel:"of ten done",
  steps:[
   "Ask the care team what the goal of treatment is",
   "Find out who your single named contact is",
   "Find out what palliative care exists where you live",
   "Ask about pain and symptom control separately",
   "Decide who else needs to know — and who tells them",
   "Talk to the children in the family",
   "Gather the paperwork you'll be asked for",
   "Ask what help is available at home",
   "Arrange one thing for yourself: sleep, a meal, an hour off",
   "Find one person you can be honest with"
  ],
  gates:[
   {zh:"孩",t:"How do I tell my child?",d:"Age by age, in plain words",go:"words"},
   {zh:"寻",t:"Where can we get help?",d:"Hospices, home teams, clinics",go:"map"},
   {zh:"问",t:"Ask a specialist",d:"Verified doctors and psychologists",go:"forum"},
   {zh:"伴",t:"I'm caring for someone",d:"People in the same week as you",go:"forum"}
  ],
  quietTitle:"Three silences",
  quietLede:"The reason this is hard is not one silence but three, stacked.",
  quiet:[
   {k:"Society",v:"Death is not discussed, so no one learns the words. The forum is where the words get said out loud."},
   {k:"The family",v:"Everyone knows and everyone pretends. The talking guides give both sides a way in."},
   {k:"The system",v:"Help exists and no one can find it. The map makes it visible."}
  ]
 },
 zh:{
  banner:"这条路，不必独自走。",
  eyebrow:"最初的步子",
  title:"最初的十天",
  lede:"确诊之后，多数人会僵住——不是因为不在乎，而是没有人告诉他们先做什么。这里有一个起点。",
  countLabel:"／十步已完成",
  steps:[
   "问清医疗团队：现在治疗的目标是什么",
   "确认谁是你固定的联系人",
   "了解你所在的城市有哪些安宁疗护资源",
   "单独问清疼痛与症状控制的安排",
   "决定还有谁需要知道——由谁来说",
   "和家里的孩子谈一谈",
   "把会被问到的材料整理好",
   "问清居家能得到哪些支持",
   "为自己安排一件事：睡觉、吃饭、休息一小时",
   "找到一个可以说实话的人"
  ],
  gates:[
   {zh:"孩",t:"怎么告诉孩子？",d:"按年龄，用听得懂的话",go:"words"},
   {zh:"寻",t:"去哪里求助？",d:"安宁病房、居家团队、门诊",go:"map"},
   {zh:"问",t:"问专业人士",d:"经过认证的医生与心理师",go:"forum"},
   {zh:"伴",t:"我在照护",d:"和你处在同一周的人",go:"forum"}
  ],
  quietTitle:"三重沉默",
  quietLede:"难，不是因为一重沉默，而是三重叠在一起。",
  quiet:[
   {k:"社会",v:"死亡不被谈论，于是没有人学会那些话。论坛让这些话被说出口。"},
   {k:"家庭",v:"人人都知道，人人都装作不知道。谈话指南给双方一个开口的方式。"},
   {k:"系统",v:"帮助明明存在，却找不到。地图让它显形。"}
  ]
 }
},

/* ---------- forum ---------- */
forum:{
 en:{
  eyebrow:"The forum",
  title:"Nobody here will tell you to stay positive",
  sections:["All","I'm a caregiver","Grief & loss","Parents & children","Ask a specialist","For professionals","Stories"],
  compose:"Write a post",
  posts:[
   {sec:1,badges:[["anon","Anonymous"]],t:"He asks me every day when he's going home. I keep saying soon.",
    b:"Dad's been in the ward eleven days. The doctors have said what they've said. I'm the only one in the family who knows the whole picture and I'm carrying it badly.",
    r:34,v:"6h",spec:false},
   {sec:3,badges:[["anon","Anonymous"],["spec","Answered by a specialist"]],t:"My daughter is six. My mother is dying. What do I actually say?",
    b:"Everyone tells me she's too little to understand and I should say grandma went away. Something about that feels wrong to me but I don't have a better sentence.",
    r:58,v:"1d",spec:true,open:true},
   {sec:4,badges:[["spec","Palliative physician · verified"]],t:"Ask me anything about pain control this week",
    b:"I'm an attending in a palliative unit. Open thread until Sunday. I can't advise on your specific case, but I can explain how decisions get made.",
    r:97,v:"2d",spec:false},
   {sec:2,badges:[["anon","Anonymous"]],t:"It's been seven months and I still set the table for two",
    b:"People stopped asking around month three. I'm not looking for advice, I just wanted to write it somewhere it wouldn't worry anyone.",
    r:41,v:"3d",spec:false},
   {sec:6,badges:[["role","Story"]],t:"We said the four things. All four. It took us three evenings.",
    b:"I want to write this down while I still have the exact words, because someone told me the order matters less than starting.",
    r:120,v:"5d",spec:false},
   {sec:5,badges:[["role","Professionals only"]],t:"Case discussion: family requesting we not disclose prognosis to the patient",
    b:"Looking for how colleagues have handled the gap between family consensus and the patient's own repeated questions. Peer supervision, not advice-giving.",
    r:23,v:"6d",spec:false}
  ],
  thread:{
   t:"My daughter is six. My mother is dying. What do I actually say?",
   op:{who:"Anonymous",when:"1 day ago",body:[
    "Everyone tells me she's too little to understand and that I should say grandma went away for a long trip. Something about that feels wrong to me but I don't have a better sentence to put in its place.",
    "She already knows something is happening. She has started asking to sleep in our bed again."]},
   sum:["A parent is asking how to tell a six-year-old that her grandmother is dying.","A palliative psychologist answered: use plain words, avoid 'went away' and 'fell asleep', and answer only what is asked.","Three other parents describe what they said and how the child reacted.","One reply recommends the age-by-age guide in this app."],
   replies:[
    {who:"Dr. Lin",role:"Palliative psychologist · verified",spec:true,when:"22h",body:[
     "You are right to hesitate. At six, a child hears \"went away\" literally: she will wait, and later she will feel she was lied to. \"Fell asleep\" is the other one to avoid — it can turn bedtime into something frightening.",
     "Use the plain word. \"Grandma is very sick. The doctors cannot make her better. She is going to die.\" Then stop and let her ask. Answer only what she asks, in one or two sentences.",
     "Expect a strange question. Children often ask something practical — who will feed the cat, will there be cake. That is not coldness; it is how a six-year-old checks whether the world still holds.",
     "Tell her it is not her fault and that nobody can catch it. She has not said this out loud, but at her age she is very likely thinking it."]},
    {who:"Anonymous",role:"",spec:false,when:"18h",body:["We did this in March with our son, same age. He asked if grandpa would be cold. We said no. He was fine for two days and then cried for an hour on the third. Both were normal, someone told us afterwards. I wish someone had told us before."]},
    {who:"Anonymous",role:"",spec:false,when:"11h",body:["Thank you for asking this where I could read it. I have been rehearsing the wrong sentence for a week."]}
   ]
  }
 },
 zh:{
  eyebrow:"论坛",
  title:"这里没有人会叫你「想开点」",
  sections:["全部","我在照护","哀伤与失去","父母与孩子","问专业人士","同行之间","他人的故事"],
  compose:"写一篇",
  posts:[
   {sec:1,badges:[["anon","匿名"]],t:"他每天问我什么时候回家。我一直说快了。",
    b:"爸爸住进病房十一天了。医生该说的都说了。全家只有我知道全部情况，而我扛得很糟。",
    r:34,v:"6小时前",spec:false},
   {sec:3,badges:[["anon","匿名"],["spec","已有专业人士回答"]],t:"女儿六岁。我母亲快不行了。我到底该怎么说？",
    b:"所有人都说她太小，听不懂，让我说外婆出远门了。我总觉得哪里不对，可我也说不出更好的一句话。",
    r:58,v:"1天前",spec:true,open:true},
   {sec:4,badges:[["spec","安宁疗护医师 · 已认证"]],t:"本周关于疼痛控制，随便问",
    b:"我是安宁疗护病房的主治医师。这个帖开到周日。我无法针对你的个案给建议，但可以讲清楚这些决定是怎么做出来的。",
    r:97,v:"2天前",spec:false},
   {sec:2,badges:[["anon","匿名"]],t:"七个月了，我还是摆两副碗筷",
    b:"第三个月起就没人再问了。我不是来找建议的，只是想写在一个不会让谁担心的地方。",
    r:41,v:"3天前",spec:false},
   {sec:6,badges:[["role","故事"]],t:"那四句话，我们都说了。用了三个晚上。",
    b:"趁我还记得原话，想把它写下来。有人告诉我，顺序不重要，开口才重要。",
    r:120,v:"5天前",spec:false},
   {sec:5,badges:[["role","仅限同行"]],t:"个案讨论：家属要求不向患者告知预后",
    b:"想听听各位如何处理家属共识与患者反复追问之间的落差。同行督导，不是给建议。",
    r:23,v:"6天前",spec:false}
  ],
  thread:{
   t:"女儿六岁。我母亲快不行了。我到底该怎么说？",
   op:{who:"匿名",when:"1天前",body:[
    "所有人都说她太小，听不懂，让我说外婆出远门了。我总觉得哪里不对，可我也说不出更好的一句话来替代。",
    "她其实已经察觉到了。她又开始要求跟我们一起睡。"]},
   sum:["一位家长在问：如何告诉六岁的女儿，外婆快去世了。","一位安宁疗护心理师回答：用直白的词，避免「出远门」和「睡着了」，孩子问什么才答什么。","另有三位家长描述了自己当时说的话和孩子的反应。","有一条回复推荐了本应用中的分龄指南。"],
   replies:[
    {who:"林医师",role:"安宁疗护心理师 · 已认证",spec:true,when:"22小时前",body:[
     "你的犹豫是对的。六岁的孩子会照字面理解「出远门」：她会一直等，之后会觉得自己被骗了。「睡着了」是另一个要避开的说法——它可能让睡觉这件事变得可怕。",
     "用那个直白的词。「外婆病得很重。医生没有办法治好她。她会去世。」然后停下来，让她问。她问什么，你就答什么，一两句就够。",
     "要有心理准备，她可能问一个奇怪的问题。孩子常常问很实际的事——猫谁来喂，还有没有蛋糕。那不是冷漠；那是六岁的孩子在确认这个世界还稳不稳。",
     "告诉她这不是她的错，也不会传染。她没有说出口，但在这个年纪，她很可能正是这么想的。"]},
    {who:"匿名",role:"",spec:false,when:"18小时前",body:["三月我们对儿子说过，也是这个年纪。他问外公会不会冷。我们说不会。他平静了两天，第三天哭了一个小时。后来有人告诉我们，这两种都很正常。我希望这话是在之前听到的。"]},
    {who:"匿名",role:"",spec:false,when:"11小时前",body:["谢谢你把这个问题问在我能看到的地方。我已经把一句错的话练了一个星期。"]}
   ]
  }
 }
},

/* ---------- map ---------- */
map:{
 en:{
  eyebrow:"Care map",
  title:"Help exists. This is where.",
  lede:"Hospices, palliative units, home-care teams, pain clinics, NGOs and offline support groups — kept current by the people who use them.",
  filters:["Chengdu","Adults","Children","Home visits","Covered by insurance"],
  sampleWarn:"Sample listings — not a real directory yet",
  places:[
   {n:1,t:"Municipal Hospital · Palliative Care Unit",d:"Inpatient ward, 24 beds. Referral from any oncology department.",tags:["Adults","Inpatient","Insurance"]},
   {n:2,t:"Home Palliative Team, Wuhou District",d:"Nurse and physician visits at home, twice weekly, plus phone line.",tags:["Adults","Home visits","Insurance"]},
   {n:3,t:"Children's Hospital · Comfort Care Service",d:"Paediatric palliative service with family psychologist and sibling support.",tags:["Children","Inpatient","Home visits"]},
   {n:4,t:"Pain Clinic, Second Affiliated Hospital",d:"Outpatient pain and symptom management. Same-week appointments.",tags:["Adults","Outpatient","Insurance"]},
   {n:5,t:"Caregivers' evening group",d:"Offline, Thursdays 19:00, community centre. No registration needed.",tags:["Free","Offline group"]},
   {n:6,t:"Bereavement counselling · NGO",d:"Six free sessions for family members after a death. Waiting list ~2 weeks.",tags:["Free","Grief"]}
  ]
 },
 zh:{
  eyebrow:"寻路",
  title:"帮助是存在的。它在这里。",
  lede:"安宁病房、缓和医疗、居家团队、疼痛门诊、公益组织与线下互助小组——由使用它的人共同维护更新。",
  filters:["成都","成人","儿童","可上门","医保覆盖"],
  sampleWarn:"示例信息——尚非真实名录",
  places:[
   {n:1,t:"市立医院 · 安宁疗护病区",d:"住院病房，24 张床位。任一肿瘤科均可转诊。",tags:["成人","住院","医保"]},
   {n:2,t:"武侯区居家安宁团队",d:"护士与医师每周两次上门，另有电话热线。",tags:["成人","可上门","医保"]},
   {n:3,t:"儿童医院 · 舒缓治疗组",d:"儿童安宁疗护，配家庭心理师，并支持患儿的兄弟姐妹。",tags:["儿童","住院","可上门"]},
   {n:4,t:"第二附属医院 · 疼痛门诊",d:"门诊疼痛与症状管理。一周内可约到号。",tags:["成人","门诊","医保"]},
   {n:5,t:"照护者晚间小组",d:"线下，每周四 19:00，社区活动中心。无需报名。",tags:["免费","线下小组"]},
   {n:6,t:"哀伤辅导 · 公益机构",d:"逝者家属可免费咨询六次。轮候约两周。",tags:["免费","哀伤"]}
  ]
 }
},

/* ---------- words ---------- */
words:{
 en:{
  eyebrow:"How to talk about death",
  title:"The words, when you can't find them",
  lede:"Two conversations most people only get one chance at. Written by specialists, in the plainest language we could manage.",
  tracks:[
   {zh:"孩",t:"Talking with children",d:"What they understand at 3, at 10, at 15 — and the two phrases to never use",go:"kids"},
   {zh:"辞",t:"Talking with someone who is dying",d:"How to open it, what to avoid, and the four things that matter",go:"dying"}
  ],
  more:"Also in the knowledge hub",
  moreItems:["What actually happens in the last days","Talking to your employer","When siblings disagree about care","Caring for someone at home: the practical list"],
  kids:{
   back:"How to talk about death",
   title:"Talking with children",
   lede:"Children are told nothing to protect them. What reaches them instead is their own imagination, and often the belief that it is their fault.",
   pain:{k:"The pattern we hear most",v:"\"He's still too little — don't tell him.\" The child is then left alone with the part they invented."},
   rows:[
    {ag:"3–6",sub:"Preschool",u:"Death looks reversible. She expects the person to come back.",p:"Plain words. <em>Never</em> \"went away\" or \"fell asleep\". Nature does the explaining — leaves, seasons. Short answers; stop when she stops asking."},
    {ag:"7–12",sub:"School age",u:"Understands that it is permanent, and starts to fear it for you too.",p:"Honest, in small doses. <em>\"I don't know\"</em> is a real answer. Name the feelings out loud. If he wants to be at the funeral, let him."},
    {ag:"13+",sub:"Teenagers",u:"Understands everything. That is not the same as coping.",p:"Don't corner them. Talk side by side — walking, driving, washing up. Let distance and dark humour be allowed forms of grief."}
   ],
   growth:{t:"Why this is the front door",v:"\"How do I explain death to my child?\" is asked by millions of parents who will never see a hospice — a grandparent, a pet, a classmate. They arrive for the guide and find the community and the map. It is the least stigmatised way into the hardest subject."}
  },
  dying:{
   back:"How to talk about death",
   title:"Talking with someone who is dying",
   lede:"Both of you already know. Both of you are staying quiet to protect the other. Someone has to go first.",
   openTitle:"Ways in",
   opens:["I'm here. If you want to talk, I'm listening.","What have you been thinking about lately?","It seems we're both afraid to talk about what's happening. Shall we try?"],
   ctx:{t:"The Chinese context",v:"Mutual pretence — 心照不宣. Both sides know, both stay silent, and filial piety (孝) makes speaking first feel like giving up on them. Naming the pretence gently is usually kinder than maintaining it."},
   avoidTitle:"What closes the conversation",
   avoid:["\"Everything will be fine.\"","\"Don't think about it.\"","Relentless cheerfulness","Changing the subject when they open it"],
   doTitle:"What keeps it open",
   dos:["Follow their lead — if they start, don't steer away","Silence together is not failure","Listening counts more than saying the right thing"],
   fourTitle:"The four things that matter",
   fourLede:"A framework used in palliative care worldwide. There is no correct order. Starting is the whole thing.",
   four:[{zh:"谢谢你",en:"Thank you"},{zh:"对不起",en:"Forgive me"},{zh:"我原谅你",en:"I forgive you"},{zh:"我爱你",en:"I love you"}],
   cardCta:"Save as a card"
  }
 },
 zh:{
  eyebrow:"如何谈论死亡",
  title:"当你找不到那些话",
  lede:"两场大多数人只有一次机会的谈话。由专业人士撰写，用我们能做到的最直白的语言。",
  tracks:[
   {zh:"孩",t:"和孩子谈",d:"三岁、九岁、十五岁分别听得懂什么——以及两句永远别说的话",go:"kids"},
   {zh:"辞",t:"和临终的亲人谈",d:"如何开口，避开什么，以及那四句要紧的话",go:"dying"}
  ],
  more:"知识库中还有",
  moreItems:["最后几天里究竟会发生什么","如何向单位开口","兄弟姐妹在照护上意见不一时","居家照护：一份实用清单"],
  kids:{
   back:"如何谈论死亡",
   title:"和孩子谈",
   lede:"为了保护孩子，大人什么也不说。真正抵达孩子的，是他自己的想象——而且常常是「是不是我的错」。",
   pain:{k:"我们听到最多的一句",v:"「他还那么小，别告诉他。」于是孩子独自面对他自己编出来的那一部分。"},
   rows:[
    {ag:"3–6 岁",sub:"学龄前",u:"以为死亡是可逆的。她会等那个人回来。",p:"用直白的词。<em>绝不要</em>说「出远门了」或「睡着了」。让自然来解释——落叶、四季。答案要短；她不问了就停下。"},
    {ag:"7–12 岁",sub:"学龄期",u:"已经明白这是永久的，并开始为你担心。",p:"诚实，但一次少一点。<em>「我不知道」</em>也是真正的回答。把情绪说出名字。他想参加葬礼，就让他去。"},
    {ag:"13 岁以上",sub:"青少年",u:"什么都懂了。懂了不等于扛得住。",p:"不要逼到墙角。并肩着说——散步时、车上、洗碗时。允许疏离和黑色幽默，那也是哀伤的形状。"}
   ],
   growth:{t:"为什么这是入口",v:"「我该怎么向孩子解释死亡？」——问这句话的，是数百万从未走进安宁病房的父母：去世的是祖辈、宠物、同学。他们为指南而来，却因此发现了社区与地图。这是进入最难话题时，污名最少的一道门。"}
  },
  dying:{
   back:"如何谈论死亡",
   title:"和临终的亲人谈",
   lede:"你们其实都知道。你们都为了保护对方而沉默。总得有一个人先开口。",
   openTitle:"怎么开口",
   opens:["我在这儿。你想说的话，我听着。","这阵子，你都在想些什么？","好像我们都怕谈现在的事。要不要试试？"],
   ctx:{t:"中国语境",v:"心照不宣：双方都知道，双方都不说。而在「孝」的分量下，先开口像是先放弃了对方。温和地把这层假装说破，通常比维持它更仁慈。"},
   avoidTitle:"什么会让谈话关上",
   avoid:["「都会好起来的。」","「别想那么多。」","强撑出来的乐观","他刚开口，你就转移话题"],
   doTitle:"什么让谈话继续",
   dos:["跟着他走——他开了口，就别把话题带开","一起沉默不是失败","听，比说对话更重要"],
   fourTitle:"那四句要紧的话",
   fourLede:"全球安宁疗护通用的一个框架。没有正确的顺序。开口本身就是全部。",
   four:[{zh:"谢谢你",en:"Thank you"},{zh:"对不起",en:"Forgive me"},{zh:"我原谅你",en:"I forgive you"},{zh:"我爱你",en:"I love you"}],
   cardCta:"存为卡片"
  }
 }
},

/* ---------- search ---------- */
search:{
 en:{
  ph:"Ask, or describe your situation",
  title:"Search",
  lede:"Finds its way around the guides and the map. It is not a counsellor.",
  chips:["hospice in Chengdu","how to tell a six-year-old","home visits, covered by insurance","what happens in the last days"],
  foot:"This search reads the knowledge hub and the care map. It does not give medical advice and it is not a substitute for a person. If you need to talk to someone, the forum and the specialist list are one tap away.",
  empty:"Type a question, or pick one of the examples."
 },
 zh:{
  ph:"提问，或者描述你的处境",
  title:"搜索",
  lede:"它熟悉指南与地图，但它不是咨询师。",
  chips:["成都的安宁疗护","怎么告诉六岁的孩子","可上门、医保覆盖","最后几天会发生什么"],
  foot:"本搜索读取知识库与寻路地图。它不提供医疗建议，也不能替代一个真实的人。如果你需要找人说话，论坛和专业人士名录都只差一次点击。",
  empty:"输入一个问题，或从示例中选一个。"
 }
},

/* ---------- safety ---------- */
safety:{
 en:{
  title:"How this stays safe",
  lede:"A forum about dying carries real risk. The safety design is not an afterthought here; it is the reason the forum can exist at all.",
  rulesTitle:"Community rules",
  rules:["No medical advice from non-verified members. Describe your experience, not your prescription.","No invalidation. \"Stay positive\" and \"at least\" are removed on sight.","Anonymous by default. Identity is never required to post.","Specialists answer as specialists — badged, named, and accountable.","No promotion of products, clinics or fundraising without moderator approval."],
  flowTitle:"Crisis routing",
  flow:[
   {k:"1",v:"Post is screened as it is written — before it is published, not after it is reported."},
   {k:"2",v:"Risk markers raise a flag. The flag routes to a human moderator on duty, always.",alert:true},
   {k:"3",v:"The author sees a support card with verified lines, and their post is not blocked."},
   {k:"4",v:"A verified specialist is notified for the thread within the on-duty window."}
  ],
  todoTitle:"Not built by us — deliberately",
  todo:"The specific risk markers, the on-duty windows and the helpline numbers shown in the app must be written and signed off by the clinical members of the team, against current Chinese guidance. The prototype carries labelled placeholders. Publishing an invented hotline number would be worse than publishing none.",
  aiTitle:"What the AI is not",
  ai:"It searches, it summarises threads, it flags posts for a human. It does not counsel, it does not befriend, and it does not answer clinical questions. Every path it offers ends at a person."
 },
 zh:{
  title:"安全是如何维持的",
  lede:"一个谈论死亡的论坛带着真实的风险。安全设计不是事后补上的；它正是这个论坛得以存在的前提。",
  rulesTitle:"社区规则",
  rules:["未经认证的成员不得给出医疗建议。讲你的经历，不要开你的处方。","不否定他人感受。「想开点」「至少……」一经发现即移除。","默认匿名。发帖从不要求实名。","专业人士以专业身份作答——有标识、有署名、可问责。","未经版主许可，不得推广产品、机构或募捐。"],
  flowTitle:"危机分流",
  flow:[
   {k:"1",v:"帖子在书写过程中即被识别——发布之前，而不是被举报之后。"},
   {k:"2",v:"风险标记触发提示。提示始终转交给值班的真人版主。",alert:true},
   {k:"3",v:"作者会看到一张载有已核实求助渠道的支持卡片，其帖子不会被拦下。"},
   {k:"4",v:"在值班时段内，通知一位已认证的专业人士介入该帖。"}
  ],
  todoTitle:"我们刻意没有做的部分",
  todo:"应用中呈现的具体风险标记、值班时段与求助热线号码，必须由团队中的临床成员依据现行中国指南撰写并签署确认。原型中留的是带标注的占位符。登出一个虚构的热线号码，比不登还要糟。",
  aiTitle:"AI 不是什么",
  ai:"它检索，它总结长帖，它把帖子标给真人。它不做咨询，不当朋友，也不回答临床问题。它给出的每一条路径，终点都是一个人。"
 }
},

/* ---------- sample AI answers ---------- */
ai:{
 en:[
  {k:["chengdu","hospice","palliative","where","help","map","insurance","home"],
   a:"<strong>Six places in the care map match.</strong> Two take adults as inpatients, one is a paediatric comfort care service, one is an outpatient pain clinic, and two are free — an evening caregivers' group and NGO bereavement counselling.<br><br>Four of the six are marked as covered by insurance. The home palliative team in Wuhou District visits twice weekly and runs a phone line, which is usually the first call people make.<br><br>Opening the map filtered to <strong>Chengdu · home visits</strong>."},
  {k:["six","child","children","kid","daughter","son","tell","young","age"],
   a:"<strong>At six, a child hears \"went away\" literally</strong> — she will wait for the person, and later feel she was lied to. \"Fell asleep\" is the other phrase to avoid.<br><br>The age-by-age guide covers what changes at 3–6, 7–12 and 13+. The short version for six: use the plain word, then stop and answer only what she asks. Expect a practical question — who feeds the cat — and say clearly that it is not her fault and nobody can catch it.<br><br>There is also <strong>an open thread</strong> where a palliative psychologist answered this exact question yesterday."},
  {k:["last","days","dying","final","end","happens","what to expect"],
   a:"<strong>The knowledge hub has a guide on the final days</strong>, written by palliative clinicians and reviewed for plain language.<br><br>I'm not going to summarise the clinical content here — this is the kind of question where the source matters and where your own care team knows things about your situation that I do not. The guide is written to be read alongside them, not instead.<br><br>Opening it, and pinning the specialist thread underneath."},
  {k:["talk","conversation","say","open","words","start","parent","mother","father","dying"],
   a:"<strong>Three openings people report working most often:</strong><br>\"I'm here. If you want to talk, I'm listening.\"<br>\"What have you been thinking about lately?\"<br>\"It seems we're both afraid to talk about what's happening. Shall we try?\"<br><br>The guide also covers the four things that matter — thank you, forgive me, I forgive you, I love you — and what tends to close a conversation down.<br><br>On mutual pretence and 孝 specifically, there is a section on why speaking first can feel like giving up, and why it usually isn't."}
 ],
 zh:[
  {k:["成都","安宁","缓和","临终","哪里","地图","医保","上门","居家"],
   a:"<strong>寻路地图中有六处匹配。</strong>两处收治成人住院，一处是儿童舒缓治疗，一处是疼痛门诊，另有两处免费——照护者晚间小组与公益哀伤辅导。<br><br>其中四处标注为医保覆盖。武侯区的居家安宁团队每周上门两次并设有电话热线，通常是人们打出的第一个电话。<br><br>已按 <strong>成都 · 可上门</strong> 打开地图。"},
  {k:["六岁","孩子","儿童","女儿","儿子","小孩","怎么说","告诉","年龄","分龄"],
   a:"<strong>六岁的孩子会照字面理解「出远门」</strong>——她会一直等，之后会觉得自己被骗了。「睡着了」是另一个要避开的说法。<br><br>分龄指南分别讲了 3–6 岁、7–12 岁与 13 岁以上的差别。六岁的简版是：用直白的词，然后停下来，她问什么才答什么。要有心理准备她会问很实际的事——猫谁来喂——并且要明确告诉她：这不是她的错，也不会传染。<br><br>另外，昨天有一位安宁疗护心理师<strong>正好回答过这个问题</strong>。"},
  {k:["最后","几天","临终前","会发生","预期","过程"],
   a:"<strong>知识库中有一篇关于最后几天的指南</strong>，由安宁疗护临床人员撰写，并按通俗语言标准审校。<br><br>这里我不打算复述其中的临床内容——这类问题里，来源很重要，而且你的医疗团队掌握着我并不知道的、关于你处境的信息。这篇指南的写法，是供你和他们一起读，而不是取代他们。<br><br>已为你打开，并把专业人士的帖子置于其下。"},
  {k:["开口","怎么谈","说什么","父亲","母亲","亲人","四句","谈话"],
   a:"<strong>被反馈最有效的三种开口：</strong><br>「我在这儿。你想说的话，我听着。」<br>「这阵子，你都在想些什么？」<br>「好像我们都怕谈现在的事。要不要试试？」<br><br>指南同时讲了那四句要紧的话——谢谢你、对不起、我原谅你、我爱你——以及什么样的回应会让谈话关上。<br><br>关于心照不宣与「孝」，另有一节专门讲：为什么先开口像是先放弃，以及为什么通常并不是。"}
  ],
 fallback:{
  en:"I couldn't match that to a guide or a listing with any confidence, so I'm not going to improvise an answer on this subject.<br><br>Two things that will work better than I did: the <strong>Ask a specialist</strong> section of the forum, where verified clinicians answer within a day, and the <strong>care map</strong>, which lists phone lines you can call today.",
  zh:"我没有把握把它对应到某篇指南或某条名录，所以在这个话题上，我不会临时编一个答案出来。<br><br>有两个地方会比我更有用：论坛的<strong>「问专业人士」</strong>版块，已认证的临床人员通常一天内回复；以及<strong>寻路地图</strong>，上面有今天就能拨的电话。"
 }
},

ui:{
 en:{search:"Search",safety:"Safety",replies:"replies",aiSummary:"Thread summary",aiSummaryNote:"Generated · check against the replies",saved:"Saved to your cards",flagged:"Draft screened — a moderator has been notified",posted:"Nothing was posted. This is a prototype.",stepDone:"Step marked done",stepUndone:"Step reopened",sampleData:"Sample data",back:"Back",openThread:"Open thread",live:"Sample engine",liveOn:"Live AI"},
 zh:{search:"搜索",safety:"安全",replies:"条回复",aiSummary:"本帖摘要",aiSummaryNote:"自动生成 · 请对照原帖核实",saved:"已存入你的卡片",flagged:"草稿已识别——已通知值班版主",posted:"没有真的发布。这是原型。",stepDone:"已标记完成",stepUndone:"已重新打开",sampleData:"示例数据",back:"返回",openThread:"打开帖子",live:"示例引擎",liveOn:"实时 AI"}
}
};
