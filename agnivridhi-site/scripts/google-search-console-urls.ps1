# Quick URLs for Google Search Console Actions
# Copy and paste these URLs as needed

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "GOOGLE SEARCH CONSOLE - QUICK URLS" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "1. URL TO REMOVE FROM GOOGLE:" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/cgtmse-eluxcart.html" -ForegroundColor White
Write-Host "   Action: Use 'Removals' tool in GSC`n" -ForegroundColor Gray

Write-Host "2. URLS TO REQUEST INDEXING (Alternative Success Stories):" -ForegroundColor Yellow
$indexUrls = @(
    "https://agnivridhiindia.com/cgtmse-hamarapetrol.html",
    "https://agnivridhiindia.com/cgtmse-goldi-kirana.html",
    "https://agnivridhiindia.com/cgtmse-george-martin-jose.html",
    "https://agnivridhiindia.com/cgtmse-website-vishwam-pandya.html",
    "https://agnivridhiindia.com/pmegp-vedanta-cosmetics.html",
    "https://agnivridhiindia.com/incorporation-palandsons.html",
    "https://agnivridhiindia.com/website-aadhithya-energy.html",
    "https://agnivridhiindia.com/csr-hands-of-happiness.html",
    "https://agnivridhiindia.com/funding-priyakirana.html"
)

foreach ($url in $indexUrls) {
    Write-Host "   $url" -ForegroundColor White
}
Write-Host "   Action: Use URL Inspection tool, then 'Request Indexing'`n" -ForegroundColor Gray

Write-Host "3. HOMEPAGE FOR FAVICON UPDATE:" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/" -ForegroundColor White
Write-Host "   Action: Use URL Inspection tool, then 'Request Indexing'`n" -ForegroundColor Gray

Write-Host "4. SITEMAP TO SUBMIT:" -ForegroundColor Yellow
Write-Host "   sitemap.xml" -ForegroundColor White
Write-Host "   Full URL: https://agnivridhiindia.com/sitemap.xml" -ForegroundColor Gray
Write-Host "   Action: Go to Sitemaps section, enter 'sitemap.xml', click Submit`n" -ForegroundColor Gray

Write-Host "5. KEY SERVICE PAGES TO RECRAWL:" -ForegroundColor Yellow
$keyPages = @(
    "https://agnivridhiindia.com/service.html",
    "https://agnivridhiindia.com/success-stories.html",
    "https://agnivridhiindia.com/about.html",
    "https://agnivridhiindia.com/contact.html"
)

foreach ($url in $keyPages) {
    Write-Host "   $url" -ForegroundColor White
}
Write-Host "   Action: Request indexing for each (optional but recommended)`n" -ForegroundColor Gray

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "SOCIAL MEDIA CACHE CLEARING" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Facebook Debugger:" -ForegroundColor Yellow
Write-Host "   https://developers.facebook.com/tools/debug/" -ForegroundColor White
Write-Host "   Enter: https://agnivridhiindia.com/" -ForegroundColor Gray
Write-Host "   Click: Scrape Again`n" -ForegroundColor Gray

Write-Host "Twitter Card Validator:" -ForegroundColor Yellow
Write-Host "   https://cards-dev.twitter.com/validator" -ForegroundColor White
Write-Host "   Enter: https://agnivridhiindia.com/" -ForegroundColor Gray
Write-Host "   Click: Preview Card`n" -ForegroundColor Gray

Write-Host "LinkedIn Post Inspector:" -ForegroundColor Yellow
Write-Host "   https://www.linkedin.com/post-inspector/" -ForegroundColor White
Write-Host "   Enter: https://agnivridhiindia.com/" -ForegroundColor Gray
Write-Host "   Click: Inspect`n" -ForegroundColor Gray

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "VERIFICATION URLS" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Test Favicon:" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/img/favicon.ico" -ForegroundColor White
Write-Host "   https://agnivridhiindia.com/img/favicon-32.png" -ForegroundColor White
Write-Host "   https://agnivridhiindia.com/img/apple-touch-icon.png`n" -ForegroundColor White

Write-Host "Test Sitemap:" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/sitemap.xml" -ForegroundColor White
Write-Host "   (Should NOT contain eluxcart)`n" -ForegroundColor Gray

Write-Host "Test Robots.txt:" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/robots.txt`n" -ForegroundColor White

Write-Host "Test 404 (Removed Page):" -ForegroundColor Yellow
Write-Host "   https://agnivridhiindia.com/cgtmse-eluxcart.html" -ForegroundColor White
Write-Host "   (Should show 404 error page)`n" -ForegroundColor Gray

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Copy URLs above for Google Search Console" -ForegroundColor Green
Write-Host "See GOOGLE_SEARCH_UPDATE_GUIDE.md for detailed steps" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

# Option to copy all index request URLs to clipboard
$response = Read-Host "Copy all success story URLs to clipboard? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    $indexUrls -join "`n" | Set-Clipboard
    Write-Host "`nURLs copied to clipboard!" -ForegroundColor Green
    Write-Host "You can now paste them into Google Search Console" -ForegroundColor Cyan
}
