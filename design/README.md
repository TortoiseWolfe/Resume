# Claude Design source

`Resume.dc.html` and `support.js` are the project archive exported, unedited, from
Jonathan's Claude Design project (claude.ai/design project `6aee98a2-e009-4716-abb5-0adc6d9d3d1a`,
exported 16 Nov 2026). Open `Resume.dc.html` in a browser to see the design on its own.

Export route: Share, then Project HTML, then Project archive (a free instant zip).

## What the live page took from it

- Layout: one sticky bar (name, section links, theme and download controls), a skip link,
  one `<main>`, cards on a quiet timeline, skills as chips with their years.
- Type: calm sizes and weights (17 to 18 px body at line-height 1.65, a 68-character
  measure, semibold Special Elite headings, no text shadows or all-caps h1/h2).
- Depth: a three-level shadow scale.
- Typing animation: the name and title still type, but their finished size is reserved
  from the first paint so nothing below jumps while they type, and screen readers get the
  whole text at once.

## What it did NOT take

- Palette: the repo keeps its copper and aged-paper colours in both themes
  (`src/styles/theme.css`). The design's own dark palette is not used.
  The one colour change is the light-theme focus ring, `#d97706` to `#92400e`, because
  the old ring was 2.5:1 on the cream page and the new one is 5.6:1.
- Data: the export carries an older copy of the resume text and placeholder contact
  details. The page reads `src/data/resume.json` as before; the real phone and email are
  built in at deploy time from secrets and are not in this repo.
- Print: the page keeps `src/styles/print.css`; the PDF and DOCX downloads are unchanged.
