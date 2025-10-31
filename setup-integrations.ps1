# Quick Setup Script for Agnivridhi India Integrations
# This script will help you update all tracking IDs in your files

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Agnivridhi India - Integration Setup" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Get user inputs
Write-Host "Please provide your integration credentials:" -ForegroundColor Yellow
Write-Host ""

# Google reCAPTCHA
Write-Host "1. Google reCAPTCHA v3" -ForegroundColor Green
$recaptchaSiteKey = Read-Host "6Lc0DP0rAAAAAKuwLNnne-ogAHK-5JH0ANJLsmk_"
$recaptchaSecretKey = Read-Host "6Lc0DP0rAAAAALzusQ2hOtojKuLB-agshcJSsGX-"
Write-Host ""

# Google Analytics
Write-Host "2. Google Analytics 4" -ForegroundColor Green
$ga4MeasurementId = Read-Host "   Enter GA4 Measurement ID (G-XXXXXXXXXX)"
Write-Host ""

# Google Tag Manager
Write-Host "3. Google Tag Manager" -ForegroundColor Green
$gtmContainerId = Read-Host "   Enter GTM Container ID (GTM-XXXXXXX)"
Write-Host ""

# Facebook Pixel
Write-Host "4. Facebook Pixel" -ForegroundColor Green
$fbPixelId = Read-Host "   Enter Facebook Pixel ID"
Write-Host ""

# Email Configuration
Write-Host "5. Email Configuration" -ForegroundColor Green
$adminEmail = Read-Host "   Enter Admin Email (default: info@agnivridhiindia.com)" 
if ([string]::IsNullOrWhiteSpace($adminEmail)) { $adminEmail = "info@agnivridhiindia.com" }
$fromEmail = Read-Host "   Enter From Email (default: noreply@agnivridhiindia.com)"
if ([string]::IsNullOrWhiteSpace($fromEmail)) { $fromEmail = "noreply@agnivridhiindia.com" }
Write-Host ""

# Confirmation
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Review your entries:" -ForegroundColor Yellow
Write-Host "  reCAPTCHA Site Key: $recaptchaSiteKey"
Write-Host "  GA4 Measurement ID: $ga4MeasurementId"
Write-Host "  GTM Container ID: $gtmContainerId"
Write-Host "  Facebook Pixel ID: $fbPixelId"
Write-Host "  Admin Email: $adminEmail"
Write-Host "  From Email: $fromEmail"
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$confirm = Read-Host "Proceed with setup? (Y/N)"
if ($confirm -ne "Y" -and $confirm -ne "y") {
    Write-Host "Setup cancelled." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Updating files..." -ForegroundColor Yellow

# Files to update
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

$jsFile = "js\main.js"
$phpFile = "api\consultation-handler.php"
$basePath = "c:\Users\Admin\Downloads\agni"

# Update HTML files
foreach ($file in $htmlFiles) {
    $filePath = Join-Path $basePath $file
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Update reCAPTCHA Site Key
        $content = $content -replace '6LfYourSiteKeyHere', $recaptchaSiteKey
        
        # Update GA4 Measurement ID
        $content = $content -replace 'G-XXXXXXXXXX', $ga4MeasurementId
        
        # Update GTM Container ID
        $content = $content -replace 'GTM-XXXXXXX', $gtmContainerId
        
        # Update Facebook Pixel ID
        $content = $content -replace 'YOUR_FACEBOOK_PIXEL_ID', $fbPixelId
        
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "  ✓ Updated: $file" -ForegroundColor Green
    }
}

# Update JavaScript file
$jsPath = Join-Path $basePath $jsFile
if (Test-Path $jsPath) {
    $content = Get-Content $jsPath -Raw
    $content = $content -replace '6LfYourSiteKeyHere', $recaptchaSiteKey
    $content = $content -replace '/api/consultation-handler\.php', '/api/consultation-handler.php'
    Set-Content -Path $jsPath -Value $content -NoNewline
    Write-Host "  ✓ Updated: $jsFile" -ForegroundColor Green
}

# Update PHP file
$phpPath = Join-Path $basePath $phpFile
if (Test-Path $phpPath) {
    $content = Get-Content $phpPath -Raw
    $content = $content -replace 'info@agnivridhiindia\.com', $adminEmail
    $content = $content -replace 'noreply@agnivridhiindia\.com', $fromEmail
    $content = $content -replace 'your_recaptcha_secret_key_here', $recaptchaSecretKey
    Set-Content -Path $phpPath -Value $content -NoNewline
    Write-Host "  ✓ Updated: $phpFile" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Setup Complete! ✓" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Test the consultation form on your website"
Write-Host "2. Verify email delivery (check spam folder)"
Write-Host "3. Check Google Analytics Real-time reports"
Write-Host "4. Monitor Facebook Pixel events"
Write-Host "5. Set up CRM integration (Zoho or Google Sheets)"
Write-Host ""
Write-Host "Documentation: See INTEGRATION_SETUP_GUIDE.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "Need help? Contact: tech@agnivridhiindia.com" -ForegroundColor Gray
Write-Host ""
