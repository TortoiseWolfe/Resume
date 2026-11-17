import React from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';
import { PDFDownloadButton } from '../UI/PDFDownloadButton';
import { SectionNavigation } from '../UI/SectionNavigation';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const buildDate = import.meta.env.VITE_BUILD_DATE
    ? new Date(import.meta.env.VITE_BUILD_DATE)
    : new Date();

  return (
    <div className={styles.layout}>
      <a href="#main" className={styles.skipLink} data-print-hide>
        Skip to content
      </a>

      <header className={styles.header} data-print-hide>
        <div className={styles.bar}>
          <a href="#personal-info" className={styles.brand}>
            Jonathan Pohlner
          </a>
          <SectionNavigation />
          <div className={styles.controls}>
            <ThemeToggle />
            <PDFDownloadButton />
          </div>
        </div>
      </header>

      <main id="main" className={styles.main} tabIndex={-1}>
        <div className="container" data-resume-content>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className="text-small text-secondary">
            © {new Date().getFullYear()} TurtleWolfe. Built with React &
            TypeScript.
            {' • '}
            Last updated:{' '}
            {buildDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </footer>
    </div>
  );
};
