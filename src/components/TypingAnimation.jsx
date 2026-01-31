import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <span className="inline-block w-0.5 h-8 bg-current ml-1 animate-pulse"></span>
    </span>
  );
};

TypingAnimation.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  delayBetween: PropTypes.number,
};

export default TypingAnimation;