import React from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';
import { PDFDownloadButton } from '../UI/PDFDownloadButton';
import { SectionNavigation } from '../UI/SectionNavigation';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.controls}>
            <ThemeToggle />
            <PDFDownloadButton />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container" data-resume-content>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className="text-small text-secondary">
            © 2024 TurtleWolfe. Built with React & TypeScript.
          </p>
        </div>
      </footer>

      <SectionNavigation />
    </div>
  );
};
