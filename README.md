# Webloo home page: "The Thread"

Entry for the Webloo New Home Page Challenge. Idea and notes: [idea.md](idea.md).

- Edit `src/index.html` (and `styles.css`, `chat.css`, `theme.css`, `main.js`, `chat.js`, `i18n.js`).
- Translations: `tools/translations_v2.py`, then `python3 tools/translations_v2.py`.
- New or changed photos: `python3 tools/optimize_images.py`.
- Build: `./build.sh` → writes the pages and `dist/`, the folder that is published.

Hosting: Cloudflare Pages serves `dist/` (no build step), protected by Cloudflare Access.
