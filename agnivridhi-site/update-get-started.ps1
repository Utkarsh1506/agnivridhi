# PowerShell script to update Get Started buttons on all pages

$files = @(
    "404.html",
    "blog.html",
    "contact.html",
    "FAQ.html",
    "feature.html",
    "service.html",
    "team.html",
    "success-stories.html",
    "500.html",
    "cgtmse-hamarapetrol.html",
    "funding-priyakirana.html"
)

$oldText = 'href="contact.html" class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>'
$newText = 'href="#" class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#consultationModal">Get Started</a>'

foreach ($file in $files) {
    $filePath = "c:\Users\Admin\Downloads\agni\$file"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        $content = $content -replace [regex]::Escape($oldText), $newText
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Updated: $file" -ForegroundColor Green
    } else {
        Write-Host "File not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nAll Get Started buttons updated successfully!" -ForegroundColor Cyan
