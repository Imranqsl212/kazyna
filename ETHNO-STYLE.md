# Kyrgyz Ethno Style — Design System

## Overview
Kazyna integrates Kyrgyz cultural patterns and ornaments throughout the platform. Each page features unique ethno-inspired SVG backgrounds that reflect the page's purpose.

## Color Palette (Kyrgyz-inspired)

| Color | Hex | Usage |
|-------|-----|-------|
| Kyrgyz Red | `#c8392b` | Primary accent, ornaments |
| Gold | `#d4a017` | Secondary accent, highlights |
| Mountain Teal | `#1a6b5a` | Tertiary accent, balance |
| Warm White | `#fafaf8` | Background |
| Soft Black | `#1a1a1a` | Text |

## Ethno Patterns by Page

### 1. **Homepage (index.html)**
- **Pattern:** Koshkar-muiz (ram horns) motif
- **Inspiration:** Traditional Kyrgyz decorative element
- **Colors:** Red → Gold gradient
- **Size:** 120px × 120px

### 2. **Macroeconomics (macro-page)**
- **Pattern:** Tunduk (yurt crown)
- **Inspiration:** Central element of traditional yurt
- **Colors:** Deep red → Crimson gradient
- **Size:** 140px × 140px
- **Elements:** Crown shape, radiating lines, decorative circles

### 3. **Microeconomics (micro-page)**
- **Pattern:** Supply-demand curves
- **Inspiration:** Market equilibrium visualization
- **Colors:** Teal → Gold gradient
- **Size:** 130px × 130px
- **Elements:** Intersecting curves, equilibrium point

### 4. **Olympiad Prep (olympiad-page)**
- **Pattern:** Trophy/medal with stars
- **Inspiration:** Competition and achievement
- **Colors:** Red → Gold → Teal gradient
- **Size:** 150px × 150px
- **Elements:** Trophy shape, stars, decorative elements

### 5. **Articles (articles-page)**
- **Pattern:** Scroll/manuscript
- **Inspiration:** Knowledge and written wisdom
- **Colors:** Gold → Red gradient
- **Size:** 125px × 125px
- **Elements:** Scroll frame, text lines, corner decorations

### 6. **Formulas (formulas-page)**
- **Pattern:** Geometric shapes (math)
- **Inspiration:** Mathematical precision
- **Colors:** Red → Gold → Teal gradient
- **Size:** 135px × 135px
- **Elements:** Squares, circles, diamonds, axes

### 7. **Article Pages (article-page)**
- **Pattern:** Ornamental frame
- **Inspiration:** Detailed manuscript borders
- **Colors:** Gold → Red → Teal gradient
- **Size:** 140px × 140px
- **Elements:** Double frames, corner circles, center ornament

### 8. **About (about-page)**
- **Pattern:** Concentric circles (yurt-inspired)
- **Inspiration:** Yurt structure and heritage
- **Colors:** Teal → Red gradient
- **Size:** 145px × 145px
- **Elements:** Concentric circles, radiating lines

### 9. **Contacts (contacts-page)**
- **Pattern:** Network/connection nodes
- **Inspiration:** Communication and connection
- **Colors:** Red → Gold gradient
- **Size:** 130px × 130px
- **Elements:** Central node, corner nodes, connecting lines

## Technical Implementation

### SVG Backgrounds
- All patterns are inline SVG data URIs
- Encoded as `background-image` in CSS
- Repeating pattern with `background-size`
- Opacity controlled via `--ornament-opacity` variable

### Opacity Levels
- **Light mode:** 0.03 (subtle, non-intrusive)
- **Dark mode:** 0.045-0.054 (slightly more visible)

### CSS Classes
```css
.page.macro-page::before { /* Macro pattern */ }
.page.micro-page::before { /* Micro pattern */ }
.page.olympiad-page::before { /* Olympiad pattern */ }
.page.articles-page::before { /* Articles pattern */ }
.page.formulas-page::before { /* Formulas pattern */ }
.page.article-page::before { /* Article pages pattern */ }
.page.about-page::before { /* About pattern */ }
.page.contacts-page::before { /* Contacts pattern */ }
```

## Design Principles

1. **Subtlety** — Patterns are background elements, not distracting
2. **Relevance** — Each pattern relates to the page's content
3. **Consistency** — All patterns use the same color palette
4. **Accessibility** — Patterns don't interfere with readability
5. **Cultural Pride** — Kyrgyz ornaments celebrate heritage

## Kyrgyz Motifs Explained

### Koshkar-muiz (Ram Horns)
- Traditional Kyrgyz decorative element
- Symbolizes strength and protection
- Used in textiles, architecture, and art

### Tunduk (Yurt Crown)
- Central opening of traditional yurt
- Represents home and community
- Circular design symbolizes unity

### Shyrdak (Felt Rug)
- Traditional Kyrgyz felt carpet
- Geometric patterns with symbolic meaning
- Colors represent natural elements

## Future Enhancements

- [ ] Add animated patterns on hover
- [ ] Create page-specific color variations
- [ ] Add seasonal pattern rotations
- [ ] Implement user-selectable ethno themes
- [ ] Create SVG pattern library for reuse

## References

- Kyrgyz traditional art and ornaments
- Yurt architecture and design
- Central Asian textile patterns
- Historical Kyrgyz cultural symbols
