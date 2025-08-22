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
│   ├── components/          # React components
│   ├── data/               # Resume content (JSON)
│   ├── styles/             # CSS modules
│   ├── utils/              # Helper functions
│   └── App.tsx             # Main application
├── public/                 # Static assets
├── docker/                 # Docker configurations
├── .github/workflows/      # CI/CD pipelines
├── ai_docs/               # AI documentation
└── specs/                 # Technical specifications
```

## 🚀 Deployment

Deployment is automated via GitHub Actions:

1. Push changes to `main` branch
2. GitHub Actions builds the application
3. Deploys to GitHub Pages automatically

**Live Site**: [Your GitHub Pages URL]

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🧪 Testing

```bash
npm test              # Run tests
npm run type-check    # TypeScript checking
npm run lint          # ESLint
npm run format        # Prettier formatting
```

## 📄 License

Personal project - All rights reserved

## 🤝 Contributing

This is a personal resume project. If you'd like to use this as a template:

1. Fork the repository
2. Update `src/data/resume.json` with your information
3. Customize styling and components as needed
4. Deploy to your own GitHub Pages

---

**Performance**: ⚡ Sub-1s load times | 📱 Mobile-first | ♿ Accessible | 🌙 Dark mode default | ⌨️ Typewriter animations# Resume
