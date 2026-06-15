/* =========================================================
   48Hgames — common runtime (language, header, footer)
   ========================================================= */

const LANG_KEY = "48h-lang";

function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "ja" || saved === "en") return saved;
  // default to browser language, falling back to Japanese
  return (navigator.language || "ja").toLowerCase().startsWith("en") ? "en" : "ja";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

/* swap all [data-i18n] text + update <html lang> + toggle buttons */
function applyLang(lang) {
  const t = I18N[lang];
  document.documentElement.lang = t.htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // lang switch buttons reflect state
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
  });

  // let page-specific code re-render dynamic content
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* number formatting for play counts */
function fmtPlays(n) {
  return n.toLocaleString("en-US");
}

/* small helper: build an element from html string */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------- header / footer wiring (run after DOM ready) ---------- */
function wireChrome() {
  // language switch buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });

  // mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", wireChrome);

/* reveal-on-scroll for cards */
function observeReveals(root = document) {
  const items = root.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (idx % 6) * 50 + "ms";
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((i) => io.observe(i));
}
