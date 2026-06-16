(function (global) {
  "use strict";

  const STORAGE_KEY = "pixel-theme-v2";
  /** Default experience: light mode first. */
  const DEFAULT_THEME = "light";

  function applyTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.checked = next === "light";
      toggle.setAttribute(
        "aria-label",
        next === "light"
          ? (global.PixelI18n?.t("theme.light") || "Light mode")
          : (global.PixelI18n?.t("theme.dark") || "Dark mode")
      );
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved === "dark" ? "dark" : DEFAULT_THEME);

    const toggle = document.getElementById("theme-toggle");
    toggle?.addEventListener("change", () => {
      applyTheme(toggle.checked ? "light" : "dark");
    });

    document.addEventListener("languagechange", () => {
      const theme = document.documentElement.getAttribute("data-theme") || DEFAULT_THEME;
      applyTheme(theme);
    });
  }

  global.PixelTheme = { initTheme, applyTheme };
})(window);
