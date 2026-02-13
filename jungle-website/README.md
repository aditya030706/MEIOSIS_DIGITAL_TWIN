# 🌿 Jungle - Immersive Parallax Website

A stunning 3-page website with a clean, minimalist "Jungle/Forest" theme featuring deep parallax scrolling effects that make you feel like you're moving through a forest.

## 🎨 Features

- **Deep Parallax Hero**: 5-layer leaf parallax with GSAP ScrollTrigger
- **Clean Aesthetic**: Deep Forest Green (#052c16), Sage, and Off-white palette
- **Premium Typography**: Playfair Display (serif) for headings, Inter (sans) for body
- **Smooth Animations**: GSAP-powered scroll animations with proper memory management
- **3 Unique Pages**:
  - **Home**: Immersive forest entrance with multi-layer parallax
  - **About**: Greenhouse-themed layout with floating leaf animations
  - **Projects**: Grid with vine-reveal effect on scroll

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP 3.12 + ScrollTrigger + @gsap/react
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🖼️ Image Assets Setup

The site requires leaf images for the parallax effect. Create these directories and add your images:

```
public/
├── leaves/
│   ├── layer-1.png    (Foreground - closest to camera)
│   ├── layer-2.png    (Near foreground)
│   ├── layer-3.png    (Mid-ground)
│   ├── layer-4.png    (Mid-background)
│   ├── layer-5.png    (Deep background)
│   ├── floating-1.png (About page decorative)
│   ├── floating-2.png (About page decorative)
│   └── floating-3.png (About page decorative)
└── vines/
    └── vine-pattern.png (Projects page overlay texture)
```

### Image Recommendations:

1. **Parallax Layers (layer-1 to layer-5)**:
   - Format: PNG with transparency
   - Size: 1920x1080px minimum
   - Style: Progressively denser foliage from layer-5 (background) to layer-1 (foreground)
   - layer-1: Large, close-up leaves with soft focus
   - layer-5: Dense forest canopy, darker tones

2. **Floating Leaves (floating-1 to floating-3)**:
   - Format: PNG with transparency
   - Size: 200-400px (individual leaves)
   - Style: Single botanical leaves, various shapes

3. **Vine Pattern**:
   - Format: PNG with transparency
   - Size: Tileable texture, 512x512px
   - Style: Subtle vine/branch pattern overlay

### Quick Image Placeholder Solution:

If you don't have images ready, you can:
1. Use CSS gradients as temporary placeholders
2. Generate simple shapes with SVG
3. Use free botanical PNGs from sites like:
   - Unsplash (search: "leaf png transparent")
   - Flaticon (botanical illustrations)
   - Freepik (nature elements)

## 🎯 Key Components

### `JungleHero.tsx`
- 5-layer parallax system
- GSAP ScrollTrigger animations
- Depth of field blur effects
- Scales foreground elements as user scrolls

### `Navigation.tsx`
- Fixed navigation with scroll-aware background
- Active route highlighting
- Smooth transitions

### Pages:
- **Home** (`app/page.tsx`): Hero + welcome sections
- **About** (`app/about/page.tsx`): Greenhouse aesthetic with floating animations
- **Projects** (`app/projects/page.tsx`): Grid with vine-reveal effect

## 🎨 Design System

### Colors
```css
--forest-deep: #052c16   /* Primary background */
--forest-mid: #0a4d2a    /* Secondary background */
--sage: #8ca89d          /* Accent */
--sage-light: #b8cbc3    /* Light accent */
--off-white: #f8f7f4     /* Text/foreground */
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🚀 Performance Tips

1. **Image Optimization**: 
   - Use WebP format for better compression
   - Implement lazy loading for images below the fold
   - Compress images before upload

2. **GSAP Performance**:
   - Uses `useGSAP()` hook for automatic cleanup
   - ScrollTrigger with `scrub` for smooth performance
   - Proper scoping prevents memory leaks

3. **Bundle Size**:
   - Tree-shaking enabled for GSAP
   - Only imports needed plugins (ScrollTrigger)

## 🔧 Customization

### Adjusting Parallax Speed
In `JungleHero.tsx`, modify the `y` and `scale` values in the GSAP timeline:

```typescript
// Faster movement
tl.to(layer1Ref.current, {
  y: -600,  // Increase for faster vertical movement
  scale: 3, // Increase for more dramatic scaling
})
```

### Changing Colors
Update `tailwind.config.ts`:

```typescript
colors: {
  'forest-deep': '#YOUR_COLOR',
  // ... other colors
}
```

### Animation Duration
Adjust `scrub` value in ScrollTrigger for faster/slower animations:

```typescript
scrollTrigger: {
  scrub: 1.5,  // Lower = faster, Higher = slower
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized animations
- Reduced motion support (respects user preferences)

## 🐛 Troubleshooting

**Issue**: Parallax not working
- Ensure GSAP and ScrollTrigger are properly registered
- Check that refs are attached to elements
- Verify container has sufficient height

**Issue**: Images not loading
- Check file paths in `public/` directory
- Verify image file extensions match code
- Clear Next.js cache: `rm -rf .next`

**Issue**: Animations stuttering
- Reduce number of animated elements
- Increase `scrub` value for smoother interpolation
- Check browser DevTools Performance tab

## 📄 License

MIT License - feel free to use this as a template for your projects!

## 🤝 Contributing

This is a template project, but suggestions and improvements are welcome!

---

Built with 🌿 using Next.js, GSAP, and Tailwind CSS
