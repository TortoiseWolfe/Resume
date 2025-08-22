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

## Development Notes
- Use CSS Modules for styling with CSS custom properties for theming
- Store resume data in JSON for easy updates
- Default to dark mode with steampunk copper/bronze color palette
- Implement typewriter animation for name and title text
- Dark mode toggle positioned in top-right corner next to download button
- Ensure mobile-first responsive design
- Test download functionality across browsers
- Optimize images and assets for web
- Respect prefers-reduced-motion for accessibility