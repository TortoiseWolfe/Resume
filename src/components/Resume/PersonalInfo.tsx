import React from 'react';
import type {
  PersonalInfo as PersonalInfoType,
  Links,
} from '../../types/Resume';
import { TypewriterText } from '../UI/TypewriterText';
import styles from './PersonalInfo.module.css';

interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
  links: Links;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  personalInfo,
  links,
}) => {
  const [showTitle, setShowTitle] = React.useState(false);

  const handleNameComplete = () => {
    setShowTitle(true);
  };

  const formatLocation = () => {
    const { city, state, zip } = personalInfo.location;
    const parts = [city, state].filter(Boolean);
    const location = parts.join(', ');
    return zip ? `${location} ${zip}` : location;
  };

  return (
    <header id="personal-info" className={styles.personalInfo}>
      <div className={styles.nameSection}>
        <h1 className={styles.name}>
          <TypewriterText
            text={personalInfo.name}
            speed={100}
            delay={500}
            onComplete={handleNameComplete}
          />
        </h1>
        <h2 className={styles.title}>
          {showTitle && (
            <TypewriterText text={personalInfo.title} speed={75} delay={200} />
          )}
        </h2>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span className={styles.contactText}>{formatLocation()}</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className={styles.contactLink}
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.contactLink}
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a
            href={links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="Portfolio"
          >
            🌐 Portfolio
          </a>

          {links.github.map((github, index) => (
            <a
              key={index}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title={`GitHub ${index + 1}`}
            >
              ⚙️ GitHub
            </a>
          ))}

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            title="LinkedIn"
          >
            💼 LinkedIn
          </a>

          {links.youtube && (
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="YouTube"
            >
              📺 YouTube
            </a>
          )}

          {links.twitch && (
            <a
              href={links.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Twitch"
            >
              🎮 Twitch
            </a>
          )}
        </div>

        {personalInfo.willingToRelocate.length > 0 && (
          <div className={styles.relocation}>
            <p className={styles.relocationText}>
              <strong>Willing to relocate:</strong>{' '}
              {personalInfo.willingToRelocate.join(' • ')}
            </p>
          </div>
        )}
      </div>
    </header>
  );
};
