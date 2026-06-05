# Peraa Components

Reusable UI components built with the Peraa design system tokens.

## Component Overview

| Component | File | Description |
|-----------|------|-------------|
| Navigation | `_navigation.css` | Site header and navigation |
| Buttons | `_buttons.css` | Buttons with primary, secondary, tertiary intents |
| Tabs | `_tabs.css` | Horizontal tab navigation |
| Timeline | `_timeline.css` | Vertical timeline for case studies |
| Footer | `_footer.css` | Site footer |
| Image Placeholder | `_image-placeholder.css` | Clickable image cards with hover effects |
| Card | `_card.css` | Content cards with image, title, description |
| Badges | `_badges.css` | Skills and tag badges |

---

## Buttons

Three button intents for different use cases.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-btn` | Base button styles (required) |
| `.peraa-btn--primary` | Solid brand color, high emphasis |
| `.peraa-btn--secondary` | Outlined, medium emphasis |
| `.peraa-btn--tertiary` | Text-only, low emphasis |
| `.peraa-btn--sm` | Small size variant |
| `.peraa-btn--lg` | Large size variant |
| `.peraa-btn--icon-only` | Square button for icons |
| `.peraa-btn--full` | Full-width button |

### Usage

```html
<!-- Primary button -->
<button class="peraa-btn peraa-btn--primary">Get Started</button>

<!-- Secondary button -->
<button class="peraa-btn peraa-btn--secondary">Learn More</button>

<!-- Tertiary button -->
<button class="peraa-btn peraa-btn--tertiary">Cancel</button>

<!-- Button with icon -->
<button class="peraa-btn peraa-btn--primary">
  <svg class="peraa-btn__icon">...</svg>
  Download
</button>

<!-- Icon-only button -->
<button class="peraa-btn peraa-btn--tertiary peraa-btn--icon-only">
  <svg class="peraa-btn__icon">...</svg>
</button>
```

---

## Horizontal Tabs

Tab navigation for switching between content panels.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-tabs` | Tab container |
| `.peraa-tabs__list` | Tab button container |
| `.peraa-tabs__tab` | Individual tab button |
| `.peraa-tabs__tab--active` | Active tab state |
| `.peraa-tabs__content` | Content panels container |
| `.peraa-tabs__panel` | Individual content panel |
| `.peraa-tabs__panel--active` | Visible panel |
| `.peraa-tabs--underline` | Underline style variant |
| `.peraa-tabs--pills-full` | Full-width pills variant |

### Usage

```html
<div class="peraa-tabs">
  <div class="peraa-tabs__list" role="tablist">
    <button class="peraa-tabs__tab peraa-tabs__tab--active" role="tab">Tab 1</button>
    <button class="peraa-tabs__tab" role="tab">Tab 2</button>
    <button class="peraa-tabs__tab" role="tab">Tab 3</button>
  </div>
  <div class="peraa-tabs__content">
    <div class="peraa-tabs__panel peraa-tabs__panel--active" role="tabpanel">
      Content 1
    </div>
    <div class="peraa-tabs__panel" role="tabpanel">
      Content 2
    </div>
    <div class="peraa-tabs__panel" role="tabpanel">
      Content 3
    </div>
  </div>
</div>
```

---

## Vertical Timeline

Sticky timeline positioned on the right side of content areas.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-timeline-wrapper` | Flex container for content + timeline |
| `.peraa-timeline-content` | Main content area |
| `.peraa-timeline` | The timeline component |
| `.peraa-timeline__line` | Vertical connecting line |
| `.peraa-timeline__item` | Timeline entry |
| `.peraa-timeline__item--active` | Highlighted entry |
| `.peraa-timeline__marker` | Dot indicator |
| `.peraa-timeline__label` | Text container |
| `.peraa-timeline__time` | Time label (Week 1, Month 2, etc.) |
| `.peraa-timeline__description` | Optional description |

### Usage

```html
<div class="peraa-timeline-wrapper">
  <div class="peraa-timeline-content">
    <!-- Main page content goes here -->
  </div>
  
  <nav class="peraa-timeline" aria-label="Project timeline">
    <div class="peraa-timeline__line"></div>
    
    <div class="peraa-timeline__item peraa-timeline__item--active">
      <div class="peraa-timeline__marker"></div>
      <div class="peraa-timeline__label">
        <span class="peraa-timeline__time">Week 1</span>
        <span class="peraa-timeline__description">Discovery</span>
      </div>
    </div>
    
    <div class="peraa-timeline__item">
      <div class="peraa-timeline__marker"></div>
      <div class="peraa-timeline__label">
        <span class="peraa-timeline__time">Month 2</span>
        <span class="peraa-timeline__description">Development</span>
      </div>
    </div>
  </nav>
</div>
```

---

## Footer

Site footer with branding and links.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-footer` | Footer container |
| `.peraa-footer__inner` | Max-width wrapper |
| `.peraa-footer__main` | Main content area |
| `.peraa-footer__brand` | Site name and design system credit |
| `.peraa-footer__site-name` | Site title |
| `.peraa-footer__design-system` | Design system credit |
| `.peraa-footer__links` | Links container |
| `.peraa-footer__link` | Individual link |
| `.peraa-footer__bottom` | Copyright area |

### Usage

```html
<footer class="peraa-footer">
  <div class="peraa-footer__inner">
    <div class="peraa-footer__main">
      <div class="peraa-footer__brand">
        <span class="peraa-footer__site-name">Todd R. Lewis</span>
        <span class="peraa-footer__design-system">
          Built with <span class="peraa-footer__design-system-name">Peraa</span>
        </span>
      </div>
      <div class="peraa-footer__links">
        <a href="#" class="peraa-footer__link">LinkedIn</a>
      </div>
    </div>
    <div class="peraa-footer__bottom">
      <p class="peraa-footer__copyright">© 2024 Todd R. Lewis</p>
    </div>
  </div>
</footer>
```

---

## Image Placeholder

Clickable image cards with hover effects for case study navigation.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-image-placeholder` | Main container (use on `<a>` tag) |
| `.peraa-image-placeholder__image` | The image element |
| `.peraa-image-placeholder__overlay` | Hover overlay with gradient |
| `.peraa-image-placeholder__title` | Title text |
| `.peraa-image-placeholder__subtitle` | Subtitle text |
| `.peraa-image-placeholder__cta` | Arrow button indicator |
| `.peraa-image-placeholder--square` | 1:1 aspect ratio |
| `.peraa-image-placeholder--portrait` | 3:4 aspect ratio |
| `.peraa-image-placeholder--wide` | 21:9 aspect ratio |

### Usage

```html
<a href="project-1.html" class="peraa-image-placeholder">
  <img src="image.jpg" alt="Project 1" class="peraa-image-placeholder__image">
  <div class="peraa-image-placeholder__overlay">
    <span class="peraa-image-placeholder__title">Project Title</span>
    <span class="peraa-image-placeholder__subtitle">Case Study</span>
  </div>
  <div class="peraa-image-placeholder__cta">
    <svg class="peraa-image-placeholder__cta-icon">→</svg>
  </div>
</a>
```

---

## Card

Content cards for displaying items with optional image.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-card` | Card container |
| `.peraa-card--interactive` | Adds hover effects |
| `.peraa-card__image-wrapper` | Image container |
| `.peraa-card__image` | Image element |
| `.peraa-card__content` | Text content area |
| `.peraa-card__title` | Card title |
| `.peraa-card__description` | Card description |
| `.peraa-card__footer` | Optional footer area |
| `.peraa-card--horizontal` | Side-by-side layout |
| `.peraa-card--compact` | Smaller padding |
| `.peraa-card--featured` | Highlighted with brand border |

### Usage

```html
<article class="peraa-card peraa-card--interactive">
  <div class="peraa-card__image-wrapper">
    <img src="image.jpg" alt="" class="peraa-card__image">
  </div>
  <div class="peraa-card__content">
    <h3 class="peraa-card__title">Card Title</h3>
    <p class="peraa-card__description">Brief description of the content.</p>
  </div>
  <div class="peraa-card__footer">
    <div class="peraa-card__tags">
      <span class="peraa-badge">Tag</span>
    </div>
  </div>
</article>
```

---

## Badges

Tags and skill badges for labeling content.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-badge` | Base badge styles |
| `.peraa-badge--brand` | Brand/primary color |
| `.peraa-badge--success` | Green success state |
| `.peraa-badge--warning` | Yellow warning state |
| `.peraa-badge--error` | Red error state |
| `.peraa-badge--info` | Blue info state |
| `.peraa-badge--outline` | Outlined variant |
| `.peraa-badge--sm` | Small size |
| `.peraa-badge--lg` | Large size |
| `.peraa-badge--dot` | Includes status dot |
| `.peraa-badge-group` | Container for multiple badges |

### Usage

```html
<!-- Basic badge -->
<span class="peraa-badge">Default</span>

<!-- Brand badge -->
<span class="peraa-badge peraa-badge--brand">Featured</span>

<!-- Status badges -->
<span class="peraa-badge peraa-badge--success">Complete</span>
<span class="peraa-badge peraa-badge--warning">In Progress</span>

<!-- Badge group -->
<div class="peraa-badge-group">
  <span class="peraa-badge peraa-badge--brand">Design</span>
  <span class="peraa-badge">UX</span>
  <span class="peraa-badge">Research</span>
</div>
```

---

## Navigation

Site header with logo and navigation links.

### Classes

| Class | Description |
|-------|-------------|
| `.peraa-header` | Sticky header container |
| `.peraa-nav` | Navigation flex container |
| `.peraa-nav__logo` | Site logo/name link |
| `.peraa-nav__menu` | Menu items container |
| `.peraa-nav__link` | Navigation link |
| `.peraa-nav__link--active` | Active page indicator |

### Usage

```html
<header class="peraa-header">
  <div class="peraa-container">
    <nav class="peraa-nav">
      <a href="/" class="peraa-nav__logo">Site Name</a>
      <ul class="peraa-nav__menu">
        <li><a href="/" class="peraa-nav__link peraa-nav__link--active">Home</a></li>
        <li><a href="/about" class="peraa-nav__link">About</a></li>
      </ul>
    </nav>
  </div>
</header>
```

---

## Accessibility

All components are built with accessibility in mind:

- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus indicators
- Reduced motion support

## Responsive Behavior

Components are responsive by default:

- **Timeline**: Hidden on mobile, shows on desktop
- **Navigation**: Wraps on mobile
- **Grid**: Collapses to single column on mobile
- **Cards**: Stack vertically on mobile
