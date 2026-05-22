# Mobile Menu Fix — Z-Index Issue

## Problem
Burger menu on mobile was hidden behind other elements and not clickable.

## Root Cause
Z-index hierarchy was incorrect:
- `.navbar` had `z-index: 80`
- `.navbar__links` (mobile menu) had `z-index: 79`
- Menu was positioned below navbar, making it invisible

## Solution

### Changes Made

#### 1. **components.css**
```css
/* Progress bar */
.progress {
  z-index: 50;  /* was: 90 */
}

/* Navbar */
.navbar {
  z-index: 100;  /* was: 80 */
}
```

#### 2. **responsive.css** (mobile breakpoint)
```css
.navbar__links {
  z-index: 999;  /* was: 79 */
  position: fixed;
  inset: 84px 1rem auto;
}
```

#### 3. **ornaments.css**
```css
.gov-stripe {
  z-index: 110;  /* was: 100 */
}
```

## Z-Index Hierarchy (Final)

| Layer | z-index | Element |
|-------|---------|---------|
| Top | 999 | Mobile menu (`.navbar__links`) |
| | 120 | Search modal |
| | 110 | Top stripe (`.gov-stripe`) |
| | 100 | Navbar (`.navbar`) |
| Bottom | 50 | Progress bar |

## Result
✅ Mobile menu now appears above all elements
✅ Menu is fully clickable
✅ No overlapping issues
✅ Works on all screen sizes

## Testing
- Mobile menu opens/closes correctly
- Menu items are clickable
- No visual overlap with other elements
- Works on all breakpoints
