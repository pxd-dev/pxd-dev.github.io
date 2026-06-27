(function (global) {
  "use strict";

  const PROJECTS = [
    {
      id: "kamen-rider-zeztz",
      title: "Kamen Rider Zeztz",
      image: "assets/resources/PANELES/KAMEN_RIDER_-_POSTER.png",
      type: { en: "Tokusatsu · Series", es: "Tokusatsu · Serie", pt: "Tokusatsu · Série" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Full Spanish localization for this tokusatsu series: script adaptation, casting, theatrical recording and final mix for Latin American distribution.",
        es: "Localización completa al español de esta serie tokusatsu: adaptación de guion, casting, grabación teatral y mezcla final para distribución en Latinoamérica.",
        pt: "Localização completa em espanhol desta série tokusatsu: adaptação de roteiro, casting, gravação teatral e mixagem final para distribuição na América Latina.",
      },
      watchUrl: "https://youtu.be/slwa8N-LZpY?si=hJemq9V5adiXMEUf",
      watchLabel: { en: "Watch with YouTube", es: "Ver con YouTube", pt: "Assistir com YouTube" },
      // Ficha técnica — Doblaje Wiki (editar por proyecto)
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Kamen_Rider_Zeztz",
    },
    // === PROYECTOS OCULTOS TEMPORALMENTE (no borrar, restaurar en el futuro) ===
    // {
    //   id: "pursuit-of-jade",
    //   title: "Pursuit Of Jade",
    //   image: "assets/resources/PANELES/PURSUIT_OF_JADE_-_POSTER.png",
    //   type: { en: "Drama · Series", es: "Drama · Serie", pt: "Drama · Série" },
    //   language: {
    //     en: "Spanish dub (LATAM)",
    //     es: "Doblaje al español (LATAM)",
    //     pt: "Dublagem em espanhol (LATAM)",
    //   },
    //   desc: {
    //     en: "Period drama localized for Spanish-speaking audiences with cultural adaptation, voice direction and broadcast-ready audio delivery.",
    //     es: "Drama de época localizado para audiencias hispanohablantes con adaptación cultural, dirección de voces y entrega de audio listo para emisión.",
    //     pt: "Drama de época localizado para o público hispânico com adaptação cultural, direção de voz e entrega de áudio pronta para exibição.",
    //   },
    //   watchUrl: "https://www.iq.com/album/en-busca-del-jade-versi%C3%B3n-en-espa%C3%B1ol-2026-o45kifux11?lang=es_mx",
    //   watchLabel: { en: "Watch on iQIYI", es: "Ver en iQIYI", pt: "Assistir no iQIYI" },
    //   wikiUrl: "https://doblaje.fandom.com/es/wiki/En_busca_del_Jade",
    // },
    // {
    //   id: "how-dare-you",
    //   title: "How Dare You!?",
    //   image: "assets/resources/PANELES/HOW_DARE_YOU_-_POSTER.png",
    //   type: { en: "Romance · Short series", es: "Romance · Miniserie", pt: "Romance · Minissérie" },
    //   language: {
    //     en: "Spanish dub (LATAM)",
    //     es: "Doblaje al español (LATAM)",
    //     pt: "Dublagem em espanhol (LATAM)",
    //   },
    //   desc: {
    //     en: "Fast-paced romantic short-form series dubbed for mobile and streaming platforms with natural dialogue and expressive performances.",
    //     es: "Miniserie romántica de ritmo ágil doblada para plataformas móviles y streaming, con diálogos naturales y actuaciones expresivas.",
    //     pt: "Minissérie romântica de ritmo ágil dublada para plataformas móveis e streaming, com diálogos naturais e performances expressivas.",
    //   },
    //   watchUrl: "https://www.iq.com/album/%C2%BF%C2%A1c%C3%B3mo-te-atreves-versi%C3%B3n-en-espa%C3%B1ol-2026-2ec8kt66xg9?lang=es_mx",
    //   watchLabel: { en: "Watch on iQIYI", es: "Ver en iQIYI", pt: "Assistir no iQIYI" },
    //   wikiUrl: "https://doblaje.fandom.com/es/wiki/%C2%BF%C2%A1C%C3%B3mo_te_atreves!%3F",
    // },
    // {
    //   id: "fate-chooses-you",
    //   title: "Fate Chooses You",
    //   image: "assets/resources/PANELES/FATE_CHOOSES_YOU_-_POSTER.png",
    //   type: { en: "Fantasy · Series", es: "Fantasía · Serie", pt: "Fantasia · Série" },
    //   language: {
    //     en: "Spanish dub (LATAM)",
    //     es: "Doblaje al español (LATAM)",
    //     pt: "Dublagem em espanhol (LATAM)",
    //   },
    //   desc: {
    //     en: "Fantasy series with complete Spanish dubbing: translation, lip-sync adaptation, casting and post-production at international standards.",
    //     es: "Serie de fantasía con doblaje completo al español: traducción, adaptación de lip-sync, casting y postproducción a estándares internacionales.",
    //     pt: "Série de fantasia com dublagem completa em espanhol: tradução, adaptação de lip-sync, casting e pós-produção em padrões internacionais.",
    //   },
    //   watchUrl: "https://www.iq.com/album/el-destino-te-elige-2026-sqb5dpk0vt?lang=es_mx",
    //   watchLabel: { en: "Watch on iQIYI", es: "Ver en iQIYI", pt: "Assistir no iQIYI" },
    //   wikiUrl: "https://doblaje.fandom.com/es/wiki/El_destino_te_elige",
    // },
    // === FIN PROYECTOS OCULTOS ===
    {
      id: "reunion-abyss",
      title: "Reunion The Great In The Abyss",
      image: "assets/resources/PANELES/REUNION_THE_GREAT_IN_THE_ABYSS_-_POSTER.png",
      type: { en: "Fantasy · Series", es: "Fantasía · Serie", pt: "Fantasia · Série" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Epic fantasy series localized into Spanish with full casting, recording and mix for Latin American audiences.",
        es: "Serie de fantasía épica localizada al español con casting completo, grabación y mezcla para audiencias latinoamericanas.",
        pt: "Série de fantasia épica localizada em espanhol com casting completo, gravação e mixagem para o público latino-americano.",
      },
      watchUrl: "https://www.youku.tv/?lang=es_ES",
      watchLabel: { en: "Watch on YOUKU", es: "Ver en YOUKU", pt: "Assistir no YOUKU" },
      wikiUrl: "", // Ficha técnica — pegar enlace Doblaje Wiki
    },
    {
      id: "star-abyss",
      title: "Star Abyss",
      image: "assets/resources/PANELES/STAR_ABYSS_-_POSTER.png",
      type: { en: "Sci-fi · Animation", es: "Ciencia ficción · Animación", pt: "Ficção científica · Animação" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Sci-fi animation with immersive Spanish dubbing, surround-ready mixes and careful lip-sync for action-heavy sequences.",
        es: "Animación de ciencia ficción con doblaje inmersivo al español, mezclas preparadas para surround y lip-sync cuidadoso en secuencias de acción.",
        pt: "Animação de ficção científica com dublagem imersiva em espanhol, mixes preparados para surround e lip-sync cuidadoso em sequências de ação.",
      },
      watchUrl: "", // Mirar en YOUKU — pegar enlace
      watchLabel: { en: "Watch on YOUKU", es: "Ver en YOUKU", pt: "Assistir no YOUKU" },
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Abismo_estelar",
    },
    {
      id: "epithet-erased",
      title: "Epithet Erased",
      image: "assets/resources/PANELES/EPITHET_ERASED_-_POSTER.png",
      type: { en: "Animation · Web series", es: "Animación · Serie web", pt: "Animação · Série web" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Independent animated series localized for Latin America. Pixel Dubbing handled casting, recording and mix for the Spanish release.",
        es: "Serie animada independiente localizada para Latinoamérica. Pixel Dubbing realizó casting, grabación y mezcla para el lanzamiento en español.",
        pt: "Série animada independente localizada para a América Latina. A Pixel Dubbing fez casting, gravação e mixagem para o lançamento em espanhol.",
      },
      watchUrl: "https://youtu.be/eG3eusyMCtw?si=ziCEhtPnlA6w3mZw",
      watchLabel: { en: "Watch with YouTube", es: "Ver con YouTube", pt: "Assistir com YouTube" },
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Epithet_Erased",
    },
    {
      id: "monkey-king",
      title: "Monkey King",
      image: "assets/resources/PANELES/MONKEY_KING_-_POSTER.png",
      type: { en: "Animation · Series", es: "Animación · Serie", pt: "Animação · Série" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Animated adventure based on the classic legend, localized into Spanish with expressive casting and full audio post-production.",
        es: "Aventura animada basada en la leyenda clásica, localizada al español con casting expresivo y postproducción de audio completa.",
        pt: "Aventura animada baseada na lenda clássica, localizada em espanhol com casting expressivo e pós-produção de áudio completa.",
      },
      watchUrl: "", // Mirar en YOUKU — pegar enlace
      watchLabel: { en: "Watch on YOUKU", es: "Ver en YOUKU", pt: "Assistir no YOUKU" },
      wikiUrl: "", // Ficha técnica — pegar enlace Doblaje Wiki
    },
    {
      id: "nuganenai-slime",
      title: "Nuganenai Slime",
      image: "assets/resources/PANELES/NUGANENAI_SLIME_-_POSTER.png",
      type: { en: "Anime · Comedy", es: "Anime · Comedia", pt: "Anime · Comédia" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Anime comedy dubbed with energetic performances and precise adaptation to preserve humor and timing for Spanish-speaking fans.",
        es: "Anime de comedia doblado con actuaciones enérgicas y adaptación precisa para conservar el humor y el timing del público hispanohablante.",
        pt: "Anime de comédia dublado com performances enérgicas e adaptação precisa para preservar o humor e o timing do público hispânico.",
      },
      watchUrl: "https://www.youtube.com/@WeaselHive/videos",
      watchLabel: { en: "Watch with YouTube", es: "Ver con YouTube", pt: "Assistir com YouTube" },
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Nuganenai_Slime",
    },
    {
      id: "crime-list",
      title: "Crime List",
      image: "assets/resources/PANELES/CRIME_LIST_-_POSTER.png",
      type: { en: "Crime · Series", es: "Crimen · Serie", pt: "Crime · Série" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Crime thriller localized into Spanish with tense performances, cultural adaptation and broadcast-ready audio.",
        es: "Thriller policial localizado al español con actuaciones intensas, adaptación cultural y audio listo para emisión.",
        pt: "Thriller policial localizado em espanhol com performances intensas, adaptação cultural e áudio pronto para exibição.",
      },
      watchUrl: "https://www.youku.tv/?lang=es_ES",
      watchLabel: { en: "Watch on YOUKU", es: "Ver en YOUKU", pt: "Assistir no YOUKU" },
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Crime_List",
    },
    {
      id: "mad-diaries",
      title: "Mad Diaries",
      image: "assets/resources/PANELES/MAD_DIARIES_-_POSTER.png",
      type: { en: "Drama · Series", es: "Drama · Serie", pt: "Drama · Série" },
      language: {
        en: "Spanish dub (LATAM)",
        es: "Doblaje al español (LATAM)",
        pt: "Dublagem em espanhol (LATAM)",
      },
      desc: {
        en: "Drama series localized into Spanish with nuanced casting, cultural adaptation and full audio post-production.",
        es: "Serie dramática localizada al español con casting matizado, adaptación cultural y postproducción de audio completa.",
        pt: "Série dramática localizada em espanhol com casting nuances, adaptação cultural e pós-produção de áudio completa.",
      },
      watchUrl: "https://www.youtube.com/watch?v=zTH98VZYxaU",
      watchLabel: { en: "Watch with YouTube", es: "Ver con YouTube", pt: "Assistir com YouTube" },
      wikiUrl: "https://doblaje.fandom.com/es/wiki/Mad_Diaries",
    },
  ];

  let activeProjectId = null;
  let modalElements = null;
  let carouselPaused = false;
  let carouselRafId = null;

  function lang() {
    return global.PixelI18n?.getLang() || "en";
  }

  function pick(field) {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[lang()] || field.en || "";
  }

  function createProjectCard(project) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "project-card";
    card.dataset.projectId = project.id;
    card.setAttribute("aria-label", project.title);

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="project-overlay">
        <span class="project-overlay__corner project-overlay__corner--tl" aria-hidden="true"></span>
        <span class="project-overlay__corner project-overlay__corner--br" aria-hidden="true"></span>
        <div class="project-overlay__content">
          <h3>${project.title}</h3>
          <span class="project-overlay-hint" data-i18n="projects.click"></span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openModal(project.id));
    return card;
  }

  function buildCarousel() {
    const track = document.getElementById("projects-track");
    if (!track) return;

    track.innerHTML = "";
    const sets = [PROJECTS, PROJECTS];
    sets.forEach((list) => {
      list.forEach((project) => track.appendChild(createProjectCard(project)));
    });

    const hint = track.querySelector("[data-i18n]");
    if (hint && global.PixelI18n) {
      hint.textContent = global.PixelI18n.t("projects.click");
      track.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = global.PixelI18n.t("projects.click");
      });
    }
  }

  function getProject(id) {
    return PROJECTS.find((p) => p.id === id);
  }

  function fillModal(project) {
    if (!modalElements || !project) return;

    const { poster, title, type, language, desc, watch, wiki, dialog } = modalElements;

    poster.src = project.image;
    poster.alt = project.title;
    title.textContent = project.title;
    type.textContent = pick(project.type);
    language.textContent = pick(project.language);
    desc.textContent = pick(project.desc);

    watch.textContent = pick(project.watchLabel);
    if (project.watchUrl) {
      watch.href = project.watchUrl;
      watch.classList.remove("is-disabled");
      watch.removeAttribute("aria-disabled");
      watch.removeAttribute("tabindex");
    } else {
      watch.href = "#";
      watch.classList.add("is-disabled");
      watch.setAttribute("aria-disabled", "true");
      watch.setAttribute("tabindex", "-1");
    }

    wiki.textContent = global.PixelI18n?.t("projects.modal.more") || "Ficha técnica";
    wiki.hidden = false;

    if (project.wikiUrl) {
      wiki.href = project.wikiUrl;
      wiki.classList.remove("is-disabled");
      wiki.removeAttribute("aria-disabled");
      wiki.removeAttribute("tabindex");
    } else {
      wiki.href = "#";
      wiki.classList.add("is-disabled");
      wiki.setAttribute("aria-disabled", "true");
      wiki.setAttribute("tabindex", "-1");
    }

    dialog.setAttribute("aria-labelledby", "project-modal-title");
  }

  function openModal(id) {
    const project = getProject(id);
    if (!project || !modalElements) return;

    activeProjectId = id;
    fillModal(project);

    modalElements.root.hidden = false;
    modalElements.root.classList.add("is-open");
    document.body.classList.add("modal-open");

    carouselPaused = true;

    requestAnimationFrame(() => {
      modalElements.close.focus();
    });
  }

  function closeModal() {
    if (!modalElements) return;

    modalElements.root.classList.remove("is-open");
    modalElements.root.hidden = true;
    document.body.classList.remove("modal-open");
    activeProjectId = null;

    carouselPaused = false;
  }

  function initCarousel() {
    const viewport = document.getElementById("projects-viewport");
    const track = document.getElementById("projects-track");
    const prevBtn = document.querySelector(".projects-arrow--prev");
    const nextBtn = document.querySelector(".projects-arrow--next");
    if (!viewport || !track) return;

    const wrap = viewport.closest(".projects-carousel-wrap");
    let offset = 0;
    const speed = 0.55;

    function getHalfWidth() {
      return track.scrollWidth / 2;
    }

    function getScrollStep() {
      const card = track.querySelector(".project-card");
      if (!card) return 240;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      return card.offsetWidth + gap;
    }

    function normalizeOffset() {
      const half = getHalfWidth();
      if (half <= 0) return;
      while (offset <= -half) offset += half;
      while (offset > 0) offset -= half;
    }

    function applyTransform() {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    function tick() {
      if (!carouselPaused && !modalElements?.root?.classList.contains("is-open")) {
        offset -= speed;
        normalizeOffset();
        applyTransform();
      }
      carouselRafId = requestAnimationFrame(tick);
    }

    function nudge(direction) {
      carouselPaused = true;
      offset += direction * getScrollStep();
      normalizeOffset();
      applyTransform();
      window.setTimeout(() => {
        if (!wrap?.matches(":hover")) resumeCarousel();
      }, 500);
    }

    prevBtn?.addEventListener("click", () => nudge(1));
    nextBtn?.addEventListener("click", () => nudge(-1));

    function pauseCarousel() {
      carouselPaused = true;
    }

    function resumeCarousel() {
      if (!modalElements?.root?.classList.contains("is-open")) {
        carouselPaused = false;
      }
    }

    wrap?.addEventListener("mouseenter", pauseCarousel);
    wrap?.addEventListener("mouseleave", resumeCarousel);

    applyTransform();
    carouselRafId = requestAnimationFrame(tick);
  }

  function initModal() {
    const root = document.getElementById("project-modal");
    if (!root) return;

    modalElements = {
      root,
      dialog: root.querySelector(".project-modal__dialog"),
      backdrop: root.querySelector(".project-modal__backdrop"),
      close: root.querySelector(".project-modal__close"),
      poster: root.querySelector(".project-modal__poster"),
      title: root.querySelector(".project-modal__title"),
      type: root.querySelector(".project-modal__type"),
      language: root.querySelector(".project-modal__language"),
      desc: root.querySelector(".project-modal__desc"),
      watch: root.querySelector(".project-modal__watch"),
      wiki: root.querySelector(".project-modal__wiki"),
      contact: root.querySelector(".project-modal__contact"),
    };

    modalElements.close.addEventListener("click", closeModal);
    modalElements.backdrop.addEventListener("click", closeModal);
    modalElements.contact.addEventListener("click", closeModal);
    modalElements.wiki.addEventListener("click", (e) => {
      if (modalElements.wiki.classList.contains("is-disabled")) {
        e.preventDefault();
      }
    });
    modalElements.watch.addEventListener("click", (e) => {
      if (modalElements.watch.classList.contains("is-disabled")) {
        e.preventDefault();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalElements.root.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  function initProjects() {
    buildCarousel();
    initCarousel();
    initModal();

    document.addEventListener("languagechange", () => {
      document.querySelectorAll(".project-overlay-hint[data-i18n]").forEach((el) => {
        el.textContent = global.PixelI18n.t("projects.click");
      });
      if (activeProjectId) fillModal(getProject(activeProjectId));
    });
  }

  global.PixelProjects = { PROJECTS, initProjects, openModal, closeModal };
})(window);
