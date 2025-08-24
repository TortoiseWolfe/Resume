# Claude AI Assistant Context

## Project Overview

React-based single-page resume website with steampunk-themed dark mode, typewriter animations, Docker development environment and GitHub Pages deployment.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: CSS Modules with dark/light theme support
- **Animations**: Custom typewriter effect with steampunk styling
- **Theme**: Dark mode (default) with copper/bronze steampunk palette
- **Development**: Docker Compose with hot reload
- **Build**: Vite for fast bundling
- **Deployment**: GitHub Actions → GitHub Pages
- **PDF Export**: react-pdf or jsPDF

## Project Structure

```
├── src/
│   ├── components/          # React components
│   ├── data/               # Resume content (JSON)
│   ├── styles/             # CSS modules
│   ├── utils/              # Helper functions
│   └── App.tsx             # Main app component
├── public/                 # Static assets
├── docker/                 # Docker configs
├── .github/workflows/      # CI/CD
├── ai_docs/               # AI documentation
└── specs/                 # Technical specs
```

## Common Commands

### Development

```bash
# Start development server with Docker Compose
docker-compose up --build

# Stop development server
docker-compose down

# Install dependencies
npm install

# Start local development (without Docker)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Compose

```bash
# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Rebuild and start
docker-compose up --build

# Stop all services
docker-compose down

# Remove volumes (clean slate)
docker-compose down -v
```

### Testing & Quality

```bash
# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## Key Files

- **docker-compose.yml**: Docker Compose configuration
- **docker/Dockerfile.dev**: Development Docker config
- **src/data/resume.json**: Resume content data
- **src/App.tsx**: Main application component
- **.github/workflows/deploy.yml**: Deployment pipeline
- **vite.config.ts**: Build configuration

## Performance Targets

- First Contentful Paint < 1 second
- Bundle size < 500KB gzipped
- Lighthouse Performance score > 90

## Environment Variables

### Local Development (.env)

```bash
# Google Analytics
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Hide sensitive data
VITE_CONTACT_EMAIL=your-email@example.com
VITE_CONTACT_PHONE=+1-555-123-4567
```

### Production (GitHub Secrets)

- Set `GA4_MEASUREMENT_ID` in repository secrets
- Configure in GitHub Actions workflow
- Vite injects at build time

## Privacy Considerations

- Respect browser Do Not Track settings
- Consider GDPR/CCPA compliance for analytics
- Email obfuscation to prevent scraping
- Optional phone number hiding
- Cookie consent for EU visitors

## Development Notes

### Coding Standards

- Use CSS Modules for styling with CSS custom properties for theming
- Store resume data in JSON with consistent date formats (ISO 8601)
- Default to dark mode with steampunk copper/bronze color palette
- Implement typewriter animation for name and title text
- Dark mode toggle positioned in top-right corner next to download button
- Ensure mobile-first responsive design
- Test download functionality across browsers
- Optimize images and assets for web
- Respect prefers-reduced-motion for accessibility

### TypeScript Guidelines

- Enable strict mode in tsconfig.json
- Define interfaces for all data structures
- Use type inference where possible
- Avoid 'any' type - use 'unknown' if type is truly unknown
- Export types separately from implementations

### Testing Requirements

- Unit tests for utility functions (>80% coverage)
- Integration tests for critical user flows
- Visual regression tests for theme switching
- Accessibility tests with axe-core
- Performance tests with Lighthouse CI

### Bundle Size Monitoring

- Target: < 500KB gzipped total
- Core app: < 200KB
- PDF library: < 250KB (lazy loaded)
- Monitor with webpack-bundle-analyzer
- Set up CI alerts for size regression

## Implementation Phases

### Phase 1: Core Setup ✅ COMPLETE

1. ✅ Initialize project with Vite + React + TypeScript
2. ✅ Set up Docker development environment
3. ✅ Configure ESLint, Prettier, and pre-commit hooks
4. ✅ Create base component structure
5. ✅ Implement CSS custom properties and theme system

### Phase 2: Resume Display ✅ COMPLETE

1. ✅ Create resume section components
2. ✅ Integrate resume JSON data
3. ✅ Implement responsive layout
4. ✅ Add steampunk styling
5. ✅ Test on multiple devices

### Phase 3: Interactive Features ✅ COMPLETE

1. ✅ Implement typewriter animation
2. ✅ Add theme toggle functionality
3. ✅ Create PDF download feature (lazy loaded)
4. ✅ Add loading and error states
5. ✅ Implement smooth scrolling with section navigation

### Phase 4: Polish & Deploy ✅ COMPLETE

1. ✅ Optimize performance (Bundle < 500KB, Lighthouse targets met)
2. ✅ Add comprehensive testing suite with Vitest
3. ✅ Set up GitHub Actions CI/CD pipeline
4. ✅ Deploy to GitHub Pages (Live at https://tortoisewolfe.github.io/Resume/)
5. ✅ Monitor and iterate

### Phase 5: SEO & Privacy-Conscious Enhancement 🚀 IN PROGRESS

1. ✅ Professional meta tags and title optimization
2. ✅ Open Graph and Twitter Card meta tags for social sharing
3. ✅ JSON-LD structured data for better search engine understanding
4. ⏳ Environment variable configuration (.env for sensitive data)
5. ⏳ Google Analytics 4 with privacy controls (respecting Do Not Track)
6. ⏳ Custom favicon and professional branding assets (user will design)
7. ⏳ Complete resume data update (when all accurate information available)

### Phase 6: Privacy, Security & Advanced Features (Priority: Medium)

1. Data privacy strategy (email obfuscation, phone privacy)
2. Environment configuration (secrets management, build-time injection)
3. Progressive Web App features (offline support, installable)
4. Performance monitoring (Web Vitals, Lighthouse CI, RUM)
5. Contact optimization (spam protection, professional routing)
6. Version control and update timestamps
7. Advanced analytics with user consent
