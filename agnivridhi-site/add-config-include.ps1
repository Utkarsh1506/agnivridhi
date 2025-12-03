# Add config.js include before main.js in all HTML files that reference main.js

Write-Host "Adding js/config.js include to HTML files..." -ForegroundColor Cyan

$files = Get-ChildItem -Path . -Filter *.html -Recurse | Select-Object -ExpandProperty FullName

$updated = 0
foreach ($file in $files) {
  $content = Get-Content $file -Raw
  
  if ($content -match '<script src="js/main.js">') {
    if ($content -notmatch '<script src="js/config.js">') {
      $newContent = $content -replace '(?s)(<script src="js/main.js">)', '<script src="js/config.js"></script>`r`n    $1'
      if ($newContent -ne $content) {
        Set-Content -Path $file -Value $newContent -NoNewline
        Write-Host "  Updated: $file" -ForegroundColor Green
        $updated++
      }
    } else {
      Write-Host "  Already has config: $file" -ForegroundColor Yellow
    }
  }
}

Write-Host "Done. Files updated: $updated" -ForegroundColor Cyan
