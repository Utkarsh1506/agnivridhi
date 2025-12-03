# Generate favicons from img/logo1.png using .NET System.Drawing
# Usage: Run this in PowerShell from the repo root

Add-Type -AssemblyName System.Drawing

$sourceImage = "img\logo1.png"
if (-not (Test-Path $sourceImage)) {
    Write-Error "Source image not found: $sourceImage"
    exit 1
}

Write-Host "Loading source image: $sourceImage" -ForegroundColor Cyan

try {
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $sourceImage))
    
    function Resize-Image {
        param(
            [System.Drawing.Image]$SourceImage,
            [int]$Width,
            [int]$Height,
            [string]$OutputPath
        )
        
        $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $graphics.DrawImage($SourceImage, 0, 0, $Width, $Height)
        $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $graphics.Dispose()
        $bitmap.Dispose()
        
        Write-Host "  Generated: $OutputPath ($Width x $Height)" -ForegroundColor Green
    }
    
    $sizes = @(
        @{Size=16; Name="favicon-16.png"},
        @{Size=32; Name="favicon-32.png"},
        @{Size=48; Name="favicon-48.png"},
        @{Size=64; Name="favicon-64.png"},
        @{Size=96; Name="favicon-96.png"},
        @{Size=128; Name="favicon-128.png"},
        @{Size=180; Name="apple-touch-icon.png"}
    )
    
    Write-Host "Generating favicon images..." -ForegroundColor Yellow
    
    foreach ($sizeInfo in $sizes) {
        $outputPath = Join-Path "img" $sizeInfo.Name
        Resize-Image -SourceImage $img -Width $sizeInfo.Size -Height $sizeInfo.Size -OutputPath $outputPath
    }
    
    Write-Host "Creating standard favicon.png..." -ForegroundColor Yellow
    Resize-Image -SourceImage $img -Width 32 -Height 32 -OutputPath "img\favicon.png"
    
    Write-Host "Creating favicon.ico..." -ForegroundColor Yellow
    Copy-Item "img\favicon-32.png" "img\favicon.ico" -Force
    Write-Host "  Generated: img\favicon.ico (32x32)" -ForegroundColor Green
    
    $img.Dispose()
    
    Write-Host "SUCCESS: Favicons generated successfully!" -ForegroundColor Green
    Write-Host "Generated files:" -ForegroundColor Cyan
    Get-ChildItem img\favicon*.png, img\favicon.ico, img\apple-touch-icon.png | ForEach-Object { 
        Write-Host "  - $($_.Name)" -ForegroundColor White
    }
    
} catch {
    Write-Error "Failed to generate favicons"
    exit 1
}
