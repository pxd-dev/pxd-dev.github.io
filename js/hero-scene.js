/**
 * Hero — carrusel de fondo.
 */
(function (global) {
  "use strict";

  const INTERVAL_MS = 5500;
  const FADE_MS = 1600;

  class HeroCarousel {
    constructor(root) {
      this.root = root;
      this.slides = Array.from(root.querySelectorAll(".hero-carousel__slide"));
      this.index = 0;
      this.timer = null;
      this.transitioning = false;
      this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      this.tick = this.tick.bind(this);
      this.onVisibility = this.onVisibility.bind(this);

      if (this.slides.length < 2) return;

      document.addEventListener("visibilitychange", this.onVisibility);
      this.reducedMotion.addEventListener("change", () => {
        if (this.reducedMotion.matches) this.stop();
        else this.start();
      });

      this.start();
    }

    onVisibility() {
      if (document.hidden) this.stop();
      else this.start();
    }

    start() {
      this.stop();
      if (this.reducedMotion.matches) return;
      this.timer = window.setInterval(this.tick, INTERVAL_MS);
    }

    stop() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    }

    tick() {
      if (this.transitioning || document.hidden) return;
      this.goTo((this.index + 1) % this.slides.length);
    }

    goTo(nextIndex) {
      if (nextIndex === this.index || this.transitioning) return;

      const current = this.slides[this.index];
      const next = this.slides[nextIndex];
      this.transitioning = true;

      next.classList.add("is-active", "is-entering");
      current.classList.add("is-leaving");
      current.classList.remove("is-active");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.classList.remove("is-entering");
        });
      });

      window.setTimeout(() => {
        current.classList.remove("is-leaving");
        this.index = nextIndex;
        this.transitioning = false;
      }, FADE_MS);
    }

    destroy() {
      this.stop();
      document.removeEventListener("visibilitychange", this.onVisibility);
    }
  }

  function init() {
    const root = document.querySelector(".hero-carousel");
    if (!root) return;
    global.PixelHeroScene = { carousel: new HeroCarousel(root) };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
