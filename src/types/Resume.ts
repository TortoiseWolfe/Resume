// Resume Data Type Definitions

export interface Location {
  city: string | null;
  state: string | null;
  zip?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: Location;
  phone: string;
  email: string;
  willingToRelocate?: string[];
}

export interface Links {
  portfolio: string;
  spokeToWork?: string;
  github: string[];
  linkedin: string;
  youtube?: string;
  twitch?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: Location;
  startDate: string;
  endDate: string | null;
  displayDate: string;
  isCurrent: boolean;
  responsibilities: string[];
  portfolioLinks?: Array<{
    name: string;
    url: string;
  }>;
}

export interface YearsExperience {
  [skill: string]: number;
}

export interface SkillCategory {
  technologies: string[];
  yearsExperience: YearsExperience;
}

export interface Skills {
  languages: SkillCategory;
  frontend: SkillCategory;
  backend: SkillCategory;
  cadAnd3d: SkillCategory;
  tools: SkillCategory;
}

export interface Education {
  institution: string;
  degree: string;
  startDate?: string;
  endDate?: string | null;
  displayDate: string;
  isCurrent: boolean;
  gpa?: number | null;
}

export interface Certification {
  name: string;
  provider: string;
  date: string;
  displayDate: string;
  url: string;
  expires?: string | null;
}

export interface Assessment {
  name: string;
  level: 'Expert' | 'Proficient' | 'Familiar';
  score?: number | null;
  date?: string | null;
}

export interface Assessments {
  indeed: Assessment[];
}

export interface KeyProject {
  name: string;
  technologies: string[];
  description: string;
  url: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  links: Links;
  summary: string;
  experience: Experience[];
  previousExperience?: Experience[];
  skills: Skills;
  education: Education[];
  certifications: Certification[];
  assessments?: Assessments;
  keyProjects?: KeyProject[];
}

// Helper types for component props
export type SkillCategoryName = keyof Skills;

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
