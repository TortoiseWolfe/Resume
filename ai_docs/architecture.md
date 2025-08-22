# Architecture Overview

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: CSS Modules or Styled Components
- **Development**: Docker with hot reload
- **Deployment**: GitHub Pages via GitHub Actions
- **PDF Generation**: react-pdf or jsPDF for client-side generation

## Project Goals
- Single-page responsive resume website
- Professional design with download functionality
- Fast loading and mobile-optimized
- Easy content updates via JSON configuration
- Automated deployment pipeline

## Key Design Decisions
- **Static Site**: No backend required, pure client-side application
- **Component-Based**: Modular React components for maintainability
- **Docker Development**: Consistent environment across machines
- **CI/CD**: Automated testing and deployment on push to main

## File Structure
```
├── src/
│   ├── components/          # React components
│   ├── data/               # Resume content in JSON
│   ├── styles/             # CSS/styling files
│   ├── utils/              # Helper functions
│   └── App.tsx             # Main application
├── public/                 # Static assets
├── docker/                 # Docker configuration
├── .github/workflows/      # CI/CD pipelines
└── docs/                   # Documentation
```