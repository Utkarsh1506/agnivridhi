#!/bin/bash

# Agnivridhi India - Hostinger Deployment Script
# This script automates the deployment process

echo "🚀 Starting deployment for Agnivridhi India..."

# Exit on any error
set -e

# Configuration
PROJECT_DIR="/home/u570936177/domains/agnivridhiindia.com/public_html"
APP_NAME="agnivridhi"
NODE_ENV="production"

# Navigate to project directory
cd $PROJECT_DIR || exit 1

echo "📂 Current directory: $(pwd)"

# Pull latest changes from GitHub
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build Next.js application
echo "🔨 Building Next.js application..."
NODE_ENV=production npm run build

# Check if PM2 process exists
if pm2 list | grep -q "$APP_NAME"; then
    echo "🔄 Restarting existing PM2 process..."
    pm2 restart $APP_NAME
else
    echo "🆕 Starting new PM2 process..."
    pm2 start npm --name "$APP_NAME" -- start
    pm2 save
fi

# Show PM2 status
echo "✅ Deployment completed successfully!"
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🌐 Site is live at: https://agnivridhiindia.com"
echo "📝 View logs: pm2 logs $APP_NAME"
