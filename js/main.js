/* ScholarVantage Global — site scripts (no dependencies) */
(function () {
  "use strict";

  var WA_NUMBER = "2348107744894";
  var EMAIL = "scholarvantageglobal@gmail.com";

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle, .menu-btn");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      var textSpan = toggle.querySelector("span");
      if (textSpan) {
        textSpan.textContent = open ? "Close" : "Menu";
      } else {
        toggle.textContent = open ? "Close" : "Menu";
      }
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 960) setOpen(false); });
  }

  /* ---------- One reveal ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Services index: mark the section in view ---------- */
  var indexLinks = document.querySelectorAll(".svc-index a");
  if (indexLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    indexLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        indexLinks.forEach(function (a) { a.classList.remove("is-current"); a.removeAttribute("aria-current"); });
        var link = byId[entry.target.id];
        if (link) { link.classList.add("is-current"); link.setAttribute("aria-current", "location"); }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Booking form → WhatsApp ---------- */
  var form = document.getElementById("booking-form");
  if (!form) return;

  var serviceSelect = form.querySelector("#f-service");

  // Pre-select a service from ?service=<value>
  var wanted = new URLSearchParams(window.location.search).get("service");
  if (wanted && serviceSelect) {
    var match = Array.prototype.find.call(serviceSelect.options, function (o) { return o.value === wanted; });
    if (match) serviceSelect.value = wanted;
  }

  // Service buttons on the same page pre-select without a reload
  document.querySelectorAll("[data-book-service]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (!serviceSelect) return;
      e.preventDefault();
      var slug = btn.getAttribute("data-book-service");
      serviceSelect.value = slug;
      if (history.replaceState) history.replaceState(null, "", "?service=" + slug + "#contact");
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("contact").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      setTimeout(function () { form.elements.name.focus({ preventScroll: true }); }, reduce ? 0 : 600);
    });
  });

  // Don't allow past dates
  var dateInput = form.querySelector("#f-date");
  if (dateInput) {
    var d = new Date();
    dateInput.min = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  var rules = {
    name: function (v) { return v.trim().length >= 2 || "Enter your full name."; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "That email looks incomplete. Write it as name@example.com."; },
    whatsapp: function (v) { return v.replace(/[^\d]/g, "").length >= 7 || "Enter your WhatsApp number with its country code, for example +234."; },
    country: function (v) { return v.trim().length >= 2 || "Enter the country you live in."; },
    service: function (v) { return v !== "" || "Choose a service, or pick “Not sure yet”."; }
  };

  function validateField(name) {
    var input = form.elements[name];
    var field = input.closest(".field");
    var result = rules[name](input.value);
    var errEl = field.querySelector(".error");
    if (result === true) {
      input.removeAttribute("aria-invalid");
      if (errEl) errEl.textContent = "";
      return true;
    }
    input.setAttribute("aria-invalid", "true");
    if (errEl) errEl.textContent = result;
    return false;
  }

  Object.keys(rules).forEach(function (name) {
    var input = form.elements[name];
    input.addEventListener("blur", function () { if (input.value) validateField(name); });
    input.addEventListener("input", function () { if (input.getAttribute("aria-invalid")) validateField(name); });
  });

  function formatDate(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    var dt = new Date(+p[0], +p[1] - 1, +p[2]);
    return dt.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var firstBad = null;
    Object.keys(rules).forEach(function (name) {
      if (!validateField(name) && !firstBad) firstBad = form.elements[name];
    });
    if (firstBad) { firstBad.focus(); return; }

    var v = function (n) { return (form.elements[n].value || "").trim(); };
    var lines = [
      "Hello ScholarVantage Global, I'd like to book a free consultation.",
      "",
      "*Name:* " + v("name"),
      "*Email:* " + v("email"),
      "*WhatsApp:* " + v("whatsapp"),
      "*Country:* " + v("country")
    ];
    if (v("profession")) lines.push("*Profession:* " + v("profession"));
    lines.push("*Service of interest:* " + serviceSelect.options[serviceSelect.selectedIndex].text);
    if (v("date")) lines.push("*Preferred date:* " + formatDate(v("date")));
    if (v("message")) { lines.push("", "*Message:*", v("message")); }

    var text = lines.join("\n");
    var waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
    var mailUrl = "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent("Consultation request: " + v("name")) +
      "&body=" + encodeURIComponent(text.replace(/\*/g, ""));

    var status = document.getElementById("form-success");
    var mailLink = document.getElementById("form-mail-fallback");
    var waLink = document.getElementById("form-wa-fallback");
    if (mailLink) mailLink.href = mailUrl;
    if (waLink) waLink.href = waUrl;
    if (status) { status.classList.add("show"); status.focus(); }

    window.open(waUrl, "_blank", "noopener");
  });
})();
