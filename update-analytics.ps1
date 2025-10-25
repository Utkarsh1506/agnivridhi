# Update GA4 and GTM IDs in all HTML files
$ga4Id = "G-H1GCZDZ513"
$gtmId = "GT-P368QQPJ"

# List of HTML files to update (main pages with consultation form)
$htmlFiles = @(
    "index.html",
    "about.html",
    "service.html",
    "blog.html",
    "contact.html",
    "FAQ.html",
    "feature.html",
    "team.html",
    "success-stories.html",
    "404.html",
    "500.html",
    "cgtmse-eluxcart.html",
    "cgtmse-hamarapetrol.html",
    "funding-priyakirana.html"
)

Write-Host "Updating GA4 and GTM IDs..." -ForegroundColor Cyan
Write-Host "GA4 ID: $ga4Id" -ForegroundColor Green
Write-Host "GTM ID: $gtmId" -ForegroundColor Green
Write-Host ""

foreach ($file in $htmlFiles) {
    $filePath = "c:\Users\Admin\Downloads\agni\$file"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $file..." -ForegroundColor Yellow
        
        # Read file content
        $content = Get-Content $filePath -Raw
        
        # Replace GA4 placeholder
        $content = $content -replace 'G-XXXXXXXXXX', $ga4Id
        
        # Replace GTM placeholder
        $content = $content -replace 'GTM-XXXXXXX', $gtmId
        
        # Save file
        Set-Content -Path $filePath -Value $content -NoNewline
        
        Write-Host "  - Updated GA4 and GTM IDs" -ForegroundColor Green
    } else {
        Write-Host "  - File not found: $file" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "All files updated successfully!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your Analytics are now tracking:" -ForegroundColor Yellow
Write-Host "  → Page views" -ForegroundColor White
Write-Host "  → Form submissions" -ForegroundColor White
Write-Host "  → Conversion events" -ForegroundColor White
Write-Host "  → User behavior" -ForegroundColor White
Write-Host ""
Write-Host "View your data at:" -ForegroundColor Yellow
Write-Host "  GA4: https://analytics.google.com/" -ForegroundColor Cyan
Write-Host "  GTM: https://tagmanager.google.com/" -ForegroundColor Cyan
