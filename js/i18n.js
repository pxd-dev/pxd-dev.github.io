(function (global) {
  "use strict";

  const STORAGE_KEY = "pixel-lang";
  /** Primary site language — Spanish and Portuguese are secondary. */
  const DEFAULT_LANG = "en";
  const SECONDARY_LANGS = ["es", "pt"];

  const translations = {
    en: {
      "meta.title": "PixelDubbing | Dubbing & Audiovisual Localization",
      "meta.description":
        "PixelDubbing — professional dubbing, translation, adaptation and audio post-production for Latin America and global markets.",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.samples": "Samples",
      "nav.reviews": "Reviews",
      "nav.clients": "Clients",
      "nav.contact": "Contact Us",
      "nav.language": "Language",
      "lang.en": "English",
      "lang.es": "Spanish",
      "lang.pt": "Portuguese",
      "theme.label": "Toggle light / dark mode",
      "theme.light": "Light mode",
      "theme.dark": "Dark mode",
      "moment.eyebrow": "PixelDubbing",
      "moment.title":
        'Materializing<br /><span class="moment-accent">your ideas</span>',
      "moment.lead":
        "At PixelDubbing we transform productions from around the world into authentic experiences for Latin America, with voices, emotions and adaptations that connect naturally with every audience. Because the best stories are not only understood — they are felt.",
      "moment.hint": "Every click is a new story waiting to be told.",
      "moment.cta1": "Explore services",
      "moment.cta2": "Contact us",
      "stats.projects": "Localized projects",
      "stats.years": "Years of experience",
      "stats.talents": "Voice talents",
      "about.title": "About Us",
      "about.p1":
        "We are <strong>Pixel Dubbing</strong>, a dubbing studio based in Lima, Peru, dedicated to content localization across Latin America. We preserve the quality of the original material while offering competitive budgets for the global market.",
      "about.p2":
        "We work with a large roster of recognized voice actors and highly qualified technical staff, delivering projects in Spanish and Portuguese at the level of major international localization studios.",
      "about.imgAlt": "Professional recording studio",
      "services.title": "Services",
      "services.lead":
        "End-to-end audiovisual localization solutions, from script to final master.",
      "services.s1.title": "Translation & Adaptation",
      "services.s1.desc":
        "We care about respecting the essence of your content, ensuring it meets the guidelines and quality standards every project deserves.",
      "services.s2.title": "Casting & Recording",
      "services.s2.desc":
        "We work with established actors, singers and new talent to bring variety and color to voice selection. We ensure theatrical sync and high-level performances that captivate your target audience and ensure strong market placement.",
      "services.s3.title": "Post-production & Mixing",
      "services.s3.desc":
        "Audio post-production · ADR · Foley · Sound design · Stereo and surround mixes (2.0, 5.1 and 7.1) · Dolby Atmos® · THX®. We create immersive soundscapes that enhance every scene.",
      "services.s4.title": "Subtitling",
      "services.s4.desc":
        "Subtitles for cinema, streaming and social, with precise timing and platform-specific styles.",
      "services.s5.title": "Voice Over",
      "services.s5.desc":
        "Narration for documentaries, commercials, video games and corporate content.",
      "services.s6.title": "Quality Control",
      "services.s6.desc":
        "Linguistic, technical and lip-sync review before final delivery to the client.",
      "projects.title": "Projects",
      "projects.click": "Click here to know more about",
      "projects.prev": "Previous projects",
      "projects.next": "Next projects",
      "projects.modal.close": "Close",
      "projects.modal.eyebrow": "Project details",
      "projects.modal.type": "Type",
      "projects.modal.language": "Localization",
      "projects.modal.contact": "Contact us",
      "projects.modal.more": "Technical sheet",
      "samples.title": "Samples",
      "samples.lead":
        "Professional localization for every screen — from vertical Reels to streaming and TV productions.",
      "samples.vTag": "9:16 · Vertical series",
      "samples.vTitle": "Dubbing for Vertical Content",
      "samples.vDesc":
        "We adapt and dub content for high-consumption mobile platforms such as TikTok, Instagram Reels, YouTube Shorts and Facebook Reels. Our team handles translation, cultural adaptation, voice casting and professional dubbing to connect with international audiences naturally and authentically.",
      "samples.hTag": "16:9 · Streaming",
      "samples.hTitle": "Dubbing for Streaming",
      "samples.hDesc":
        "We offer dubbing and localization for series, films, animation, documentaries, corporate content and streaming platforms. We guarantee studio quality, voice direction and professional adaptation for every market.",
      "samples.cTag": "Creators",
      "samples.cTitle": "Content Creator Localization",
      "samples.cDesc":
        "We help YouTubers, streamers and independent creators reach Latin American audiences with natural dubbing, cultural adaptation and broadcast-ready audio — without losing their unique voice.",
      "samples.cImgAlt": "Professional recording studio",
      "samples.play": "Play",
      "samples.playFull": "Play sample",
      "samples.langLabel": "Language",
      "samples.errorTitle": "Could not play",
      "samples.errorMsg":
        "Use <code>iniciar-servidor.bat</code> and open <code>http://localhost:5500</code>",
      "samples.vFeatures": [
        "9:16 format",
        "Professional human dubbing",
        "Translation & cultural adaptation",
        "Lip-sync",
        "Ready-to-publish delivery",
        "Multiple languages available",
      ],
      "samples.hFeatures": [
        "16:9 format",
        "Series & films",
        "Animation",
        "Documentaries",
        "Corporate content",
        "Linguistic quality control",
      ],
      "samples.cFeatures": [
        "YouTube & streaming",
        "Animation & web series",
        "Podcasts & narration",
        "Fast turnaround",
        "Creator-friendly budgets",
        "Spanish & Portuguese",
      ],
      "reviews.title": "Reviews",
      "reviews.t1":
        "It was very comfortable working with PixelDubbing, and the final product was absolutely amazing. From casting to localization, the entire project was completed in less than a month, always on time or ahead of schedule. I would recommend them to anyone who wants to bring their series to the Spanish-speaking world.",
      "reviews.t1.cite": "Brendan Blaber (JelloApocalypse)",
      "reviews.t1.role": "Creator of Epithet Erased",
      "reviews.t2":
        "The voice quality and attention to detail in adaptation exceeded our expectations. A professional team that understands the needs of independent creators and major distributors alike.",
      "reviews.t2.cite": "International production company",
      "reviews.t2.role": "Streaming — Latin America",
      "reviews.prev": "Previous review",
      "reviews.next": "Next review",
      "clients.title": "Clients",
      "clients.prev": "Previous clients",
      "clients.next": "Next clients",
      "contact.title": "Contact Us",
      "contact.emailLabel": "Email:",
      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "form.submit": "Send message",
      "form.sent": "Message sent",
      "form.sending": "Sending…",
      "form.invalidEmail": "Please enter a valid email address (it must include \"@\").",
      "form.shortMessage": "Your message must be at least 15 words long.",
      "form.error": "Could not send the message. Please try again or email us directly.",
      "footer.links": "Links",
      "footer.copy": "© 2026 PixelDubbing.",
      "logo.aria": "PixelDubbing home",
      "menu.open": "Open menu",
    },
    es: {
      "meta.title": "PixelDubbing | Doblaje y Localización Audiovisual",
      "meta.description":
        "PixelDubbing — estudio profesional de doblaje, traducción, adaptación y post-producción de audio para Latinoamérica.",
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.projects": "Proyectos",
      "nav.samples": "Muestras",
      "nav.reviews": "Reseñas",
      "nav.clients": "Clientes",
      "nav.contact": "Contáctanos",
      "nav.language": "Idioma",
      "lang.en": "Inglés",
      "lang.es": "Español",
      "lang.pt": "Portugués",
      "theme.label": "Cambiar modo claro / oscuro",
      "theme.light": "Modo claro",
      "theme.dark": "Modo oscuro",
      "moment.eyebrow": "PixelDubbing",
      "moment.title":
        'Materializando<br /><span class="moment-accent">tus ideas</span>',
      "moment.lead":
        "En PixelDubbing transformamos producciones de todo el mundo en experiencias auténticas para Latinoamérica, con voces, emociones y adaptaciones que conectan de forma natural con cada audiencia. Porque las mejores historias no solo se entienden, se sienten.",
      "moment.hint": "Cada clic es una nueva historia esperando ser contada.",
      "moment.cta1": "Explorar servicios",
      "moment.cta2": "Contáctanos",
      "stats.projects": "Proyectos localizados",
      "stats.years": "Años de experiencia",
      "stats.talents": "Talentos de voz",
      "about.title": "Sobre nosotros",
      "about.p1":
        "Somos <strong>Pixel Dubbing</strong>, un estudio de doblaje originado en Lima, Perú, con el propósito de ofrecer localización de contenidos para toda Latinoamérica. Mantenemos la calidad del material original y presupuestos competitivos acordes al mercado global.",
      "about.p2":
        "Contamos con un amplio plantel de actores y actrices reconocidos dentro del gremio, personal técnico altamente calificado y capacidad para proyectos en español y portugués — al nivel de los grandes estudios internacionales de localización.",
      "about.imgAlt": "Estudio de grabación profesional",
      "services.title": "Servicios",
      "services.lead":
        "Soluciones integrales de localización audiovisual, desde el guion hasta el master final.",
      "services.s1.title": "Traducción y adaptación",
      "services.s1.desc":
        "Nos preocupamos por respetar la esencia del contenido a trabajar asegurándonos que cumpla con las pautas y estándares de calidad que cada proyecto merece.",
      "services.s2.title": "Casting y grabación",
      "services.s2.desc":
        "Contamos con el prestigio de actores establecidos, cantantes y nuevos talentos para darle mayor variedad y color a la selección de voces. Aseguramos sincronización theatrical y alto nivel actoral que podrá cautivar al público dirigido garantizando una fácil colocación en el mercado.",
      "services.s3.title": "Post-producción y mezcla",
      "services.s3.desc":
        "Postproducción de audio · ADR · Foley · Diseño sonoro · Mezclas estéreo y surround (2.0, 5.1 y 7.1) · Dolby Atmos® · THX®. Creamos entornos sonoros inmersivos que potencian cada escena.",
      "services.s4.title": "Subtitulado",
      "services.s4.desc":
        "Subtítulos para cine, streaming y redes, con timing preciso y estilos adaptados a cada plataforma.",
      "services.s5.title": "Voice over",
      "services.s5.desc":
        "Narración y locución para documentales, comerciales, videojuegos y contenido corporativo.",
      "services.s6.title": "Control de calidad",
      "services.s6.desc":
        "Revisión lingüística, técnica y de lip-sync antes de la entrega final al cliente.",
      "projects.title": "Proyectos",
      "projects.click": "Haz clic aquí para saber más sobre",
      "projects.prev": "Proyectos anteriores",
      "projects.next": "Proyectos siguientes",
      "projects.modal.close": "Cerrar",
      "projects.modal.eyebrow": "Detalles del proyecto",
      "projects.modal.type": "Tipo",
      "projects.modal.language": "Localización",
      "projects.modal.contact": "Contáctanos",
      "projects.modal.more": "Ficha técnica",
      "samples.title": "Muestras",
      "samples.lead":
        "Localización profesional para cada pantalla — desde Reels verticales hasta producciones para streaming y TV.",
      "samples.vTag": "9:16 · Series verticales",
      "samples.vTitle": "Doblaje para Contenido Vertical",
      "samples.vDesc":
        "Adaptamos y doblamos contenido para plataformas móviles de alto consumo como TikTok, Instagram Reels, YouTube Shorts y Facebook Reels. Nuestro equipo realiza traducción, adaptación cultural, casting de voces y doblaje profesional para conectar con audiencias internacionales de manera natural y auténtica.",
      "samples.hTag": "16:9 · Streaming",
      "samples.hTitle": "Doblaje para streaming",
      "samples.hDesc":
        "Ofrecemos servicios de doblaje y localización para series, películas, animación, documentales, contenido corporativo y plataformas de streaming. Garantizamos calidad de estudio, dirección de actores y adaptación profesional para cada mercado.",
      "samples.cTag": "Creadores",
      "samples.cTitle": "Localización de Creadores de Contenido",
      "samples.cDesc":
        "Acompañamos a YouTubers, streamers y creadores independientes a llegar a audiencias latinoamericanas con doblaje natural, adaptación cultural y audio listo para publicar — sin perder su voz única.",
      "samples.cImgAlt": "Estudio de grabación profesional",
      "samples.play": "Reproducir",
      "samples.playFull": "Reproducir muestra",
      "samples.langLabel": "Idioma",
      "samples.errorTitle": "No se pudo reproducir",
      "samples.errorMsg":
        "Usa <code>iniciar-servidor.bat</code> y abre <code>http://localhost:5500</code>",
      "samples.vFeatures": [
        "Formato 9:16",
        "Doblaje humano profesional",
        "Traducción y adaptación cultural",
        "Sincronización labial",
        "Entrega lista para publicación",
        "Múltiples idiomas disponibles",
      ],
      "samples.hFeatures": [
        "Formato 16:9",
        "Series y películas",
        "Animación",
        "Documentales",
        "Contenido corporativo",
        "Control de calidad lingüístico",
      ],
      "samples.cFeatures": [
        "YouTube y streaming",
        "Animación y series web",
        "Podcasts y narración",
        "Entrega ágil",
        "Presupuestos para creadores",
        "Español y portugués",
      ],
      "reviews.title": "Reseñas",
      "reviews.t1":
        "Fue muy cómodo trabajar con PixelDubbing, y el producto final fue totalmente asombroso. Desde el reparto hasta la localización, todo el proyecto se realizó en menos de un mes, siempre a tiempo o antes de lo previsto. Lo recomendaría a cualquiera que quiera llevar su serie al mundo hispanohablante.",
      "reviews.t1.cite": "Brendan Blaber (JelloApocalypse)",
      "reviews.t1.role": "Creador de Epithet Erased",
      "reviews.t2":
        "La calidad de las voces y la atención al detalle en la adaptación superaron nuestras expectativas. Un equipo profesional que entiende las necesidades de creadores independientes y grandes distribuidoras por igual.",
      "reviews.t2.cite": "Productora internacional",
      "reviews.t2.role": "Streaming — Latinoamérica",
      "reviews.prev": "Reseña anterior",
      "reviews.next": "Reseña siguiente",
      "clients.title": "Clientes",
      "clients.prev": "Clientes anteriores",
      "clients.next": "Siguientes clientes",
      "contact.title": "Contáctanos",
      "contact.emailLabel": "Correo electrónico:",
      "form.name": "Nombre",
      "form.email": "Email",
      "form.message": "Mensaje",
      "form.submit": "Enviar mensaje",
      "form.sent": "Mensaje enviado",
      "form.sending": "Enviando…",
      "form.invalidEmail": "Ingresa un correo válido (debe incluir \"@\").",
      "form.shortMessage": "Tu mensaje debe tener al menos 15 palabras.",
      "form.error": "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos directo.",
      "footer.links": "Enlaces",
      "footer.copy": "© 2026 PixelDubbing.",
      "logo.aria": "PixelDubbing inicio",
      "menu.open": "Abrir menú",
    },
    pt: {
      "meta.title": "PixelDubbing | Dublagem e Localização Audiovisual",
      "meta.description":
        "PixelDubbing — estúdio profissional de dublagem, tradução, adaptação e pós-produção de áudio para a América Latina.",
      "nav.home": "Início",
      "nav.services": "Serviços",
      "nav.projects": "Projetos",
      "nav.samples": "Amostras",
      "nav.reviews": "Avaliações",
      "nav.clients": "Clientes",
      "nav.contact": "Contato",
      "nav.language": "Idioma",
      "lang.en": "Inglês",
      "lang.es": "Espanhol",
      "lang.pt": "Português",
      "theme.label": "Alternar modo claro / escuro",
      "theme.light": "Modo claro",
      "theme.dark": "Modo escuro",
      "moment.eyebrow": "PixelDubbing",
      "moment.title":
        'Materializando<br /><span class="moment-accent">suas ideias</span>',
      "moment.lead":
        "Na PixelDubbing transformamos produções de todo o mundo em experiências autênticas para a América Latina, com vozes, emoções e adaptações que conectam naturalmente com cada audiência. Porque as melhores histórias não são apenas entendidas — são sentidas.",
      "moment.hint": "Cada clique é uma nova história esperando para ser contada.",
      "moment.cta1": "Explorar serviços",
      "moment.cta2": "Fale conosco",
      "stats.projects": "Projetos localizados",
      "stats.years": "Anos de experiência",
      "stats.talents": "Talentos de voz",
      "about.title": "Sobre nós",
      "about.p1":
        "Somos a <strong>Pixel Dubbing</strong>, um estúdio de dublagem com sede em Lima, Peru, dedicado à localização de conteúdo para toda a América Latina. Mantemos a qualidade do material original com orçamentos competitivos para o mercado global.",
      "about.p2":
        "Contamos com um amplo elenco de dubladores reconhecidos e equipe técnica altamente qualificada, com projetos em espanhol e português no nível dos grandes estúdios internacionais de localização.",
      "about.imgAlt": "Estúdio de gravação profissional",
      "services.title": "Serviços",
      "services.lead":
        "Soluções completas de localização audiovisual, do roteiro ao master final.",
      "services.s1.title": "Tradução e adaptação",
      "services.s1.desc":
        "Preocupamo-nos em respeitar a essência do conteúdo, garantindo que atenda às diretrizes e padrões de qualidade que cada projeto merece.",
      "services.s2.title": "Casting e gravação",
      "services.s2.desc":
        "Contamos com o prestígio de atores consagrados, cantores e novos talentos para dar maior variedade e cor à seleção de vozes. Garantimos sincronização teatral e alto nível de atuação para cativar o público-alvo e assegurar boa colocação no mercado.",
      "services.s3.title": "Pós-produção e mixagem",
      "services.s3.desc":
        "Pós-produção de áudio · ADR · Foley · Design sonoro · Mixagens estéreo e surround (2.0, 5.1 e 7.1) · Dolby Atmos® · THX®. Criamos ambientes sonoros imersivos que potencializam cada cena.",
      "services.s4.title": "Legendagem",
      "services.s4.desc":
        "Legendas para cinema, streaming e redes, com timing preciso e estilos adaptados a cada plataforma.",
      "services.s5.title": "Voice over",
      "services.s5.desc":
        "Narração para documentários, comerciais, jogos e conteúdo corporativo.",
      "services.s6.title": "Controle de qualidade",
      "services.s6.desc":
        "Revisão linguística, técnica e de lip-sync antes da entrega final ao cliente.",
      "projects.title": "Projetos",
      "projects.click": "Clique aqui para saber mais sobre",
      "projects.prev": "Projetos anteriores",
      "projects.next": "Próximos projetos",
      "projects.modal.close": "Fechar",
      "projects.modal.eyebrow": "Detalhes do projeto",
      "projects.modal.type": "Tipo",
      "projects.modal.language": "Localização",
      "projects.modal.contact": "Contate-nos",
      "projects.modal.more": "Ficha técnica",
      "samples.title": "Amostras",
      "samples.lead":
        "Localização profissional para cada tela — de Reels verticais a produções para streaming e TV.",
      "samples.vTag": "9:16 · Séries verticais",
      "samples.vTitle": "Dublagem para Conteúdo Vertical",
      "samples.vDesc":
        "Adaptamos e dublamos conteúdo para plataformas móveis de alto consumo como TikTok, Instagram Reels, YouTube Shorts e Facebook Reels. Nossa equipe realiza tradução, adaptação cultural, casting de vozes e dublagem profissional para conectar com audiências internacionais de forma natural e autêntica.",
      "samples.hTag": "16:9 · Streaming",
      "samples.hTitle": "Dublagem para streaming",
      "samples.hDesc":
        "Oferecemos dublagem e localização para séries, filmes, animação, documentários, conteúdo corporativo e plataformas de streaming. Garantimos qualidade de estúdio, direção de atores e adaptação profissional para cada mercado.",
      "samples.cTag": "Criadores",
      "samples.cTitle": "Localização para Criadores de Conteúdo",
      "samples.cDesc":
        "Ajudamos YouTubers, streamers e criadores independentes a alcançar o público latino-americano com dublagem natural, adaptação cultural e áudio pronto para publicação — sem perder sua voz única.",
      "samples.cImgAlt": "Estúdio de gravação profissional",
      "samples.play": "Reproduzir",
      "samples.playFull": "Reproduzir amostra",
      "samples.langLabel": "Idioma",
      "samples.errorTitle": "Não foi possível reproduzir",
      "samples.errorMsg":
        "Use <code>iniciar-servidor.bat</code> e abra <code>http://localhost:5500</code>",
      "samples.vFeatures": [
        "Formato 9:16",
        "Dublagem humana profissional",
        "Tradução e adaptação cultural",
        "Sincronização labial",
        "Entrega pronta para publicação",
        "Vários idiomas disponíveis",
      ],
      "samples.hFeatures": [
        "Formato 16:9",
        "Séries e filmes",
        "Animação",
        "Documentários",
        "Conteúdo corporativo",
        "Controle de qualidade linguístico",
      ],
      "samples.cFeatures": [
        "YouTube e streaming",
        "Animação e séries web",
        "Podcasts e narração",
        "Entrega ágil",
        "Orçamentos para criadores",
        "Espanhol e português",
      ],
      "reviews.title": "Avaliações",
      "reviews.t1":
        "Foi muito confortável trabalhar com a PixelDubbing, e o produto final foi totalmente incrível. Do elenco à localização, todo o projeto foi concluído em menos de um mês, sempre no prazo ou antes. Recomendaria a qualquer pessoa que queira levar sua série ao mundo hispanofalante.",
      "reviews.t1.cite": "Brendan Blaber (JelloApocalypse)",
      "reviews.t1.role": "Criador de Epithet Erased",
      "reviews.t2":
        "A qualidade das vozes e a atenção aos detalhes na adaptação superaram nossas expectativas. Uma equipe profissional que entende as necessidades de criadores independentes e grandes distribuidoras.",
      "reviews.t2.cite": "Produtora internacional",
      "reviews.t2.role": "Streaming — América Latina",
      "reviews.prev": "Avaliação anterior",
      "reviews.next": "Próxima avaliação",
      "clients.title": "Clientes",
      "clients.prev": "Clientes anteriores",
      "clients.next": "Próximos clientes",
      "contact.title": "Contato",
      "contact.emailLabel": "E-mail:",
      "form.name": "Nome",
      "form.email": "E-mail",
      "form.message": "Mensagem",
      "form.submit": "Enviar mensagem",
      "form.sent": "Mensagem enviada",
      "form.sending": "Enviando…",
      "form.invalidEmail": "Insira um e-mail válido (deve conter \"@\").",
      "form.shortMessage": "Sua mensagem deve ter pelo menos 15 palavras.",
      "form.error": "Não foi possível enviar a mensagem. Tente novamente ou escreva diretamente.",
      "footer.links": "Links",
      "footer.copy": "© 2026 PixelDubbing.",
      "logo.aria": "PixelDubbing início",
      "menu.open": "Abrir menu",
    },
  };

  let currentLang = DEFAULT_LANG;

  function getLang() {
    return currentLang;
  }

  function t(key) {
    const pack = translations[currentLang] || translations.en;
    return pack[key] ?? translations.en[key] ?? key;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

    const pack = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (pack[key] !== undefined) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (pack[key] !== undefined) el.innerHTML = pack[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (pack[key] !== undefined) el.setAttribute("aria-label", pack[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (pack[key] !== undefined) el.alt = pack[key];
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const key = el.dataset.i18nList;
      const items = pack[key];
      if (Array.isArray(items)) {
        el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
      }
    });

    document.querySelectorAll(".sample-error-title").forEach((el) => {
      el.textContent = pack["samples.errorTitle"];
    });

    document.querySelectorAll(".sample-error-msg").forEach((el) => {
      el.innerHTML = pack["samples.errorMsg"];
    });

    const title = document.querySelector("title");
    const desc = document.querySelector('meta[name="description"]');
    if (title) title.textContent = pack["meta.title"];
    if (desc) desc.setAttribute("content", pack["meta.description"]);

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-current", active ? "true" : "false");
    });

    const langBtn = document.querySelector(".lang-btn");
    if (langBtn) {
      const labels = { en: "EN", es: "ES", pt: "PT" };
      langBtn.textContent = labels[lang] || "EN";
    }

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  function initLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang =
      saved && SECONDARY_LANGS.includes(saved) ? saved : DEFAULT_LANG;
    applyLanguage(lang);

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        applyLanguage(btn.dataset.lang);
      });
    });
  }

  global.PixelI18n = { initLanguage, applyLanguage, getLang, t, translations };
})(window);
