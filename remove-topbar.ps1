# Remove Topbar from all HTML pages

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

Write-Host "Removing topbar from all pages..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $htmlFiles) {
    $filePath = "c:\Users\Admin\Downloads\agni\$file"
    
    if (Test-Path $filePath) {
        Write-Host "Processing $file..." -ForegroundColor Yellow
        
        # Read file content
        $content = Get-Content $filePath -Raw
        
        # Remove topbar section (from <!-- Topbar Start --> to <!-- Topbar End -->)
        $content = $content -replace '(?s)<!-- Topbar Start -->.*?<!-- Topbar End -->\s*', ''
        
        # Save file
        Set-Content -Path $filePath -Value $content -NoNewline
        
        Write-Host "  - Topbar removed" -ForegroundColor Green
    } else {
        Write-Host "  - File not found: $file" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "Topbar removed from all pages successfully!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
