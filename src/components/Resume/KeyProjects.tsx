import React from 'react';
import type { KeyProject } from '../../types/Resume';
import { trackExternalLink } from '../../utils/analytics';
import styles from './KeyProjects.module.css';

interface KeyProjectsProps {
  projects: KeyProject[];
}

export const KeyProjects: React.FC<KeyProjectsProps> = ({ projects }) => {
  const handleProjectClick = (project: KeyProject) => {
    trackExternalLink(project.name, project.url);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Key Projects</h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            onClick={() => handleProjectClick(project)}
          >
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
            </div>

            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            <p className={styles.description}>{project.description}</p>

            <span className={styles.viewProject}>
              View Project <span className={styles.arrow}>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
