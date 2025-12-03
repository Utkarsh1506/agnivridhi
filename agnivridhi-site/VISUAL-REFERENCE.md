# 🎨 Component Showcase - Visual Reference

## Hero Section Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│                     AGNIVRIDHI HERO SECTION                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Floating Decorative Blob - Top Right]                        │
│                                                                 │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │  LEFT COLUMN       │  │  RIGHT COLUMN                    │  │
│  │                    │  │                                  │  │
│  │  🚀 Badge          │  │  ┌────────────────────────────┐  │  │
│  │  "Trusted by..."   │  │  │  ACHIEVEMENT CARD          │  │  │
│  │                    │  │  │                            │  │  │
│  │  ╔═══════════════╗ │  │  │  [Trophy Icon]   500+      │  │  │
│  │  ║ HUM BADHAYENGE║ │  │  │                            │  │  │
│  │  ║ AAPKA BUSINESS║ │  │  │  MSMEs Funded              │  │  │
│  │  ╚═══════════════╝ │  │  │                            │  │  │
│  │                    │  │  │  ← Prev | Next → | ●●○○   │  │  │
│  │  Subtitle text     │  │  └────────────────────────────┘  │  │
│  │  One stop solution │  │                                  │  │
│  │                    │  │  ┌────────────────────────────┐  │  │
│  │  [Get Started CTA] │  │  │  M&A CARD                  │  │  │
│  │  [Explore CTA]     │  │  │  🛡️ Merger & Acquisition   │  │  │
│  │                    │  │  └────────────────────────────┘  │  │
│  │  👤👤👤 + ⭐⭐⭐⭐⭐  │  │                                  │  │
│  │  Rated 4.9/5       │  │  [💰 Funding] [📋 Compliance]   │  │
│  └────────────────────┘  └──────────────────────────────────┘  │
│                                                                 │
│                            [Floating Book Consultation Button]  │
│                                                                 │
│  ～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～  │
│     [Wave Divider SVG]                                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Badge Component
```
┌─────────────────────────────┐
│ 🚀 Trusted by 500+ MSMEs    │
└─────────────────────────────┘
```
**Style:**
- Background: `primary-500/20` (semi-transparent red)
- Border: `primary-500/30`
- Text: `primary-300`
- Padding: `px-4 py-2`
- Border radius: `rounded-full`

**Animation:**
- Entrance: Fade + slide up
- Duration: 0.6s

---

### 2. Main Headline
```
╔═══════════════════════════╗
║  Hum Badhayenge          ║
║  AAPKA BUSINESS          ║ ← Gradient text
╚═══════════════════════════╝
```
**Style:**
- Font: Plus Jakarta Sans (display font)
- Size: `text-4xl` → `text-7xl` (responsive)
- Weight: `font-bold`
- Color: White + gradient on "Aapka Business"
- Gradient: Primary (red) to darker red

**Animation:**
- Entrance: Fade + slide up (staggered)
- Duration: 0.6s

---

### 3. CTA Buttons

**Primary Button:**
```
┌─────────────────────────────┐
│  Get Started        →       │ ← Gradient background
└─────────────────────────────┘
```
**Style:**
- Background: Linear gradient (primary colors)
- Text: White, bold
- Padding: `px-8 py-4`
- Border radius: `rounded-full`
- Shadow on hover

**Secondary Button:**
```
┌─────────────────────────────┐
│  Explore Services    ↗      │ ← Outline style
└─────────────────────────────┘
```
**Style:**
- Border: 2px white
- Background: Transparent → white on hover
- Text: White → dark on hover
- Padding: `px-8 py-4`
- Border radius: `rounded-full`

---

### 4. Achievement Card
```
┌────────────────────────────────┐
│  [Trophy Icon]              🏆│
│                                │
│  500+                          │ ← Large number
│  MSMEs Funded                  │ ← Label
│  Successfully funded...        │ ← Description
│                                │
│  ← Prev | Next → | ●●○○       │ ← Controls
└────────────────────────────────┘
```
**Style:**
- Background: Glass effect (`bg-white/10`)
- Backdrop blur: `backdrop-blur-md`
- Border: `border-white/20`
- Border radius: `rounded-2xl`
- Padding: `p-6`

**Animation:**
- Trophy: Loop wobble + pulse
- Achievement: Fade transition every 4s
- Hover: Scale + shadow

**Achievements Array:**
```javascript
[
  { value: '500+', label: 'MSMEs Funded', description: '...' },
  { value: '₹200Cr+', label: 'Funding Facilitated', description: '...' },
  { value: '1000+', label: 'Businesses Registered', description: '...' },
  { value: '50+', label: 'IT Projects Delivered', description: '...' }
]
```

---

### 5. M&A Secondary Card
```
┌────────────────────────────────┐
│  🛡️  Merger & Acquisition       │
│     Expert advisory for...     │
└────────────────────────────────┘
```
**Style:**
- Background: `secondary-500/10` (blue tint)
- Border: `secondary-500/30`
- Icon: Gradient background circle
- Padding: `p-6`

**Animation:**
- Entrance: Fade + slide (staggered)
- Hover: Scale + slide right

---

### 6. Feature Cards
```
┌─────────────┐  ┌─────────────┐
│     💰      │  │     📋      │
│   Funding   │  │  Compliance │
└─────────────┘  └─────────────┘
```
**Style:**
- Background: Glass effect
- Layout: Grid 2 columns
- Padding: `p-4`
- Text: Centered

**Animation:**
- Hover: Scale up to 1.05

---

### 7. Trust Indicators
```
👤👤👤👤 + ⭐⭐⭐⭐⭐
         Rated 4.9/5 by clients
```
**Style:**
- Avatars: Overlapping circles with gradient
- Stars: Yellow color
- Text: Gray, small

---

### 8. Floating Consultation Button
```
┌─────────────────────────────┐
│  📅 Book Consultation  ●    │ ← Pulse dot
└─────────────────────────────┘
```
**Position:**
- Fixed: Bottom-right
- Z-index: 50 (above content)
- Hidden on mobile (<768px)

**Style:**
- Background: Secondary gradient (blue)
- Shadow: Large, soft
- Border radius: `rounded-full`

**Animation:**
- Entrance: Scale from 0 after 1s
- Hover: Scale + shadow
- Pulse dot: Continuous scale animation

---

### 9. Wave Divider
```
～～～～～～～～～～～～～～～～～～～
   ～～～～～～～～～～～～～～～～
```
**Implementation:**
- SVG with path
- Two layers for depth
- Fill: White with low opacity
- Position: Absolute bottom

---

### 10. Decorative Elements

**Lottie Blob:**
```
     ∞
   ∞   ∞   ← Organic shape
  ∞     ∞
   ∞   ∞
     ∞
```
**Style:**
- Position: Absolute top-right
- Size: 600x600px
- Opacity: 20%
- Animation: Float + rotate
- Hidden on mobile

**SVG Scribble:**
```
   ∼∼⌒∼∼
  ∼      ∼
 ∼        ∼
```
**Style:**
- Stroke: Primary color
- Size: 32x32 (128px)
- Opacity: 30%
- Animation: Pulse + rotate
- Hidden on mobile

---

## Color Palette

### Primary (Red/Orange)
```
50:  #fef3f2  ░░░░░░░░░░
100: #ffe4e1  ▒▒▒▒▒▒▒▒▒▒
200: #ffcdc8  ▓▓▓▓▓▓▓▓▓▓
300: #ffa8a0  ████████████
400: #ff7569  ████████████
500: #f94b3a  ████████████ ← Primary
600: #e7301f  ████████████
700: #c12515  ████████████
800: #a12215  ████████████
900: #862319  ████████████
```

### Secondary (Blue)
```
50:  #f0f9ff  ░░░░░░░░░░
100: #e0f2fe  ▒▒▒▒▒▒▒▒▒▒
200: #bae6fd  ▓▓▓▓▓▓▓▓▓▓
300: #7dd3fc  ████████████
400: #38bdf8  ████████████
500: #0ea5e9  ████████████ ← Secondary
600: #0284c7  ████████████
700: #0369a1  ████████████
800: #075985  ████████████
900: #0c4a6e  ████████████
```

### Dark Background
```
DEFAULT: #0f0f23  ████████████ ← Base
light:   #1a1a2e  ████████████
lighter: #25253f  ████████████
```

---

## Gradients

### Hero Background
```
┌────────────────────────────┐
│ #0f0f23                    │ ← Top left
│           #1a1a2e          │ ← Center
│                   #25253f  │ ← Bottom right
└────────────────────────────┘
```
**CSS:** `linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #25253f 100%)`

### Primary Button
```
┌────────────────────────────┐
│ #f94b3a        #e7301f     │
└────────────────────────────┘
```
**CSS:** `linear-gradient(135deg, #f94b3a 0%, #e7301f 100%)`

### Secondary Button
```
┌────────────────────────────┐
│ #0ea5e9        #0369a1     │
└────────────────────────────┘
```
**CSS:** `linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)`

---

## Typography Scale

```
Hero Headline:
Desktop:  72px (text-7xl)  ████████
Tablet:   48px (text-5xl)  ██████
Mobile:   36px (text-4xl)  ████

Subtitle:
Desktop:  20px (text-xl)   ██
Tablet:   18px (text-lg)   █
Mobile:   16px (text-base) █

Body:
Regular:  16px (text-base) █
Small:    14px (text-sm)   ▓
Tiny:     12px (text-xs)   ░
```

---

## Animation Timing

```
Timeline (0-2s):

0.0s  ┤ Page loads
0.2s  ┤ Badge appears
0.35s ┤ Headline appears
0.5s  ┤ Subtitle appears
0.65s ┤ CTAs appear
0.8s  ┤ Trust indicators appear
0.95s ┤ Achievement card appears
1.1s  ┤ M&A card appears
1.25s ┤ Feature cards appear
1.0s  ┤ Consultation button appears

Continuous:
∞     ┤ Blob floats (6s cycle)
∞     ┤ Scribble pulses (8s cycle)
∞     ┤ Trophy wobbles (2s cycle)
Every 4s: Achievement rotates
```

---

## Responsive Breakpoints

```
Mobile Small:   375px  │█░░░░░░░░░│
Mobile Large:   414px  │██░░░░░░░░│
Tablet:         768px  │████░░░░░░│
Desktop Small: 1024px  │██████░░░░│
Desktop Med:   1440px  │████████░░│
Desktop Large: 1920px  │██████████│
```

**Layout Changes:**
- `< 768px`: Vertical stack, hide decorative elements
- `768px - 1023px`: Vertical stack, show some decorative
- `≥ 1024px`: Two-column layout, all features visible

---

## State Variations

### Buttons

**Default State:**
```
┌─────────────────┐
│  Get Started  → │
└─────────────────┘
```

**Hover State:**
```
┌─────────────────┐
│  Get Started  → │ ← Scale 1.05 + shadow
└─────────────────┘
```

**Active State:**
```
┌─────────────────┐
│  Get Started  → │ ← Scale 0.98
└─────────────────┘
```

**Focus State:**
```
┌─────────────────┐
│  Get Started  → │ ← Outline visible
└─────────────────┘
```

---

## Accessibility Features

```
✓ Semantic HTML (section, button, etc.)
✓ ARIA labels on icon-only buttons
✓ ARIA-hidden on decorative elements
✓ Keyboard navigation (Tab, Enter, Space)
✓ Focus indicators visible
✓ Color contrast WCAG AA
✓ Reduced motion support
✓ Screen reader friendly
✓ Touch targets 44x44px minimum
```

---

## Performance Metrics

```
Bundle Sizes:
Hero Component:  118 KB  ████████░░
Framework:        80 KB  ███████░░░
Total JS:        198 KB  ████████████

Lottie Files:
hero-blob.json:    ~8 KB  ███░░░░░░░
achievement:       ~6 KB  ██░░░░░░░░

Target Load Time: < 3s on Fast 3G
Target FPS:       60 fps
Target CLS:       < 0.1
```

---

## Browser Support

```
Chrome:   90+ ✅
Firefox:  88+ ✅
Safari:   14+ ✅
Edge:     90+ ✅
Opera:    76+ ⏳
iOS:      14+ ⏳
Android:  10+ ⏳
```

---

This visual reference complements the technical documentation and provides a clear understanding of the hero section's design system.

**For implementation details, see: `components/HeroLottie.jsx`**
**For usage instructions, see: `README-NEXTJS.md`**
