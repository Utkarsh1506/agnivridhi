# Deploy checklist — Agnivridhi India

This checklist covers quick production tasks after deploying the static site and the API handler.

1) Secrets & config
  - Ensure `api/config.php` exists on the server (not in git). It should contain:
    - `RECAPTCHA_SITE_KEY` (public key) — used in client-side grecaptcha.execute
    - `RECAPTCHA_SECRET_KEY` (secret) — used only server-side in `api/consultation-handler.php`
  - Confirm `api/config.php` is listed in `.gitignore` (the repo already ignores it).
  - Do NOT commit `api/config.php` to source control.

2) reCAPTCHA verification (v3)
  - On production, submit a real test form and capture the `recaptchaToken` sent to the server.
  - On the server, confirm `verifyRecaptcha()` returns `success: true` and check the `score` (v3 returns a score).
  - Recommended score threshold: 0.5 for standard forms. Tune based on your traffic.
  - If verification fails, check:
    - Correct secret in `api/config.php`
    - Domain restrictions in the reCAPTCHA admin console

3) Sitemap & Search Console
  - `sitemap.xml` was generated at the repo root. Upload to the site root: `https://agnivridhiindia.com/sitemap.xml`.
  - In Google Search Console:
    - Add and verify the property (use the exact protocol+host `https://agnivridhiindia.com`).
    - Submit the sitemap URL.
    - Check coverage and index status after 1–3 days and fix any errors.

4) Favicons
  - The repo contains `img/favicon2.svg`. Raster fallbacks (`img/favicon-32.png`, `img/apple-touch-icon.png`, `img/favicon.ico`) are referenced in pages but are not included in the repo.
  - Generate raster favicons locally (PowerShell script `scripts/generate-favicons.ps1` was added to the repo). The script requires ImageMagick/InkScape or similar.
  - After generation, upload the PNG/ICO files to `img/` on the server.

5) Site checks (smoke tests)
  - Visit the homepage and several internal pages (about, service, blog, major case pages).
  - Check that canonical and meta description tags are present (they were added to main pages).
  - Confirm Open Graph tags render correctly (use Facebook Sharing Debugger / Twitter Card Validator).
  - Confirm the comparison of `og:image` exists at the referenced URL and returns 200.

6) Forms & Email
  - Submit the consultation form; confirm:
    - The API returns success JSON.
    - Admin notification email is received (check spam folder).
    - Auto-responder is received by the submitter.
    - If using Google Sheets integration, confirm the entry appears in the sheet.

7) Analytics / tracking
  - Confirm GA4 measurement (real-time) sees your test events.
  - Confirm any pixels (Facebook) are firing as expected via browser devtools or tag assistant.

8) SEO quick wins
  - Ensure each important page has:
    - Unique title and meta description
    - Canonical link pointing to the preferred URL
    - Open Graph + Twitter Card metadata
    - Structured data (Article schema added to case pages)
  - Monitor Search Console for structured data errors and fix if any.

9) Monitoring & maintenance
  - Set up uptime monitoring (UptimeRobot / Pingdom) for main domain and contact form endpoint.
  - Configure error logging on the server (ensure `api/logs/` is writable if `LOG_SUBMISSIONS` is enabled).
  - Rotate/revoke keys if they are exposed.

10) Notes & follow-ups
  - Expand `sitemap.xml` if you add blog posts or many case pages; you can also create a dynamic sitemap on the server.
  - Consider moving non-public configuration (DB credentials, tokens) into environment variables if you migrate to a server platform that supports them.

If you want, I can:
  - Run a small script to confirm all pages include meta descriptions and canonical tags.
  - Produce a browser-based testing checklist or a small automated smoke-test script.

--
Generated: 2025-10-31
