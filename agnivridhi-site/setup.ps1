# Agnivridhi Next.js Hero Setup Script
# Run this script to set up and start the development server

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Agnivridhi Next.js Setup Script   " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js 18+ from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
Write-Host ""

# Check if npm is installed
Write-Host "Checking npm installation..." -ForegroundColor Yellow
$npmVersion = npm --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm is not installed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ npm version: $npmVersion" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install dependencies!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
Write-Host ""

# Display project info
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!                   " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Project Structure:" -ForegroundColor Yellow
Write-Host "  ├── components/HeroLottie.jsx     (Hero section)" -ForegroundColor Gray
Write-Host "  ├── pages/index.js                (Home page)" -ForegroundColor Gray
Write-Host "  ├── public/lottie/                (Animations)" -ForegroundColor Gray
Write-Host "  └── styles/globals.css            (Styles)" -ForegroundColor Gray
Write-Host ""

Write-Host "Available Commands:" -ForegroundColor Yellow
Write-Host "  npm run dev     - Start development server" -ForegroundColor Gray
Write-Host "  npm run build   - Build for production" -ForegroundColor Gray
Write-Host "  npm start       - Start production server" -ForegroundColor Gray
Write-Host ""

# Ask if user wants to start dev server
Write-Host "Would you like to start the development server now? (Y/N)" -ForegroundColor Cyan
$response = Read-Host
if ($response -eq "Y" -or $response -eq "y") {
    Write-Host ""
    Write-Host "Starting development server..." -ForegroundColor Yellow
    Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Green
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host ""
    npm run dev
} else {
    Write-Host ""
    Write-Host "Setup complete! Run 'npm run dev' when you're ready to start." -ForegroundColor Green
    Write-Host ""
}
