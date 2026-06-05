# Peraa Design System - Tailwind CSS

Tailwind CSS configuration and component classes for the Peraa design system.

## Installation

1. Install Tailwind CSS in your project
2. Copy or extend the Peraa config

### Option 1: Use as a Preset

```javascript
// tailwind.config.js
const peraaConfig = require('./path/to/peraa/tailwind/tailwind.config');

module.exports = {
  presets: [peraaConfig],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  // your customizations...
};
```

### Option 2: Merge Configurations

```javascript
// tailwind.config.js
const peraaConfig = require('./path/to/peraa/tailwind/tailwind.config');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...peraaConfig.theme.extend,
      // your additional customizations...
    },
  },
};
```

## Using Component Classes

Import the component styles in your main CSS file:

```css
@import './path/to/peraa/tailwind/components.css';
```

Or copy the `@layer components` blocks into your own CSS.

## Available Classes

### Buttons

```html
<button class="peraa-btn-primary">Primary Button</button>
<button class="peraa-btn-secondary">Secondary Button</button>
<button class="peraa-btn-tertiary">Tertiary Button</button>

<!-- Sizes -->
<button class="peraa-btn-primary peraa-btn-sm">Small</button>
<button class="peraa-btn-primary peraa-btn-lg">Large</button>
```

### Badges

```html
<span class="peraa-badge">Default</span>
<span class="peraa-badge-brand">Brand</span>
<span class="peraa-badge-success">Success</span>
<span class="peraa-badge-warning">Warning</span>
<span class="peraa-badge-error">Error</span>

<!-- Sizes -->
<span class="peraa-badge peraa-badge-sm">Small</span>
<span class="peraa-badge peraa-badge-lg">Large</span>
```

### Cards

```html
<div class="peraa-card">
  <img src="..." class="peraa-card-image" />
  <div class="peraa-card-content">
    <h3 class="peraa-card-title">Title</h3>
    <p class="peraa-card-description">Description</p>
  </div>
</div>

<!-- Interactive card -->
<div class="peraa-card-interactive">...</div>

<!-- Featured card -->
<div class="peraa-card-featured">...</div>
```

### Tabs

```html
<div class="peraa-tabs-list">
  <button class="peraa-tab peraa-tab-active">Tab 1</button>
  <button class="peraa-tab">Tab 2</button>
</div>
<div class="peraa-tab-panel">Content</div>
```

### Typography

```html
<h1 class="peraa-heading-1">Heading 1</h1>
<h2 class="peraa-heading-2">Heading 2</h2>
<p class="peraa-lead">Lead paragraph</p>
<p class="peraa-body">Body text</p>
<span class="peraa-overline">Overline</span>
```

## Using Utility Classes

With the Peraa config, you have access to all the design tokens as Tailwind utilities:

```html
<!-- Colors -->
<div class="bg-purple-500 text-white">Brand color</div>
<div class="text-neutral-600">Secondary text</div>

<!-- Spacing -->
<div class="p-peraa-4 m-peraa-6">Peraa spacing</div>

<!-- Border Radius -->
<div class="rounded-peraa-lg">Large radius</div>

<!-- Shadows -->
<div class="shadow-peraa-md">Medium shadow</div>
```

## Dark Mode

The component classes include dark mode variants. Enable dark mode in your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
};
```

Then toggle with the `dark` class:

```html
<html class="dark">
  <!-- Components will automatically use dark styles -->
</html>
```
