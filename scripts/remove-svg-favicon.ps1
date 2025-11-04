# Remove favicon2.svg references from all HTML files
# The new favicons from logo1.png are now PNG-based

$files = Get-ChildItem -Path . -Filter *.html -Recurse | Where-Object { $_.FullName -notlike "*\node_modules\*" }

$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    if ($content -match 'favicon2\.svg') {
        Write-Host "Updating: $($file.Name)" -ForegroundColor Yellow
        
        # Remove the SVG favicon line (with various spacing/tab patterns)
        $content = $content -replace '\s*<link rel="icon" type="image/svg\+xml" href="img/favicon2\.svg">\r?\n?', ''
        $content = $content -replace '\t*<link rel="icon" type="image/svg\+xml" href="img/favicon2\.svg">\r?\n?', ''
        
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $count++
    }
}

Write-Host "`nUpdated $count files" -ForegroundColor Green
Write-Host "Old favicon2.svg references have been removed" -ForegroundColor Cyan
Write-Host "All pages now use the new PNG favicons generated from logo1.png" -ForegroundColor Cyan
