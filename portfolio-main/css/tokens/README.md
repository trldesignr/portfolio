# Peraa Design Tokens

Design tokens are the foundational values that define the visual language of the Peraa design system. They provide a single source of truth for colors, typography, spacing, and other design decisions.

## Token Architecture

Peraa uses a **two-tier token system**:

```
┌─────────────────────────────────────────────────────────┐
│                    SEMANTIC TOKENS                       │
│   (Context-aware, used in components)                   │
│   e.g., --peraa-text-primary, --peraa-surface-card      │
├─────────────────────────────────────────────────────────┤
│                   PRIMITIVE TOKENS                       │
│   (Raw values, not used directly)                       │
│   e.g., --peraa-color-purple-500, --peraa-spacing-4     │
└─────────────────────────────────────────────────────────┘
```

### Primitive Tokens (`_primitives.css`)

Raw, foundational values that define the design system's palette. **Do not use these directly in components**. They should only be referenced by semantic tokens.

**Categories:**
- Colors (brand, neutral, accent, status)
- Typography (font families, sizes, weights, line heights)
- Spacing scale
- Border widths and radii
- Shadows
- Transitions
- Z-index scale

### Semantic Tokens (`_semantic.css`)

Context-aware tokens that map primitives to meaningful names. **Use these in components and layouts.**

**Categories:**
- Surface/Background colors
- Text colors
- Border colors
- Interactive states (primary, secondary, tertiary)
- Component-specific tokens
- Status colors

## Naming Convention

```
--peraa-[category]-[element]-[property]-[state]
```

### Examples

| Token | Meaning |
|-------|---------|
| `--peraa-color-purple-500` | Primitive: Purple at 500 intensity |
| `--peraa-text-primary` | Semantic: Primary text color |
| `--peraa-interactive-primary-bg-hover` | Semantic: Primary button background on hover |
| `--peraa-card-shadow` | Semantic: Shadow for card components |

## Theme Support

Semantic tokens automatically adapt to light/dark modes:

```css
/* Light theme (default) */
:root, [data-theme="light"] {
  --peraa-text-primary: var(--peraa-color-neutral-900);
}

/* Dark theme */
[data-theme="dark"] {
  --peraa-text-primary: var(--peraa-color-neutral-50);
}
```

## Usage

### In CSS

```css
.my-component {
  /* ✅ Correct: Use semantic tokens */
  color: var(--peraa-text-primary);
  background: var(--peraa-surface-card);
  
  /* ❌ Avoid: Direct primitive usage */
  color: var(--peraa-color-neutral-900);
}
```

### In HTML (via classes)

```html
<p class="peraa-text-primary">Primary text color</p>
<p class="peraa-text-secondary">Secondary text color</p>
```

## Token Categories

### Colors

| Category | Description |
|----------|-------------|
| `purple-*` | Primary brand color scale (50-900) |
| `neutral-*` | Grayscale for text and backgrounds |
| `accent-*` | Accent colors (teal, coral, gold, blue) |
| `success/warning/error/info` | Status/feedback colors |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font-size-xs` | 0.75rem (12px) | Captions, labels |
| `font-size-sm` | 0.875rem (14px) | Small body text |
| `font-size-base` | 1rem (16px) | Body text |
| `font-size-lg` | 1.125rem (18px) | Large body |
| `font-size-xl` to `6xl` | 1.25-3.75rem | Headings |

### Spacing

Based on a 4px grid:

| Token | Value |
|-------|-------|
| `spacing-1` | 0.25rem (4px) |
| `spacing-2` | 0.5rem (8px) |
| `spacing-3` | 0.75rem (12px) |
| `spacing-4` | 1rem (16px) |
| `spacing-6` | 1.5rem (24px) |
| `spacing-8` | 2rem (32px) |
| ... | ... |

### Shadows

```css
--peraa-shadow-xs   /* Subtle shadow */
--peraa-shadow-sm   /* Small shadow */
--peraa-shadow-md   /* Medium shadow */
--peraa-shadow-lg   /* Large shadow */
--peraa-shadow-xl   /* Extra large */
--peraa-shadow-2xl  /* Dramatic */
```

### Border Radius

```css
--peraa-radius-none /* 0 */
--peraa-radius-sm   /* 4px */
--peraa-radius-md   /* 8px */
--peraa-radius-lg   /* 12px */
--peraa-radius-xl   /* 16px */
--peraa-radius-full /* 9999px (pill) */
```

## Updating Tokens

When you receive a JSON token file:

1. Update primitive values in `_primitives.css`
2. Verify semantic token mappings in `_semantic.css`
3. Test in both light and dark modes

### Token JSON Format (Expected)

```json
{
  "color": {
    "purple": {
      "500": { "value": "#6F1FAC" }
    }
  },
  "spacing": {
    "4": { "value": "1rem" }
  }
}
```

## Best Practices

1. **Always use semantic tokens** in components
2. **Never hardcode values**: use tokens instead
3. **Test both themes** when adding new tokens
4. **Keep naming consistent** with the established convention
5. **Document new tokens** when adding them
