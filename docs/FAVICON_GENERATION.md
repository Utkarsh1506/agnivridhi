Favicon generation instructions

Goal
- Generate PNG favicons (16,32,48,64,96,128,180) and a multi-size favicon.ico from `img/favicon2.svg`.

Option A — Automatic (recommended)
1. Install ImageMagick (provides `magick`) on Windows:
   - If you have Chocolatey:
     choco install imagemagick
   - Or download from: https://imagemagick.org/script/download.php#windows
2. From repository root, run the provided PowerShell script:
   powershell -ExecutionPolicy Bypass -File .\scripts\generate-favicons.ps1
3. This creates:
   - img/favicon-16.png, img/favicon-32.png, img/favicon-48.png, img/favicon-64.png, img/favicon-96.png, img/favicon-128.png, img/favicon-180.png
   - img/favicon.png (32x32)
   - img/apple-touch-icon.png (180x180)
   - img/favicon.ico (contains 16/32/48/64 sizes)

Option B — Using Inkscape
1. Install Inkscape and add to PATH.
2. Use commands like:
   inkscape --export-type=png --export-width=32 --export-filename=img\\favicon-32.png img\\favicon2.svg

Notes
- After generating files, you can add these into your HTML head. Example links:
  <link rel="icon" type="image/svg+xml" href="img/favicon2.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">

- If you'd like, I can run the generation here after you install ImageMagick and tell me to proceed, or I can generate the files if you provide the raster images. Otherwise run the script locally and then tell me and I'll update HTML to include size-specific link tags.
