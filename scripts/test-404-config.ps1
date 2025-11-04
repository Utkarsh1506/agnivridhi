# Test 404 Configuration
# Verifies all files and settings are correct

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "404 ERROR HANDLING - VERIFICATION" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

$success = 0
$warnings = 0
$errors = 0

# Check 1: 404 page exists
Write-Host "1. Checking 404 error page..." -ForegroundColor Yellow
if (Test-Path "404.html") {
    $content = Get-Content "404.html" -Raw
    if ($content -match "404|Page Not Found") {
        Write-Host "   [OK] 404.html exists with proper content" -ForegroundColor Green
        $success++
    } else {
        Write-Host "   [WARN] 404.html exists but may need review" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "   [FAIL] 404.html not found!" -ForegroundColor Red
    $errors++
}

# Check 2: 500 page exists
Write-Host "`n2. Checking 500 error page..." -ForegroundColor Yellow
if (Test-Path "500.html") {
    Write-Host "   [OK] 500.html exists" -ForegroundColor Green
    $success++
} else {
    Write-Host "   [WARN] 500.html not found (optional)" -ForegroundColor Yellow
    $warnings++
}

# Check 3: Vercel config
Write-Host "`n3. Checking Vercel configuration..." -ForegroundColor Yellow
if (Test-Path "vercel.json") {
    $vercelContent = Get-Content "vercel.json" -Raw
    if ($vercelContent -match "404.html" -and $vercelContent -match "eluxcart") {
        Write-Host "   [OK] vercel.json configured correctly" -ForegroundColor Green
        $success++
    } else {
        Write-Host "   [WARN] vercel.json may need updates" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "   [WARN] vercel.json not found (ok if not using Vercel)" -ForegroundColor Yellow
    $warnings++
}

# Check 4: Apache .htaccess
Write-Host "`n4. Checking Apache .htaccess..." -ForegroundColor Yellow
if (Test-Path ".htaccess") {
    $htaccessContent = Get-Content ".htaccess" -Raw
    if ($htaccessContent -match "ErrorDocument 404") {
        Write-Host "   [OK] .htaccess has 404 configuration" -ForegroundColor Green
        $success++
    } else {
        Write-Host "   [WARN] .htaccess missing 404 directive" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "   [INFO] .htaccess not found (ok if not using Apache)" -ForegroundColor Gray
}

# Check 5: Netlify redirects
Write-Host "`n5. Checking Netlify _redirects..." -ForegroundColor Yellow
if (Test-Path "_redirects") {
    Write-Host "   [OK] _redirects file exists" -ForegroundColor Green
    $success++
} else {
    Write-Host "   [INFO] _redirects not found (ok if not using Netlify)" -ForegroundColor Gray
}

# Check 6: IIS web.config
Write-Host "`n6. Checking IIS web.config..." -ForegroundColor Yellow
if (Test-Path "web.config") {
    $webConfigContent = Get-Content "web.config" -Raw
    if ($webConfigContent -match "404.html") {
        Write-Host "   [OK] web.config configured" -ForegroundColor Green
        $success++
    } else {
        Write-Host "   [WARN] web.config may need updates" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "   [INFO] web.config not found (ok if not using IIS)" -ForegroundColor Gray
}

# Check 7: Admin folder removed
Write-Host "`n7. Checking admin directory removal..." -ForegroundColor Yellow
if (-not (Test-Path "admin")) {
    Write-Host "   [OK] Admin directory removed" -ForegroundColor Green
    $success++
} else {
    Write-Host "   [WARN] Admin directory still exists" -ForegroundColor Yellow
    $warnings++
}

# Check 8: Eluxcart page removed
Write-Host "`n8. Checking eluxcart page removal..." -ForegroundColor Yellow
if (-not (Test-Path "cgtmse-eluxcart.html")) {
    Write-Host "   [OK] cgtmse-eluxcart.html removed" -ForegroundColor Green
    $success++
} else {
    Write-Host "   [FAIL] cgtmse-eluxcart.html still exists!" -ForegroundColor Red
    $errors++
}

# Check 9: Robots.txt blocks admin
Write-Host "`n9. Checking robots.txt configuration..." -ForegroundColor Yellow
if (Test-Path "robots.txt") {
    $robotsContent = Get-Content "robots.txt" -Raw
    if ($robotsContent -match "Disallow: /admin/") {
        Write-Host "   [OK] robots.txt blocks admin directory" -ForegroundColor Green
        $success++
    } else {
        Write-Host "   [WARN] robots.txt should block /admin/" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "   [FAIL] robots.txt not found!" -ForegroundColor Red
    $errors++
}

# Check 10: Sitemap doesn't contain removed pages
Write-Host "`n10. Checking sitemap for removed pages..." -ForegroundColor Yellow
if (Test-Path "sitemap.xml") {
    $sitemapContent = Get-Content "sitemap.xml" -Raw
    if ($sitemapContent -match "eluxcart") {
        Write-Host "   [FAIL] Sitemap still contains eluxcart!" -ForegroundColor Red
        $errors++
    } elseif ($sitemapContent -match "admin") {
        Write-Host "   [FAIL] Sitemap contains admin pages!" -ForegroundColor Red
        $errors++
    } else {
        Write-Host "   [OK] Sitemap clean (no removed pages)" -ForegroundColor Green
        $success++
    }
} else {
    Write-Host "   [FAIL] sitemap.xml not found!" -ForegroundColor Red
    $errors++
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "SUMMARY" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Success: $success" -ForegroundColor Green
Write-Host "Warnings: $warnings" -ForegroundColor Yellow
Write-Host "Errors: $errors" -ForegroundColor $(if ($errors -gt 0) { "Red" } else { "Green" })

if ($errors -eq 0) {
    Write-Host "`n✓ Configuration Complete!" -ForegroundColor Green
    Write-Host "Your 404 error handling is properly configured." -ForegroundColor Cyan
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "  1. Deploy changes to your hosting provider" -ForegroundColor White
    Write-Host "  2. Test URLs (see docs/404_ERROR_HANDLING.md)" -ForegroundColor White
    Write-Host "  3. Monitor Google Search Console" -ForegroundColor White
} else {
    Write-Host "`n✗ Please fix errors before deploying" -ForegroundColor Red
}

Write-Host "`nFor detailed info, see: docs/404_ERROR_HANDLING.md" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan
