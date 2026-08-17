# Gargi Shukla — Nursing Tutor Portfolio

A professional, responsive personal portfolio website for **Gargi Shukla**, Nursing Tutor / Nursing Educator, Lucknow. Built with plain **HTML5, CSS3 and vanilla JavaScript** only — no frameworks, no build step.

## File structure

```
portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── gargi-shukla.jpg            (add this — see below)
│   └── GARGI-SHUKLA-Resume.pdf     (add this — see below)
│
└── README.md
```

## Getting started

No installation needed. Just open `index.html` in any modern browser, or serve the folder with any static file server.

## Adding the real photo and resume

Two assets are referenced but **not included** (they were not supplied):

1. **Photo** — save the photo as `assets/gargi-shukla.jpg`. Until it's added, the hero section shows a clean circular "GS" initials placeholder instead of a fake photo.
2. **Resume PDF** — save the resume as `assets/GARGI-SHUKLA-Resume.pdf`. The "Download Resume" button already points at this path. Until the file exists there, clicking the button shows a friendly reminder instead of a broken download.

## Editing content

All resume data (clinical postings, education, webinars, conferences) lives as plain JavaScript arrays near the top of `script.js`, so updating a date, percentage, or adding a new webinar only requires editing one array entry — the page re-renders automatically.

Static sections (hero text, about copy, skills, workshops, personal details) are written directly in `index.html`.

Colors, spacing, and typography are controlled by CSS custom properties at the top of `style.css` (`:root { --primary: ...; }`), so the whole palette can be restyled from one place.

## Contact form — how it works

This site has **no backend and no database**. The "Send Enquiry" form validates required fields with JavaScript, then builds a formatted WhatsApp message from the entered details and opens `wa.me` with that message pre-filled — nothing is transmitted or stored anywhere else. The Email Me and Call Gargi buttons use standard `mailto:` and `tel:` links.

**If you need submissions saved permanently** (e.g. in a spreadsheet, inbox, or database), you will need to connect the form to a backend or a third-party form service (such as Formspree, Google Forms, or a custom server) — this is outside the scope of a static HTML/CSS/JS site.

## Personal details section

The "Personal Details" panel on the About section (date of birth, marital status, parents' names, hobbies) is included because it appears in the source resume, and is deliberately placed in a collapsed, low-prominence `<details>` element. **If this website will be publicly indexed by search engines, consider removing this section** — see the code comment directly above it in `index.html`.

## Browser support

Uses standard modern CSS and JS (CSS custom properties, `IntersectionObserver`, `fetch`, Clipboard API with a fallback). Works in all current versions of Chrome, Edge, Firefox, and Safari, and degrades gracefully on older browsers (animations simply won't animate; content stays fully visible and usable).
