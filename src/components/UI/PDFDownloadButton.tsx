import React from 'react';
import { trackDownload } from '../../utils/analytics';
import styles from './PDFDownloadButton.module.css';

const basePath = import.meta.env.BASE_URL || '/';

export const PDFDownloadButton: React.FC = () => {
  const handleDownload = (format: 'pdf' | 'docx') => {
    trackDownload(format);
  };

  return (
    <div className={styles.container}>
      <a
        href={`${basePath}Jonathan_Pohlner_Resume.pdf`}
        download="Jonathan_Pohlner_Resume.pdf"
        className={styles.downloadButton}
        onClick={() => handleDownload('pdf')}
        aria-label="Download resume as PDF"
        title="Download resume as PDF"
      >
        <span className={styles.icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span className={styles.text}>PDF</span>
      </a>

      <a
        href={`${basePath}Jonathan_Pohlner_Resume.docx`}
        download="Jonathan_Pohlner_Resume.docx"
        className={styles.downloadButton}
        onClick={() => handleDownload('docx')}
        aria-label="Download resume as Word document"
        title="Download resume as Word document"
      >
        <span className={styles.icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </span>
        <span className={styles.text}>DOCX</span>
      </a>
    </div>
  );
};
