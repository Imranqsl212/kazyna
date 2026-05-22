# Z-Index Hierarchy

## Fixed Positioning (Top to Bottom)

| z-index | Element | Purpose |
|---------|---------|---------|
| 120 | `.search-modal` | Search overlay (highest) |
| 110 | `.gov-stripe` | Top decorative stripe |
| 100 | `.navbar` | Main navigation bar |
| 999 | `.navbar__links` (mobile) | Mobile menu (above navbar) |
| 50 | `.progress` | Progress bar (lowest) |

## Relative Positioning

| z-index | Element | Purpose |
|---------|---------|---------|
| 1 | `.page > *` | Main content |
| 0 | `.page::before` | Background pattern |

## Mobile Considerations

- Mobile menu (`.navbar__links`) has `z-index: 999` to appear above all fixed elements
- Navbar remains at `z-index: 100` for sticky positioning
- Search modal at `z-index: 120` to overlay everything

## Notes

- All fixed elements use z-index >= 50
- Mobile menu uses high z-index (999) to ensure visibility
- Search modal is highest (120) to overlay all content
