# Design System Specification

## Color Palette

### Light Theme Colors
- **Primary**: #2563eb (Blue 600)
- **Primary Light**: #3b82f6 (Blue 500)
- **Primary Dark**: #1d4ed8 (Blue 700)
- **Text Primary**: #111827 (Gray 900)
- **Text Secondary**: #6b7280 (Gray 500)
- **Background**: #ffffff (White)
- **Background Alt**: #f9fafb (Gray 50)
- **Border**: #e5e7eb (Gray 200)

### Dark Theme Colors (Default) - Steampunk Inspired
- **Primary**: #d97706 (Amber 600) - Copper accent
- **Primary Light**: #f59e0b (Amber 500) - Bright copper
- **Primary Dark**: #b45309 (Amber 700) - Dark copper
- **Secondary**: #8b5cf6 (Violet 500) - Steam purple
- **Text Primary**: #f9fafb (Gray 50) - Light text
- **Text Secondary**: #d1d5db (Gray 300) - Muted text
- **Background**: #1f2937 (Gray 800) - Dark background
- **Background Alt**: #374151 (Gray 700) - Card background
- **Border**: #4b5563 (Gray 600) - Subtle borders
- **Accent Gold**: #fbbf24 (Amber 400) - Gear highlights
- **Accent Bronze**: #92400e (Amber 800) - Deep metallic

## Typography

### Font Stack
- **Primary**: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Steampunk Display**: 'Crimson Text', 'Times New Roman', serif - For typewriter effect
- **Steampunk Accent**: 'Courier New', 'Monaco', monospace - For mechanical elements
- **Fallback**: System fonts for maximum compatibility

### Font Sizes
- **Heading 1**: 2.25rem (36px) - Name
- **Heading 2**: 1.875rem (30px) - Section headers
- **Heading 3**: 1.25rem (20px) - Job titles
- **Body Large**: 1.125rem (18px) - Summary
- **Body**: 1rem (16px) - Standard text
- **Body Small**: 0.875rem (14px) - Dates, metadata

## Layout

### Spacing Scale
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Grid System
- **Container**: Max-width 800px, centered
- **Columns**: Single column layout
- **Gutters**: 1rem mobile, 2rem desktop

## Components

### Top Controls Bar
- **Position**: Fixed top-right corner
- **Layout**: Horizontal flex container with gap
- **Components**: Dark mode toggle + Download button

#### Dark Mode Toggle
- **Size**: 44px height (touch-friendly)
- **Style**: Steampunk gear/switch design with copper accents
- **States**: Dark (default), Light
- **Animation**: Smooth rotation/slide transition
- **Icons**: Gear/cog for dark, sun for light

#### Download Button
- **Size**: 44px height (touch-friendly)
- **Style**: Primary color with theme-appropriate text
- **Hover**: Darker primary color with steampunk glow effect

### Section Cards
- **Background**: White with subtle border
- **Padding**: 1.5rem
- **Border Radius**: 0.5rem
- **Shadow**: Subtle drop shadow

### Typography Hierarchy
- **Name**: Large, bold, primary color with typewriter animation (Steampunk Display font)
- **Title**: Medium, regular weight, secondary color with typewriter animation
- **Section Headers**: Bold, uppercase, with bottom border
- **Content**: Regular weight, good line spacing

## Animations

### Typewriter Effect
- **Target Elements**: Name and title text
- **Timing**: 50-100ms per character
- **Cursor**: Blinking pipe character (|) in accent color
- **Font**: Steampunk Display ('Crimson Text') for vintage feel
- **Behavior**: Types character by character on page load
- **Accessibility**: Respects prefers-reduced-motion setting