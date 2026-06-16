(function () {

  "use strict";



  window.PixelI18n?.initLanguage();

  window.PixelTheme?.initTheme();



  const header = document.querySelector(".site-header");

  const navToggle = document.querySelector(".nav-toggle");

  const mainNav = document.querySelector(".main-nav");



  if (navToggle && mainNav) {

    navToggle.addEventListener("click", () => {

      const open = mainNav.classList.toggle("is-open");

      navToggle.setAttribute("aria-expanded", String(open));

    });



    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("is-open");

        navToggle.setAttribute("aria-expanded", "false");

      });

    });

  }



  window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.boxShadow =

      window.scrollY > 20

        ? "0 4px 24px rgba(0,0,0,0.35)"

        : "0 2px 20px rgba(0, 0, 0, 0.25)";

  });



  const statNumbers = document.querySelectorAll(".stat-number[data-target]");



  function animateCounter(el) {

    const target = Number(el.dataset.target);

    const duration = 1800;

    const start = performance.now();



    function tick(now) {

      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      el.textContent = Math.floor(target * eased).toString();

      if (progress < 1) requestAnimationFrame(tick);

      else el.textContent = target.toString();

    }



    requestAnimationFrame(tick);

  }



  if (statNumbers.length && "IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.3 }

    );

    statNumbers.forEach((el) => observer.observe(el));

  }



  window.PixelProjects?.initProjects();
  window.PixelClients?.initClientsCarousel();



  function initSamplePlayer(playerEl) {
    const sampleVideo = playerEl.querySelector(".sample-video");
    const sampleAudio = playerEl.querySelector(".sample-audio");
    const sampleOverlay = playerEl.querySelector(".sample-overlay");
    const samplePlayBtn = playerEl.querySelector(".sample-play-btn");
    const sampleError = playerEl.querySelector(".sample-error");
    const sampleErrorMsg = playerEl.querySelector(".sample-error-msg");
    const langSelect = playerEl.closest(".sample-block")?.querySelector("[data-sample-lang]");
    let userTriedPlay = false;
    let hasStarted = false;

    if (!sampleVideo) return;

    function getAudioSrc() {
      const option = langSelect?.selectedOptions[0];
      return option?.dataset.audio || "";
    }

    function applyAudioSource() {
      if (!sampleAudio) return;
      const src = getAudioSrc();
      sampleAudio.src = src;
      if (src) sampleAudio.load();
    }

    function syncAudioTime() {
      if (!sampleAudio || !getAudioSrc()) return;
      if (Math.abs(sampleAudio.currentTime - sampleVideo.currentTime) > 0.25) {
        sampleAudio.currentTime = sampleVideo.currentTime;
      }
    }

    async function playAudioTrack() {
      if (!sampleAudio || !getAudioSrc()) return;
      sampleAudio.currentTime = sampleVideo.currentTime;
      try {
        await sampleAudio.play();
      } catch {
        /* Sin archivo de audio todavía */
      }
    }

    function pauseAudioTrack() {
      sampleAudio?.pause();
    }

    function resetAudioTrack() {
      if (!sampleAudio) return;
      sampleAudio.pause();
      sampleAudio.currentTime = 0;
    }

    applyAudioSource();
    langSelect?.addEventListener("change", () => {
      const wasPlaying = hasStarted && !sampleVideo.paused;
      const time = sampleVideo.currentTime;
      applyAudioSource();
      if (wasPlaying && getAudioSrc()) {
        sampleAudio.addEventListener(
          "loadeddata",
          () => {
            sampleAudio.currentTime = time;
            playAudioTrack();
          },
          { once: true }
        );
      }
    });

    function showSampleError(message) {
      if (sampleErrorMsg) sampleErrorMsg.innerHTML = message;
      if (sampleError) sampleError.hidden = false;
    }

    function hideSampleError() {
      if (sampleError) sampleError.hidden = true;
    }

    function dismissOverlay() {
      hasStarted = true;
      playerEl.classList.add("is-playing");
      if (sampleOverlay?.isConnected) {
        sampleOverlay.remove();
      }
    }

    function restoreOverlay() {
      hasStarted = false;
      playerEl.classList.remove("is-playing");
      if (sampleOverlay && !sampleOverlay.isConnected) {
        const insertBefore = sampleError?.isConnected ? sampleError : null;
        playerEl.insertBefore(sampleOverlay, insertBefore);
      }
    }

    async function playSample() {
      if (hasStarted) return;

      userTriedPlay = true;
      hideSampleError();

      dismissOverlay();
      sampleVideo.muted = true;
      sampleVideo.controls = true;

      try {
        await sampleVideo.play();
        await playAudioTrack();
      } catch {
        restoreOverlay();
        resetAudioTrack();
        showSampleError("Pulsa de nuevo o prueba Chrome/Edge.");
      }
    }

    samplePlayBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      playSample();
    });

    sampleOverlay?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target === samplePlayBtn || samplePlayBtn?.contains(e.target)) return;
      playSample();
    });

    sampleVideo.addEventListener("play", () => {
      if (hasStarted) playAudioTrack();
    });

    sampleVideo.addEventListener("pause", () => {
      pauseAudioTrack();
    });

    sampleVideo.addEventListener("timeupdate", syncAudioTime);

    sampleVideo.addEventListener("seeked", () => {
      if (hasStarted) syncAudioTime();
    });

    sampleVideo.addEventListener("ended", () => {
      sampleVideo.pause();
      sampleVideo.muted = true;
      sampleVideo.currentTime = 0;
      sampleVideo.controls = false;
      resetAudioTrack();
      restoreOverlay();
    });

    sampleVideo.addEventListener("loadedmetadata", hideSampleError);

    sampleVideo.addEventListener("error", () => {
      if (!userTriedPlay) return;

      let msg = "No se pudo cargar el video. Verifica el archivo.";

      if (sampleVideo.error?.code === 4) {
        msg = "Formato incompatible. Usa MP4 (H.264/AAC).";
      }

      showSampleError(msg);
    });
  }



  document.querySelectorAll("[data-sample-player]").forEach(initSamplePlayer);



  if ("IntersectionObserver" in window) {

    const animObserver = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            animObserver.unobserve(entry.target);

          }

        });

      },

      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }

    );

    document.querySelectorAll("[data-animate]").forEach((el) => animObserver.observe(el));

  } else {

    document.querySelectorAll("[data-animate]").forEach((el) => el.classList.add("is-visible"));

  }



  const contactForm = document.querySelector(".contact-form");

  contactForm?.addEventListener("submit", async (e) => {

    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const feedback = form.querySelector(".form-feedback");
    const t = (key, fallback) => window.PixelI18n?.t(key) || fallback;

    function showFeedback(message, isError) {
      if (!feedback) return;
      feedback.textContent = message;
      feedback.hidden = false;
      feedback.classList.toggle("form-feedback--error", !!isError);
      feedback.classList.toggle("form-feedback--ok", !isError);
    }

    const email = form.email.value.trim();
    const message = form.mensaje.value.trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      showFeedback(t("form.invalidEmail", 'Ingresa un correo válido (debe incluir "@").'), true);
      form.email.focus();
      return;
    }

    const wordCount = message.split(/\s+/).filter(Boolean).length;
    if (wordCount < 15) {
      showFeedback(t("form.shortMessage", "Tu mensaje debe tener al menos 15 palabras."), true);
      form.mensaje.focus();
      return;
    }

    const original = btn.textContent;
    btn.textContent = t("form.sending", "Enviando…");
    btn.disabled = true;

    try {
      const response = await fetch("https://formsubmit.co/ajax/studio@wdnes.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Network error");

      showFeedback(t("form.sent", "Mensaje enviado"), false);
      form.reset();
    } catch {
      showFeedback(t("form.error", "No se pudo enviar el mensaje. Inténtalo de nuevo."), true);
    } finally {
      btn.textContent = original;
      btn.disabled = false;
    }

  });

})();


