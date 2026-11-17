import React from 'react';
import type {
  PersonalInfo as PersonalInfoType,
  Links,
} from '../../types/Resume';
import { TypewriterText } from '../UI/TypewriterText';
import { ObfuscatedEmail } from '../UI/ObfuscatedEmail';
import { ObfuscatedPhone } from '../UI/ObfuscatedPhone';
import { trackExternalLink } from '../../utils/analytics';
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
            reserveText={personalInfo.name}
          />
        </h1>
        <p className={styles.title}>
          {showTitle ? (
            <TypewriterText
              text={personalInfo.title}
              speed={75}
              delay={200}
              reserveText={personalInfo.title}
            />
          ) : (
            <span aria-hidden="true" style={{ visibility: 'hidden' }}>
              {personalInfo.title}
            </span>
          )}
        </p>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.contactColumn}>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <ObfuscatedPhone
                phone={personalInfo.phone}
                className={styles.contactLink}
              />
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <ObfuscatedEmail
                email={personalInfo.email}
                className={styles.contactLink}
              />
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span className={styles.contactText}>{formatLocation()}</span>
            </div>
          </div>
        </div>

        <div className={styles.socialColumn}>
          <div className={styles.socialLinks}>
            <a
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Portfolio"
              onClick={() => trackExternalLink('portfolio', links.portfolio)}
            >
              🌐 Portfolio
            </a>

            {links.github.map((github, index) => (
              <a
                key={index}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${index === 1 ? styles.legacyLink : ''}`}
                title={
                  index === 0
                    ? 'GitHub (Active)'
                    : 'GitHub (Legacy - locked account)'
                }
                onClick={() => trackExternalLink('github', github)}
              >
                ⚙️ GitHub{index === 1 ? ' (legacy)' : ''}
              </a>
            ))}

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="LinkedIn"
              onClick={() => trackExternalLink('linkedin', links.linkedin)}
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
                onClick={() => trackExternalLink('youtube', links.youtube!)}
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
                onClick={() => trackExternalLink('twitch', links.twitch!)}
              >
                🎮 Twitch
              </a>
            )}
          </div>

          {personalInfo.willingToRelocate &&
            personalInfo.willingToRelocate.length > 0 && (
              <div className={styles.relocation}>
                <p className={styles.relocationText}>
                  <strong>Willing to relocate:</strong>{' '}
                  {personalInfo.willingToRelocate.join(' • ')}
                </p>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};
