# Image Placeholder Setup Script
# Run this to create placeholder directories and guide for adding images

## Directory Structure

Create these directories in your project:

```bash
mkdir -p public/leaves
mkdir -p public/vines
```

## Image Requirements

### Parallax Layers (public/leaves/)

**layer-1.png** (Foreground)
- Size: 1920x1080px
- Style: Large, close-up leaf silhouettes
- Opacity: 70% recommended
- Examples: Monstera leaves, palm fronds
- Effect: Will scale up and fade out (passing by camera)

**layer-2.png** (Near Foreground)
- Size: 1920x1080px
- Style: Medium-sized leaves, slightly smaller than layer-1
- Opacity: 80% recommended
- Examples: Multiple overlapping leaves
- Effect: Moderate scaling and movement

**layer-3.png** (Mid-ground)
- Size: 1920x1080px
- Style: Smaller leaf clusters
- Opacity: 85% recommended
- Examples: Fern patterns, multiple small leaves
- Effect: Subtle scaling and movement

**layer-4.png** (Mid-background)
- Size: 1920x1080px
- Style: Dense foliage pattern
- Opacity: 90% recommended
- Examples: Tree branches with leaves
- Effect: Slow vertical movement

**layer-5.png** (Deep Background)
- Size: 1920x1080px
- Style: Forest canopy, darkest layer
- Opacity: 100%
- Examples: Dense tree coverage, darker tones
- Effect: Minimal movement (creates depth)

### Floating Leaves (public/leaves/)

**floating-1.png**
- Size: 200-400px square
- Style: Single botanical leaf
- Format: PNG with transparency
- Example: Fern leaf, simple silhouette

**floating-2.png**
- Size: 200-400px square
- Style: Different leaf shape from floating-1
- Format: PNG with transparency
- Example: Oak leaf, maple leaf

**floating-3.png**
- Size: 200-400px square
- Style: Third unique leaf shape
- Format: PNG with transparency
- Example: Tropical leaf, monstera

### Vine Pattern (public/vines/)

**vine-pattern.png**
- Size: 512x512px (tileable)
- Style: Subtle vine/branch texture
- Format: PNG with transparency
- Opacity: 30% when overlaid
- Example: Delicate branch patterns

## 🎨 Quick Sources for Free Images

### Option 1: Unsplash (High Quality Photos)
```
Search terms:
- "tropical leaf transparent"
- "botanical illustration"
- "forest canopy"
- "plant silhouette"
```

### Option 2: Flaticon (Vector Illustrations)
```
Search terms:
- "leaf icon"
- "botanical"
- "vine pattern"
- "forest elements"
```

### Option 3: Freepik (Mixed Content)
```
Search terms:
- "leaf png"
- "botanical illustration png"
- "forest texture"
- "vine pattern transparent"
```

## 🛠️ Image Preparation Tips

### Using Photoshop/GIMP:
1. Open image
2. Remove background (Select > Subject, then Layer > Matting > Defringe)
3. Adjust levels for contrast
4. Export as PNG-24 with transparency
5. Optimize file size (should be < 500KB each)

### Using Online Tools:
- remove.bg - Automatic background removal
- tinypng.com - Compress PNGs without quality loss
- photopea.com - Free Photoshop alternative in browser

## 📝 Creating Simple SVG Placeholders

If you need quick placeholders before getting real images:

```html
<!-- Simple leaf SVG -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="80" ry="120" 
           fill="#0a4d2a" opacity="0.7"/>
</svg>
```

Save these as .svg files and reference them in the code until you have proper images.

## ⚡ Quick Start with Gradients (No Images Needed)

If you want to test the site without images first, update the layer styles:

```typescript
// In JungleHero.tsx, replace background-image with:
style={{
  background: `linear-gradient(135deg, #052c16 0%, #0a4d2a 100%)`,
}}
```

This will give you colored layers to see the parallax effect while you prepare images.

## 🎯 Recommended Workflow

1. **Start with gradients** (test parallax immediately)
2. **Add simple SVG shapes** (see basic depth effect)
3. **Find 2-3 real leaf images** (test with actual imagery)
4. **Refine and optimize** (compress, adjust opacity)
5. **Create final set** (all 5 layers + decorative elements)

## 📊 File Size Guidelines

Total image payload target: < 3MB

- Each parallax layer: 200-500KB
- Floating leaves: 50-100KB each
- Vine pattern: 100KB

Compress images using:
- TinyPNG.com
- ImageOptim (Mac)
- Squoosh.app (Web-based)

---

**Need Help?** Check the README.md troubleshooting section or create an issue on GitHub.
