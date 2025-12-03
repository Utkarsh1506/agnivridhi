# Hostinger Deployment Guide - Agnivridhi India

## 🚀 Deploy Next.js to Hostinger

### Prerequisites
- Hostinger Business/Premium plan with Node.js support
- GitHub repository connected
- SSH access to Hostinger

### Step 1: Configure Next.js for Hostinger

The site is already configured with `next.config.js` that works with Hostinger.

### Step 2: Environment Variables on Hostinger

1. **Log into Hostinger Panel**
2. Go to **Advanced → Environment Variables**
3. Add these variables:

```env
NODE_ENV=production
EMAIL_SERVICE=resend
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=info@agnivridhiindia.com
FROM_EMAIL=Agnivridhi India <noreply@agnivridhiindia.com>
REPLY_TO_EMAIL=info@agnivridhiindia.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc0DP0rAAAAAKuwLNnne-ogAHK-5JH0ANJLsmk_
RECAPTCHA_SECRET_KEY=6Lc0DP0rAAAAALzusQ2hOtojKuLB-agshcJSsGX-
GOOGLE_SHEETS_ENABLED=true
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbxhXssWcCEYQarFtOakmxU4iizigxPbPUiPf-_-Bb368ZFpB45GEw0lrKpXYgdk9Ix3/exec
NEXT_PUBLIC_GA_ID=G-H1GCZDZ513
NEXT_PUBLIC_GTM_ID=GT-P368QQPJ
NEXT_PUBLIC_SITE_URL=https://agnivridhiindia.com
PORT=3000
```

### Step 3: Build Configuration

Create these files in your repository:

**`.htaccess` (for Apache redirect):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
</IfModule>
```

**`package.json` scripts are already configured:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 3000",
    "export": "next export"
  }
}
```

### Step 4: GitHub Auto-Deployment

1. **Connect GitHub Repository:**
   - Hostinger Panel → Git
   - Connect your repository: `https://github.com/Utkarsh1506/agnivridhi.git`
   - Branch: `main`

2. **Setup Deployment Script:**
   
   Create `deploy.sh` in repository root (already created):
   ```bash
   #!/bin/bash
   cd /home/username/public_html
   git pull origin main
   npm install
   npm run build
   pm2 restart agnivridhi
   ```

3. **Configure Auto-Deploy Hook:**
   - Go to repository Settings → Webhooks
   - Add webhook: `https://yourdomain.com/deploy-hook.php`
   - Events: Push events

### Step 5: PM2 Process Manager

**Start application with PM2:**

```bash
# SSH into Hostinger
ssh username@yourdomain.com

# Navigate to project
cd public_html

# Install dependencies
npm install

# Build Next.js
npm run build

# Start with PM2
pm2 start npm --name "agnivridhi" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to restart on reboot
pm2 startup
```

**PM2 Commands:**
```bash
pm2 list                    # Show all processes
pm2 logs agnivridhi        # View logs
pm2 restart agnivridhi     # Restart app
pm2 stop agnivridhi        # Stop app
pm2 delete agnivridhi      # Remove from PM2
```

### Step 6: Apache/Nginx Configuration

**For Apache (Hostinger default):**

The `.htaccess` file will proxy requests to Next.js running on port 3000.

**For Nginx (if available):**

Add to your site configuration:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### Step 7: SSL Certificate

Hostinger provides free SSL. Ensure it's enabled:
1. Hostinger Panel → SSL
2. Enable SSL certificate
3. Force HTTPS redirect

### Step 8: Manual Deployment

**Via SSH:**

```bash
# Connect to Hostinger
ssh username@server.hostinger.com

# Navigate to project directory
cd domains/agnivridhiindia.com/public_html

# Pull latest changes
git pull origin main

# Install dependencies
npm install --production

# Build project
npm run build

# Restart PM2 process
pm2 restart agnivridhi

# Check status
pm2 status
```

### Step 9: File Structure on Hostinger

```
public_html/
├── .next/              # Next.js build output
├── components/
├── pages/
├── public/
├── styles/
├── node_modules/
├── .env.local          # Environment variables
├── .htaccess           # Apache config
├── next.config.js
├── package.json
└── deploy.sh
```

### Step 10: Post-Deployment Checklist

- [ ] Verify environment variables are set
- [ ] Test homepage: https://agnivridhiindia.com
- [ ] Test all pages: /about, /services, /contact
- [ ] Test consultation form submission
- [ ] Verify email notifications work
- [ ] Check Google Analytics tracking
- [ ] Test mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Check PM2 process is running: `pm2 status`
- [ ] Review logs: `pm2 logs agnivridhi`

### Troubleshooting

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

**Port Already in Use:**
```bash
# Check what's using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

**PM2 Not Starting:**
```bash
# Check logs
pm2 logs agnivridhi --lines 100

# Delete and recreate
pm2 delete agnivridhi
pm2 start npm --name "agnivridhi" -- start
```

**Memory Issues:**
```bash
# Increase Node.js memory
NODE_OPTIONS=--max_old_space_size=2048 npm run build
```

### Monitoring

**Check Site Health:**
```bash
# PM2 monitoring
pm2 monit

# Check memory usage
pm2 show agnivridhi

# View real-time logs
pm2 logs agnivridhi --lines 50
```

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to Hostinger
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          cd domains/agnivridhiindia.com/public_html
          git pull origin main
          npm install --production
          npm run build
          pm2 restart agnivridhi
```

### Performance Optimization

**Enable Compression:**
Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Cache Static Assets:**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Support

If you encounter issues:
1. Check PM2 logs: `pm2 logs agnivridhi`
2. Verify build succeeded: `npm run build`
3. Check Hostinger server status
4. Contact Hostinger support if server-related

### Quick Commands Reference

```bash
# Deploy manually
git pull && npm install && npm run build && pm2 restart agnivridhi

# View logs
pm2 logs agnivridhi --lines 100

# Check status
pm2 status

# Restart app
pm2 restart agnivridhi

# Clear cache
rm -rf .next && npm run build
```

---

Your Next.js site is now deployed on Hostinger with GitHub integration! 🚀
