# Webloo home page — "No hand-offs."

## The idea in one sentence
Other partners hand your project off; at Webloo one unbroken thread runs from your brand to your stadium, and the home page draws it.

## How it works
- One Iris-blue line (#4B5BDB) comes out of the loop in the Webloo logo and draws itself as you scroll.
- It runs through five real stations (Brand, Platform, Store, Media, Stadium), then through the four business units, through the work, and ends inside the only main button: **Start a project**.
- It never breaks. That is the point: four units, one team, no hand-offs.

## Why it answers the three judging questions
1. **Unique to Webloo?** Only an ecosystem that does brand, platform, sponsorship, retail and live events can promise "no hand-offs". The line also comes from our own logo (the "oo" loop), so another agency can't use it.
2. **Would a big client trust us?** The page is calm and strategic, like dept.global: the problem first, then real proof (FRMF, BAL, CAF, Haier, Miami Concours, duPont Registry…). There are no stock photos and no 3D shapes.
3. **Great to use, and can we build it?** It is plain HTML, CSS and about 200 lines of vanilla JS, with no framework and no WebGL. The line is a single SVG path built from anchor points in the layout, so it adapts to any page or CMS. It also respects reduced-motion settings.

## Page structure
1. Hero: "No hand-offs." with five real-work stations on the thread
2. The hand-off game: the BAL brief ("Sell out a brand-new basketball tournament in Rabat") is passed through five agencies and rewritten at every hand-off, like broken telephone, ending in "An event. Date TBC." (illustration). Flip to "With Webloo" and each row shows what Webloo really did for BAL (multilingual campaign, sales funnel, paid/influencers/TV/radio/billboards, group sales), ending in 91% sell-through in 12 weeks
3. Pull your thread: the visitor picks an outcome (official store, fill a stadium, win sponsors, launch a brand, grow online, launch a live venue). The ecosystem map draws their route through the units, shows the real project that proves it (FRMF, BAL, Haier, CAF, duPont Registry, Rabat Live Arena), and "Start a project" sends that thread in the email
4. The ecosystem: four units, with the line running across all of them
5. Selected work: BAL, CAF/AFCON, Haier, duPont Registry, Miami Concours, Rabat Live Arena, Retromobile, Catalyst Health Group, Wydad AC, FIFA U-17 Women's World Cup
6. Proof: numbers and a client logo strip
7. Quote from the founder: "We built Webloo to end the hand-off problem…"
8. CTA: "Where does your thread start?" The line ends in the button, which pulses
9. Careers: "Join one team, not five agencies." The four units as teams to join, and "Send your CV"
10. Footer with live clocks for Newport Beach, Miami, Rabat and Skopje, and links to each language

Everywhere:
- Every hero photo and work card opens a project pop-up (whole picture, what we did, result, units, "Start a project like this"), with arrows, keyboard and swipe to move between projects.
- Clicking a unit (Digital, Sports, Retail, Experiences) filters the work to that unit's projects.
- The header underlines the section you are in. Phones get a full-screen menu.

## Start a project = "Pull your thread" assistant
- Every "Start a project" opens a full-screen assistant with a circle reveal. From the header, the page first scrolls, the line races into the final button, and the assistant opens out of that button.
- The visitor briefs Webloo by chat (goal, who it's for, where, when, budget, agency or venture, a few lines about the project, name, email, company, phone, privacy consent): the same details as the webloo.com contact form, one question at a time. A "Your thread" panel fills in live, lighting the business units and the offices (Newport Beach, Miami, Rabat, Skopje) that would handle it. It ends with "Send my thread" (pre-filled email) or "Copy it".
- Booking a call: Webloo's own picker (next working days, times inside the office's hours, shown in the visitor's time zone with the office time beside it). The chosen slot goes into the email; if the visitor closes without sending, the assistant reminds them once. A link to the live HubSpot calendar stays available.
- The launcher: a small Iris circle with the Webloo loop and a live dot. When you reach a new section it slides open for ~3 seconds to show its message, then folds back (on phones it stays a circle). Drag it up (pull the thread) or click to open. Its message reads the page ("Skip the hand-offs", "Brief this in 60 seconds", "Want results like these?", "Talk to a human"...) and opens a brief or help to match. It hides when the final button is on screen.
- Prototype limits: answers are scripted (no AI yet) and the brief goes out through the visitor's email app (no server yet). Both can be connected to a real assistant and CRM later.
- In `chat.js`, the region-to-office mapping is my assumption (e.g. Europe → Skopje + Rabat).

## Light / dark mode and EN / FR / AR
- Sun/moon toggle in the menu bar. The first visit follows the visitor's system setting; the choice is remembered. Dark sections (hero, map, units, footer, assistant) look the same in both modes; the light sections turn deep ink in dark mode.
- EN · FR · ع switcher in the menu bar (one button that cycles on small phones). The first visit follows the browser language; the choice is remembered. Everything is translated: page, hand-off game, map, assistant, thread pill, page title and description.
- Arabic switches the whole page to right-to-left with IBM Plex Sans Arabic, and the thread runs down the right margin.
- Translated for meaning, not word for word. Hero: FR "Un seul fil." (one thread) / AR "بلا وسطاء." (no intermediaries). The Arabic avoids the word "thread" (خيط) everywhere and uses path (مسار) or one team (فريق واحد) instead. In Arabic, "hand-offs" is expressed as "intermediaries" (الوسطاء), which is how it is naturally said.
- Names stay as they are: Webloo, Newport Beach, Miami, Skopje, the unit names (Digital, Sports, Retail, Experiences) and foreign brands/clients. Moroccan names use their real Arabic form in Arabic (الرباط, الدار البيضاء, ملعب مولاي عبد الله, الوداد, الجامعة الملكية المغربية لكرة القدم).
- **All French and Arabic copy was drafted for the prototype and must be proofread by native speakers before submitting.** It lives in `tools/translations_v2.py` (run it, then `./build.sh`). Image descriptions are translated too.

## To verify before submitting
- FRMF "10B impressions a year" and BAL "91% sell-through in 12 weeks" come from the v2/v3 drafts. Confirm them.
- Most images now come from the WEBLOO WEBSITE asset pack (`brand-assets/`); the BAL, CAF trophy and FRMF laptop images still come from webloo.com. The card one-liners for Haier, duPont Registry, Retromobile, Catalyst, Rabat Live Arena, Wydad AC and FIFA U-17 are written from what the images show. Confirm each line, and confirm that FIFA U-17 Women's World Cup is work we can claim.
- The founder quote is the draft quote from v3 ("pending president's approval").
- The stats are 250+ people, 4 offices, 4 units and 0 hand-offs.

- Work-card "what we did" lines: BAL, CAF and Miami Concours come from the webloo.com case studies; Haier comes from the v2 draft; duPont Registry, Rabat Live Arena, Retromobile, Catalyst, Wydad and FIFA U-17 are my best reading of the asset folders. Confirm these.

- The three project pop-ups without a work card (FRMF platform, FRMF store, Moulay Abdellah) use short lines written for the prototype. Confirm them.
- Call picker: slots are 10:00, 11:00, 12:00, 14:00, 15:00, 16:00 in the office's time zone, Monday to Friday, from the next day. Adjust to the team's real hours in `chat.js` (HOURS).
- The share image for link previews is served from the GitHub Pages address (`OG_BASE` in `tools/build.py`); switch it to webloo.com when the page moves there.

## Files
- `i18n.js`: all translations. `theme.css`: dark mode, menu bar controls and Arabic layout. `chat.js` / `chat.css`: the assistant and the thread pill.
- `src/index.html`: edit this, then run `./build.sh` to rebuild `index.html` (it inlines the logo).
- `assets/img/`: web-sized images used by the page. `assets/unused/` holds older webloo.com images.
- `brand-assets/`: full copy of the original asset pack (2 GB, includes videos). Don't upload this folder when deploying.

## Speed, SEO and GEO (build: `./build.sh`)
- One real page per language: `/` (English), `/fr/`, `/ar/`, translated at build time so search engines and AI assistants read French and Arabic directly. Linked with hreflang (+ x-default) and plain footer links. Language buttons go to those pages and keep your place.
- Photos are served as resized WebP (480–2400 px) with srcset/sizes; the browser picks the smallest that looks sharp. Hero is preloaded. Logo files went from 415 KB / 128 KB to 17 KB / 38 KB.
- CSS and JS are bundled into `app.css` / `app.js` with content-hash cache busting; scripts are deferred; fonts load without blocking the first paint; English/French pages load only the 7 Arabic letters they show.
- Per page: title, description, canonical, Open Graph/Twitter with locale, JSON-LD (Organization, WebSite, WebPage, FAQPage, ItemList of the 10 case studies) built from the visible page.
- `sitemap.xml` (3 languages + key images), `robots.txt` (AI crawlers explicitly allowed), `llms.txt` (plain-text brief for AI assistants, generated from the page), `site.webmanifest`, icons, `404.html`.
- Hosting: `vercel.json` / `_headers` set caching and security headers; `.vercelignore` keeps `brand-assets/` (2 GB), `src/`, `tools/` and original JPGs out of the upload.
- Still worth doing on the real domain: self-host the fonts, add `sameAs` links to Webloo's social profiles in the JSON-LD, submit the sitemap in Google Search Console / Bing Webmaster Tools.

## Aligned with the Website Build Pack (22 Nov)
- Proof: 250+ team members · 25B+ impressions · 4 continents · 300+ projects. President: "Mehdi Naourass, President, Webloo".
- New sections: Build. Scale. Experience. with the three engagement models (Scope of work · Time & materials · Partnership), six Industries, Webloo Loop teaser ("See it in action" opens a Loop demo brief).
- Nav: Ecosystem · Industries · Work · Insights (the FAQ for now) · About · Webloo Loop. Footer: Company · Ecosystem (+ Loop) · Industries · Follow, four offices with full addresses and live clocks, Privacy, "In partnership with LYSI".
- Schema: the pack's entity sentence, a LocalBusiness per office, the President as a Person. Keywords include "agency" terms from the pack's keyword map.
- Kept on purpose: "No hand-offs." hero (the pack's line came from the rejected drafts), Arabic, and the chat brief.
- Still to decide: Wydad, FIFA U-17, Retromobile and the CAF logo film are not in the pack's approved case list; the pack uses GoHighLevel calendars (we link HubSpot); Saffron accent not used.
