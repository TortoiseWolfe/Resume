import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout/Layout';
import { PersonalInfo } from './components/Resume/PersonalInfo';
import { Summary } from './components/Resume/Summary';
import { Experience } from './components/Resume/Experience';
import { Skills } from './components/Resume/Skills';
import { EducationAndCertifications } from './components/Resume/EducationAndCertifications';
import { useResumeData } from './hooks/useResumeData';
import styles from './App.module.css';

function App() {
  const { data: resumeData, loading, error } = useResumeData();

  if (loading) {
    return (
      <ThemeProvider>
        <Layout>
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading resume data...</p>
          </div>
        </Layout>
      </ThemeProvider>
    );
  }

  if (error || !resumeData) {
    return (
      <ThemeProvider>
        <Layout>
          <div className={styles.error}>
            <h2>Error Loading Resume</h2>
            <p>{error?.message || 'Failed to load resume data'}</p>
          </div>
        </Layout>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Layout>
        <main className={styles.resumeContent}>
          <PersonalInfo
            personalInfo={resumeData.personalInfo}
            links={resumeData.links}
          />

          <Summary summary={resumeData.summary} />

          <Experience experiences={resumeData.experience} />

          <Skills skills={resumeData.skills} />

          <EducationAndCertifications
            education={resumeData.education}
            certifications={resumeData.certifications}
            assessments={resumeData.assessments}
          />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
