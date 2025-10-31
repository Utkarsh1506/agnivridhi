## SEO actions and verification — Agnivridhi India

This document lists prioritized, actionable steps to improve how https://agnivridhiindia.com appears in Google Search and other engines, and quick verification methods.

1) Essentials (must-do)
  - Ensure `sitemap.xml` is up-to-date and reachable at `https://agnivridhiindia.com/sitemap.xml` (already created).
  - Create `robots.txt` at the site root that references the sitemap and blocks sensitive paths (done: `/robots.txt`).
  - Verify the site is served over HTTPS with a valid certificate across all pages.

2) Submit and monitor in Google Search Console
  - Add and verify both `https://agnivridhiindia.com` (preferred) and `http://` (optional).
  - In GSC > Sitemaps, submit `/sitemap.xml` and watch for index/coverage errors.
  - Use URL Inspection to request indexing for key pages: homepage, main service pages, `privacy-policy.html`, `terms.html`, `disclaimer.html`, and any recently updated case studies.

3) Structured data & rich results
  - Ensure the site has Organization and WebSite JSON-LD on the homepage (author/publisher details included). Use Article schema on blog/case pages (already applied).
  - Validate pages using Google's Rich Results Test and the Schema validator in Search Console. Fix errors first, then address warnings.

4) On-page SEO (prioritise pages)
  - Homepage: title ~50–60 chars, meta description 120–155 chars summarising unique value (funding, certifications, MSME support). Add OpenGraph/Twitter meta.
  - Services pages: unique title & meta, H1 matches intent, internal linking to contact/consultation.
  - Case/success stories: Article JSON-LD with author (Agnivridhi Team) and a sensible `datePublished`.
  - Legal pages: keep `noindex`? Usually legal pages are indexed; keep them indexed unless you prefer them hidden. They already have meta/canonical tags.
  - Audit images: add meaningful alt text (describe image + target keyword where natural).

5) Title & meta templates (examples)
  - Homepage title: Agnivridhi India — Funding & Certification Help for MSMEs
  - Homepage meta: "Agnivridhi India helps MSMEs secure funding, navigate government schemes, and gain certifications. Book a free consultation." (120–140 chars)
  - Service page title: "[Service] — Agnivridhi India" (e.g., "MSME Certification — Agnivridhi India")

6) Crawl & index hygiene
  - Block private paths via `robots.txt` (we added `/admin/`, `/api/`).
  - Add `noindex, nofollow` meta to any staging or admin pages that visitors should not see. If there's an `admin/login` HTML file, add a `<meta name="robots" content="noindex, nofollow">` in its head.

7) Performance & Core Web Vitals
  - Run Lighthouse (Chrome) or PageSpeed Insights for homepage and service pages.
  - Common wins: compress/serve images as WebP, enable gzip/Brotli on server, defer noncritical JS, combine/minify CSS where safe.

8) Local SEO
  - Claim Google Business Profile if not done; verify details and categories.
  - Ensure consistent NAP (Name, Address, Phone) in footer and structured data (Organization, LocalBusiness schema if relevant).

9) Rich snippets & FAQ
  - For FAQ-like sections, add FAQPage schema to eligible pages to improve SERP real estate.

10) Backlinks & content
  - Publish regular blog/case updates; outreach to industry sites and partners to earn quality backlinks.

11) Favicons & UX
  - Generate raster favicons (png/ico) from `img/favicon2.svg` using `scripts/generate-favicons.ps1` (PowerShell) and ImageMagick. Upload outputs to `img/` so head links resolve.

Verification checklist (quick)
  - robots.txt reachable: https://agnivridhiindia.com/robots.txt
  - sitemap reachable: https://agnivridhiindia.com/sitemap.xml
  - Rich Results Test: run on homepage & sample article pages
  - Lighthouse: run on desktop & mobile; aim for good CWV scores
  - GSC coverage: no critical errors and sitemap processed

Commands & quick checks (PowerShell):
  - Check robots.txt and sitemap reachability:
    Invoke-WebRequest -Uri https://agnivridhiindia.com/robots.txt
    Invoke-WebRequest -Uri https://agnivridhiindia.com/sitemap.xml

Notes & next steps I can take for you (pick any):
  - Run a repo-wide audit for missing meta descriptions / duplicate titles and apply fixes automatically.
  - Add `noindex` meta to admin or staging pages present in the repo.
  - Extract the inline legal micro-style into `css/legal.css` and include it in three legal pages to reduce duplication.
  - Generate favicons locally (I will provide exact PowerShell + ImageMagick commands and can add the generated files to the repo if you run the script and upload the outputs).

If you want, I can now (pick one):
  - Run an automated scan of all HTML files for missing/duplicate title and meta description and patch them (fast). 
  - Create `noindex` meta in identified admin pages (if present in repository).
  - Provide the copy-paste PowerShell commands to generate favicons locally and the steps to upload them.

---
Last updated: 2025-10-31
