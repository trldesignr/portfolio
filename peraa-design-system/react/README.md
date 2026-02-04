# Peraa Design System - React Components

React component library for the Peraa design system.

## Installation

```bash
# Copy the react folder to your project, or:
npm install @peraa/react  # (if published to npm)
```

## Setup

Import the CSS styles (required):

```jsx
// In your app entry point
import '@peraa/css/main.css';
// Or import individual component styles
import '@peraa/react/components/Button.css';
```

## Components

### Button

```jsx
import { Button } from '@peraa/react';

// Intents
<Button intent="primary">Primary</Button>
<Button intent="secondary">Secondary</Button>
<Button intent="tertiary">Tertiary</Button>

// Sizes
<Button intent="primary" size="sm">Small</Button>
<Button intent="primary" size="lg">Large</Button>

// States
<Button intent="primary" disabled>Disabled</Button>
<Button intent="primary" fullWidth>Full Width</Button>

// With click handler
<Button intent="primary" onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intent` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `iconOnly` | `boolean` | `false` | Square button for icons |
| `fullWidth` | `boolean` | `false` | Full width button |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `function` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

### Badge

```jsx
import { Badge } from '@peraa/react';

// Variants
<Badge>Default</Badge>
<Badge variant="brand">Brand</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="lg">Large</Badge>

// Outline
<Badge outline>Outlined</Badge>
<Badge variant="brand" outline>Brand Outline</Badge>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'brand' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Badge variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `outline` | `boolean` | `false` | Outlined style |
| `dot` | `boolean` | `false` | Show status dot |

### Tabs

```jsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@peraa/react';

<Tabs defaultTab="overview">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="features">Features</Tab>
    <Tab id="pricing">Pricing</Tab>
  </TabList>
  <TabPanels>
    <TabPanel id="overview">
      Overview content here
    </TabPanel>
    <TabPanel id="features">
      Features content here
    </TabPanel>
    <TabPanel id="pricing">
      Pricing content here
    </TabPanel>
  </TabPanels>
</Tabs>

// Variants
<Tabs defaultTab="tab1" variant="underline">...</Tabs>
<Tabs defaultTab="tab1" variant="pills-full">...</Tabs>
```

#### Tabs Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTab` | `string` | required | ID of initially active tab |
| `variant` | `'pills' \| 'underline' \| 'pills-full'` | `'pills'` | Tab style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tab size |

### Card

```jsx
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@peraa/react';

<Card interactive>
  <CardImage src="/image.jpg" alt="Description" />
  <CardContent>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Brief description of the card content.
    </CardDescription>
  </CardContent>
  <CardFooter>
    <Badge variant="brand">Tag</Badge>
  </CardFooter>
</Card>

// Variants
<Card horizontal>...</Card>
<Card compact>...</Card>
<Card featured>...</Card>
```

#### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `interactive` | `boolean` | `false` | Adds hover effects |
| `horizontal` | `boolean` | `false` | Side-by-side layout |
| `compact` | `boolean` | `false` | Smaller padding |
| `featured` | `boolean` | `false` | Brand border highlight |
| `onClick` | `function` | - | Click handler |

### FlipCard

```jsx
import { FlipCard } from '@peraa/react';

<FlipCard
  title="Card Title"
  description="Short description on the front"
  backTitle="Detailed View"
  backDescription="Longer description revealed when the card is flipped"
  backList={[
    'First bullet point',
    'Second bullet point',
    'Third bullet point',
  ]}
/>

// With image
<FlipCard
  imageSrc="/image.jpg"
  imageAlt="Project screenshot"
  title="Project Name"
  description="Brief summary"
  backDescription="Detailed project information..."
/>

// Expanded height for more content
<FlipCard expanded {...props} />
```

#### FlipCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Front card title |
| `description` | `string` | required | Front card description |
| `backTitle` | `string` | `title` | Back card title |
| `backDescription` | `string` | required | Back card description |
| `backList` | `string[]` | - | Optional bullet points |
| `imageSrc` | `string` | - | Image source URL |
| `imageAlt` | `string` | `''` | Image alt text |
| `expanded` | `boolean` | `false` | Larger card height |

## Theming

Components use CSS custom properties from the Peraa token system. To change themes:

```jsx
// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Or use the ThemeManager
window.Peraa.ThemeManager.toggle();
```

## TypeScript

Type definitions are included. Import types:

```tsx
import type { ButtonProps, BadgeProps, CardProps } from '@peraa/react';
```
