import React, { useEffect, useState } from 'react';
import styles from './SectionNavigation.module.css';

interface NavigationItem {
  id: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'personal-info', label: 'About' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

export const SectionNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('personal-info');

  // Track scroll position and mark the section being read
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // Offset for the sticky bar

      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navigationItems[i].id);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navigationItems[i].id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navigation} aria-label="Sections">
      <ul className={styles.navList}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={styles.navLink}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
