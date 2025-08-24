# Personal Resume Website

A modern, responsive single-page resume built with React and TypeScript, featuring steampunk-themed dark mode, typewriter animations, downloadable PDF/DOCX formats and automated deployment.

## 🚀 Features

- **🌙 Dark Mode**: Steampunk-themed dark mode (default) with copper/bronze accents
- **⌨️ Typewriter Animation**: Vintage typing effect for name and title
- **🎨 Theme Toggle**: Switch between dark and light modes in top-right corner
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **📥 Download Options**: Export resume as PDF or DOCX
- **⚡ Fast Loading**: Sub-1-second load times
- **🐳 Docker Development**: Consistent development environment
- **🚀 Auto Deployment**: GitHub Actions → GitHub Pages
- **🖨️ Print Friendly**: Optimized for direct printing

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- CSS Modules with dark/light theme support
- Custom typewriter animations
- Steampunk design system
- Docker & Docker Compose
- GitHub Actions
- GitHub Pages

## 🏃‍♂️ Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Git

### Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd 001_Resume
   ```

2. **Start with Docker Compose** (Recommended)

   ```bash
   docker-compose up --build
   ```

   The application will be available at `http://localhost:5173`

3. **Or run locally**
   ```bash
   npm install
   npm run dev
   ```

### Making Changes

1. Edit resume content in `src/data/resume.json`
2. Modify components in `src/components/`
3. Update styles in `src/styles/`
4. Changes auto-reload in development

### Building for Production

```bash
# With Docker
docker-compose -f docker-compose.prod.yml up --build

# Or locally
npm run build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Layout/         # Header, Footer, Navigation
│   │   ├── Resume/         # PersonalInfo, Experience, Skills
│   │   ├── UI/             # ThemeToggle, DownloadButton
│   │   └── Common/         # Card, Section, Button
│   ├── contexts/           # Theme, Resume data contexts
│   ├── hooks/              # Custom React hooks
│   ├── data/               # Resume content (JSON)
│   ├── styles/             # CSS modules, theme variables
│   ├── utils/              # Helper functions
│   ├── types/              # TypeScript definitions
│   └── App.tsx             # Main application
├── public/                 # Static assets, fonts, icons
├── docker/                 # Docker configurations
├── tests/                  # Test suites
├── .github/workflows/      # CI/CD pipelines
├── ai_docs/               # Architecture documentation
└── specs/                 # Requirements, design system
```

## 🚀 Deployment

Deployment is automated via GitHub Actions:

1. Push changes to `main` branch
2. GitHub Actions builds the application
3. Deploys to GitHub Pages automatically

**Live Site**: https://tortoisewolfe.github.io/Resume/

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🧪 Testing

```bash
npm test              # Run unit tests
npm run test:e2e      # Run end-to-end tests
npm run test:coverage # Generate coverage report
npm run type-check    # TypeScript checking
npm run lint          # ESLint
npm run format        # Prettier formatting
npm run bundle-analyze # Analyze bundle size
```

## 📊 Success Metrics

### Performance Targets

- ⚡ **First Contentful Paint**: < 1.0s
- 📦 **Bundle Size**: < 500KB gzipped
- 🎯 **Lighthouse Score**: > 90
- 🖼️ **Largest Contentful Paint**: < 2.5s
- 🔄 **Time to Interactive**: < 3.0s

### Quality Metrics

- ✅ **Test Coverage**: > 80%
- ♿ **Accessibility**: WCAG 2.1 AA compliant
- 📱 **Mobile Score**: 100% responsive
- 🌐 **Browser Support**: 95%+ global usage

### Monitoring

```bash
# Check bundle size
npm run build
ls -lh dist/assets/*.js

# Run Lighthouse
npm run lighthouse

# Check accessibility
npm run test:a11y
```

## 🚀 Implementation Roadmap

### Quick Wins (1-2 hours each)

1. ✅ Project initialization with Vite
2. ✅ Basic component structure
3. ✅ Dark theme implementation
4. ✅ Resume data integration
5. ✅ Mobile responsive layout

### Core Features ✅ COMPLETE

1. ✅ Typewriter animation with accessibility support
2. ✅ Theme toggle with persistence and steampunk styling
3. ✅ PDF download functionality with lazy loading
4. ✅ Steampunk styling with copper/bronze palette
5. ✅ Performance optimization (< 500KB bundle, Lighthouse > 90)

### Polish & Deploy ✅ COMPLETE

1. ✅ Loading states and error boundaries
2. ✅ GitHub Actions CI/CD pipeline
3. ✅ GitHub Pages deployment (Live!)
4. ✅ Comprehensive testing suite
5. ✅ Performance monitoring setup

### SEO & Professional Enhancement 🚀 IN PROGRESS (Phase 5)

1. ⏳ Professional meta tags and title optimization
2. ⏳ Custom favicon and branding assets
3. ⏳ Open Graph and Twitter Card meta tags
4. ⏳ JSON-LD structured data for search engines
5. ⏳ Complete resume data update (when all accurate information available)
6. ⏳ Google Analytics integration
7. ⏳ Contact optimization for recruiters
8. ⏳ Performance monitoring with Real User Metrics

## 🎯 Key Decisions

| Decision              | Choice           | Rationale                          |
| --------------------- | ---------------- | ---------------------------------- |
| **CSS Solution**      | CSS Modules      | Better performance, smaller bundle |
| **PDF Library**       | react-pdf (lazy) | Feature-rich, loaded on-demand     |
| **State Management**  | React Context    | Simple app, no Redux needed        |
| **Build Tool**        | Vite             | Faster builds, better DX           |
| **Theme Default**     | Dark Mode        | Modern, reduces eye strain         |
| **Animation Library** | Custom CSS       | Smaller bundle, full control       |
| **Testing Framework** | Vitest           | Fast, Vite-native                  |
| **Deployment**        | GitHub Pages     | Free, reliable, custom domain      |

## 📄 License

Personal project - All rights reserved

## 🤝 Contributing

This is a personal resume project. If you'd like to use this as a template:

1. Fork the repository
2. Update `src/data/resume.json` with your information
3. Customize styling and components as needed
4. Deploy to your own GitHub Pages

## 🔧 Troubleshooting

For known bugs and test failures, see [KNOWN_ISSUES.md](./KNOWN_ISSUES.md)

### Common Issues

**Docker build fails**

```bash
docker-compose down -v  # Clear volumes
docker-compose build --no-cache
```

**Port already in use**

```bash
lsof -i :5173  # Find process
kill -9 <PID>  # Kill process
```

**PDF download not working**

- Check browser console for errors
- Ensure PDF library is loaded
- Test in different browsers

**Theme not persisting**

- Check localStorage permissions
- Clear browser cache
- Verify theme context setup

---

**Performance**: ⚡ Sub-1s load times | 📱 Mobile-first | ♿ Accessible | 🌙 Dark mode default | ⌨️ Typewriter animations
