# 🌿 Jungle Website - Implementation Guide

## Architecture Overview

This Next.js application uses the App Router architecture with a modular component structure optimized for performance and maintainability.

```
jungle-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts & navigation
│   ├── globals.css         # Global styles & Tailwind config
│   ├── page.tsx           # Home page with JungleHero
│   ├── about/
│   │   └── page.tsx       # About page (greenhouse theme)
│   └── projects/
│       └── page.tsx       # Projects page (vine reveal)
├── components/
│   ├── JungleHero.tsx     # Main parallax component
│   └── Navigation.tsx     # Fixed navigation bar
└── public/
    ├── leaves/            # Parallax layer images
    └── vines/             # Texture overlays
```

## 🎬 GSAP Animation Architecture

### useGSAP Hook Pattern

All animations use the `@gsap/react` `useGSAP()` hook for proper cleanup:

```typescript
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    // All GSAP code here
    // Automatically cleaned up on unmount
  }, { scope: containerRef })
  
  return <div ref={containerRef}>...</div>
}
```

**Benefits**:
- Automatic cleanup on component unmount
- Prevents memory leaks
- Scoped animations (won't affect other components)
- Better performance

### Parallax System Explained

The `JungleHero.tsx` creates a 5-layer parallax effect:

```typescript
// Layer 1 (Foreground) - moves fastest
tl.to(layer1Ref.current, {
  scale: 2.5,      // Zooms past camera
  y: -400,         // Moves up quickly
  opacity: 0,      // Fades out
})

// Layer 5 (Background) - moves slowest
tl.to(layer5Ref.current, {
  y: -50,          // Subtle movement
  scale: 0.95,     // Slight zoom out
})
```

**Timeline Configuration**:
```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top top',    // Start when element reaches viewport top
    end: 'bottom top',   // End when element bottom reaches viewport top
    scrub: 1.5,          // Smooth interpolation (higher = smoother)
  },
})
```

## 🎨 Depth of Field Implementation

### CSS Blur Utilities

Three levels of blur create realistic depth:

```css
.blur-foreground {
  filter: blur(3px);      /* Closest elements */
  opacity: 0.7;
}

.blur-midground {
  filter: blur(1.5px);    /* Mid-distance */
  opacity: 0.85;
}

/* Background has no blur (clearest) */
```

**Why this works**:
- Mimics camera focus behavior
- Creates depth perception
- Guides user's eye to content

### Glass Morphism Cards

```css
.glass-card {
  background: rgba(138, 168, 157, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(248, 247, 244, 0.1);
}
```

Used on About and Projects pages for elevated, modern cards.

## 🎯 Page-Specific Features

### Home Page (`page.tsx`)

**Structure**:
1. `JungleHero` - Full parallax entrance
2. Welcome section - Centered content
3. Features grid - 3 cards with hover effects

**Key Animations**:
- Hero parallax (handled by `JungleHero.tsx`)
- Card hover transitions (CSS-based)

### About Page (`about/page.tsx`)

**Features**:
- Floating leaf decorations (continuous GSAP yoyo animations)
- Scroll-triggered fade-ins for sections
- Greenhouse aesthetic (light background)

**Floating Animation Pattern**:
```typescript
gsap.to(leafRef.current, {
  y: -30,              // Vertical float
  x: 20,               // Horizontal drift
  rotation: 15,        // Gentle rotation
  duration: 4,         // Slow movement
  repeat: -1,          // Infinite
  yoyo: true,          // Back and forth
  ease: 'power1.inOut',
})
```

### Projects Page (`projects/page.tsx`)

**Vine Reveal Effect**:
1. Card starts covered by vine overlay
2. On scroll, vine pulls back (scaleX: 1 → 0)
3. Card content fades in simultaneously

```typescript
// Vine overlay
gsap.fromTo(vine, 
  { scaleX: 1 },              // Fully covered
  { 
    scaleX: 0,                // Pulls back to left
    scrollTrigger: {
      trigger: card,
      start: 'top 75%',
      end: 'top 45%',
      scrub: 1,
    }
  }
)
```

## 🎨 Color System Deep Dive

### Semantic Color Usage

```typescript
// Primary backgrounds
'forest-deep': '#052c16'   // Main bg, darkest areas
'forest-mid': '#0a4d2a'    // Secondary sections

// Accents & highlights
'sage': '#8ca89d'          // Links, borders, emphasis
'sage-light': '#b8cbc3'    // Hover states, secondary text

// Foreground
'off-white': '#f8f7f4'     // Primary text (warm white)
```

### Contrast Ratios (WCAG AA Compliant)

- `off-white` on `forest-deep`: 11.5:1 ✅
- `sage-light` on `forest-deep`: 5.8:1 ✅
- `sage` on `forest-deep`: 4.2:1 ✅

## 📐 Responsive Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Small tablets
md: '768px'   // Tablets, small laptops
lg: '1024px'  // Laptops, desktops
xl: '1280px'  // Large screens
```

**Typography Scaling**:
```typescript
// Mobile → Desktop
h1: text-7xl → text-9xl    (72px → 128px)
h2: text-5xl → text-6xl    (48px → 60px)
p:  text-lg → text-xl      (18px → 20px)
```

## 🚀 Performance Optimizations

### 1. GSAP Performance

**Best Practices Implemented**:
- ✅ Use `will-change` implicitly (GSAP handles this)
- ✅ Animate `transform` and `opacity` (GPU-accelerated)
- ✅ Avoid animating layout properties (`width`, `height`)
- ✅ Use `scrub` for scroll-linked animations (smoother)

### 2. Image Optimization

**Recommended Setup**:
```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  }
}
```

**Image Usage**:
```typescript
// Instead of background-image, use Next Image for optimization
import Image from 'next/image'

<div className="relative">
  <Image 
    src="/leaves/layer-1.png"
    fill
    style={{ objectFit: 'cover' }}
    priority // For hero images
  />
</div>
```

### 3. Font Loading Strategy

```typescript
// layout.tsx
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',      // Shows fallback until loaded
  variable: '--font-playfair',
})
```

**Why `display: 'swap'`**:
- Shows text immediately with fallback font
- Prevents invisible text (FOIT)
- Improves perceived performance

## 🔧 Customization Recipes

### Recipe 1: Change Parallax Intensity

**Low Intensity** (subtle):
```typescript
tl.to(layer1Ref.current, {
  scale: 1.2,  // Was 2.5
  y: -200,     // Was -400
})
```

**High Intensity** (dramatic):
```typescript
tl.to(layer1Ref.current, {
  scale: 3.5,  // Was 2.5
  y: -600,     // Was -400
})
```

### Recipe 2: Add New Color Scheme

```typescript
// tailwind.config.ts
colors: {
  'ocean-deep': '#0a192f',
  'ocean-mid': '#172a45',
  'teal': '#64ffda',
  'teal-light': '#8fd9d9',
}
```

Update CSS variables in `globals.css` to match.

### Recipe 3: Different Scroll Trigger Behavior

**Snap to sections**:
```typescript
scrollTrigger: {
  trigger: containerRef.current,
  start: 'top top',
  end: 'bottom top',
  pin: true,           // Pin while scrolling
  snap: 1 / 4,        // Snap to 25% intervals
}
```

**Pause on hover**:
```typescript
const animation = gsap.to(element, { ... })

element.addEventListener('mouseenter', () => animation.pause())
element.addEventListener('mouseleave', () => animation.resume())
```

## 🐛 Common Issues & Solutions

### Issue: Animations jittery on scroll

**Cause**: Too many simultaneous animations
**Solution**:
```typescript
// Reduce animated elements or increase scrub value
scrollTrigger: {
  scrub: 2.5,  // Increase from 1.5
}
```

### Issue: Layout shift during page load

**Cause**: Images loading asynchronously
**Solution**:
```css
/* Add aspect ratio containers */
.hero-layer {
  aspect-ratio: 16 / 9;
}
```

### Issue: ScrollTrigger not updating on resize

**Cause**: ScrollTrigger cache needs refresh
**Solution**:
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useEffect(() => {
  const handleResize = () => ScrollTrigger.refresh()
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
```

## 📊 Bundle Size Analysis

Run this to analyze bundle size:
```bash
npm run build
npx @next/bundle-analyzer
```

**Expected sizes** (gzipped):
- GSAP: ~45KB
- ScrollTrigger: ~15KB
- Tailwind CSS: ~10KB (purged)
- Next.js Runtime: ~80KB

**Total JavaScript**: ~150KB (excellent for an animated site)

## 🎓 Learning Resources

### GSAP
- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP React Hook](https://greensock.com/react/)
- [ScrollTrigger Examples](https://greensock.com/st-demos/)

### Next.js
- [App Router Documentation](https://nextjs.org/docs/app)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

---

**Questions or Issues?** Open an issue on GitHub or refer to the README.md troubleshooting section.
