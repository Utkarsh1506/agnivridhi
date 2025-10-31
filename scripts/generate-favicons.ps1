# Generate PNG favicons and favicon.ico from img/favicon2.svg using ImageMagick (magick)
# Usage: Run this in PowerShell from the repo root:
#   .\scripts\generate-favicons.ps1
# Requirements: ImageMagick (magick) in PATH. On Windows you can install via Chocolatey: choco install imagemagick

$svg = "img\favicon2.svg"
if (-not (Test-Path $svg)) {
    Write-Error "Source SVG not found: $svg"
    exit 1
}

# Sizes to export
$sizes = @(16,32,48,64,96,128,180)
foreach ($s in $sizes) {
    $out = "img\favicon-$s.png"
    Write-Host "Generating $out ($s x $s)"
    # Use magick to rasterize, preserving transparency
    magick convert "$svg" -background none -resize ${s}x${s} "$out"
    if ($LASTEXITCODE -ne 0) {
        Write-Error "magick failed for size $s"
        exit $LASTEXITCODE
    }
}

# Create a favicon.png (common fallback) as 32x32
Write-Host "Creating img\favicon.png (32x32)"
magick convert "$svg" -background none -resize 32x32 "img\favicon.png"

# Create an Apple touch icon
Write-Host "Creating img\apple-touch-icon.png (180x180)"
magick convert "$svg" -background none -resize 180x180 "img\apple-touch-icon.png"

# Create favicon.ico (contains multiple sizes)
# Include 16,32,48,64
Write-Host "Creating img\favicon.ico (multi-size)"
$icoInputs = @("img\favicon-16.png","img\favicon-32.png","img\favicon-48.png","img\favicon-64.png")
magick convert $icoInputs "img\favicon.ico"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Favicons generated successfully in img/"
    Write-Host "Files:"
    Get-ChildItem img\favicon*.png, img\favicon.ico | ForEach-Object { Write-Host " - $_" }
    exit 0
} else {
    Write-Error "Failed to create favicon.ico"
    exit $LASTEXITCODE
}
