# 🚀 Deployment Guide - Agnivridhi India Next.js Site

## 📋 Pre-Deployment Checklist

### 1. Build Verification
```bash
# Clean build
Remove-Item -Recurse -Force .next
npm run build

# Verify all 18 pages generated successfully
# Expected output: ✓ Generating static pages (18/18)
```

### 2. Local Production Test
```bash
# Start production server
npm start

# Visit http://localhost:3000
# Test all pages manually
```

### 3. Code Review
- [x] All images optimized with lazy loading
- [x] SEO meta tags on all pages
- [x] Structured data implemented
- [x] Forms working correctly
- [x] Analytics tracking configured
- [x] No console errors
- [x] Mobile responsive
- [ ] Image files compressed (TODO)
- [ ] WebP conversion (TODO)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Built for Next.js)

**Why Vercel:**
- Zero-config deployment for Next.js
- Automatic SSL certificates
- Global CDN
- Automatic image optimization
- Built-in analytics
- Free tier available

**Steps:**
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel

   # Production deployment
   vercel --prod
   ```

4. **Custom Domain**
   - Go to Vercel Dashboard → Project Settings → Domains
   - Add `agnivridhiindia.com`
   - Update DNS records as instructed

**Environment Variables (if needed):**
```bash
vercel env add NEXT_PUBLIC_API_URL
vercel env add GOOGLE_ANALYTICS_ID
```

### Option 2: Netlify

**Steps:**
1. **Build Command:** `npm run build`
2. **Publish Directory:** `out`
3. **Add to `next.config.js`:**
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

4. **Deploy via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### Option 3: Traditional Hosting (cPanel, Hostinger, etc.)

**Requirements:**
- Node.js support (v18+)
- SSH access

**Steps:**
1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload files via FTP/SSH:**
   - Upload entire project folder
   - OR upload only: `.next/`, `public/`, `package.json`, `next.config.js`

3. **SSH into server:**
   ```bash
   ssh user@yourserver.com
   cd /path/to/website
   npm install --production
   npm start
   ```

4. **Setup PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "agnivridhi" -- start
   pm2 save
   pm2 startup
   ```

## 🔧 Post-Deployment Configuration

### 1. DNS Configuration
Point your domain to deployment:

**For Vercel:**
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

**For Netlify:**
```
A Record: @ → 75.2.60.5
CNAME: www → yoursite.netlify.app
```

### 2. SSL Certificate
- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic
- Traditional: Install certbot or use hosting panel

### 3. Environment Variables

**Production Variables:**
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://agnivridhiindia.com
NEXT_PUBLIC_GA_ID=G-H1GCZDZ513
NEXT_PUBLIC_FB_PIXEL_ID=your-pixel-id
```

### 4. Google Search Console Setup

1. **Verify Ownership:**
   - Go to https://search.google.com/search-console
   - Add property: `agnivridhiindia.com`
   - Verify via HTML file or DNS

2. **Submit Sitemap:**
   ```
   https://agnivridhiindia.com/sitemap.xml
   ```

3. **Request Indexing:**
   - Submit homepage and key pages
   - Use URL Inspection tool

### 5. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site
3. Submit sitemap: `https://agnivridhiindia.com/sitemap.xml`

### 6. Google Analytics Verification

1. Visit your live site
2. Open Chrome DevTools → Network tab
3. Verify GA requests:
   - `https://www.google-analytics.com/g/collect`
   - `https://www.googletagmanager.com/gtag/js`

### 7. Facebook Pixel Verification

1. Install Facebook Pixel Helper (Chrome Extension)
2. Visit your site
3. Verify pixel fires correctly

## 📊 Performance Monitoring

### Initial Performance Audit
```bash
# Test live site
https://pagespeed.web.dev/
# Enter: https://agnivridhiindia.com
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals
Monitor in Google Search Console:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Set Up Monitoring
1. **Google Search Console** - Weekly checks
2. **Google Analytics** - Daily traffic
3. **Uptime Robot** - 24/7 monitoring (free)
   - https://uptimerobot.com
   - Add HTTP monitor for homepage

## 🔒 Security Checklist

- [x] HTTPS enabled (SSL certificate)
- [x] Security headers configured
- [x] Forms protected (if using backend)
- [x] API routes secured
- [x] Environment variables properly set
- [x] No sensitive data in client-side code

### Recommended Headers (add in deployment platform)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 🎯 Post-Launch Tasks

### Immediate (Day 1)
- [ ] Verify all pages load correctly
- [ ] Test forms and modal
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google
- [ ] Share site with stakeholders

### Week 1
- [ ] Monitor analytics for errors
- [ ] Check Search Console for issues
- [ ] Review Core Web Vitals
- [ ] Test on multiple browsers
- [ ] Gather user feedback

### Month 1
- [ ] Analyze traffic patterns
- [ ] Review conversion rates
- [ ] Check consultation form submissions
- [ ] Optimize based on data
- [ ] Update content if needed

## 📞 Support & Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update
npm audit fix

# Test after updates
npm run build
npm start
```

### Backup Strategy
- **Code**: Keep in Git repository
- **Content**: Export from CMS (if applicable)
- **Database**: Regular backups (if using)

### Emergency Rollback
```bash
# Vercel
vercel rollback

# Git
git revert HEAD
git push origin main
```

## 🎓 Additional Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Web.dev: https://web.dev/
- Google Search Central: https://developers.google.com/search

## 📝 Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# Deployment
vercel --prod           # Deploy to Vercel
netlify deploy --prod   # Deploy to Netlify

# Monitoring
npm run analyze         # Analyze bundle size
```

## ✅ Current Status

**Ready for Deployment:**
- ✅ All 18 pages building successfully
- ✅ SEO fully optimized
- ✅ Performance optimized
- ✅ Animations working
- ✅ Mobile responsive
- ✅ Forms functional

**Pending:**
- ⚠️ Image compression (optional optimization)
- ⚠️ WebP conversion (optional optimization)
- ⚠️ Final content review

**Recommendation:** Deploy to Vercel for best Next.js experience and automatic optimizations!
