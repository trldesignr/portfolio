# Peraa Design System

A minimal, token-based design system for building clean, accessible interfaces.

## Features

- **Token-based architecture** - Two-tier system with primitive and semantic tokens
- **Theme support** - Light and dark modes out of the box
- **Multiple platforms** - Available in vanilla CSS, React, and Tailwind CSS
- **Accessible** - WCAG AA compliant color contrast and semantic HTML

## Installation

### HTML/CSS/JS (Vanilla)

```html
<!-- Include the stylesheet -->
<link rel="stylesheet" href="css/main.css">

<!-- Include the JavaScript (for theme toggle, tabs) -->
<script src="js/main.js"></script>
```

### React

```jsx
// Import Peraa styles in your app entry
import '@peraa/css/main.css';

// Import components
import { Button, Badge, Card, Tabs } from '@peraa/react';

// Use in your components
function App() {
  return (
    <Button intent="primary">Click me</Button>
  );
}
```

### Tailwind CSS

```javascript
// tailwind.config.js
const peraaConfig = require('@peraa/tailwind/tailwind.config');

module.exports = {
  presets: [peraaConfig],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  // your customizations...
};

// In your CSS
@import '@peraa/tailwind/components.css';
```

## Directory Structure

```
peraa-design-system/
├── css/
│   ├── base/           # Reset and typography
│   ├── components/     # Component styles
│   ├── tokens/         # Design tokens (primitives & semantic)
│   └── main.css        # Main entry point
├── react/
│   └── components/     # React component implementations
├── tailwind/
│   ├── tailwind.config.js
│   └── components.css
├── js/
│   └── main.js         # Theme toggle and utilities
├── assets/
│   └── images/         # Branding assets
└── index.html          # Documentation
```

## Design Tokens

### Primitive Tokens
Raw values that form the foundation:
- Colors (purple, teal, neutral scales)
- Typography (font families, sizes, weights)
- Spacing (4px base scale)
- Border radius and shadows

### Semantic Tokens
Context-aware tokens that reference primitives:
- Surface colors (`--peraa-surface-page`, `--peraa-surface-card`)
- Text colors (`--peraa-text-primary`, `--peraa-text-secondary`)
- Interactive states (`--peraa-interactive-primary-bg`)

## Components

- **Buttons** - Primary, secondary, tertiary variants
- **Cards** - Content containers with hover effects
- **Badges** - Status indicators and tags
- **Tabs** - Horizontal tab navigation
- **Navigation** - Header with logo and links
- **Footer** - Site footer with branding
- **Timeline** - Vertical timeline for processes
- **Flip Cards** - Interactive cards that flip on click

## Theme Support

Toggle between light and dark modes:

```javascript
// Programmatically
document.documentElement.setAttribute('data-theme', 'dark');

// Or use the built-in theme toggle
PERAA.ThemeManager.toggle();
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Created by [Todd R. Lewis](https://toddrlewis.com)
