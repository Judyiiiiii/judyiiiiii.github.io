/* Buildless portfolio. All content below is local; no analytics or remote services. */
'use strict';
const copy = {
 en: {
  skip:'Skip to work',navWork:'Work',navAbout:'About',navContact:'Contact ↗',eyebrow:'A STUDENT. A BUILDER. STILL CURIOUS.',hello:"Hi, I'm Xuewen.",headline:'I like making<br>things work.',intro:'Electronic & Electrical Engineering at CityUHK.<br>Exploring where hardware, software and<br>everyday problems meet.',note:'Small prototypes.<br>Real questions.',status:'OPEN TO TECH & PRODUCT INTERNSHIPS',location:'HONG KONG · CITYUHK',scroll:'SCROLL TO EXPLORE ↓',workTitle:`A few things I've made<span class="count">(03)</span>`,workNote:'a mix of circuits, code & curiosity ↙',all:'All work',hardware:'Hardware & sensing',product:'Software & product',workFoot:'Built with curiosity, iteration, and a little help from AI.',aboutLabel:'A LITTLE ABOUT ME',aboutTitle:'An engineer in the making.<br>A problem-finder by habit.',aboutIntro:"I'm Xuewen Wang, a second-year Electronic and Electrical Engineering student at City University of Hong Kong. I enjoy turning an everyday frustration into something I can build, test and improve.",aboutAI:"I use Codex to help develop my projects, while shaping requirements, refining the experience and checking how the prototypes behave. I'm looking for a first technical or product-focused internship where I can learn by doing.",educationLabel:'EDUCATION',degree:'BEng, Electronic and Electrical Engineering',school:'City University of Hong Kong · 2025–2029',academicLabel:'ACADEMIC',deans:"Dean's List, Semester B 2025/26",toolkitLabel:'WORKING WITH',resumeLabel:'TAKE A COPY',activitiesTitle:'Away from the screen',contactLabel:'HAVE SOMETHING IN MIND?',contactTitle:"Let's figure it out.",name:'Xuewen Wang',footerNote:'Made with care. Still learning.',backTop:'BACK TO TOP ↑',caseLabel:'PROJECT NOTES',source:'Explore the source ↗',close:'Back to selected work ↑',normal:'Normal',fault:'Overcurrent',simulation:'INTERACTIVE SIGNAL SKETCH',demoNote:'Illustrative simulated readings · 3 A threshold · median of 5 readings · 2 consecutive confirmations. This is a software demonstration, not a connected sensor.',raw:'RAW',filtered:'FILTERED',threshold:'3 A THRESHOLD',results:'Full simulation results ↗'
 },
 zh: {
  skip:'跳到项目',navWork:'作品',navAbout:'关于',navContact:'联系 ↗',eyebrow:'保持好奇，把想法做出来。',hello:'你好，我是王雪文。',headline:'从一个问题，<br>到一个作品。',intro:'香港城市大学 · 电子及电机工程<br>在硬件、软件与日常需求之间，<br>探索值得动手的事情。',note:'从小原型开始，<br>回答真实的问题。',status:'寻找技术 / 技术与产品方向实习',location:'香港 · CITYUHK',scroll:'向下看看 ↓',workTitle:'最近做的几件事<span class="count">(03)</span>',workNote:'电路、代码，还有一点好奇心 ↙',all:'全部作品',hardware:'硬件与传感',product:'软件与产品',workFoot:'从发现问题开始，在尝试与迭代中完善。',aboutLabel:'关于我',aboutTitle:'学习工程，<br>也学习如何发现问题。',aboutIntro:'我是王雪文，香港城市大学电子及电机工程专业二年级学生。我喜欢从生活中的不便出发，把问题拆成可以制作、测试和改进的原型。',aboutAI:'在项目中，我借助 Codex 辅助开发，并参与需求梳理、交互调整和原型验证。目前希望寻找技术或技术与产品结合的实习机会，在实际工作中继续积累经验。',educationLabel:'教育背景',degree:'工学学士 · 电子及电机工程',school:'香港城市大学 · 2025–2029',academicLabel:'学业表现',deans:'院长嘉许名单 · 2025/26 学年第二学期',toolkitLabel:'使用的工具与技术',resumeLabel:'下载简历',activitiesTitle:'项目之外',contactLabel:'欢迎交流想法与实习机会',contactTitle:'一起把想法落地。',name:'王雪文',footerNote:'认真制作，继续学习。',backTop:'回到顶部 ↑',caseLabel:'项目手记',source:'查看源代码 ↗',close:'返回作品列表 ↑',normal:'正常读数',fault:'持续过流',simulation:'交互信号演示',demoNote:'模拟数据演示 · 3 A 阈值 · 5 点中值滤波 · 连续 2 次确认。此处为软件演示，未连接实际传感器。',raw:'原始读数',filtered:'滤波读数',threshold:'3 A 阈值',results:'完整仿真结果 ↗'
 }
};

Object.assign(copy.en, {
 navWork:'Projects',navContact:'Say hello ↗',eyebrow:'CIRCUITS, CODE & AI-ASSISTED IDEAS',headline:'Welcome to<br>my little lab.',intro:'Electronic & Electrical Engineering<br>at City University of Hong Kong.<br>Building with hardware, code and AI.',exploreWork:'Take a look around',pinParking:'sensors & reliable decisions',pinMail:'a quieter kind of inbox',pinEdge:'finding the signal',sceneHint:'psst... the little numbers are clickable.',sceneCaption:'AN IMAGINED WORKSHOP · A REAL CURIOSITY',zoomLabel:'Look a little closer',aiNoteTitle:'an idea, a prompt, a prototype.',aiToolLabel:'Built with Codex. Refined by me. ↗',workTitle:'Things on the workbench<span class="count">(03)</span>',workNote:'from a question to a working prototype ↙',followWire:'follow the wire...',activitiesTitle:'Away from the workbench',contactTitle:'Leave a little note.'
});
Object.assign(copy.zh, {
 navWork:'项目',navContact:'打个招呼 ↗',eyebrow:'电路、代码，还有 AI 辅助的想法',headline:'欢迎来到<br>我的小小实验室。',intro:'香港城市大学 · 电子及电机工程<br>在硬件、代码与 AI 之间，<br>把想法一点点做出来。',exploreWork:'随处看看',pinParking:'传感与可靠性',pinMail:'整理邮件里的机会',pinEdge:'从读数里发现信号',sceneHint:'试试点击这些小数字。',sceneCaption:'想象中的工作台 · 真实的好奇心',zoomLabel:'凑近看看',aiNoteTitle:'一个想法，一次提问，一个原型。',aiToolLabel:'借助 Codex 开发，持续调整与验证。↗',workTitle:'工作台上的几个项目<span class="count">(03)</span>',workNote:'从一个问题，到一个能运行的原型 ↙',followWire:'沿着电线往下看……',activitiesTitle:'工作台之外',contactTitle:'留张小纸条吧。'
});

const projects = [
 {
  id:'parking',number:'01',categories:['hardware'],repo:'https://github.com/Judyiiiiii/reliable-smart-parking',stack:['Micro:bit','MicroPython','Python','Ultrasonic sensing'],image:'assets/parking.jpg',
  en:{title:'Reliable Smart Parking',meta:'EMBEDDED SYSTEMS / RELIABILITY',date:'FEB–APR + SEP–OCT 2026',summary:'A course prototype, an award, and a second look at making sensor decisions more reliable.',sticker:'GE PROJECT AWARD · MERIT',subtitle:'From a four-person smart parking prototype to a personal exploration of more reliable sensing.',caption:'Original course prototype, built with my four-person team.',sections:[
   ['The starting point','A GE1354 Introduction to Electronic Design project: build a physical smart parking system that can sense vehicles, control entry and exit, and communicate parking status.'],
   ['Team project · Feb–Apr 2026','Co-developed the prototype in a four-member team with shared responsibilities. I contributed to physical model construction, circuit wiring, MicroPython logic, and proximity-triggered buzzer/LED warnings.',['Ultrasonic sensing, servo-controlled barriers and wireless Micro:bit communication.','OLED status displays and visual guidance for the parking model.','The original team project received the GE Excellent Student Project Awards — Certificate of Merit, Semester B 2025/26.']],
   ['Personal extension · Sep–Oct 2026','Revisited the sensing logic with Codex to explore how noisy readings and boundary fluctuations affect occupancy decisions.',['Created hardware-independent Python reliability logic using a five-sample median filter.','Applied 10/12 cm hysteresis and two consecutive readings to confirm a change of state.','Checked state transitions with four passing unit tests and a software simulation.']],
   ['What is verified','The award belongs to the original course project. The later reliability extension was tested in software; it has not been validated on the physical parking hardware.']
  ]},
  zh:{title:'Reliable Smart Parking',meta:'嵌入式系统 / 可靠性优化',date:'2026.02–04 / 09–10',summary:'从获奖的课程原型出发，继续探索传感数据如何转化为更稳定的判断。',sticker:'GE 优秀学生项目奖 · 优异证书',subtitle:'四人团队完成智能停车场原型，再以个人升级探索传感判断的可靠性。',caption:'与四人课程团队共同制作的停车场实物原型。',sections:[
   ['项目起点','GE1354 Introduction to Electronic Design 课程项目：通过车辆感知、出入口控制与车位状态显示，搭建可演示的智能停车场。'],
   ['团队原作 · 2026.02–04','在四人团队中共同完成原型，各成员协作承担工作。我参与模型制作、电路接线、MicroPython 控制逻辑及车辆接近时的蜂鸣器 / LED 预警。',['结合超声波感知、舵机道闸和 Micro:bit 无线节点通信。','利用 OLED 显示状态，并通过灯光提供车位引导。','原团队项目获 2025/26 学年第二学期 GE Excellent Student Project Awards — Certificate of Merit。']],
   ['个人升级 · 2026.09–10','借助 Codex 重新整理可靠性逻辑，探索读数噪声和阈值附近的波动对车位判断的影响。',['编写独立于硬件的 Python 可靠性模块，采用 5 点中值滤波。','设置 10/12 cm 迟滞阈值，通过连续两次读数确认状态变化。','以软件仿真和 4 项通过的单元测试检查状态转换。']],
   ['验证范围','奖项对应课程团队原作。后续升级目前在软件中完成测试，尚未在停车场实物硬件上验证。']
  ]}
 },
 {
  id:'mail',number:'02',categories:['product'],repo:'https://github.com/Judyiiiiii/MailPhor',stack:['Python','JavaScript','IMAP','LLM extraction'],image:'assets/mailphor.png',
  en:{title:'MailPhor',meta:'SOFTWARE / PERSONAL PRODUCT',date:'AUG 2026 — PRESENT',summary:'Less digging through email. More time for the opportunities that matter.',subtitle:'A local opportunity dashboard, born from an overflowing university inbox.',caption:'Prototype interface using synthetic demonstration data, not personal emails.',sections:[
   ['The problem','University emails and digests contain internships, competitions and scholarships alongside general announcements. Useful opportunities are easy to overlook when every message needs manual reading.'],
   ['My contribution','Identified the problem from my own inbox, defined the requirements and developed the prototype with Codex. Iterated on the bilingual interface, opportunity cards, ranking preferences and application workflow.'],
   ['How it works','A local-first, single-user pipeline turns emails into opportunities that are easier to review.',['Read-only IMAP ingestion and LLM-assisted extraction from emails and digests.','Opportunity cards with source references, deadlines and application checklists.','Preference-based ranking, bookmarks and persistent application/checklist status.']],
   ['Progress & boundaries','The prototype is still being developed. QQ IMAP ingestion has been tested; 50 regression tests were recorded during development. The portfolio screenshot uses synthetic data. Extraction reliability across providers and emails remains an area for further validation.']
  ]},
  zh:{title:'MailPhor',meta:'软件开发 / 个人产品',date:'2026.08 — 至今',summary:'把淹没在学校邮件里的实习、比赛和奖学金，整理成值得跟进的机会。',subtitle:'从自己被学校邮件淹没的体验出发，搭建本地机会工作台。',caption:'原型界面，展示内容为虚构演示数据，不含个人邮件。',sections:[
   ['为什么做','学校邮件和汇总邮件中，实习、比赛、奖学金常与一般通知混在一起。逐封筛选耗时，也容易错过需要及时行动的信息。'],
   ['我的参与','从个人使用需求出发梳理功能，并借助 Codex 开发原型。持续调整中英文界面、机会卡片、偏好排序和申请跟进流程。'],
   ['如何运作','面向个人使用的本地原型，将邮件转化为便于查看与跟进的机会。',['通过只读 IMAP 获取邮件，借助 LLM 提取邮件和汇总邮件中的机会信息。','以卡片呈现来源、截止日期与申请清单，保留回查依据。','支持偏好排序、收藏以及申请 / 清单状态的持久保存。']],
   ['进度与验证','项目仍在迭代。已测试 QQ IMAP 读取，开发过程中记录了 50 项回归测试。作品集截图使用虚构演示数据；不同邮件和模型服务下的提取稳定性仍需进一步验证。']
  ]}
 },
 {
  id:'edge',number:'03',categories:['hardware'],repo:'https://github.com/Judyiiiiii/EdgeSense-Current-Monitor',stack:['Python','Median filtering','State machine','CSV / SVG'],
  en:{title:'EdgeSense Current Monitor',meta:'SIGNAL PROCESSING / SOFTWARE SIMULATION',date:'SEP 2026',summary:'Exploring how to tell a real fault from a noisy current reading.',subtitle:'A software prototype for turning simulated current readings into explainable fault and recovery events.',sections:[
   ['The question','How can a monitor distinguish a sustained fault from a noisy sample? This prototype explores the logic using reproducible, simulated sensor readings.'],
   ['The prototype','Built with AI-assisted Python development, using median filtering and consecutive-sample confirmation to detect overcurrent, missing readings and a possible frozen sensor.'],
   ['Making it observable','Generated fault and recovery logs, CSV evaluation tables and SVG plots. Compared false alarms, missed detections and detection delay across repeatable scenarios rather than relying on a single successful demo.'],
   ['Scope','The current software prototype is complete. Inputs are simulated or CSV-based; this is not a hardware deployment or a validated electrical protection device.']
  ]},
  zh:{title:'EdgeSense Current Monitor',meta:'信号处理 / 软件仿真',date:'2026.09',summary:'面对有噪声的电流读数，探索如何区分瞬时波动和持续故障。',subtitle:'通过可复现的模拟数据，验证电流异常检测与故障恢复逻辑。',sections:[
   ['要回答的问题','怎样区分一个噪声尖峰与真正持续的异常？以模拟传感器读数作为输入，探索更清晰、可检查的判断逻辑。'],
   ['原型实现','借助 AI 辅助开发 Python 原型，结合中值滤波与连续采样确认，识别过流、读数缺失及传感器可能冻结等情况。'],
   ['让结果可检查','输出故障触发 / 恢复日志、CSV 评估表和 SVG 曲线，使用可重复场景比较误报、漏报与检测延迟。'],
   ['完成范围','当前软件原型已完成。输入为模拟数据或 CSV，尚未部署实际传感器，也不作为经过验证的电气保护装置。']
  ]}
 }
];
const activities = {
 en:[['CityUHK Robocon Team','HARDWARE TEAM MEMBER','Hardware induction covering PCB fundamentals, component selection and soldering; an introduction to competition robot architecture and multidisciplinary teamwork.','SEP 2026 — PRESENT'],['SheNicest Hardware Hackathon','EVENT VOLUNTEER · SHENZHEN','Attendee check-in, on-site guidance and material preparation/distribution. Assisted participating teams with small-component assembly as requested.','APR 2026'],['SPIE 思湃义工游学','CAMPUS AMBASSADOR','Used AI tools to help draft promotional copy for volunteering and study-tour programmes, introducing them to university students.<br>Published programme articles and posters on WeChat according to the organiser’s promotional schedule, completing campus outreach tasks on time.','FEB–MAY 2026']],
 zh:[['CityUHK Robocon 机器人团队','硬件组成员','参加新成员硬件培训，学习 PCB、元器件选型与焊接基础，了解竞赛机器人架构及跨专业团队协作流程。','2026.09 — 至今'],['SheNicest 深圳硬件黑客松','活动志愿者 · 深圳','参与签到、现场引导及物资筹备与分发，并按参赛队伍需求协助小型零部件拼接、组装。','2026.04'],['SPIE 思湃义工游学','校园大使','借助 AI 工具辅助撰写义工和游学项目的推广文案，面向高校学生进行介绍。<br>按照主办方的宣发安排，在微信端发布项目推文与海报，按时完成校园推广任务。','2026.02 - 2026.05']]
};

let language='en',activeFilter='all',activeView='gallery',activeProject=null;
try{if(localStorage.getItem('xw-language')==='zh')language='zh';}catch{}
const dialog=document.querySelector('#project-dialog');
const text=key=>copy[language][key];
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// A deterministic visualisation of the documented overcurrent rule.
function signalChart(fault=true){
 const raw=Array.from({length:66},(_,i)=>1.15+Math.sin(i*1.7)*.15+Math.cos(i*.45)*.07+(fault&&i>=26&&i<43?2.3:0)+(i===13?2.5:0));
 const median=raw.map((_,i)=>{const a=raw.slice(Math.max(0,i-4),i+1).sort((a,b)=>a-b);const mid=Math.floor(a.length/2);return a.length%2?a[mid]:(a[mid-1]+a[mid])/2;});
 const x=i=>20+i*7.4,y=v=>157-v*31;
 const path=values=>values.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
 let count=0;
 const alarms=median.map(v=>{count=v>3?count+1:0;return count>=2;});
 const marks=alarms.map((alarm,i)=>alarm?`<circle cx="${x(i)}" cy="${y(median[i])-7}" r="1.7" fill="#e98c6d"/>`:'').join('');
 return `<div class="signal-preview"><svg viewBox="0 0 520 185" role="img" aria-label="${language==='en'?'Simulated raw and median-filtered current readings':'原始与中值滤波电流模拟曲线'}"><g class="chart-grid">${[1,2,3,4].map(v=>`<path d="M20 ${y(v)}H501"/>`).join('')}${[20,140,260,380,501].map(v=>`<path d="M${v} 25V157"/>`).join('')}</g><path class="threshold" d="M20 ${y(3)}H501"/><path class="raw" d="${path(raw)}"/><path class="filtered" d="${path(median)}"/>${marks}<text x="20" y="178">0 s</text><text x="466" y="178">65 s</text><text x="20" y="15">I / A</text><text x="420" y="55">${text('threshold')}</text></svg><div class="chart-caption"><span><i class="chart-key"></i>${text('filtered')} <span style="color:#85917a">/ ${text('raw')}</span></span><span>${fault?'FAULT → RECOVERY':'NORMAL + NOISE SPIKE'}</span></div></div>`;
}
function renderProjects(){
 document.querySelector('#projects').innerHTML=projects.map(p=>{
  const c=p[language];
  let visual=p.id==='edge'?signalChart():p.id==='mail'?`<span class="browser-frame"><img src="${p.image}" alt="${language==='en'?'MailPhor prototype dashboard with synthetic opportunities':'MailPhor 原型工作台，展示虚构机会数据'}" loading="lazy" width="1440" height="1100"></span>`:`<img src="${p.image}" alt="${language==='en'?'Physical smart parking prototype with sensors, Micro:bit controllers and barriers':'带有传感器、Micro:bit 控制器及道闸的停车场实物原型'}" width="1198" height="936">`;
  return `<article class="project-card ${p.id}" data-project="${p.id}" ${activeFilter!=='all'&&!p.categories.includes(activeFilter)?'hidden':''}><button class="project-visual ${p.id==='mail'?'mail':p.id==='parking'?'parking':'edge'}-visual" data-open="${p.id}" aria-label="${language==='en'?'Explore':'查看'} ${escapeHTML(c.title)}"><span class="project-number">FIG. ${p.number}</span><span class="visual-arrow" aria-hidden="true">↗</span>${visual}${c.sticker?`<span class="project-sticker">${c.sticker}</span>`:''}<span class="project-date">${c.date}</span></button><div class="project-caption"><div><h3><button data-open="${p.id}">${c.title}</button></h3><div class="project-meta">${c.meta}</div></div><p class="project-summary">${c.summary}</p><span class="index">[${p.number}]</span></div></article>`;
 }).join('');
 window.dispatchEvent(new Event('portfolio:render'));
}
function renderActivities(){document.querySelector('#activities').innerHTML=activities[language].map(a=>`<article class="activity"><div><h3>${a[0]}</h3><div class="role">${a[1]}</div></div><div class="activity-description">${a[2].split('<br>').map(line=>`<p>${line}</p>`).join('')}</div><time>${a[3]}</time></article>`).join('');}
function renderDetail(){
 const p=projects.find(p=>p.id===activeProject);if(!p)return;const c=p[language];
 const visual=p.id==='edge'?`<div class="signal-demo"><div class="demo-top"><span class="mono">${text('simulation')}</span><div class="demo-controls"><button data-scenario="normal" aria-pressed="false">${text('normal')}</button><button data-scenario="fault" aria-pressed="true">${text('fault')}</button></div></div><div id="demo-chart">${signalChart()}</div><p class="demo-note">${text('demoNote')}</p></div>`:`<figure class="case-image ${p.id}" style="margin:0"><img src="${p.image}" alt="${escapeHTML(c.caption)}" width="${p.id==='mail'?1440:1198}" height="${p.id==='mail'?1100:936}"><figcaption>${c.caption}</figcaption></figure>`;
 document.querySelector('#project-detail').innerHTML=`<div class="case-header"><div class="case-kicker">FIG. ${p.number} / ${c.date}</div><h2 id="project-title">${c.title}</h2><p>${c.subtitle}</p><div class="case-tags">${p.stack.map(t=>`<span>${t}</span>`).join('')}</div></div>${visual}<div class="case-body">${c.sections.map(s=>`<section class="case-section"><h3>${s[0]}</h3><div><p>${s[1]}</p>${s[2]?`<ul>${s[2].map(t=>`<li>${t}</li>`).join('')}</ul>`:''}</div></section>`).join('')}</div><div class="case-links"><a href="${p.repo}" target="_blank" rel="noopener noreferrer">${text('source')}</a>${p.id==='edge'?`<a href="assets/edgesense-results.svg" target="_blank" rel="noopener">${text('results')}</a>`:''}<button data-close>${text('close')}</button></div>`;
}
function setLanguage(next){
 language=next;document.documentElement.lang=next==='zh'?'zh-CN':'en';
 document.title=next==='zh'?'王雪文 — 项目与作品':'Xuewen Wang — Selected Work';
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=text(el.dataset.i18n);});
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',el.dataset.lang===next));
 document.querySelector('.sketch-link').setAttribute('aria-label',next==='zh'?'浏览作品':'Explore selected work');
 document.querySelector('[data-close]').setAttribute('aria-label',next==='zh'?'关闭项目详情':'Close project details');
 renderProjects();renderActivities();if(dialog.open)renderDetail();
 try{localStorage.setItem('xw-language',next);}catch{}
 window.dispatchEvent(new Event('portfolio:language'));
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.lang)setLanguage(button.dataset.lang);
 if(button.dataset.filter){activeFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b===button));renderProjects();}
 if(button.dataset.view){activeView=button.dataset.view;document.querySelector('.projects').classList.toggle('list-view',activeView==='list');document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',b===button));}
 if(button.dataset.open){activeProject=button.dataset.open;renderDetail();dialog.showModal();dialog.scrollTop=0;}
 if(button.hasAttribute('data-close'))dialog.close();
 if(button.dataset.scenario){document.querySelectorAll('[data-scenario]').forEach(b=>b.setAttribute('aria-pressed',b===button));document.querySelector('#demo-chart').innerHTML=signalChart(button.dataset.scenario==='fault');}
});
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
dialog.addEventListener('close',()=>{activeProject=null;});
setLanguage(language);
document.documentElement.dataset.portfolioReady='true';
