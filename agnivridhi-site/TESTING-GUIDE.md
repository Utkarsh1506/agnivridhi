# 🧪 Testing & QA Guide - Agnivridhi Hero Section

## Test Environment Setup

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Multiple browsers available (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices or browser DevTools

---

## 1. Functional Testing

### Hero Section Core Features

#### Achievement Ticker
- [ ] **Auto-rotation:** Ticker changes every 4 seconds
- [ ] **Previous button:** Navigates to previous achievement
- [ ] **Next button:** Navigates to next achievement
- [ ] **Dot indicators:** Shows current achievement (active dot is longer)
- [ ] **Click dots:** Clicking dot navigates to that achievement
- [ ] **Smooth transition:** AnimatePresence creates fade effect
- [ ] **Loop behavior:** After last achievement, returns to first

**Test Steps:**
1. Load page
2. Wait 4 seconds → Achievement should change
3. Click "Previous" button → Should show previous achievement
4. Click "Next" button → Should show next achievement
5. Click each dot → Should jump to that achievement

#### Call-to-Action Buttons

**Primary CTA (Get Started):**
- [ ] Button displays with gradient background
- [ ] Hover effect: scales up and adds shadow
- [ ] Click effect: scales down briefly
- [ ] Arrow icon slides right on hover
- [ ] Accessible via keyboard (Tab + Enter)

**Secondary CTA (Explore Services):**
- [ ] Button displays with outline style
- [ ] Hover effect: background fills white, text turns dark
- [ ] Click effect: scales down briefly
- [ ] Arrow icon rotates on hover
- [ ] Accessible via keyboard

**Test Steps:**
1. Hover over each button → Verify animations
2. Click each button → Verify click animation
3. Tab to buttons → Verify focus indicators
4. Press Enter on focused button → Should trigger action

#### Floating Book Consultation Button
- [ ] Appears bottom-right on desktop (hidden on mobile)
- [ ] Displays after 1 second delay
- [ ] Hover effect: scales up with shadow
- [ ] Green pulse dot animates
- [ ] Click effect: scales down
- [ ] Position: `fixed` bottom-right with proper spacing

**Test Steps:**
1. Load page → Wait 1 second → Button should fade in
2. Hover over button → Should scale up
3. Resize to mobile (<768px) → Button should hide

---

## 2. Animation Testing

### Entrance Animations

**Elements that should animate on load:**
1. Badge ("🚀 Trusted by 500+ MSMEs")
2. Main headline
3. Subtitle
4. CTA buttons
5. Trust indicators
6. Achievement card
7. M&A card
8. Feature cards (Funding, Compliance)

**Expected behavior:**
- Staggered animation (0.15s delay between children)
- Fade in + slide up motion
- Duration: 0.6s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Test Steps:**
1. Refresh page with DevTools open
2. Observe staggered entrance
3. All elements should fade in sequentially
4. No layout shift should occur

### Continuous Animations

**Hero Blob Lottie:**
- [ ] Plays on loop
- [ ] Floats up and down (6s cycle)
- [ ] Low opacity (20%)
- [ ] Hidden on mobile
- [ ] Smooth motion, no jank

**Trophy Icon Lottie:**
- [ ] Plays on loop
- [ ] Wobbles and pulses
- [ ] Star sparkle effect
- [ ] Small size, doesn't distract

**Floating Scribble SVG:**
- [ ] Opacity pulses (0.3 → 0.5 → 0.3)
- [ ] Scale animates (0.8 → 1.1 → 0.8)
- [ ] Rotates (-10° → 10° → -10°)
- [ ] Hidden on mobile

**Test Steps:**
1. Load page → All animations should start
2. Observe for 10+ seconds → Animations should loop
3. Check performance → Should be 60fps
4. Resize to mobile → Decorative animations hide

### Reduced Motion

**Test Method:**
```
Chrome: DevTools → Command Palette (Ctrl+Shift+P) → 
"Emulate CSS prefers-reduced-motion: reduce"
```

**Expected behavior when reduced motion enabled:**
- [ ] No auto-rotation of achievements
- [ ] No float animations
- [ ] No continuous Lottie loops
- [ ] Entrance animations instant (0.01ms)
- [ ] Hover effects still work (essential feedback)
- [ ] All functionality remains accessible

**Test Steps:**
1. Enable reduced motion
2. Refresh page → Animations should be minimal
3. Test all features → Everything should work
4. Disable reduced motion → Animations return

---

## 3. Responsive Design Testing

### Breakpoints to Test

| Device | Width | Expected Layout |
|--------|-------|-----------------|
| Mobile Small | 375px | Vertical stack, smaller fonts |
| Mobile Large | 414px | Vertical stack |
| Tablet | 768px | Vertical stack, medium fonts |
| Desktop Small | 1024px | 2-column layout |
| Desktop Medium | 1440px | 2-column layout, optimal |
| Desktop Large | 1920px | 2-column layout, max-width container |

### Desktop (1920px)

**Layout:**
- [ ] Two-column grid (content left, visuals right)
- [ ] Headline: 4rem - 5rem font size
- [ ] All elements visible (blobs, scribbles)
- [ ] Floating consultation button visible
- [ ] Wave divider at bottom

**Test Steps:**
1. Set viewport to 1920px
2. Verify 2-column layout
3. Check all spacing is correct
4. No horizontal scrolling

### Tablet (768px)

**Layout:**
- [ ] Stacked layout (content on top, visuals below)
- [ ] Headline: 3rem - 4rem font size
- [ ] Spacing reduced appropriately
- [ ] Touch targets enlarged (min 44x44px)
- [ ] Some decorative elements hidden

**Test Steps:**
1. Set viewport to 768px
2. Scroll through entire hero
3. Verify readability
4. Test touch interactions (if available)

### Mobile (375px)

**Layout:**
- [ ] Fully vertical stack
- [ ] Headline: 2.25rem - 3rem font size
- [ ] Buttons stack vertically
- [ ] Achievement card full-width
- [ ] Decorative blobs hidden
- [ ] Floating consultation button hidden
- [ ] No horizontal overflow

**Test Steps:**
1. Set viewport to 375px
2. Check for text overflow
3. Verify all content readable
4. Test touch interactions
5. Check landscape orientation

---

## 4. Accessibility Testing

### Keyboard Navigation

**Tab Order (expected):**
1. Primary CTA (Get Started)
2. Secondary CTA (Explore Services)
3. Previous achievement button
4. Next achievement button
5. Achievement dot indicators (1-4)
6. Floating consultation button (desktop only)

**Test Steps:**
1. Click in address bar
2. Press Tab repeatedly
3. Verify logical tab order
4. Press Enter on focused elements
5. Visual focus indicator should be clear

### Screen Reader Testing

**Tools:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

**Elements to verify:**
- [ ] Main headline announced correctly
- [ ] Buttons have clear labels
- [ ] Achievement values announced
- [ ] Aria-labels present on icon-only buttons
- [ ] Aria-hidden on decorative elements
- [ ] Live regions for dynamic content

**Test Steps:**
1. Enable screen reader
2. Tab through page
3. Verify announcements are clear
4. Navigate by headings (H key)
5. Navigate by buttons (B key)

### Color Contrast

**Requirements:**
- Normal text (< 18px): 4.5:1 ratio
- Large text (≥ 18px): 3:1 ratio
- UI components: 3:1 ratio

**Test locations:**
- [ ] White text on dark background
- [ ] Button text on gradient
- [ ] Achievement card text
- [ ] Subtle text (descriptions)

**Tools:**
- Chrome DevTools → Inspect → Accessibility pane
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

### Focus Indicators

**Test Steps:**
1. Tab through all interactive elements
2. Verify visible outline on focused elements
3. Focus indicator should be at least 2px
4. Color should contrast with background

---

## 5. Performance Testing

### Page Load Performance

**Metrics to measure:**
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1
- Total Blocking Time (TBT): < 200ms

**Tools:**
- Chrome Lighthouse (DevTools → Lighthouse)
- PageSpeed Insights: https://pagespeed.web.dev/

**Test Steps:**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Performance" + "Mobile"
4. Click "Generate report"
5. Target score: 90+

### Network Performance

**Test conditions:**
- Fast 3G: 850ms RTT, 1.6Mbps down
- Slow 3G: 2000ms RTT, 400Kbps down

**Test Steps:**
1. Chrome DevTools → Network tab
2. Set throttling to "Fast 3G"
3. Hard reload (Ctrl+Shift+R)
4. Measure load time
5. Repeat with "Slow 3G"

**Target:**
- Hero visible within 3s on Fast 3G
- Hero visible within 5s on Slow 3G

### Animation Performance

**Test Steps:**
1. Chrome DevTools → Performance tab
2. Click Record
3. Interact with page (hover, scroll, click)
4. Stop recording after 10 seconds
5. Analyze frame rate

**Target:**
- Maintain 60fps (16.7ms per frame)
- No dropped frames during animations
- No long tasks (> 50ms)

---

## 6. Browser Compatibility Testing

### Desktop Browsers

| Browser | Version | Test Results |
|---------|---------|--------------|
| Chrome | 90+ | ✓ Pass |
| Firefox | 88+ | ✓ Pass |
| Safari | 14+ | Test |
| Edge | 90+ | ✓ Pass |
| Opera | 76+ | Test |

**Test each browser:**
- [ ] All animations work
- [ ] Hover effects work
- [ ] Click interactions work
- [ ] No console errors
- [ ] Visuals render correctly

### Mobile Browsers

| Browser | OS | Test Results |
|---------|-----|--------------|
| Safari | iOS 14+ | Test |
| Chrome | Android 10+ | Test |
| Samsung Internet | Android | Test |

**Test each browser:**
- [ ] Touch interactions work
- [ ] Swipe gestures work (if applicable)
- [ ] Viewport meta tag correct
- [ ] No horizontal scrolling
- [ ] Performance acceptable

---

## 7. Cross-Device Testing

### Real Device Testing

**iOS Devices:**
- iPhone SE (375x667)
- iPhone 12/13 (390x844)
- iPhone 14 Pro Max (430x932)
- iPad (768x1024)
- iPad Pro (1024x1366)

**Android Devices:**
- Samsung Galaxy S21 (360x800)
- Google Pixel 6 (412x915)
- Samsung Galaxy Tab (800x1280)

**Test on each device:**
- [ ] Page loads correctly
- [ ] Animations smooth
- [ ] Touch interactions work
- [ ] Text readable
- [ ] No layout issues

### Browser DevTools Testing

**Chrome DevTools:**
1. Press F12
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test predefined devices
4. Test custom dimensions
5. Test portrait and landscape

---

## 8. Error Handling & Edge Cases

### JavaScript Disabled

**Test:**
1. Disable JavaScript in browser
2. Load page
3. Verify basic content visible
4. Progressive enhancement

### Slow Network

**Test:**
1. DevTools → Network → "Slow 3G"
2. Hard reload
3. Verify loading states
4. No broken images

### Ad Blockers

**Test:**
1. Enable uBlock Origin or similar
2. Load page
3. Verify all content loads
4. No blocked resources

### Large Text Size

**Test:**
1. Browser → Settings → Zoom to 200%
2. Verify layout doesn't break
3. All text readable
4. No horizontal scroll

---

## 9. Production Build Testing

### Build Verification

```powershell
npm run build
npm start
```

**Verify:**
- [ ] Build completes without errors
- [ ] Bundle size acceptable (< 200KB for hero)
- [ ] Source maps disabled
- [ ] Console logs removed
- [ ] Environment variables correct

### SEO Testing

**Meta tags:**
- [ ] Title tag present and descriptive
- [ ] Meta description present
- [ ] Open Graph tags present
- [ ] Twitter card tags present
- [ ] Canonical URL set

**Tools:**
- Chrome DevTools → Elements → `<head>`
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### Security Testing

**Headers:**
- [ ] HTTPS enabled
- [ ] Content-Security-Policy set
- [ ] X-Frame-Options set
- [ ] No sensitive data exposed

**Test:**
1. Open DevTools → Network
2. Check response headers
3. Verify security headers present

---

## 10. User Acceptance Testing

### User Tasks

**Task 1: Understand value proposition**
- [ ] User can read headline clearly
- [ ] User understands what Agnivridhi does
- [ ] Call-to-action is clear

**Task 2: Explore achievements**
- [ ] User notices achievement ticker
- [ ] User can navigate achievements
- [ ] Information is credible and clear

**Task 3: Take action**
- [ ] User can find CTA buttons easily
- [ ] User knows what happens when clicking
- [ ] "Book Consultation" is accessible

### User Feedback Questions

1. What is the first thing you notice?
2. What do you think this company does?
3. Would you click on any buttons? Why?
4. Is anything confusing or unclear?
5. Does the design feel professional?
6. Would you trust this company?

---

## 📋 Final QA Checklist

### Before Launch

- [ ] All functional tests passed
- [ ] All animations smooth and purposeful
- [ ] Responsive on all breakpoints
- [ ] Accessible (WCAG AA compliant)
- [ ] Performance score > 90
- [ ] Works in all major browsers
- [ ] Tested on real devices
- [ ] No console errors or warnings
- [ ] Production build successful
- [ ] SEO meta tags complete
- [ ] Security headers set
- [ ] Monitoring/analytics configured
- [ ] Error tracking configured
- [ ] Content reviewed for accuracy
- [ ] Legal pages linked (privacy, terms)

### Post-Launch Monitoring

**Week 1:**
- [ ] Monitor error logs daily
- [ ] Check analytics for usage patterns
- [ ] Review performance metrics
- [ ] Gather user feedback

**Month 1:**
- [ ] Full accessibility audit
- [ ] Performance optimization review
- [ ] A/B test CTAs if needed
- [ ] Update based on user feedback

---

## 🛠️ Testing Tools Reference

| Category | Tool | Link |
|----------|------|------|
| Performance | Lighthouse | Chrome DevTools |
| Performance | PageSpeed Insights | https://pagespeed.web.dev/ |
| Accessibility | axe DevTools | https://www.deque.com/axe/ |
| Accessibility | WAVE | https://wave.webaim.org/ |
| Contrast | WebAIM Checker | https://webaim.org/resources/contrastchecker/ |
| SEO | Facebook Debugger | https://developers.facebook.com/tools/debug/ |
| SEO | Google Search Console | https://search.google.com/search-console |
| Cross-browser | BrowserStack | https://www.browserstack.com/ |
| Network | Chrome DevTools | F12 → Network |

---

**Testing complete? Ship it! 🚀**
