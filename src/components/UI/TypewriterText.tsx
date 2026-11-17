import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
  /**
   * The full final text. When set, the finished line's space is reserved from
   * the first paint (so the page does not jump while typing) and screen readers
   * get the whole text at once instead of one letter at a time.
   */
  reserveText?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
  cursorChar = '|',
  onComplete,
  reserveText,
}) => {
  const { displayText, isComplete, isTyping } = useTypewriter({
    text,
    speed,
    delay,
  });

  React.useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  const typed = (
    <>
      {displayText}
      {showCursor && (isTyping || !isComplete) && (
        <span className={styles.cursor}>{cursorChar}</span>
      )}
    </>
  );

  if (reserveText !== undefined) {
    return (
      <span className={`${styles.reserve} ${className}`}>
        <span className={styles.srOnly}>{reserveText}</span>
        <span
          className={styles.ghost}
          aria-hidden="true"
          data-text={reserveText}
        />
        <span
          className={`${styles.typewriter} ${styles.typed}`}
          aria-hidden="true"
          data-typed=""
        >
          {typed}
        </span>
      </span>
    );
  }

  return <span className={`${styles.typewriter} ${className}`}>{typed}</span>;
};
