# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] No console.log statements in production code
- [ ] All TypeScript/ESLint errors resolved
- [ ] No unused imports or variables
- [ ] Code is properly formatted

### 2. Performance Optimization
- [ ] Images optimized (WebP format, proper sizes)
- [ ] Lottie files compressed (< 50KB each)
- [ ] Unused dependencies removed
- [ ] Build bundle analyzed for size

### 3. SEO & Meta Tags
- [ ] Meta descriptions for all pages
- [ ] Open Graph tags configured
- [ ] Twitter card tags added
- [ ] Favicon.ico in public folder
- [ ] robots.txt configured
- [ ] sitemap.xml generated

### 4. Security
- [ ] Environment variables secured
- [ ] API keys not exposed in client code
- [ ] Content Security Policy configured
- [ ] HTTPS enabled

## Build Production Bundle

```powershell
# Test production build locally
npm run build
npm start

# Check build output
# - Look for bundle sizes
# - Ensure no build errors
# - Verify static optimization
```

Expected output:
```
Route (pages)                              Size     First Load JS
┌ ○ / (ISR: 3600 Seconds)                 4.2 kB          85 kB
├   └ css/abc123.css                      2.1 kB
├ ○ /404                                  1.8 kB          82 kB
└ ○ /_app                                 0 B            80.8 kB
```

## Deployment Platforms

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Optimized for Next.js
- Automatic builds on git push
- Edge network CDN
- Free SSL certificates
- Preview deployments

**Steps:**

1. Install Vercel CLI:
```powershell
npm i -g vercel
```

2. Login to Vercel:
```powershell
vercel login
```

3. Deploy:
```powershell
# First deployment
vercel

# Production deployment
vercel --prod
```

4. Configure custom domain:
```powershell
vercel domains add agnivridhi.com
```

**Environment Variables:**
Add in Vercel Dashboard → Settings → Environment Variables

### Option 2: Netlify

1. Install Netlify CLI:
```powershell
npm i -g netlify-cli
```

2. Login:
```powershell
netlify login
```

3. Build and deploy:
```powershell
npm run build
netlify deploy --prod
```

4. Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3: AWS (S3 + CloudFront)

1. Build static export:
```powershell
# Add to next.config.js:
# output: 'export'

npm run build
```

2. Upload to S3:
```powershell
aws s3 sync out/ s3://your-bucket-name
```

3. Configure CloudFront for CDN

### Option 4: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```powershell
docker build -t agnivridhi-site .
docker run -p 3000:3000 agnivridhi-site
```

## Performance Monitoring

### 1. Setup Analytics

**Google Analytics 4:**
```javascript
// pages/_app.js
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
```

**Vercel Analytics:**
```javascript
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### 2. Performance Monitoring Tools

- **Lighthouse:** Built into Chrome DevTools
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **GTmetrix:** https://gtmetrix.com/

### 3. Error Tracking

**Sentry Integration:**
```powershell
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

## Post-Deployment Testing

### Functionality Tests
```powershell
# Test production site
# 1. Visit https://your-domain.com
# 2. Check all interactive elements
# 3. Test on multiple devices
# 4. Verify forms work
# 5. Check console for errors
```

### Performance Tests
```powershell
# Run Lighthouse
# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### SEO Tests
- Google Search Console: Submit sitemap
- Check mobile-friendliness
- Verify structured data
- Test social sharing (Open Graph)

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Rollback Strategy

### Vercel
```powershell
# List deployments
vercel ls

# Promote previous deployment
vercel promote [deployment-url]
```

### Manual Rollback
```powershell
# Revert to previous git commit
git revert HEAD
git push origin main

# Or checkout previous version
git checkout <previous-commit-hash>
git push origin main --force
```

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check analytics for errors
- [ ] Review performance metrics
- [ ] Update dependencies (security patches)
- [ ] Backup database (if applicable)

### Monthly Tasks
- [ ] Run full accessibility audit
- [ ] Review and optimize images
- [ ] Check for broken links
- [ ] Update content

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Performance optimization review
- [ ] SEO audit
- [ ] Security audit

## Common Issues

### Build Fails
```powershell
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Slow Performance
- Check bundle size: `npm run build`
- Analyze with: https://www.npmjs.com/package/@next/bundle-analyzer
- Optimize images and Lottie files
- Enable CDN caching

### Styling Issues
- Ensure Tailwind config is correct
- Check CSS purging settings
- Verify all classes are in content paths

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **Deployment Examples:** https://github.com/vercel/next.js/tree/canary/examples

---

**Deployment Checklist Summary:**
1. ✅ Run production build locally
2. ✅ Test all functionality
3. ✅ Check Lighthouse scores
4. ✅ Configure environment variables
5. ✅ Deploy to hosting platform
6. ✅ Setup custom domain
7. ✅ Enable SSL
8. ✅ Configure analytics
9. ✅ Test production site
10. ✅ Monitor performance

**Ready to deploy!** 🚀
