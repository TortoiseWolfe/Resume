import React from 'react';
import type { Experience as ExperienceType } from '../../types/Resume';
import styles from './Experience.module.css';

interface ExperienceProps {
  experiences: ExperienceType[];
  previousExperiences?: ExperienceType[];
}

interface ExperienceItemProps {
  experience: ExperienceType;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  isLast,
}) => {
  const formatLocation = () => {
    const { city, state } = experience.location;
    return [city, state].filter(Boolean).join(', ') || 'Remote';
  };

  return (
    <div className={styles.experienceItem}>
      <div className={styles.timeline}>
        <div className={styles.timelineMarker}>
          <span className={styles.gear}>⚙️</span>
        </div>
        {!isLast && <div className={styles.timelineLine} />}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h3 className={styles.jobTitle}>{experience.title}</h3>
            <div className={styles.company}>
              <span className={styles.companyName}>{experience.company}</span>
              <span className={styles.location}>{formatLocation()}</span>
            </div>
          </div>

          <div className={styles.dateSection}>
            <span className={styles.dateRange}>{experience.displayDate}</span>
            {experience.isCurrent && (
              <span className={styles.currentBadge}>Current</span>
            )}
          </div>
        </div>

        <ul className={styles.responsibilities}>
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className={styles.responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  previousExperiences,
}) => {
  return (
    <>
      <section id="experience" className={styles.experience}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </section>

      {previousExperiences && previousExperiences.length > 0 && (
        <section id="previous-experience" className={styles.experience}>
          <h2 className={styles.sectionTitle}>Previous Experience</h2>
          <div className={styles.experienceList}>
            {previousExperiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.startDate}`}
                experience={experience}
                isLast={index === previousExperiences.length - 1}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
