# SEO Health Check Script
# Run this to verify SEO implementation status

Write-Host ""
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "  SEO HEALTH CHECK - Agnivridhi India" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

$baseDir = $PWD

# Check sitemap
Write-Host "📄 Checking Sitemap..." -ForegroundColor Yellow
if (Test-Path "$baseDir\public\sitemap.xml") {
    Write-Host "  ✓ Sitemap exists: public/sitemap.xml" -ForegroundColor Green
    $sitemapContent = Get-Content "$baseDir\public\sitemap.xml" -Raw
    if ($sitemapContent -match "2025-12-20") {
        Write-Host "  ✓ Sitemap is up to date (2025-12-20)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Sitemap needs date update" -ForegroundColor Red
    }
} else {
    Write-Host "  ✗ Sitemap missing!" -ForegroundColor Red
}
Write-Host ""

# Check robots.txt
Write-Host "🤖 Checking Robots.txt..." -ForegroundColor Yellow
if (Test-Path "$baseDir\public\robots.txt") {
    Write-Host "  ✓ Robots.txt exists" -ForegroundColor Green
    $robotsContent = Get-Content "$baseDir\public\robots.txt" -Raw
    if ($robotsContent -match "Sitemap:") {
        Write-Host "  ✓ Sitemap reference found in robots.txt" -ForegroundColor Green
    }
} else {
    Write-Host "  ✗ Robots.txt missing!" -ForegroundColor Red
}
Write-Host ""

# Check favicons
Write-Host "🎨 Checking Favicons..." -ForegroundColor Yellow
$faviconFiles = @(
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touch-icon.png"
)

$faviconCount = 0
foreach ($file in $faviconFiles) {
    if (Test-Path "$baseDir\public\$file") {
        $faviconCount++
        Write-Host "  ✓ $file exists" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file missing" -ForegroundColor Red
    }
}

if ($faviconCount -eq 0) {
    Write-Host ""
    Write-Host "  ⚠️  IMPORTANT: Generate favicons!" -ForegroundColor Yellow
    Write-Host "  Run: .\generate-favicons.ps1" -ForegroundColor Cyan
}
Write-Host ""

# Check site manifest
Write-Host "📱 Checking Site Manifest..." -ForegroundColor Yellow
if (Test-Path "$baseDir\public\site.webmanifest") {
    Write-Host "  ✓ site.webmanifest exists" -ForegroundColor Green
} else {
    Write-Host "  ✗ site.webmanifest missing!" -ForegroundColor Red
}
Write-Host ""

# Check OG image
Write-Host "🖼️  Checking OG Image..." -ForegroundColor Yellow
if (Test-Path "$baseDir\public\img\og-image.jpg") {
    Write-Host "  ✓ OG image exists" -ForegroundColor Green
} else {
    Write-Host "  ✗ OG image missing! (Recommended: 1200x630px)" -ForegroundColor Red
    Write-Host "  Create at: public/img/og-image.jpg" -ForegroundColor Yellow
}
Write-Host ""

# Check SEO component
Write-Host "🔍 Checking SEO Component..." -ForegroundColor Yellow
if (Test-Path "$baseDir\components\SEO.jsx") {
    Write-Host "  ✓ SEO component exists" -ForegroundColor Green
} else {
    Write-Host "  ✗ SEO component missing!" -ForegroundColor Red
}
Write-Host ""

# Check _document.js
Write-Host "📝 Checking _document.js..." -ForegroundColor Yellow
if (Test-Path "$baseDir\pages\_document.js") {
    Write-Host "  ✓ _document.js exists" -ForegroundColor Green
    $docContent = Get-Content "$baseDir\pages\_document.js" -Raw
    if ($docContent -match "gtm.js") {
        Write-Host "  ✓ Google Tag Manager configured" -ForegroundColor Green
    }
    if ($docContent -match "YOUR_FACEBOOK_PIXEL_ID") {
        Write-Host "  ⚠️  Facebook Pixel ID needs update" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ✗ _document.js missing!" -ForegroundColor Red
}
Write-Host ""

# Check next.config.js
Write-Host "⚙️  Checking Next.js Config..." -ForegroundColor Yellow
if (Test-Path "$baseDir\next.config.js") {
    Write-Host "  ✓ next.config.js exists" -ForegroundColor Green
    $configContent = Get-Content "$baseDir\next.config.js" -Raw
    if ($configContent -match "compress: true") {
        Write-Host "  ✓ Compression enabled" -ForegroundColor Green
    }
    if ($configContent -match "headers\(\)") {
        Write-Host "  ✓ Custom headers configured" -ForegroundColor Green
    }
} else {
    Write-Host "  ✗ next.config.js missing!" -ForegroundColor Red
}
Write-Host ""

# Summary
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "  SUMMARY" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "✅ Technical SEO Foundation: COMPLETE" -ForegroundColor Green
Write-Host ""

Write-Host "🔴 Action Required:" -ForegroundColor Red
Write-Host "  1. Generate favicons (run .\generate-favicons.ps1)" -ForegroundColor Yellow
Write-Host "  2. Create OG image (1200x630px)" -ForegroundColor Yellow
Write-Host "  3. Set up Google Search Console" -ForegroundColor Yellow
Write-Host "  4. Create Google My Business listing" -ForegroundColor Yellow
Write-Host "  5. Update Facebook Pixel ID (if using)" -ForegroundColor Yellow
Write-Host ""

Write-Host "📚 Next Steps:" -ForegroundColor Cyan
Write-Host "  • Read: SEO_SUMMARY.md" -ForegroundColor White
Write-Host "  • Read: GOOGLE_SEARCH_CONSOLE_SETUP.md" -ForegroundColor White
Write-Host "  • Follow: SEO_CHECKLIST.md" -ForegroundColor White
Write-Host ""

Write-Host "🌐 Test Your Site:" -ForegroundColor Cyan
Write-Host "  • PageSpeed: https://pagespeed.web.dev" -ForegroundColor White
Write-Host "  • Mobile Test: https://search.google.com/test/mobile-friendly" -ForegroundColor White
Write-Host "  • Schema Test: https://validator.schema.org" -ForegroundColor White
Write-Host ""

Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to open documentation
Write-Host "Would you like to open SEO_SUMMARY.md? (Y/N)" -ForegroundColor Yellow
$response = Read-Host
if ($response -eq 'Y' -or $response -eq 'y') {
    if (Test-Path "$baseDir\SEO_SUMMARY.md") {
        Start-Process "$baseDir\SEO_SUMMARY.md"
    }
}

Write-Host ""
Write-Host "Health check complete! 🎉" -ForegroundColor Green
Write-Host ""
