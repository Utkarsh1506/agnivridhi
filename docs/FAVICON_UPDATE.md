# Update Favicon for Google Search

This guide explains how to update your site's favicon so the change appears in Google Search results. It is tailored to this repository's structure and Google's guidelines.

## Before you begin

Follow Google's favicon requirements:
- Use a square image, at least 48×48 px (recommend 256×256 PNG).
- Avoid inappropriate imagery.
- Serve the image over HTTPS.
- Ensure the favicon URL is crawlable (not blocked by robots.txt) and returns HTTP 200.
- Avoid multiple conflicting `<link rel="icon">` declarations that point to different brand images.

Useful reference: https://developers.google.com/search/docs/appearance/favicon-in-search

## Where favicons live in this repo

This project already references favicons in many HTML files using these paths:
- `img/favicon.ico`
- `img/favicon-32.png`
- `img/favicon.png`

Example (seen in most pages):
```html
<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32.png">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<link rel="alternate icon" type="image/png" href="img/favicon.png">
```

To minimize code changes across pages, prefer replacing the image files above while keeping the same filenames.

## Step 1 — Prepare and replace favicon files

1. Export your brand icon as a square PNG at 256×256 (or 512×512) — this will scale well.
2. Create the following files (keep these exact names to avoid editing every page):
   - `img/favicon.png` (recommended 256×256)
   - `img/favicon-32.png` (32×32)
   - `img/favicon.ico` (16×16 and/or 32×32 multi-size ICO)
3. Replace the existing files in the `img/` folder with your new ones.
   - Make sure your host serves them at:
     - `/img/favicon.png`
     - `/img/favicon-32.png`
     - `/img/favicon.ico`

Tip: You can generate a full favicon set from a single logo using the existing helper script: `scripts/generate_favicons_from_logo.py`.

## Step 2 — Keep `<link rel="icon">` tags consistent

Google may get confused if multiple icon links point to very different graphics. In this repo, we intentionally keep three tags for broad browser support, but all of them should represent the same brand icon.

Recommended minimal head snippet (already present in most pages):
```html
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32.png">
<link rel="icon" href="/img/favicon.ico" type="image/x-icon">
<link rel="alternate icon" type="image/png" href="/img/favicon.png">
```

Notes:
- Use absolute paths (`/img/...`) in production if your site is deployed at the domain root.
- Ensure all pages use the same set of links so Google sees a consistent favicon signal.

## Step 3 — Make sure crawling is allowed

- Confirm your home page and favicon URLs are not disallowed in `robots.txt`.
- Each favicon URL should return HTTP 200 and an image Content-Type.

Quick checks (replace with your domain):
- `https://yourdomain.com/robots.txt`
- `https://yourdomain.com/img/favicon.ico`
- `https://yourdomain.com/img/favicon-32.png`
- `https://yourdomain.com/img/favicon.png`

## Step 4 — Request an update in Google Search Console

1. Open Google Search Console for your property.
2. Use the URL Inspection tool.
3. Enter your home page URL (e.g., `https://yourdomain.com/`) and click "Request indexing".
4. Optionally inspect the direct favicon URLs (listed above) to ensure Google can fetch them.

## Step 5 — Be patient and monitor

- Propagation to search results can take up to a week.
- Clear your local browser cache or use an incognito window to verify changes.
- In Search Console, watch for any crawl errors or blocked resources related to favicon.

## Troubleshooting

- Still seeing the old icon? Ensure the new files replaced the old ones and are served with proper cache headers. If your CDN caches aggressively, purge the `/img/favicon*` paths.
- Multiple different favicons across pages? Standardize on the snippet above and ensure all pages include the same links.
- Different icon on SERP vs browser tab? Google may cache its own copy; wait a few days and ensure the favicon follows guidelines.

## Optional: Single canonical icon

If you prefer a single declaration, you can reduce to:
```html
<link rel="icon" href="/img/favicon.png" type="image/png">
```
Browsers and Google can work with this, but we keep `.ico` for legacy support and `32x32` for explicit sizing.

---

Last updated: 2025-11-05
