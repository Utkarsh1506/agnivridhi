# Agnivridhi - Next.js Hero Section with Lottie & Framer Motion

A production-ready, responsive hero section for a business + IT consultancy website with advanced animations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```powershell
npm install
```

This will install:
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `lottie-react` - Lottie animations
- `tailwindcss`, `postcss`, `autoprefixer` - Styling

2. **Run development server:**
```powershell
npm run dev
```

3. **Open browser:**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
agnivridhi-site/
├── components/
│   └── HeroLottie.jsx          # Main hero component with animations
├── pages/
│   ├── _app.js                 # Next.js app wrapper
│   ├── _document.js            # HTML document structure
│   └── index.js                # Home page with hero + placeholder sections
├── public/
│   └── lottie/
│       ├── hero-blob.json      # Decorative blob animation
│       └── achievement-icon.json # Trophy/award icon
├── styles/
│   └── globals.css             # Global styles + Tailwind config
├── tailwind.config.js          # Tailwind customization
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Features Implemented

### Visual & UX
- ✅ Light-on-dark premium hero with smooth gradient background
- ✅ Large responsive headline: "Hum Badhayenge Aapka Business"
- ✅ Subtitle with clear value proposition
- ✅ Primary CTA (gradient pill) and secondary CTA (outline pill)
- ✅ Achievement ticker with auto-rotate (4s interval)
- ✅ Manual prev/next controls for achievements
- ✅ Lottie animations: decorative blob + trophy icon
- ✅ Floating SVG scribble accent with rotation
- ✅ "Merger & Acquisition" secondary card
- ✅ Floating "Book Consultation" CTA bubble (bottom-right)
- ✅ Soft SVG wave divider at bottom
- ✅ Trust indicators (avatar group + rating)

### Animations (Framer Motion)
- ✅ Entrance animations (fade + slide + scale)
- ✅ Staggered children animations
- ✅ Auto-rotating achievement cards with AnimatePresence
- ✅ Continuous float motion for decorative blob
- ✅ Hover micro-interactions (scale, shadow)
- ✅ Respects `prefers-reduced-motion`

### Responsive Design
- ✅ Desktop: Two-column layout (content left, visuals right)
- ✅ Tablet: Stacked layout maintaining visual hierarchy
- ✅ Mobile: Vertical stack, reduced font sizes, hidden decorative elements
- ✅ Touch-friendly controls on mobile

### Accessibility
- ✅ `aria-label` on interactive elements
- ✅ Keyboard navigation support
- ✅ Reduced motion detection and respect
- ✅ Semantic HTML structure
- ✅ Color contrast compliance

## 🎭 Lottie Animation Assets

### Current Assets (Included)
The project includes two custom Lottie JSON files:

1. **hero-blob.json** - Decorative background blob with:
   - Slow rotation and float animation
   - Dual-layer organic shapes
   - Low opacity for subtle effect
   - Primary/secondary color gradient

2. **achievement-icon.json** - Trophy/award icon with:
   - Wobble animation on loop
   - Scale pulse effect
   - Star sparkle accent
   - Gold/yellow color scheme

### Alternative Lottie Sources
For production, consider replacing with optimized assets from:

**LottieFiles.com - Free Assets:**
- **Decorative Blobs:** 
  - Search: "abstract blob", "gradient shape", "fluid animation"
  - Recommended: https://lottiefiles.com/animations/gradient-blob
  
- **Achievement/Trophy:**
  - Search: "trophy", "award", "achievement", "success"
  - Recommended: https://lottiefiles.com/animations/trophy-award

**How to replace:**
1. Download JSON from LottieFiles
2. Place in `public/lottie/` directory
3. Update imports in `components/HeroLottie.jsx`:
   ```javascript
   import heroBlobData from '../public/lottie/your-blob-file.json';
   import achievementIconData from '../public/lottie/your-trophy-file.json';
   ```

**Performance Tips:**
- Keep Lottie files under 50KB each
- Limit to 60-120 frames
- Use solid colors instead of gradients when possible
- Compress JSON using https://lottiefiles.com/tools/json-editor

## 🖼️ Image Optimization

### Using next/image
Replace placeholder images with optimized Next.js images:

```jsx
import Image from 'next/image';

// Instead of:
<img src="/images/photo.jpg" alt="Description" />

// Use:
<Image 
  src="/images/photo.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority={true}  // For above-the-fold images
  placeholder="blur"  // Optional: blur effect while loading
/>
```

### Image Best Practices
- Place images in `public/images/` directory
- Use WebP format for better compression
- Provide width and height to prevent layout shift
- Use `priority` prop for hero images
- Enable blur placeholder for smooth loading

## 🧪 Testing

### Test Reduced Motion

**Chrome/Edge:**
1. Open DevTools (F12)
2. Press Ctrl+Shift+P (Command palette)
3. Type "Emulate CSS prefers-reduced-motion"
4. Select "prefers-reduced-motion: reduce"

**Firefox:**
1. Type `about:config` in address bar
2. Search for `ui.prefersReducedMotion`
3. Set value to `1`

**macOS System Setting:**
System Preferences → Accessibility → Display → Reduce Motion

**Windows System Setting:**
Settings → Ease of Access → Display → Show animations in Windows

### Responsive Testing
Test on these breakpoints:
- Mobile: 375px, 414px (iPhone)
- Tablet: 768px, 1024px (iPad)
- Desktop: 1280px, 1440px, 1920px

**Chrome DevTools:**
- Press F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test portrait and landscape orientations
- Use throttling to test slow connections

### Browser Compatibility
Test on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Production Optimization

### Build for Production
```powershell
npm run build
npm start
```

### Performance Checklist
- [ ] Run Lighthouse audit (aim for 90+ performance score)
- [ ] Optimize Lottie JSON files (compress, reduce frames)
- [ ] Use `next/image` for all images
- [ ] Enable lazy loading for below-the-fold content
- [ ] Minimize JavaScript bundle size
- [ ] Test on 3G network connection

### Deployment
```powershell
# Build optimized production bundle
npm run build

# Deploy to Vercel (recommended)
npm i -g vercel
vercel

# Or deploy to Netlify
npm run build
# Upload 'out' folder to Netlify
```

### Environment Variables
Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_API_URL=https://api.agnivridhi.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🎯 QA Checklist

### Functionality
- [ ] Hero section loads without errors
- [ ] Achievement ticker auto-rotates every 4 seconds
- [ ] Prev/Next buttons navigate achievements correctly
- [ ] Dot indicators show current achievement
- [ ] All CTAs are clickable and have hover states
- [ ] Floating consultation button appears on desktop
- [ ] Wave divider displays correctly

### Animations
- [ ] Entrance animations play smoothly
- [ ] Lottie blobs animate continuously
- [ ] Achievement transitions are smooth
- [ ] Hover effects work on cards and buttons
- [ ] Floating elements move smoothly
- [ ] No animation jank or stutter

### Responsive Design
- [ ] Desktop (1920px): Two-column layout works
- [ ] Tablet (768px): Layout stacks appropriately
- [ ] Mobile (375px): All content readable
- [ ] Font sizes scale correctly
- [ ] Images don't overflow containers
- [ ] Touch targets are at least 44x44px

### Accessibility
- [ ] All buttons have accessible names
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader announces content correctly
- [ ] Reduced motion disables animations
- [ ] Focus indicators are visible

### Performance
- [ ] Page loads in under 3 seconds (3G)
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] No console errors or warnings
- [ ] Lighthouse score > 90

### Cross-Browser
- [ ] Chrome: All features work
- [ ] Firefox: All features work
- [ ] Safari: All features work
- [ ] Edge: All features work
- [ ] Mobile Safari: Touch interactions work
- [ ] Mobile Chrome: Touch interactions work

### SEO
- [ ] Title tag is descriptive
- [ ] Meta description is compelling
- [ ] Open Graph tags are set
- [ ] Images have alt text
- [ ] Heading hierarchy is correct (H1 → H2 → H3)

## 🛠️ Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#f94b3a',  // Change primary color
    // ... other shades
  }
}
```

### Fonts
Edit `styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['Your Font', 'sans-serif'],
}
```

### Animations
Adjust timing in `components/HeroLottie.jsx`:
```javascript
// Change auto-rotate interval (default: 4000ms)
intervalRef.current = setInterval(() => {
  setCurrentAchievement((prev) => (prev + 1) % achievements.length);
}, 6000); // Change to 6 seconds
```

### Content
Update achievements in `components/HeroLottie.jsx`:
```javascript
const achievements = [
  {
    value: 'Your Value',
    label: 'Your Label',
    description: 'Your description'
  },
  // Add more...
];
```

## 📚 Technical Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 10
- **Lottie:** lottie-react 2.4
- **Language:** JavaScript (ES6+)

## 🐛 Troubleshooting

### Animations not playing
- Check browser console for errors
- Verify Lottie JSON files are in `public/lottie/`
- Check `prefers-reduced-motion` setting

### Styling issues
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`
- Check Tailwind purge settings

### Build errors
- Update dependencies: `npm update`
- Check Node.js version: `node --version` (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`

## 📞 Support

For issues or questions:
1. Check this README
2. Review Next.js docs: https://nextjs.org/docs
3. Framer Motion docs: https://www.framer.com/motion/
4. Tailwind docs: https://tailwindcss.com/docs

## 📄 License

This project is proprietary to Agnivridhi. All rights reserved.

---

**Built with ❤️ for Agnivridhi**
