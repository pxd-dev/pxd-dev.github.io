# Pixel Dubbing — Sitio web profesional

Sitio corporativo de localización audiovisual (doblaje, traducción, adaptación) con la **paleta de colores de [Pixel Dubbing](https://www.pixeldubbing.com/spanish)** y estructura inspirada en estudios de nivel [Iyuno](https://iyuno.com/) y [VSI Group](https://www.vsi.tv/es/).

## Paleta de colores

| Uso | Color | Hex |
|-----|-------|-----|
| Barra de navegación | Azul real | `#2e58c7` / `#2b59c3` |
| Fondos profundos | Navy casi negro | `#050a18` |
| Secciones alternas | Navy | `#0a1025` / `#0d1529` |
| Texto | Blanco | `#ffffff` |
| Acentos / hover | Cian | `#3dd6ff` |

## Cómo ver el sitio

1. Abre `index.html` en tu navegador (doble clic o arrastra el archivo).
2. O usa la extensión **Live Server** en VS Code/Cursor.

## Estructura

```
PIXELDUBBING_WEBSITE/
├── index.html      # Página principal (todas las secciones)
├── css/styles.css  # Estilos y variables CSS
├── js/main.js      # Carrusel, menú móvil, contadores
└── website-plan.md # Plan para migrar a Next.js
```

## Personalizar

- **Textos y proyectos:** edita `index.html`.
- **Colores:** cambia las variables en `:root` al inicio de `css/styles.css`.
- **Imágenes:** sustituye las URLs de Unsplash por tus fotos en `/assets`.
- **Email:** `studio@wdnes.com`
- **Video hero:** `assets/videos/hero.mp4` (origen: `Downloads/62.mp4`)
- **Pósters:** `assets/projects/*.png`

## Próximo paso (Next.js)

Cuando tengas Node.js instalado, puedes migrar a Next.js + Tailwind siguiendo `website-plan.md` para animaciones con Framer Motion y formulario con backend.
