# Todd R. Lewis - Portfolio Site

A minimal, clean portfolio website showcasing case studies and problem-solving projects. Built with vanilla HTML, CSS, and JavaScript using the **Peraa Design System**.

## 🌐 Site Structure

```
├── index.html              # Home page
├── pages/
│   ├── about.html          # About page
│   ├── challenges-welcomed.html # Challenges Welcomed page
│   ├── design-system.html  # Design System documentation
│   └── case-studies/
│       ├── index.html      # Case Studies listing
│       ├── project-1.html  # Case Study 1
│       ├── project-2.html  # Case Study 2
│       ├── project-3.html  # Case Study 3
│       └── project-4.html  # Case Study 4
```

## 🎨 Design System

This site is built with **Peraa**, a custom design system featuring:

- **Token-based styling** with CSS custom properties
- **Light/Dark mode** support
- **Reusable components** for consistent UI
- **Responsive design** for all screen sizes
- **Multi-framework support** (HTML/CSS/JS, React, Tailwind CSS)

### Available Platforms

| Platform | Location | Description |
|----------|----------|-------------|
| HTML/CSS/JS | `/css/`, `/js/` | Vanilla implementation with CSS custom properties |
| React | `/react/` | React components with props and TypeScript support |
| Tailwind CSS | `/tailwind/` | Tailwind config preset and component classes |

See the [Design System Documentation](css/README.md) for full details.

## 🚀 Getting Started

### Prerequisites

No build tools required! This is a static HTML/CSS/JS site.

### Running Locally

1. Clone the repository
2. Open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000`

## 📁 Project Structure

```
peraa/
├── index.html              # Home page
├── README.md               # This file
├── css/
│   ├── main.css            # Main stylesheet (imports all)
│   ├── tokens/             # Design tokens
│   │   ├── _primitives.css # Raw values (colors, spacing, etc.)
│   │   ├── _semantic.css   # Contextual tokens (light/dark themes)
│   │   └── README.md       # Token documentation
│   ├── base/
│   │   ├── _reset.css      # CSS reset
│   │   └── _typography.css # Typography styles
│   └── components/         # UI components
│       ├── _buttons.css
│       ├── _tabs.css
│       ├── _timeline.css
│       ├── _footer.css
│       ├── _image-placeholder.css
│       ├── _card.css
│       ├── _badges.css
│       ├── _navigation.css
│       ├── _flip-card.css
│       ├── _framework-switch.css
│       └── README.md       # Component documentation
├── js/
│   └── main.js             # JavaScript functionality
├── react/                  # React components
│   ├── README.md           # React documentation
│   └── components/
│       ├── index.js        # Component exports
│       ├── Button.jsx
│       ├── Badge.jsx
│       ├── Tabs.jsx
│       ├── Card.jsx
│       └── FlipCard.jsx
├── tailwind/               # Tailwind CSS configuration
│   ├── README.md           # Tailwind documentation
│   ├── tailwind.config.js  # Peraa theme preset
│   └── components.css      # Component utility classes
├── pages/                  # Site pages
│   ├── about.html
│   ├── challenges-welcomed.html
│   ├── design-system.html
│   └── case-studies/
└── assets/
    └── images/             # Image assets
```

## 🎨 Theming

The site supports light and dark modes:

- **Automatic**: Respects system preference by default
- **Manual**: Click the theme toggle button in the navigation
- **Persistent**: Theme choice is saved in localStorage

## 🔧 Customization

### Updating Colors

Edit `css/tokens/_primitives.css` to change the color palette:

```css
:root {
  --peraa-color-purple-500: #6F1FAC; /* Primary brand color */
}
```

### Adding Content

1. Replace placeholder text in HTML files
2. Add images to `assets/images/`
3. Update the timeline items in case study pages

## 📝 License

© 2026 Todd R. Lewis. All rights reserved.

## 🔗 Links

- [LinkedIn](https://www.linkedin.com/in/toddrlewis/)
