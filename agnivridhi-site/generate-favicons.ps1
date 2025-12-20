# Favicon Generator Helper Script
# This script provides instructions and tools for generating favicons

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Favicon Generation Helper" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Required Favicon Files:" -ForegroundColor Yellow
Write-Host "  ✓ favicon.ico (16x16, 32x32, 48x48)" -ForegroundColor White
Write-Host "  ✓ favicon-16x16.png" -ForegroundColor White
Write-Host "  ✓ favicon-32x32.png" -ForegroundColor White
Write-Host "  ✓ apple-touch-icon.png (180x180)" -ForegroundColor White
Write-Host "  ✓ android-chrome-192x192.png" -ForegroundColor White
Write-Host "  ✓ android-chrome-512x512.png" -ForegroundColor White
Write-Host ""

Write-Host "🔗 Online Favicon Generators:" -ForegroundColor Yellow
Write-Host "  1. RealFaviconGenerator: https://realfavicongenerator.net" -ForegroundColor Green
Write-Host "  2. Favicon.io: https://favicon.io" -ForegroundColor Green
Write-Host "  3. Favicon Generator: https://www.favicon-generator.org" -ForegroundColor Green
Write-Host ""

Write-Host "📁 Source Logo Location:" -ForegroundColor Yellow
Write-Host "  $PWD\public\logo.png" -ForegroundColor White
Write-Host "  $PWD\public\logo1.png" -ForegroundColor White
Write-Host ""

Write-Host "💡 Instructions:" -ForegroundColor Yellow
Write-Host "  1. Visit one of the generators above" -ForegroundColor White
Write-Host "  2. Upload logo1.png from the public folder" -ForegroundColor White
Write-Host "  3. Generate all sizes" -ForegroundColor White
Write-Host "  4. Download the favicon package" -ForegroundColor White
Write-Host "  5. Extract to the public folder" -ForegroundColor White
Write-Host ""

Write-Host "🚀 After generating favicons:" -ForegroundColor Yellow
Write-Host "  Run: npm run build" -ForegroundColor Green
Write-Host "  Then: npm start" -ForegroundColor Green
Write-Host ""

# Check if logo files exist
$logoPath = Join-Path $PWD "public\logo1.png"
if (Test-Path $logoPath) {
    Write-Host "✓ Logo file found: $logoPath" -ForegroundColor Green
    Write-Host ""
    Write-Host "Would you like to open the favicon generator website? (Y/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq 'Y' -or $response -eq 'y') {
        Start-Process "https://realfavicongenerator.net"
    }
} else {
    Write-Host "✗ Logo file not found at: $logoPath" -ForegroundColor Red
    Write-Host "  Please ensure logo1.png exists in the public folder" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
