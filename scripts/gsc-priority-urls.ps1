# Priority URLs for Google Search Console - Request Indexing

Write-Host "`n=== PRIORITY URLS TO REQUEST INDEXING IN GOOGLE SEARCH CONSOLE ===" -ForegroundColor Cyan
Write-Host "`nGo to: https://search.google.com/search-console" -ForegroundColor Yellow
Write-Host "Select your property: agnivridhiindia.com`n" -ForegroundColor Yellow

Write-Host "=== STEP 1: REQUEST RE-INDEXING (Copy each URL to GSC URL Inspection) ===" -ForegroundColor Green
Write-Host "`n1. Homepage (Updated favicon + meta tags):"
Write-Host "   https://agnivridhiindia.com/" -ForegroundColor White

Write-Host "`n2. Success Stories Page (Updated list):"
Write-Host "   https://agnivridhiindia.com/success-stories.html" -ForegroundColor White

Write-Host "`n3. About Page:"
Write-Host "   https://agnivridhiindia.com/about.html" -ForegroundColor White

Write-Host "`n4. Service Page:"
Write-Host "   https://agnivridhiindia.com/service.html" -ForegroundColor White

Write-Host "`n5. Contact Page:"
Write-Host "   https://agnivridhiindia.com/contact.html" -ForegroundColor White

Write-Host "`n`n=== STEP 2: REQUEST REMOVAL (Remove outdated page) ===" -ForegroundColor Red
Write-Host "`nGo to: Removals section in GSC"
Write-Host "Request removal of:"
Write-Host "   https://agnivridhiindia.com/cgtmse-eluxcart.html" -ForegroundColor White
Write-Host "   (Page has been removed and redirects to success-stories)" -ForegroundColor Gray

Write-Host "`n`n=== STEP 3: SUBMIT SITEMAP ===" -ForegroundColor Green
Write-Host "`nGo to: Sitemaps section in GSC"
Write-Host "Submit:"
Write-Host "   https://agnivridhiindia.com/sitemap.xml" -ForegroundColor White

Write-Host "`n`n=== STEP 4: FIX ENCODING ISSUES ===" -ForegroundColor Yellow
Write-Host "`nThe 'â€"' characters suggest UTF-8 encoding issues."
Write-Host "Check your HTML files have proper charset declaration:"
Write-Host '   <meta charset="UTF-8">' -ForegroundColor White

Write-Host "`n`n=== TIMELINE EXPECTATIONS ===" -ForegroundColor Cyan
Write-Host "- URL Inspection results: 1-2 days"
Write-Host "- Sitemap processing: 3-7 days"
Write-Host "- Search results update: 1-4 weeks"
Write-Host "- Favicon update: 2-4 weeks"
Write-Host "- Old page removal: 1-2 weeks (after removal request)"

Write-Host "`n`n=== FORCE CACHE CLEAR (OPTIONAL) ===" -ForegroundColor Magenta
Write-Host "`n1. Facebook Debugger:"
Write-Host "   https://developers.facebook.com/tools/debug/"
Write-Host "   Scrape: https://agnivridhiindia.com/"

Write-Host "`n2. Twitter Card Validator:"
Write-Host "   https://cards-dev.twitter.com/validator"
Write-Host "   Preview: https://agnivridhiindia.com/"

Write-Host "`n3. LinkedIn Post Inspector:"
Write-Host "   https://www.linkedin.com/post-inspector/"
Write-Host "   Inspect: https://agnivridhiindia.com/"

Write-Host "`n=== COMPLETED ===" -ForegroundColor Green
Write-Host "Press Enter to close..." -ForegroundColor Gray
Read-Host
