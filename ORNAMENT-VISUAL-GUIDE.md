# Kyrgyz Ornament Integration - Visual Guide

## Overview

This guide provides a visual reference for how Kyrgyz ethnic ornaments have been integrated across the Kazyna Economics website.

## Color Palette

The ornament system uses three primary Kyrgyz-inspired colors:

```
Felt Red:    #c8392b  (Primary accent)
Gold:        #d4a017  (Secondary accent)
Teal:        #1a6b5a  (Tertiary accent)
```

These colors are used in gradients, overlays, and decorative elements throughout the site.

## Ornament Placement Map

### 1. Hero Section
```
┌─────────────────────────────────────────────────────────┐
│  [Ornament]                                [Ornament]   │
│                                                          │
│     ┌──────────────────────────────────┐               │
│     │  Hero Frame                      │ [Ornament]    │
│     │  - Title                         │               │
│     │  - Subtitle                      │               │
│     │  - CTA Buttons                   │               │
│     └──────────────────────────────────┘               │
│                                                          │
│                    [Chart & Coin]                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Ornaments Used**: OIP.webp, OIP (1).webp, OIP (3).webp
**Opacity**: 8% (desktop), 6% (tablet), 4% (mobile)
**Effect**: Creates elegant frame around hero content

### 2. Section Headers
```
┌─────────────────────────────────────────────────────────┐
│ [Ornament]                                              │
│                                                          │
│ Section Title                                           │
│ Section Description                                     │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Ornaments Used**: OIP (2).webp
**Opacity**: 4% (desktop), 3% (tablet), hidden (mobile)
**Effect**: Guides visual flow and adds cultural touch

### 3. Topic Cards
```
┌──────────────────────────────────┐
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│ Step 01                           │
│ Card Title                        │
│ Card Description                  │
│                                   │
│                        [Glow]     │
└──────────────────────────────────┘
```

**Ornaments Used**: Radial gradient accent
**Opacity**: 0% (hidden by default)
**Effect**: Subtle corner glow on hover

### 4. Article Cards
```
┌──────────────────────────────────┐
│ [Article Image with Ornaments]   │
│                                   │
│ Article Title                     │
│ Article Description               │
│                        [Glow]     │
└──────────────────────────────────┘
```

**Ornaments Used**: OIP (2).webp, OIP (3).webp
**Opacity**: 6% (desktop), 5% (tablet), 3% (mobile)
**Effect**: Adds cultural aesthetic to article previews

### 5. Footer
```
┌─────────────────────────────────────────────────────────┐
│ [Ornament]                                [Ornament]   │
│                                                          │
│ Logo & Description    Topics    Practice    Contact    │
│                                                          │
│ © 2026 Kazyna                                           │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Ornaments Used**: OIP.webp, OIP (1).webp
**Opacity**: 6% (desktop), 5% (tablet), 3% (mobile)
**Effect**: Frames footer content with cultural aesthetic

### 6. Section Dividers
```
                    ◆ ─ ◆ ─ ◆
```

**Ornaments Used**: SVG gradient divider
**Opacity**: 0.4
**Effect**: Creates visual separation between sections

## Responsive Behavior

### Desktop (1024px+)
- All ornaments visible
- Full opacity values
- Larger ornament sizes
- Complete visual experience

### Tablet (768px - 1024px)
- Reduced ornament sizes
- Lower opacity values
- Some decorative elements hidden
- Balanced visual experience

### Mobile (< 768px)
- Most background ornaments hidden
- Reduced opacity for visible elements
- Smaller ornament sizes
- Focus on content readability

## Dark Mode Adjustments

In dark mode, ornament opacity is increased for better visibility:

```
Light Mode          Dark Mode
─────────────────────────────
Hero:      8%  →    12%
Footer:    6%  →    10%
Frame:     5%  →    8%
Cards:     6%  →    8%
```

## Component-Specific Styling

### Cards
- Corner ornament accent (bottom-right)
- Radial gradient glow effect
- Color-coded variants (felt, gold, teal)

### Concept Boxes
- Left border accent (4px)
- Corner ornament glow
- Color-coded by type

### Formula Cards
- Left border accent (3px gold)
- Corner ornament glow
- Subtle background gradient

### Feature Components
- Corner ornament glow
- Icon styling with gradient background
- Consistent with card styling

## Ornament Image Specifications

### OIP.webp (8.3 KB)
- Primary ornament pattern
- Used in hero and footer
- Positioned at left corners
- Typical size: 220-280px

### OIP (1).webp (8.8 KB)
- Secondary ornament pattern
- Used in hero and footer
- Positioned at right corners
- Typical size: 240-320px

### OIP (2).webp (9.9 KB)
- Tertiary ornament pattern
- Used in section headers and article cards
- Positioned at top-left and corners
- Typical size: 100-200px

### OIP (3).webp (6.0 KB)
- Accent ornament pattern
- Used in hero frame and article cards
- Positioned at top-right and corners
- Typical size: 80-120px

## CSS Gradient Accents

### Card Corner Glow
```css
radial-gradient(circle at 100% 100%, 
  rgba(212, 160, 23, 0.12), 
  transparent 70%)
```

### Section Divider
```css
linear-gradient(90deg, 
  transparent, 
  #d4a017, 
  #c8392b, 
  #d4a017, 
  transparent)
```

### Hero Frame Top Border
```css
linear-gradient(90deg, 
  #c8392b, 
  #d4a017, 
  #c8392b)
```

## Visual Hierarchy

1. **Primary Content** - Full opacity, no ornaments
2. **Secondary Content** - Cards with subtle corner accents
3. **Tertiary Content** - Section headers with ornament accents
4. **Background** - Hero and footer with ornament frames

## Accessibility Features

✓ All ornaments marked as decorative (`aria-hidden="true"`)
✓ No content blocked by ornaments
✓ Sufficient contrast maintained
✓ Responsive behavior ensures mobile usability
✓ No JavaScript dependencies
✓ Graceful degradation in older browsers

## Performance Metrics

- **Total Image Size**: 33.0 KB (all ornaments)
- **CSS Overhead**: ~2 KB (new ornament styles)
- **HTTP Requests**: 0 additional (uses existing images)
- **Load Time Impact**: Negligible
- **Rendering**: CSS-based (no JavaScript)

## Browser Support

- ✓ Chrome/Chromium (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Edge (latest)
- ✓ Mobile browsers

## Animation Opportunities

Future enhancements could include:

1. **Floating Effect**
   - Subtle vertical movement
   - 3-5 second animation cycle
   - Ease-in-out timing

2. **Parallax Scrolling**
   - Ornaments move at different speeds
   - Creates depth effect
   - Subtle and smooth

3. **Fade-In on Scroll**
   - Ornaments fade in as user scrolls
   - Reveals content progressively
   - Smooth transitions

4. **Hover Effects**
   - Ornament visibility changes on hover
   - Opacity transitions
   - Interactive engagement

## Customization Guide

### Changing Ornament Opacity

Edit `variables.css`:
```css
:root {
  --ornament-opacity: 0.03;  /* Light mode */
}

[data-theme="dark"] {
  --ornament-opacity: 0.05;  /* Dark mode */
}
```

### Changing Ornament Colors

Edit `ornaments.css` gradient definitions:
```css
.hero::before {
  background-image: 
    url("../images/OIP.webp"),
    url("../images/OIP\ \(1\).webp");
  /* Adjust background-position and background-size */
}
```

### Changing Ornament Sizes

Edit responsive breakpoints in `ornaments.css`:
```css
@media (max-width: 1024px) {
  .hero::before {
    background-size: 
      220px 220px,  /* Adjust these values */
      250px 250px;
  }
}
```

## Testing Checklist

- [ ] Hero ornaments visible on desktop
- [ ] Footer ornaments visible on desktop
- [ ] Ornaments hidden on mobile
- [ ] Dark mode ornaments more visible
- [ ] Card corner accents render correctly
- [ ] Section dividers display properly
- [ ] No performance degradation
- [ ] Accessibility maintained
- [ ] Responsive behavior works
- [ ] Print styles don't show ornaments

## Troubleshooting

### Ornaments Not Showing
1. Check image paths in CSS
2. Verify WebP support in browser
3. Check opacity values (may be too low)
4. Verify z-index layering

### Ornaments Blocking Content
1. Reduce opacity values
2. Adjust positioning
3. Check z-index layering
4. Verify pointer-events: none

### Performance Issues
1. Check image file sizes
2. Verify CSS is minified
3. Check for duplicate styles
4. Monitor network requests

## References

- `ORNAMENT-INTEGRATION.md` - Detailed implementation guide
- `ORNAMENT-CHANGES-SUMMARY.md` - Summary of changes
- `DESIGN-NOTES.md` - Overall design philosophy
- `ETHNO-STYLE.md` - Ethnic styling guidelines
