import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="card">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
            }}
          >
            TurtleWolfe
          </h1>
          <h2 className="text-secondary">
            Full Stack Developer & Graphic Designer
          </h2>
          <p>
            Welcome to my steampunk-themed resume! This is Phase 1 - basic setup
            with theme switching.
          </p>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <p className="text-small text-secondary">
              🎯 Phase 1 Complete: React + TypeScript + Vite setup with
              steampunk theming
            </p>
            <p className="text-small text-secondary">
              🚀 Next: Docker environment, component structure, and resume
              content
            </p>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
