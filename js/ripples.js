/**
 * Gotas de lluvia: ondas pequeñas, lentas, gruesas al centro y finas al desvanecer.
 */
(function (global) {
  "use strict";

  const MIN_RADIUS = 48;
  const MAX_RADIUS = 95;
  const MIN_DURATION = 5200;
  const MAX_DURATION = 7800;
  const MIN_AUTO_GAP = 6000;
  const MAX_AUTO_GAP = 14000;

  class RippleSurface {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.ripples = [];
      this.raf = null;
      this.autoTimer = null;
      this.visible = false;
      this.resize();
      window.addEventListener("resize", () => this.resize());
    }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = Math.floor(rect.width * dpr);
      this.canvas.height = Math.floor(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.w = rect.width;
      this.h = rect.height;
    }

    createDrop(x, y) {
      return {
        x,
        y,
        maxR: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
        born: performance.now(),
        duration: MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
        rings: 5 + Math.floor(Math.random() * 3),
      };
    }

    pushDrop(x, y) {
      this.ripples.push(this.createDrop(x, y));
      if (!this.raf) this.raf = requestAnimationFrame(() => this.tick());
    }

    add(clientX, clientY) {
      const rect = this.canvas.getBoundingClientRect();
      this.pushDrop(clientX - rect.left, clientY - rect.top);
    }

    spawnRaindrop() {
      if (!this.visible || this.w <= 0 || this.h <= 0) return;
      const margin = 60;
      const x = margin + Math.random() * (this.w - margin * 2);
      const y = margin + Math.random() * (this.h - margin * 2);
      this.pushDrop(x, y);
    }

    scheduleRain() {
      clearTimeout(this.autoTimer);
      if (!this.visible || document.hidden) return;
      const delay = MIN_AUTO_GAP + Math.random() * (MAX_AUTO_GAP - MIN_AUTO_GAP);
      this.autoTimer = setTimeout(() => {
        if (Math.random() > 0.25) this.spawnRaindrop();
        this.scheduleRain();
      }, delay);
    }

    startAuto() {
      this.stopAuto();
      const first = 2500 + Math.random() * 3500;
      this.autoTimer = setTimeout(() => {
        this.spawnRaindrop();
        this.scheduleRain();
      }, first);
    }

    stopAuto() {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    }

    setVisible(on) {
      this.visible = on;
      if (on) this.startAuto();
      else this.stopAuto();
    }

    drawRing(x, y, radius, maxR, life) {
      if (radius <= 2 || life <= 0) return;
      const progress = radius / maxR;
      const fade = life * (1 - progress * 0.85);
      if (fade <= 0.02) return;

      const lineWidth = Math.max(0.35, 4.2 * (1 - progress) + 0.5 * life);
      const alpha = fade * (0.92 - progress * 0.55);

      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(61, 214, 255, ${alpha})`;
      this.ctx.lineWidth = lineWidth;
      this.ctx.shadowColor = `rgba(61, 214, 255, ${alpha * 0.4})`;
      this.ctx.shadowBlur = progress < 0.4 ? 6 : 0;
      this.ctx.stroke();
      this.ctx.shadowBlur = 0;
    }

    tick() {
      const now = performance.now();
      this.ctx.clearRect(0, 0, this.w, this.h);

      this.ripples = this.ripples.filter((drop) => {
        const t = (now - drop.born) / drop.duration;
        if (t >= 1) return false;

        const life = 1 - Math.pow(t, 1.35);

        for (let i = 0; i < drop.rings; i++) {
          const lag = i * 0.09;
          const ringT = Math.max(0, t - lag);
          if (ringT <= 0) continue;
          const ease = 1 - Math.pow(1 - Math.min(ringT * 1.05, 1), 2.4);
          const radius = drop.maxR * ease;
          const ringLife = life * (1 - i * 0.08);
          this.drawRing(drop.x, drop.y, radius, drop.maxR, ringLife);
        }

        if (t < 0.15) {
          const core = 1 - t / 0.15;
          this.ctx.beginPath();
          this.ctx.arc(drop.x, drop.y, 3 + t * 6, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(61, 214, 255, ${0.5 * core})`;
          this.ctx.fill();
        }

        return true;
      });

      if (this.ripples.length) {
        this.raf = requestAnimationFrame(() => this.tick());
      } else {
        this.raf = null;
      }
    }
  }

  function bindSurface(section, canvas) {
    const surface = new RippleSurface(canvas);

    section.addEventListener("click", (e) => {
      if (e.target.closest("a, button, input, textarea, select, video, label, .sample-overlay")) return;
      surface.add(e.clientX, e.clientY);
      section.classList.add("was-clicked");
    });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            surface.setVisible(entry.isIntersecting && entry.intersectionRatio > 0.2);
          });
        },
        { threshold: [0, 0.2] }
      );
      io.observe(section);
    } else {
      surface.setVisible(true);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) surface.stopAuto();
      else if (surface.visible) surface.startAuto();
    });

    return surface;
  }

  function init() {
    document.querySelectorAll("[data-ripple]").forEach((section) => {
      const canvas = section.querySelector(".ripple-canvas");
      if (canvas) bindSurface(section, canvas);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.PixelRipples = { bindSurface };
})(window);
