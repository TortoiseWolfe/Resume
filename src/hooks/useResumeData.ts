import { useState, useEffect } from 'react';
import type { ResumeData } from '../types/Resume';
import resumeDataJson from '../data/resume.json';

interface UseResumeDataReturn {
  data: ResumeData | null;
  loading: boolean;
  error: Error | null;
}

export const useResumeData = (): UseResumeDataReturn => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      // Validate that the JSON data matches our TypeScript interface
      const validatedData = resumeDataJson as ResumeData;

      // Basic validation checks
      if (!validatedData.personalInfo?.name) {
        throw new Error('Invalid resume data: missing personal info');
      }

      if (
        !validatedData.experience ||
        !Array.isArray(validatedData.experience)
      ) {
        throw new Error('Invalid resume data: missing or invalid experience');
      }

      setData(validatedData);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to load resume data')
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
