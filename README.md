# Tirunex static website

Production-ready static HTML, CSS and JavaScript implementation based on the supplied Tirunex PRD.

## Preview

Run any static HTTP server from this directory, for example:

```powershell
npx serve .
```

No build step or Node.js server is required for deployment.

## Status & Configuration

- **Brand Assets**: Extracted, cleaned transparent and dark-mode logos added in `images/logo/` and applied across header, footer, and WhatsApp widget.
- **Client Details**: Configured with `sales@tirunex.com`, `+91 98841 82037`, Chennai address, and floating WhatsApp chat widget.
- **Domain & SEO**: Canonical URLs, `sitemap.xml`, and `robots.txt` updated to `https://www.tirunex.com`.
- **Static QA**: Run `node assets/qa.mjs` to validate all 11 pages (titles, meta descriptions, single H1, and internal asset links).

## Optional Client Additions
1. Optional social profile URLs (LinkedIn, X, Instagram) in `TIRUNEX_CONFIG` (`js/main.js`).
2. Optional form backend endpoint (e.g. Web3Forms or Formspree) in `TIRUNEX_CONFIG.formEndpoint`. By default, submissions open a pre-filled email to `sales@tirunex.com`.
3. Corporate Identification Number (CIN) in `TIRUNEX_CONFIG.cin` once provided.
