# Update All Consultation Forms - PowerShell Script
# This script updates the consultation modal in all HTML pages
# Run this in PowerShell from the agni directory

Write-Host "Updating Consultation Forms in All Pages..." -ForegroundColor Cyan

# List of HTML files that contain the consultation modal
$htmlFiles = @(
    "index.html",
    "about.html",
    "service.html",
    "feature.html",
    "offer.html",
    "blog.html",
    "team.html",
    "testimonial.html",
    "contact.html",
    "FAQ.html",
    "success-stories.html",
    "cgtmse-eluxcart.html",
    "cgtmse-hamarapetrol.html",
    "funding-priyakirana.html"
)

# Read the updated modal HTML from index.html
$indexContent = Get-Content "index.html" -Raw

# Extract the modal section (from <!-- Consultation Form Modal Start --> to <!-- Consultation Form Modal End -->)
$modalPattern = '(?s)<!-- Consultation Form Modal Start -->.*?<!-- Consultation Form Modal End -->'

if ($indexContent -match $modalPattern) {
    $updatedModal = $Matches[0]
    Write-Host "Extracted updated modal from index.html" -ForegroundColor Green
    
    $updateCount = 0
    $errorCount = 0
    
    foreach ($file in $htmlFiles) {
        if ($file -eq "index.html") {
            Write-Host "  Skipping index.html (source file)" -ForegroundColor Yellow
            continue
        }
        
        if (Test-Path $file) {
            try {
                $content = Get-Content $file -Raw
                
                # Check if file has the modal section
                if ($content -match $modalPattern) {
                    # Replace the old modal with the new one
                    $newContent = $content -replace $modalPattern, $updatedModal
                    
                    # Save the updated content
                    Set-Content $file -Value $newContent -NoNewline
                    
                    Write-Host "  Updated $file" -ForegroundColor Green
                    $updateCount++
                }
                else {
                    Write-Host "  $file does not contain consultation modal - skipped" -ForegroundColor Yellow
                }
            }
            catch {
                Write-Host "  Error updating $file" -ForegroundColor Red
                $errorCount++
            }
        }
        else {
            Write-Host "  File not found: $file" -ForegroundColor Yellow
        }
    }
    
    Write-Host ""
    Write-Host "Update Summary:" -ForegroundColor Cyan
    Write-Host "  Updated: $updateCount files" -ForegroundColor Green
    Write-Host "  Errors: $errorCount files" -ForegroundColor Red
    Write-Host ""
    
    if ($updateCount -gt 0) {
        Write-Host "Consultation forms updated successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "IMPORTANT NEXT STEPS:" -ForegroundColor Yellow
        Write-Host "1. Replace placeholder QR codes in img/ folder with real payment QR codes" -ForegroundColor White
        Write-Host "2. Update Google Apps Script with new code from google-sheets-script.js" -ForegroundColor White
        Write-Host "3. Redeploy the Apps Script Web App with new version" -ForegroundColor White
        Write-Host "4. Run setupSheet function in Apps Script" -ForegroundColor White
        Write-Host "5. Test the form thoroughly" -ForegroundColor White
        Write-Host ""
        Write-Host "See CONSULTATION-FORM-UPDATE.md for detailed instructions" -ForegroundColor Cyan
    }
}
else {
    Write-Host "Could not find modal section in index.html" -ForegroundColor Red
    Write-Host "Make sure index.html has the updated consultation modal" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
