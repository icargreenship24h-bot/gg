/* Shared CMS store — dùng chung cho listing + admin */
(function (global) {
  const STORE_KEY = "girllist_cms_v1";
  const AUTH_KEY = "girllist_cms_auth";

  const DEFAULT_REGIONS = ["Hà Nội", "TP.HCM", "Đà Nẵng", "Hải Phòng", "Cần Thơ"];

  const DEFAULT_POPUP = {
    titleTemplate: "SỐ ĐIỆN THOẠI LÀ {masked} --> LẤY MÃ ĐỂ NHẬN FULL SĐT",
    extraTemplate: "Tên: {name} - Giá: {price}",
    unlockCode: "DEMO2026",
    keyword: "gai goi sinh vien cao cap 2026",
    googleUrl: "https://www.google.com",
    step1Title: "✅ Bước 1:",
    step1Text: "Vào google.com tìm kiếm từ khóa sau:",
    step2Title: "✅ Bước 2:",
    step2Text: "Tìm kết quả có hình ảnh bên dưới.",
    step3Title: "✅ Bước 3:",
    step3Text: "Kéo xuống cuối trang, mã là \"ID cuối bài viết\" và nhập mã vào ô bên trên.",
    guideImage: "https://picsum.photos/seed/guide-search/640/200",
    guideTitle: "📌 HƯỚNG DẪN NHẬP MÃ LẤY SỐ ĐIỆN THOẠI",
    ctaText: "🎉 CHÚC ANH EM TÂM SỰ VUI VẺ! 🎉",
    failTitle: "📞 Thông Báo",
    failMessage: "Em gái không còn hoạt động tại khu vực của bạn!",
    failButton: "Lấy Số Điện Thoại Mới",
    successTitle: "📞 Số điện thoại đầy đủ",
    codePlaceholder: "Nhập mã...",
    confirmButton: "XÁC NHẬN",
    copyButton: "COPY NHANH",
    googleButton: "BẤM VÀO GOOGLE",
    wrongCode: "Mã không đúng. Vui lòng thử lại.",
    callNow: "Gọi ngay"
  };

  const DEFAULT_GIRLS = [
    { id: "g1", name: "Phạm My My", year: 2007, status: "đang rảnh", hours: "24/7", move: "Tí anh cho em 50k xe ôm nhé", service: "Full dịch vụ", hotel: "Miễn phí", price: "450.000đ", masked: "0560782XXX", full: "0560782123", region: "Hà Nội", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", available: true },
    { id: "g2", name: "Nguyễn Như Như", year: 2006, status: "đang rảnh", hours: "24/7", move: "Không cần phụ phí", service: "Full dịch vụ", hotel: "Miễn phí", price: "550.000đ", masked: "0561086XXX", full: "0561086456", region: "TP.HCM", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80", available: true },
    { id: "g3", name: "Lê Thảo Ngân", year: 2005, status: "đang rảnh", hours: "24/7", move: "Em đi xe ôm anh nha", service: "Full dịch vụ", hotel: "Miễn phí", price: "420.000đ", masked: "0565XXXXXX", full: "0565123789", region: "Đà Nẵng", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", available: true },
    { id: "g4", name: "Trần Bảo Ngọc", year: 2006, status: "đang rảnh", hours: "24/7", move: "Anh đón em tận nơi", service: "Full dịch vụ", hotel: "Có phí 150k", price: "580.000đ", masked: "0566XXXXXX", full: "0566987654", region: "Hà Nội", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80", available: true },
    { id: "g5", name: "Vũ Thu Hương", year: 2005, status: "đang rảnh", hours: "24/7", move: "Không cần phụ phí", service: "Full dịch vụ", hotel: "Miễn phí", price: "500.000đ", masked: "0567XXXXXX", full: "0567111222", region: "TP.HCM", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80", available: true },
    { id: "g6", name: "Đỗ Khánh Linh", year: 2007, status: "đang rảnh", hours: "24/7", move: "Tí anh cho em 100k xe ôm nhé", service: "Full dịch vụ", hotel: "Có phí 200k", price: "600.000đ", masked: "0568XXXXXX", full: "0568333444", region: "Hải Phòng", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", available: true }
  ];

  function seed() {
    return {
      settings: {
        siteName: "GIRLLIST.COM",
        siteTag: "Mẫu cấu trúc listing — có quản trị",
        pageTitle: "Các em gái đang hoạt động khu vực của anh em",
        adminPassword: "admin123",
        footer: "Copyright 2026 © Demo CMS",
        ga4Id: "",
        ga4Enabled: false
      },
      regions: DEFAULT_REGIONS.slice(),
      popup: Object.assign({}, DEFAULT_POPUP),
      keywords: defaultKeywords(),
      girls: DEFAULT_GIRLS.map(function (g) { return Object.assign({}, g); })
    };
  }

  function defaultKeywords() {
    return [
      { id: "k1", text: "gai goi sinh vien cao cap 2026", priority: 10, maxShows: 40, shownCount: 0, active: true, guideImage: "", unlockCode: "DEMO2026" },
      { id: "k2", text: "em dao xinh ha noi", priority: 7, maxShows: 25, shownCount: 0, active: true, guideImage: "", unlockCode: "DEMO2027" },
      { id: "k3", text: "gai goi tphcm 24/7", priority: 5, maxShows: 20, shownCount: 0, active: true, guideImage: "", unlockCode: "DEMO2028" },
      { id: "k4", text: "hot girl goi do da nang", priority: 3, maxShows: 15, shownCount: 0, active: true, guideImage: "", unlockCode: "DEMO2029" }
    ];
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return seed();
      var data = JSON.parse(raw);
      data.settings = Object.assign({}, seed().settings, data.settings || {});
      data.popup = Object.assign({}, DEFAULT_POPUP, data.popup || {});
      data.regions = Array.isArray(data.regions) && data.regions.length ? data.regions : DEFAULT_REGIONS.slice();
      data.girls = Array.isArray(data.girls) ? data.girls : seed().girls;
      if (!Array.isArray(data.keywords) || !data.keywords.length) {
        data.keywords = defaultKeywords();
        if (data.popup && data.popup.keyword) data.keywords[0].text = data.popup.keyword;
      }
      return data;
    } catch (e) {
      return seed();
    }
  }

  function save(data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  }

  function uid() {
    return "g" + Math.random().toString(36).slice(2, 9);
  }

  function isAdmin() {
    return sessionStorage.getItem(AUTH_KEY) === "1";
  }

  function login() {
    sessionStorage.setItem(AUTH_KEY, "1");
  }

  function logout() {
    sessionStorage.removeItem(AUTH_KEY);
  }

  function fill(tpl, obj) {
    return String(tpl || "").replace(/\{(\w+)\}/g, function (_, k) {
      return obj[k] == null ? "" : obj[k];
    });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var SEEN_KEY = "girllist_seen_kw";

  function getSeen() {
    try { return JSON.parse(sessionStorage.getItem(SEEN_KEY) || "[]"); }
    catch (e) { return []; }
  }

  function addSeen(id) {
    var seen = getSeen();
    if (seen.indexOf(id) < 0) {
      seen.push(id);
      sessionStorage.setItem(SEEN_KEY, JSON.stringify(seen));
    }
  }

  function clearSeen() {
    sessionStorage.removeItem(SEEN_KEY);
  }

  function weightOf(k) {
    var left = Math.max(0, Number(k.maxShows || 0) - Number(k.shownCount || 0));
    var p = Math.max(1, Number(k.priority || 1));
    return p * Math.max(1, left);
  }

  function pickKeyword(data, opts) {
    opts = opts || {};
    var excludeLast = opts.excludeId;
    var list = (data.keywords || []).filter(function (k) { return k.active !== false && String(k.text || "").trim(); });
    if (!list.length) {
      return { id: "fallback", text: (data.popup && data.popup.keyword) || "", priority: 1, maxShows: 1, shownCount: 0 };
    }
    var seen = getSeen();
    var unusedQuota = list.filter(function (k) {
      return seen.indexOf(k.id) < 0 && Number(k.shownCount || 0) < Number(k.maxShows || 0);
    });
    var unusedAny = list.filter(function (k) { return seen.indexOf(k.id) < 0; });
    var quotaLeft = list.filter(function (k) {
      return Number(k.shownCount || 0) < Number(k.maxShows || 0);
    });
    var pool = unusedQuota.length ? unusedQuota
      : unusedAny.length ? unusedAny
      : quotaLeft.length ? quotaLeft
      : list;
    if (excludeLast && pool.length > 1) {
      pool = pool.filter(function (k) { return k.id !== excludeLast; });
    }
    var total = 0;
    var weights = pool.map(function (k) {
      var w = weightOf(k);
      total += w;
      return w;
    });
    var r = Math.random() * total;
    var acc = 0;
    for (var i = 0; i < pool.length; i++) {
      acc += weights[i];
      if (r <= acc) return pool[i];
    }
    return pool[0];
  }

  function consumeKeyword(data, kw) {
    if (!kw || !kw.id) return data;
    addSeen(kw.id);
    var item = (data.keywords || []).find(function (k) { return k.id === kw.id; });
    if (item) item.shownCount = Number(item.shownCount || 0) + 1;
    save(data);
    return data;
  }
  function unlockCodeFor(kw, popup) {
    var code = kw && String(kw.unlockCode || "").trim();
    if (code) return code;
    return String((popup && popup.unlockCode) || "").trim();
  }
  function googleSearchUrl(base, keyword) {
    var root = (base || "https://www.google.com").replace(/\/$/, "");
    if (!keyword) return root;
    return "https://www.google.com/search?q=" + encodeURIComponent(keyword);
  }

  function initGA4(settings) {
    var id = String((settings && settings.ga4Id) || "").trim();
    if (!id || (settings && settings.ga4Enabled === false) || (settings && settings.ga4Enabled === "false")) return;
    if (!/^G-[A-Z0-9]+$/i.test(id)) return;
    if (window.__ga4ready === id) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    if (!document.getElementById("ga4-script")) {
      var s = document.createElement("script");
      s.id = "ga4-script";
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
      document.head.appendChild(s);
      window.gtag("js", new Date());
    }
    window.gtag("config", id);
    window.__ga4ready = id;
  }

  function track(name, params) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, params || {});
      }
    } catch (e) {}
  }

  global.CMS = {
    STORE_KEY: STORE_KEY,
    seed: seed,
    load: load,
    save: save,
    uid: uid,
    isAdmin: isAdmin,
    login: login,
    logout: logout,
    fill: fill,
    esc: esc,
    DEFAULT_POPUP: DEFAULT_POPUP,
    defaultKeywords: defaultKeywords,
    getSeen: getSeen,
    addSeen: addSeen,
    clearSeen: clearSeen,
    pickKeyword: pickKeyword,
    consumeKeyword: consumeKeyword,
    googleSearchUrl: googleSearchUrl,
    unlockCodeFor: unlockCodeFor,
    initGA4: initGA4,
    track: track
  };
})(window);
