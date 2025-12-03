# 🚀 Quick Start Guide - Agnivridhi Next.js Hero

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start Development Server
```powershell
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

---

## 📋 Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Key Features

✅ **Hero Section with:**
- Responsive headline: "Hum Badhayenge Aapka Business"
- Auto-rotating achievement ticker (4s interval)
- Lottie animations (blob + trophy)
- Framer Motion entrance effects
- Floating Book Consultation CTA
- Premium dark gradient background

✅ **Animations:**
- Respects `prefers-reduced-motion`
- Staggered entrance animations
- Hover micro-interactions
- Smooth transitions

✅ **Responsive:**
- Desktop: 2-column layout
- Tablet: Stacked layout
- Mobile: Vertical stack

---

## 📂 Important Files

```
components/HeroLottie.jsx    ← Main hero component
pages/index.js               ← Home page
styles/globals.css           ← Global styles
tailwind.config.js           ← Tailwind customization
public/lottie/               ← Animation assets
```

---

## 🎭 Customization Quick Tips

### Change Colors
`tailwind.config.js` → `theme.extend.colors`

### Change Content
`components/HeroLottie.jsx` → `achievements` array

### Change Fonts
`styles/globals.css` → `@import` Google Fonts

### Change Animation Speed
`components/HeroLottie.jsx` → `setInterval(4000)` ← Change this number

---

## 🧪 Testing Checklist

### Desktop (1920px)
- [ ] Hero displays in 2 columns
- [ ] All animations play smoothly
- [ ] Hover effects work on buttons
- [ ] Achievement ticker auto-rotates

### Mobile (375px)
- [ ] Content stacks vertically
- [ ] Font sizes are readable
- [ ] Touch targets are accessible
- [ ] No horizontal scrolling

### Accessibility
- [ ] Keyboard navigation works (Tab key)
- [ ] Reduced motion respected
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA

---

## 🐛 Common Issues & Fixes

### Issue: Animations not playing
**Fix:** Check `prefers-reduced-motion` setting in browser/OS

### Issue: Lottie not loading
**Fix:** Verify files exist in `public/lottie/` directory

### Issue: Tailwind styles not applying
**Fix:** 
```powershell
rm -rf .next
npm run dev
```

### Issue: Build errors
**Fix:**
```powershell
rm -rf node_modules .next
npm install
npm run build
```

---

## 📦 Production Deployment

### Quick Deploy to Vercel
```powershell
npm i -g vercel
vercel login
vercel --prod
```

### Manual Build
```powershell
npm run build
npm start
```

---

## 🎯 Performance Targets

| Metric | Target | Priority |
|--------|--------|----------|
| Lighthouse Performance | 90+ | High |
| First Contentful Paint | < 1.8s | High |
| Largest Contentful Paint | < 2.5s | High |
| Time to Interactive | < 3.8s | Medium |
| Cumulative Layout Shift | < 0.1 | High |

---

## 📞 Quick Reference Links

- **Next.js Docs:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lottie Files:** https://lottiefiles.com/

---

## 🎨 Lottie Asset Sources

### Current Assets (Included):
- `hero-blob.json` - Decorative background blob
- `achievement-icon.json` - Trophy/award icon

### Get New Assets:
1. Visit https://lottiefiles.com/
2. Search for: "gradient blob" or "trophy"
3. Download JSON
4. Place in `public/lottie/`
5. Update imports in `HeroLottie.jsx`

**Keep files under 50KB for best performance!**

---

## 🔥 Pro Tips

1. **Optimize Images:** Use WebP format with `next/image`
2. **Lazy Load:** Load below-fold content lazily
3. **Compress Lottie:** Use LottieFiles JSON editor
4. **Test Performance:** Run Lighthouse regularly
5. **Monitor Errors:** Use Sentry or similar tool
6. **Enable Analytics:** Track user behavior
7. **Update Dependencies:** Keep packages current
8. **Use Environment Variables:** Never hardcode secrets

---

## ✅ Pre-Launch Checklist

- [ ] All animations work smoothly
- [ ] Responsive on all devices tested
- [ ] Lighthouse score > 90
- [ ] Accessibility audit passed
- [ ] No console errors
- [ ] Forms work correctly
- [ ] Analytics configured
- [ ] SEO meta tags added
- [ ] Favicon added
- [ ] Social sharing tested

---

**Need help? Check README-NEXTJS.md for detailed documentation!**

🚀 **Happy building!**
