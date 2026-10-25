// QFRemote 官网脚本：
// 1) 产品信息全部从 product.json 渲染（版本号/下载/校验码/日志/截图只维护那一处）；
// 2) 中英切换；3) 留言表单（QFRemote 自家留言通道）；4) 动效与下载直链解析。
"use strict";

const I18N = {
  zh: {
    nav_features: "功能", nav_reconnect: "自动重连", nav_shots: "界面", nav_download: "下载",
    nav_changes: "更新日志", nav_faq: "常见问题", nav_contact: "联系", nav_login: "网页版登录", nav_register: "注册",
    hero_badge: "自主运营的服务器与品牌",
    hero_h1a: "您的电脑，", hero_h1b: "随时远程连接。",
    hero_sub: "QFRemote 为自主研发的远程控制软件。在被控电脑上完成一次安装后，即可通过电脑客户端或手机浏览器连接该电脑，查看实时画面并进行远程操作。",
    hero_dl: "下载 Windows 版", hero_dl_a: "下载 Android 版", hero_reconnect: "连接中断后自动恢复",
    hero_weblogin: "网页版登录", hero_register: "注册账号",
    hero_note: "手机端无需安装软件，浏览器即可控制 · 被控电脑无需开启端口或额外配置",
    hero_img_alt: "QFRemote 连接中界面",
    chip_a: "连接状态实时显示", chip_b: "正在自动重连…",
    feat_kicker: "核心功能", feat_title: "一次安装，随时连接",
    f1t: "远程桌面，实时操控", f1p: "被控电脑的画面实时传输至控制端，鼠标与键盘操作与在本机前使用一致。即使被控电脑前无人值守，也可完成所需操作。",
    f2t: "文件管理", f2p: "可远程浏览被控电脑中的文件，支持上传、下载与整理，无需他人代为发送文件。",
    f3t: "远程终端", f3p: "提供远程终端功能，可执行命令、查看系统状态与处理问题，无需每次开启远程桌面。",
    f4t: "权限分项管理", f4p: "为他人开通账号时，可查看与可操作的权限可逐项设置，并设有总开关统一开启或关闭。账号可随时收回，收回后立即失效。",
    f5t: "安全防护", f5p: "服务器每日自动检测木马与后门程序并处理异常，系统安全补丁自动更新；登录环节设有防暴力破解保护，连续多次输错密码将触发账号保护。",
    f6t: "软件内更新", f6p: "新版本可直接在软件内完成更新，无需另行下载安装包。每次更新的具体内容均在本页更新日志中公布。",
    f7t: "双主题界面", f7p: "提供亮蓝与深灰两套主题，可一键切换；深色主题采用深灰配色，不使用纯黑，长时间使用更舒适。",
    f8t: "通过手机浏览器控制", f8p: "手机端无需安装软件，使用浏览器打开控制台即可查看画面并进行操作，便于临时处理问题。",
    f9t: "好友与共享", f9p: "可按账号搜索并发送好友申请，对方同意后即成为好友；可将自己的一组电脑共享给好友协助处理，共享权限可设为仅查看或可操作，删除好友后共享自动收回。好友之间支持端到端加密聊天。",
    f9link: "打开好友页面 →",
    f10t: "官方论坛", f10p: "论坛设有使用求助、建议反馈、综合讨论与官方公告板块；使用 QFRemote 账号登录后可发帖，游客可浏览。帖子内容经机器初审与人工复核，广告引流及违规内容将不予通过。",
    f10link: "进入论坛 →",
    rc_kicker: "重点功能", rc_title: "连接中断后自动重连",
    rc_lead: "在远程控制中，连接中断是最影响使用的问题：若需专人到被控电脑前手动恢复，远程控制便失去意义。QFRemote 通过三层机制保障自动恢复：只要软件保持运行，连接中断后即自动重连，不限次数，不弹窗打扰，也不会退出登录状态。",
    rc1t: "被控端自动回连", rc1p: "安装在被控电脑上的组件以系统服务方式运行：被控电脑重启、系统更新或服务器重启后，组件随开机自动启动并重新连接。经实测，服务器重启后，被控端可在数秒内自动恢复连接，全程无需人工操作。",
    rc2t: "服务器自动恢复", rc2p: "服务器端服务设有崩溃自动重启与开机自启，并每小时执行一次自检，发现异常先行自我修复。经实测，受控重启一次后，网页控制台约 6 秒恢复访问。",
    rc3t: "控制端自动重连", rc3p: "控制软件内置连接监护机制：识别到会话断开后自动发起重连，直至恢复为止；整页连接中断时，页面按倒计时自动重试。恢复期间仅在工具栏显示状态提示，用户无需进行任何操作。",
    shot_kicker: "界面预览", shot_title: "软件界面展示", shot_lead: "以下图片均为软件实际运行画面，非效果图。",
    dl_kicker: "下载", dl_title: "下载 QFRemote", dl_win: "Windows 版",
    dl_ver: "当前版本", dl_date: "发布日期", dl_size: "安装包大小", dl_file: "文件名",
    dl_copy: "复制", dl_copied: "已复制",
    dl_tip: "下载后可对照上方公布的 SHA-256 校验码，确认安装包完整且未被篡改。首次打开时如出现 Windows 安全提示，请点「更多信息 → 仍要运行」（本软件暂未购买代码签名证书）。",
    dl_btn: "下载最新版", dl_history: "查看全部历史版本",
    dl_android: "Android 版", dl_btn_a: "下载 Android 版", dl_reg_link: "尚未注册？请先注册账号",
    dl_tip_a: "下载后可对照上方公布的 SHA-256 校验码，确认安装包完整且未被篡改。首次安装时如被系统拦截，请允许本次安装后继续（本软件暂未上架应用商店）。",
    dl_note: "请仅通过本页面下载 QFRemote，以确保安装包完整可靠。",
    cl_kicker: "更新日志", cl_title: "版本更新记录", cl_latest: "最新",
    cl_more: "查看更早的更新记录", cl_less: "收起",
    faq_kicker: "常见问题", faq_title: "常见问题解答",
    ct_kicker: "联系我们", ct_title: "与我们联系",
    ct_mail_label: "联系邮箱：",
    ct_sub: "也可直接通过下方表单留言，提交后将自动转发至官方邮箱，我们将认真阅读并逐项处理。",
    fb_content_ph: "请填写您的意见或建议（必填，最多 2000 字）",
    fb_contact_ph: "联系方式（选填，方便我们与您联系）",
    fb_submit: "提交留言",
    fb_sending: "正在提交，请稍候……",
    fb_success: "提交成功，感谢您的反馈。我们将认真阅读并处理。",
    fb_fail: "提交失败，请稍后重试，或直接发送邮件至 a718983610@gmail.com。",
    fb_empty: "请先填写留言内容后再提交。",
    foot_note: "QFRemote 基于开源项目 MeshCentral（Apache-2.0 许可证）构建，MeshCentral 的权利归其原作者所有。",
    foot_terms: "用户协议",
    foot_privacy: "隐私说明"
  },
  en: {
    nav_features: "Features", nav_reconnect: "Auto-Reconnect", nav_shots: "Interface", nav_download: "Download",
    nav_changes: "Changelog", nav_faq: "FAQ", nav_contact: "Contact", nav_login: "Web Login", nav_register: "Sign Up",
    hero_badge: "Self-operated server and brand",
    hero_h1a: "Your computer,", hero_h1b: "remote access, anytime.",
    hero_sub: "QFRemote is our self-developed remote control software. After a one-time installation on the computer to be controlled, you can connect to it from the desktop client or a mobile browser, view its live screen, and operate it remotely.",
    hero_dl: "Download for Windows", hero_dl_a: "Download for Android", hero_reconnect: "Automatic recovery after disconnection",
    hero_weblogin: "Open Web Console", hero_register: "Create Account",
    hero_note: "No app required on the phone — control from the browser · No ports or extra configuration needed on the controlled PC",
    hero_img_alt: "QFRemote connecting screen",
    chip_a: "Connection status shown in real time", chip_b: "Connection lost. Reconnecting automatically…",
    feat_kicker: "Core Features", feat_title: "Install once, connect at any time",
    f1t: "Remote Desktop, Live Control", f1p: "The controlled computer's screen is streamed to the control side in real time, and mouse and keyboard input works as if you were seated at the machine. Tasks can be completed even when no one is present at the controlled computer.",
    f2t: "File Management", f2p: "Browse files on the controlled computer remotely, with support for uploading, downloading, and organizing — no need for anyone to send files to you manually.",
    f3t: "Remote Terminal", f3p: "A remote terminal is available for executing commands, checking system status, and resolving issues, without opening the remote desktop each time.",
    f4t: "Granular Permissions", f4p: "When an account is granted to another person, view and control permissions can be configured item by item, with a master switch to enable or disable all at once. Accounts can be revoked at any time and cease to function immediately.",
    f5t: "Security Protection", f5p: "The server automatically scans for trojans and backdoors every day and handles anomalies, and system security patches are applied automatically. Sign-in is protected against brute-force attempts: repeated incorrect passwords trigger account protection.",
    f6t: "In-App Updates", f6p: "New versions can be installed from within the software; there is no need to download an installer separately. The contents of each update are published in the changelog on this page.",
    f7t: "Dual Themes", f7p: "Two themes — bright blue and deep gray — can be switched with one click. The dark theme uses deep gray rather than pure black, for comfortable extended use.",
    f8t: "Control via Mobile Browser", f8p: "No software needs to be installed on the phone: open the console in the browser to view the screen and operate the computer, which is convenient for handling issues on short notice.",
    f9t: "Friends & Sharing", f9p: "Search by account name and send a friend request; once accepted, you are friends. You may share a group of your computers with a friend for assistance, with the sharing permission set to view-only or operable; removing the friend withdraws the sharing automatically. Friends can chat with end-to-end encryption.",
    f9link: "Open the Friends page →",
    f10t: "Official Forum", f10p: "The forum provides sections for help, suggestions and feedback, general discussion, and official announcements. Sign in with a QFRemote account to post; guests may browse. Posts undergo a machine check and human review; advertising and rule-breaking content will not be approved.",
    f10link: "Visit the forum →",
    rc_kicker: "Key Feature", rc_title: "Automatic Reconnection after Disconnection",
    rc_lead: "In remote control, a dropped connection is the most disruptive problem: if someone must go to the controlled computer to restore it manually, remote control loses its purpose. QFRemote safeguards recovery through three layers: as long as the software remains running, a dropped connection is re-established automatically, with unlimited retries, no pop-up interruptions, and no loss of the signed-in state.",
    rc1t: "The controlled side reconnects automatically", rc1p: "The component installed on the controlled computer runs as a system service: after the computer restarts, a system update completes, or the server restarts, it starts on boot and reconnects on its own. In testing, after a server restart the controlled side restored its connection within seconds, with no manual action required.",
    rc2t: "The server recovers automatically", rc2p: "The server-side services are configured to restart on crash and start on boot, and a self-check runs every hour to repair anomalies first. In testing, the web console became accessible again about 6 seconds after a controlled restart.",
    rc3t: "The control side reconnects automatically", rc3p: "The control software includes a connection monitor: when a session drop is detected, it initiates reconnection automatically and keeps trying until the connection is restored; if the whole page disconnects, it retries automatically on a countdown. During recovery, only a status notice is shown in the toolbar, and no action is required from the user.",
    shot_kicker: "Interface Preview", shot_title: "Software Interface", shot_lead: "All images below show the software in actual operation; none are renderings.",
    dl_kicker: "Download", dl_title: "Download QFRemote", dl_win: "Windows",
    dl_ver: "Current version", dl_date: "Release date", dl_size: "Package size", dl_file: "File name",
    dl_copy: "Copy", dl_copied: "Copied",
    dl_tip: "After downloading, compare the package against the SHA-256 checksum published above to confirm that it is complete and untampered. If Windows shows a security prompt on first launch, select \u201CMore info \u2192 Run anyway\u201D (the software does not yet carry a purchased code-signing certificate).",
    dl_btn: "Download Latest", dl_history: "See all previous versions",
    dl_android: "Android", dl_btn_a: "Download for Android", dl_reg_link: "Not registered yet? Create an account",
    dl_tip_a: "After downloading, compare the package against the SHA-256 checksum published above to confirm that it is complete and untampered. If the system blocks the first installation, allow this installation to proceed (the software is not yet listed on an app store).",
    dl_note: "Please download QFRemote only from this page to keep your package genuine and intact.",
    cl_kicker: "Changelog", cl_title: "Release History", cl_latest: "Latest",
    cl_more: "View earlier release records", cl_less: "Collapse",
    faq_kicker: "FAQ", faq_title: "Frequently Asked Questions",
    ct_kicker: "Contact", ct_title: "Contact Us",
    ct_mail_label: "Email: ",
    ct_sub: "You may also leave a message using the form below. Submissions are forwarded automatically to the official mailbox and will be read and handled carefully.",
    fb_content_ph: "Your comments or suggestions (required, up to 2,000 characters)",
    fb_contact_ph: "Contact information (optional, so we can reach you)",
    fb_submit: "Submit",
    fb_sending: "Submitting, please wait…",
    fb_success: "Submitted successfully. Thank you for your feedback; it will be read and handled carefully.",
    fb_fail: "Submission failed. Please try again later, or email us directly at a718983610@gmail.com.",
    fb_empty: "Please enter your message before submitting.",
    foot_note: "QFRemote is built on the open-source MeshCentral project (Apache-2.0 License). MeshCentral remains the property of its original author.",
    foot_terms: "User Agreement",
    foot_privacy: "Privacy Notice"
  }
};

const FAQ = {
  zh: [
    ["被控电脑需要安装什么？", "需要在被控电脑上安装一次后台组件。组件安装后随开机自动运行并连接服务器，平时不显示界面、不影响正常使用。控制端电脑安装控制软件即可，手机端无需安装软件。"],
    ["可以使用手机控制吗？", "可以。手机端无需安装软件，使用浏览器打开控制台并登录后，即可查看被控电脑的实时画面并进行操作；也可下载 Android 客户端使用。"],
    ["连接中断后如何处理？", "无需任何操作。三层机制将自动恢复：被控端自动重连、服务器自动恢复、控制端自动重新连接，且不限重试次数。只要软件保持运行，便会持续尝试直至恢复连接，无需到被控电脑前手动处理。"],
    ["被控电脑需要特殊网络配置吗？", "不需要。被控电脑上的组件会主动连接官方服务器，被控电脑的网络使用不受影响，也无需开启任何端口或进行额外配置。"],
    ["可以给他人使用吗？", "可以。软件可自由复制安装，任何人均可自助注册账号：账号须为至少 8 位的字母与数字组合；管理员也可在后台直接创建账号。各账号可查看与可操作的权限按项分配；收回账号后，对方立即无法继续使用。"],
    ["软件如何更新？", "软件支持自动更新：运行期间发现新版本时仅作提醒，不中断使用；退出软件后下次打开时，将先完成新版本安装再进入，安装过程显示进度条，安装完成后自动校验完整性。若打开软件时无法连接服务器，仍可正常进入使用，不会锁定软件。本页下载区同步提供最新版本。"],
    ["首次打开时出现 Windows 安全提示，如何处理？", "该提示系因本软件暂未购买代码签名证书所致，属正常现象。请在提示中点「更多信息 → 仍要运行」。请务必通过本页下载安装包，并可对照本页公布的 SHA-256 校验码确认安装包未被篡改。"]
  ],
  en: [
    ["What needs to be installed on the controlled computer?", "A background component must be installed once on the controlled computer. After installation it starts automatically on boot and connects to the server; it shows no interface in normal use and does not interfere with the computer's operation. The controlling computer only needs the control software, and no software is required on the phone."],
    ["Can I control from a phone?", "Yes. No software needs to be installed on the phone: open the console in the browser and sign in to view the controlled computer's live screen and operate it. An Android client is also available for download."],
    ["What happens if the connection is interrupted?", "No action is required. Three layers recover automatically: the controlled side reconnects, the server restores itself, and the control side reconnects, with unlimited retries. As long as the software remains running, it will keep trying until the connection is restored, and no manual handling at the controlled computer is needed."],
    ["Does the controlled computer need special network configuration?", "No. The component on the controlled computer connects to the official server on its own initiative. The computer's network use is unaffected, and no ports need to be opened or additional configuration made."],
    ["Can other people use the software?", "Yes. The software may be copied and installed freely, and anyone may register an account: usernames must be at least 8 characters and combine letters and numbers. The administrator can also create accounts directly in the backend. View and control permissions are assigned to each account item by item; once an account is revoked, it can no longer be used, effective immediately."],
    ["How is the software updated?", "The software updates automatically. While it is running, a new version is announced by a reminder only and does not interrupt use. After the software is closed and reopened, the new version is installed before entry, with a progress bar shown during installation and an automatic integrity check afterwards. If the server cannot be reached when the software is opened, it can still be entered and used; the software is never locked. The download section on this page always provides the latest version."],
    ["What should I do about the Windows security prompt on first launch?", "The prompt appears because the software does not yet carry a purchased code-signing certificate; this is expected. Select \u201CMore info \u2192 Run anyway\u201D in the prompt. Please download the installer only from this page, and compare it against the SHA-256 checksum published here to confirm that the package has not been tampered with."]
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
  document.title = LANG === "en" ? "QFRemote Remote Control Software | Official Site" : "QFRemote 远程控制软件 | 官方网站";
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

  /* 更新日志：默认只展示最新 10 条，其余折叠（按条数判定，不写死版本号） */
  const tl = document.getElementById("timeline");
  if (tl) {
    const CL_VISIBLE = 10;
    const clList = P.changelog || [];
    function clItem(c, i) {
      const notes = c[LANG] || c.zh || [];
      return '<div class="tl-item' + (i === 0 ? " latest" : "") + '">' +
        '<div class="tl-head"><span class="tl-ver">v' + esc(c.version) + "</span>" +
        (i === 0 ? '<span class="tl-badge">' + esc(t("cl_latest")) + "</span>" : "") +
        '<span class="tl-date">' + esc(c.date) + "</span></div>" +
        "<ul>" + notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></div>";
    }
    tl.innerHTML = clList.slice(0, CL_VISIBLE).map(clItem).join("") +
      (clList.length > CL_VISIBLE
        ? '<div class="tl-more" hidden>' + clList.slice(CL_VISIBLE).map(function (c, j) { return clItem(c, CL_VISIBLE + j); }).join("") + "</div>"
        : "");
    let tg = document.getElementById("tlToggle");
    if (clList.length > CL_VISIBLE) {
      if (!tg) {
        tg = document.createElement("button");
        tg.type = "button";
        tg.id = "tlToggle";
        tg.className = "tl-toggle";
        tl.after(tg);
      }
      tg.textContent = t("cl_more");
      tg.setAttribute("aria-expanded", "false");
      tg.onclick = function () {
        const more = tl.querySelector(".tl-more");
        if (!more) return;
        if (more.hasAttribute("hidden")) {
          more.removeAttribute("hidden");
          tg.textContent = t("cl_less");
          tg.setAttribute("aria-expanded", "true");
        } else {
          more.setAttribute("hidden", "");
          tg.textContent = t("cl_more");
          tg.setAttribute("aria-expanded", "false");
        }
      };
    } else if (tg) {
      tg.remove();
    }
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
