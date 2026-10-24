// QFRemote 官网脚本：
// 1) 产品信息全部从 product.json 渲染（版本号/下载/校验码/日志/截图只维护那一处）；
// 2) 中英切换；3) 留言表单（QFRemote 自家留言通道）；4) 动效与下载直链解析。
"use strict";

const I18N = {
  zh: {
    nav_features: "功能", nav_reconnect: "自动重连", nav_shots: "界面", nav_download: "下载",
    nav_changes: "更新日志", nav_faq: "常见问题", nav_contact: "联系", nav_login: "网页版登录", nav_register: "注册",
    hero_badge: "自有服务器 · 自有品牌",
    hero_h1a: "你的电脑，", hero_h1b: "随身打开。",
    hero_sub: "QFRemote 是我们自有的远程控制软件：电脑装一次，之后用电脑软件或手机浏览器打开，就能连上你的电脑看实时画面、动手操作。",
    hero_dl: "下载 Windows 版", hero_dl_a: "下载 Android 版", hero_reconnect: "断开？它自己连回来",
    hero_weblogin: "网页版登录", hero_register: "注册账号",
    hero_note: "手机不用装软件，浏览器就能控制 · 电脑不用挂梯子",
    hero_img_alt: "QFRemote 正在连接的界面",
    chip_a: "连接状态一眼可见", chip_b: "断开自动重连中…",
    feat_kicker: "核心功能", feat_title: "一台电脑，装一次，处处可达",
    f1t: "远程桌面，实时操控", f1p: "被控电脑的画面实时传到你眼前，鼠标键盘就像坐在它跟前一样用。电脑前没人，也能把事办了。",
    f2t: "文件管理", f2p: "远程浏览被控电脑里的文件，上传、下载、整理，不用把人叫回电脑跟前发文件。",
    f3t: "远程终端", f3p: "需要敲命令的时候有终端可用，查状态、跑命令、处理问题，不必事事都开画面。",
    f4t: "权限分项管理", f4p: "给别人开账号时，能看什么、能动什么，一项一项分开管；还有一个总开关，一键全开或全关。账号随时能收回，收回立刻失效。",
    f5t: "安全防护", f5p: "服务器有专人巡逻：每天自查木马与后门、异常自动处理，系统补丁自动更新；登录有防撞保护，谁在乱试密码，门自己会锁。",
    f6t: "软件内更新", f6p: "新版本在软件里就能更新，不用再到处找安装包。每次更新改了什么，都会在这里的更新日志里写清。",
    f7t: "双主题界面", f7p: "亮蓝与深灰两套主题一键切换，深色用深灰不用纯黑，白天晚上看着都舒服。",
    f8t: "手机浏览器直接控", f8p: "手机上不用装任何软件，浏览器打开控制台就能看画面、能操作，临时救急最方便。",
    f9t: "好友与共享", f9p: "按账号搜到人、发申请，对方同意后成为好友；把自己的一组电脑共享给他请他帮忙，只看还是能操作由你选，删好友自动收回。好友之间还能加密聊天。",
    f9link: "打开好友页 →",
    f10t: "官方论坛", f10p: "使用求助、建议反馈、综合讨论与官方公告；用 QFRemote 账号登录即可发帖，游客可浏览。内容经机器初审与人工复核，广告引流与违规内容会被直接驳回。",
    f10link: "进入论坛 →",
    rc_kicker: "最在乎的一件事", rc_title: "断开后，不顾一切自己连回来",
    rc_lead: "远程控制最怕的就是断开——断了还要人跑到电脑跟前手动点，那还不如不用。QFRemote 从三层堵死这件事：只要软件开着，断开就自动重连，不限次数、不弹窗、不把你踢回登录页。",
    rc1t: "被控端自己往回连", rc1p: "装在电脑上的小组件是个系统服务：电脑重启、系统更新、服务器重启，它开机就自己上班、自己连回来。实测：服务器重启后，它几秒内就以新连接自己报到，全程没人碰电脑。",
    rc2t: "服务器自己爬起来", rc2p: "服务器上的服务设了崩溃自动拉起与开机自启，另外每小时还有一次自检，蔫了先自救。实测受控重启一次，网页 6 秒恢复。",
    rc3t: "控制端自己重点连", rc3p: "软件里有个连接看护：认出「已断线」就自己点重连，一直试到连上为止；整页断开则换成自家页面倒计时自动重试。中间只在工具栏挂一行小字，你什么都不用做。",
    shot_kicker: "真实界面", shot_title: "软件长这样", shot_lead: "以下图片均为软件实际运行画面，不是效果图。",
    dl_kicker: "下载", dl_title: "下载 QFRemote", dl_win: "Windows 版",
    dl_ver: "当前版本", dl_date: "发布日期", dl_size: "安装包大小", dl_file: "文件名",
    dl_copy: "复制", dl_copied: "已复制",
    dl_tip: "下载后可对照上面的校验码，确认安装包完整、没有被掉包。首次打开若出现 Windows 提示，点「更多信息 → 仍要运行」即可（软件暂未购买签名证书）。",
    dl_btn: "下载最新版", dl_history: "查看全部历史版本",
    dl_android: "Android 版", dl_btn_a: "下载 Android 版", dl_reg_link: "没有账号？先注册一个",
    dl_tip_a: "下载后可对照上面的校验码，确认安装包完整、没有被掉包。首次安装若被系统拦截，请允许本次安装后继续（软件暂未上架应用商店）。",
    dl_note: "请仅通过本页面下载 QFRemote，确保安装包完整可靠。",
    cl_kicker: "更新日志", cl_title: "一路走来的变化", cl_latest: "最新",
    faq_kicker: "常见问题", faq_title: "先问清楚，再上手",
    ct_kicker: "联系我们", ct_title: "有话直说",
    ct_mail_label: "联系邮箱：",
    ct_sub: "也可以直接在下面留言，提交后会自动转到我们的邮箱，我们会认真阅读并处理。",
    fb_content_ph: "请填写您的意见或建议（必填，最多 2000 字）",
    fb_contact_ph: "联系方式（选填，方便我们与您联系）",
    fb_submit: "提交留言",
    fb_sending: "正在提交，请稍候……",
    fb_success: "提交成功，感谢您的反馈，我们会认真阅读并处理。",
    fb_fail: "提交失败，请稍后重试，或直接发送邮件至 a718983610@gmail.com。",
    fb_empty: "请先填写留言内容后再提交。",
    foot_note: "QFRemote 基于开源项目 MeshCentral（Apache-2.0 许可证）构建，MeshCentral 的权利归其原作者所有。",
    foot_terms: "用户协议",
    foot_privacy: "隐私说明"
  },
  en: {
    nav_features: "Features", nav_reconnect: "Auto-Reconnect", nav_shots: "Interface", nav_download: "Download",
    nav_changes: "Changelog", nav_faq: "FAQ", nav_contact: "Contact", nav_login: "Web Login", nav_register: "Sign Up",
    hero_badge: "Our own server · Our own brand",
    hero_h1a: "Your computer,", hero_h1b: "always within reach.",
    hero_sub: "QFRemote is our own remote-control software. Install it on a computer once, then open the desktop app or your phone's browser to see its live screen and operate it from anywhere.",
    hero_dl: "Download for Windows", hero_dl_a: "Download for Android", hero_reconnect: "Dropped? It reconnects itself",
    hero_weblogin: "Open Web Console", hero_register: "Create Account",
    hero_note: "No app needed on your phone — the browser is enough · No VPN needed on the PC",
    hero_img_alt: "QFRemote connecting screen",
    chip_a: "Connection status at a glance", chip_b: "Reconnecting automatically…",
    feat_kicker: "Core Features", feat_title: "One computer, installed once, reachable everywhere",
    f1t: "Remote Desktop, Live Control", f1p: "The controlled computer's screen streams to you in real time, and mouse and keyboard feel like you are sitting right in front of it — even when nobody is there.",
    f2t: "File Management", f2p: "Browse, upload, download and organize files on the remote computer, without calling anyone back to the desk to send you a file.",
    f3t: "Remote Terminal", f3p: "A terminal is there when you need commands: check status, run jobs, fix problems — without opening the desktop for everything.",
    f4t: "Granular Permissions", f4p: "When you grant someone an account, what they can see and what they can touch is controlled item by item — plus one master switch for all-on or all-off. Accounts can be revoked at any time and stop working immediately.",
    f5t: "Security Patrol", f5p: "The server patrols itself: daily scans for trojans and backdoors with automatic handling, automatic system patches, and login protection that locks the door against password guessing.",
    f6t: "In-App Updates", f6p: "New versions arrive inside the app — no hunting for installers. What changed in each release is written up in the changelog here.",
    f7t: "Dual Themes", f7p: "Bright blue and deep gray themes switch in one click. The dark theme uses deep gray, never pure black — comfortable day and night.",
    f8t: "Phone Browser Control", f8p: "No app to install on your phone: open the console in the browser to view and operate. Perfect for a quick rescue.",
    f9t: "Friends & Sharing", f9p: "Search by account name, send a request, and you are friends once accepted. Share a group of your computers with a friend for help — view-only or full control is your choice — and removing the friend withdraws the sharing automatically. Friends can also chat, end-to-end encrypted.",
    f9link: "Open the Friends page →",
    f10t: "Official Forum", f10p: "Help, suggestions, general discussion and official announcements. Sign in with your QFRemote account to post; guests can browse. Posts pass a machine check plus human review — ads and rule-breaking content are rejected outright.",
    f10link: "Visit the forum →",
    rc_kicker: "The One Thing We Care About Most", rc_title: "Disconnected? It fights its way back — by itself",
    rc_lead: "The biggest fear in remote control is a dropped connection: if someone has to walk to the computer and click, remote control is pointless. QFRemote seals this off at three layers: while the app is open, a drop means automatic reconnection — unlimited retries, no pop-ups, never bounced back to the sign-in page.",
    rc1t: "The agent reconnects itself", rc1p: "The small component on the controlled PC runs as a system service: after a reboot, a system update, or a server restart, it starts on boot and dials back in on its own. Measured: after a server restart it reported back on a fresh connection within seconds — nobody touched the PC.",
    rc2t: "The server gets itself up", rc2p: "The server service is set to relaunch on crash and start on boot, and an hourly self-check heals it first if it ever sags. Measured: one controlled restart brought the web console back in 6 seconds.",
    rc3t: "The app reconnects on its own", rc3p: "A connection watchdog lives in the app: when it sees \u201Cdisconnected\u201D it clicks reconnect itself and keeps trying until it succeeds; a full-page drop switches to our own page with a countdown auto-retry. All you see is one small line in the toolbar.",
    shot_kicker: "Real Interface", shot_title: "What the app looks like", shot_lead: "Every image below is a real running screen of the app — no mockups.",
    dl_kicker: "Download", dl_title: "Download QFRemote", dl_win: "Windows",
    dl_ver: "Current version", dl_date: "Release date", dl_size: "Package size", dl_file: "File name",
    dl_copy: "Copy", dl_copied: "Copied",
    dl_tip: "After downloading, compare the checksum above to make sure the package is complete and untampered. On first launch, if Windows shows a prompt, choose \u201CMore info \u2192 Run anyway\u201D (the app is not code-signed yet).",
    dl_btn: "Download Latest", dl_history: "See all previous versions",
    dl_android: "Android", dl_btn_a: "Download for Android", dl_reg_link: "No account yet? Register first",
    dl_tip_a: "After downloading, compare the checksum above to make sure the package is complete and untampered. If your phone blocks the first install, allow this install to continue (the app is not on an app store yet).",
    dl_note: "Please download QFRemote only from this page to keep your package genuine and intact.",
    cl_kicker: "Changelog", cl_title: "How it evolved", cl_latest: "Latest",
    faq_kicker: "FAQ", faq_title: "Questions, answered first",
    ct_kicker: "Contact", ct_title: "Say it straight",
    ct_mail_label: "Email: ",
    ct_sub: "Or leave a message below — it is forwarded automatically to our mailbox and will be read and handled with care.",
    fb_content_ph: "Your comments or suggestions (required, up to 2,000 characters)",
    fb_contact_ph: "Contact information (optional, so we can reach you)",
    fb_submit: "Submit",
    fb_sending: "Submitting, please wait…",
    fb_success: "Submitted successfully. Thank you — we will read it and handle it with care.",
    fb_fail: "Submission failed. Please try again later, or email us directly at a718983610@gmail.com.",
    fb_empty: "Please enter your message before submitting.",
    foot_note: "QFRemote is built on the open-source MeshCentral project (Apache-2.0 License). MeshCentral remains the property of its original author.",
    foot_terms: "User Agreement",
    foot_privacy: "Privacy Notice"
  }
};

const FAQ = {
  zh: [
    ["被控的电脑要装东西吗？", "要，装一次就行。被控电脑上要装一个小小的后台组件，它装好后自己开机运行、自己连回服务器，平时看不见、不打扰。你自己的电脑装控制软件就行，手机连软件都不用装。"],
    ["手机能用吗？", "能。手机不用装软件，浏览器打开控制台，登录后就能看到电脑的实时画面，也能直接操作。"],
    ["断网或者断开了怎么办？", "什么都不用做。三层都会自己恢复：被控电脑自己重连、服务器自己恢复、控制软件自动重新连接，不限次数。只要软件还开着，它就一直试到连上为止，不用跑到电脑跟前手动点。"],
    ["被控电脑要挂梯子吗？", "不用。被控电脑上的小组件是主动连回我们自有服务器的，电脑本身上网还是走它自己的网络，不受任何影响，也不用开任何端口。"],
    ["能给别人用吗？", "可以给熟人用。软件可以随便拷贝，账号任何人都能自助注册：账号至少 8 位，必须是字母加数字的组合；管理员也可以在后台直接给人开号。能看什么、能动什么按权限一项项分配；不想给了，把账号收回，对方立刻就用不了了。"],
    ["软件怎么更新？", "软件自己会更新：开着的时候发现新版只提醒、不打断你用；等你关掉软件、下次再打开，会先把新版装好再进，装的时候有进度条，装完自动核对完整性。打开软件时要是连不上服务器，照样先进去用，不锁软件。本页下载区也一直是最新版。"],
    ["第一次打开弹出 Windows 提示怎么办？", "这是因为软件暂时还没有购买代码签名证书，属正常现象。在提示里点「更多信息 → 仍要运行」即可。安装包请认准本页下载，并可对照本页公布的 SHA-256 校验码确认没被掉包。"]
  ],
  en: [
    ["Does the controlled computer need anything installed?", "Yes — once. A small background component is installed on the controlled PC; afterwards it starts on boot and reconnects to the server by itself, invisible and out of the way. Your own computer only needs the control app, and your phone needs nothing at all."],
    ["Can I use my phone?", "Yes. No app is required: open the console in your phone's browser, sign in, and you can view the computer's live screen and operate it directly."],
    ["What happens if the connection drops?", "Nothing — you do nothing. All three layers recover on their own: the controlled PC reconnects itself, the server restores itself, and the control app reconnects automatically, with unlimited retries. As long as the app stays open, it keeps trying until it is back — no walking to the computer to click anything."],
    ["Does the controlled PC need a VPN?", "No. The component on the controlled PC dials out to our own server by itself. The PC's own internet traffic is completely unaffected, and no ports need to be opened."],
    ["Can other people use it?", "Yes, for people you know. The software can be copied freely, and anyone can register an account on their own — usernames must be at least 8 characters and combine letters and numbers. The administrator can also create accounts directly in the backend. What each account can see and do is assigned item by item; revoke an account and it stops working immediately."],
    ["How do I update the app?", "The app updates itself: while it is running, a new version only shows a reminder and never interrupts you. The next time you reopen the app after closing it, the new version is installed first — with a progress bar and an automatic integrity check. If the server is unreachable when you open the app, you can still get in and use it; it never locks you out. The download section on this page always carries the latest version too."],
    ["Windows shows a warning on first launch. What do I do?", "That is expected for now, because the app does not yet carry a purchased code-signing certificate. Choose \u201CMore info \u2192 Run anyway\u201D. Always download from this page, and compare the SHA-256 checksum published here to be sure the package is genuine."]
  ]
};

let PRODUCT = null;
let LANG = "zh";
try { LANG = localStorage.getItem("qfr_lang") || "zh"; } catch (e) {}

function t(key) { return (I18N[LANG] || I18N.zh)[key] || I18N.zh[key] || key; }

function applyLang() {
  const dict = I18N[LANG] || I18N.zh;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  const heroImg = document.querySelector("[data-i18n-alt]");
  if (heroImg) heroImg.setAttribute("alt", t("hero_img_alt"));
  document.documentElement.lang = LANG === "en" ? "en" : "zh-CN";
  document.title = LANG === "en" ? "QFRemote — Your Own Remote Control | Official Site" : "QFRemote — 自有远程控制 | 官方网站";
  document.getElementById("langToggle").textContent = LANG === "en" ? "中文" : "EN";
  renderDynamic();
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

/* ===== 由 product.json 渲染：下载 / 截图 / 更新日志 / 常见问题 ===== */
function renderDynamic() {
  if (!PRODUCT) return;
  const P = PRODUCT, W = (P.platforms || {}).windows || {};
  document.querySelectorAll("[data-ver]").forEach(function (el) { el.textContent = "v" + P.version; });
  document.querySelectorAll("[data-date]").forEach(function (el) { el.textContent = P.releaseDate || "—"; });
  document.querySelectorAll("[data-size]").forEach(function (el) { el.textContent = W.sizeText || "—"; });
  document.querySelectorAll("[data-file]").forEach(function (el) { el.textContent = W.fileName || "—"; });
  const req = document.getElementById("dlReq");
  if (req && W.requirements) req.textContent = W.requirements[LANG] || W.requirements.zh || "";
  const sha = document.getElementById("shaCode");
  if (sha) sha.textContent = W.sha256 || "—";
  const dlBtn = document.getElementById("dlBtn");
  if (dlBtn && W.downloadUrl) dlBtn.href = W.downloadUrl;
  const hist = document.getElementById("dlHistory");
  if (hist) hist.href = W.releasePageUrl || "#changes";

  /* 网页版登录 / 注册入口：网址在 product.json 的 web 字段（临时通道网址变更时由同步脚本统一改这一处） */
  const WEB = P.web || {};
  [["navLogin", WEB.loginUrl],
   ["navRegister", WEB.registerUrl], ["dlRegister", WEB.registerUrl],
   ["featFriendsLink", WEB.friendsUrl], ["featForumLink", WEB.forumUrl]].forEach(function (pair) {
    const el = document.getElementById(pair[0]);
    if (el && pair[1]) el.href = pair[1];
  });
  /* 页脚协议入口：与登录页「条款与隐私」同一页（/terms），两条链接分别定位到协议与隐私两篇 */
  const footTerms = document.getElementById("footTerms");
  if (footTerms && WEB.termsUrl) footTerms.href = WEB.termsUrl + "#agreement";
  const footPrivacy = document.getElementById("footPrivacy");
  if (footPrivacy && WEB.termsUrl) footPrivacy.href = WEB.termsUrl + "#privacy";

  /* 安卓卡＋首屏安卓按钮：product.json 里有 platforms.android 且带直链时才显示，没就绪不摆假入口 */
  const A = (P.platforms || {}).android || null;
  const cardA = document.getElementById("dlCardAndroid");
  const heroA = document.getElementById("heroDlA");
  if (cardA && A && A.downloadUrl) {
    cardA.style.display = "";
    if (heroA) heroA.style.display = "";
    document.querySelectorAll("[data-ver-a]").forEach(function (el) { el.textContent = "v" + (A.version || P.version); });
    document.querySelectorAll("[data-date-a]").forEach(function (el) { el.textContent = A.releaseDate || P.releaseDate || "—"; });
    document.querySelectorAll("[data-size-a]").forEach(function (el) { el.textContent = A.sizeText || "—"; });
    document.querySelectorAll("[data-file-a]").forEach(function (el) { el.textContent = A.fileName || "—"; });
    const reqA = document.getElementById("dlReqA");
    if (reqA && A.requirements) reqA.textContent = A.requirements[LANG] || A.requirements.zh || "";
    const shaA = document.getElementById("shaCodeA");
    if (shaA) shaA.textContent = A.sha256 || "—";
    const dlBtnA = document.getElementById("dlBtnA");
    if (dlBtnA) dlBtnA.href = A.downloadUrl;
  } else if (cardA) {
    cardA.style.display = "none";
  }

  const gal = document.getElementById("gallery");
  if (gal) {
    gal.innerHTML = (P.screenshots || []).map(function (s) {
      const cap = s[LANG] || s.zh || "";
      return '<div class="shot"><figure><img loading="lazy" src="' + esc(s.src) + '" alt="' + esc(cap) + '"></figure><figcaption>' + esc(cap) + "</figcaption></div>";
    }).join("");
  }

  const tl = document.getElementById("timeline");
  if (tl) {
    tl.innerHTML = (P.changelog || []).map(function (c, i) {
      const notes = c[LANG] || c.zh || [];
      return '<div class="tl-item' + (i === 0 ? " latest" : "") + '">' +
        '<div class="tl-head"><span class="tl-ver">v' + esc(c.version) + "</span>" +
        (i === 0 ? '<span class="tl-badge">' + esc(t("cl_latest")) + "</span>" : "") +
        '<span class="tl-date">' + esc(c.date) + "</span></div>" +
        "<ul>" + notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  const faq = document.getElementById("faqList");
  if (faq) {
    faq.innerHTML = (FAQ[LANG] || FAQ.zh).map(function (qa) {
      return '<div class="faq-item"><button type="button" class="faq-q"><span>' + esc(qa[0]) + '</span><span class="fx">+</span></button>' +
        '<div class="faq-a"><p>' + esc(qa[1]) + "</p></div></div>";
    }).join("");
    faq.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const item = btn.parentElement;
        const ans = item.querySelector(".faq-a");
        const open = item.classList.toggle("open");
        ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0px";
      });
    });
  }
}

fetch("product.json", { cache: "no-cache" })
  .then(function (r) { return r.json(); })
  .then(function (j) { PRODUCT = j; renderDynamic(); })
  .catch(function () { /* product.json 不可用时保持占位 */ });

/* ===== 语言切换 ===== */
document.getElementById("langToggle").addEventListener("click", function () {
  LANG = LANG === "en" ? "zh" : "en";
  try { localStorage.setItem("qfr_lang", LANG); } catch (e) {}
  applyLang();
});
applyLang();

/* ===== 复制 SHA-256 ===== */
(function () {
  const btn = document.getElementById("copySha");
  if (!btn) return;
  btn.addEventListener("click", function () {
    const code = document.getElementById("shaCode").textContent.trim();
    function done() {
      const old = btn.textContent;
      btn.textContent = t("dl_copied");
      setTimeout(function () { btn.textContent = old; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done).catch(done);
    } else { done(); }
  });
})();

/* ===== 留言表单：QFRemote 自家通道（POST 到 product.json 的 web.feedbackUrl，先入库再转发站长邮箱） ===== */
(function () {
  const form = document.getElementById("feedbackForm");
  if (!form) return;
  function feedbackEndpoint() {
    if (typeof PRODUCT !== "undefined" && PRODUCT && PRODUCT.web && PRODUCT.web.feedbackUrl) return Promise.resolve(PRODUCT.web.feedbackUrl);
    return fetch("product.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (j) {
      return (j && j.web && j.web.feedbackUrl) || null;
    }).catch(function () { return null; });
  }
  function deviceId() {
    try {
      let id = localStorage.getItem("qfr_web_id");
      if (!id) {
        id = "web-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12);
        localStorage.setItem("qfr_web_id", id);
      }
      return id;
    } catch (e) { return "web-anonymous"; }
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const status = document.getElementById("fbStatus");
    const btn = document.getElementById("fbSubmit");
    const content = document.getElementById("fbContent").value.trim();
    const contact = document.getElementById("fbContact").value.trim();
    status.className = "fb-status";
    if (!content) { status.textContent = t("fb_empty"); status.classList.add("err"); return; }
    btn.disabled = true;
    status.textContent = t("fb_sending");
    feedbackEndpoint().then(function (ep) {
      if (!ep) { status.textContent = t("fb_fail"); status.classList.add("err"); btn.disabled = false; return; }
      return fetch(ep, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        content: content,
        contact: contact || undefined,
        platform: "website",
        source: "qfremote-website",
        appVersion: "web",
        deviceHash: deviceId()
      })
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (res.ok && data && data.ok !== false) {
          status.textContent = t("fb_success");
          status.classList.add("ok");
          form.reset();
        } else {
          status.textContent = (data && data.message) ? data.message : t("fb_fail");
          status.classList.add("err");
        }
      });
    }).catch(function () {
      status.textContent = t("fb_fail");
      status.classList.add("err");
    }).finally(function () { btn.disabled = false; });
    });
  });
})();

/* ===== 移动端菜单：汉堡展开/收起 ===== */
(function () {
  const burger = document.getElementById("navBurger");
  const header = document.querySelector("header");
  const panel = document.getElementById("navPanel");
  if (!burger || !header || !panel) return;
  burger.addEventListener("click", function () {
    const open = header.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      header.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ===== 动效：滚动渐入 + 顶栏阴影 ===== */
(function () {
  const header = document.querySelector("header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }
})();

/* ===== 复制 SHA-256（安卓卡） ===== */
(function () {
  const btn = document.getElementById("copyShaA");
  if (!btn) return;
  btn.addEventListener("click", function () {
    const code = document.getElementById("shaCodeA").textContent.trim();
    function done() {
      const old = btn.textContent;
      btn.textContent = t("dl_copied");
      setTimeout(function () { btn.textContent = old; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done).catch(done);
    } else { done(); }
  });
})();
