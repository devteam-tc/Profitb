// Add this line at the top of your file to mark it as a client component
"use client";

import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs'; // Using React Icons for the up arrow

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Only add styles client-side
    const injectKeyframes = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px); /* Move up */
          }
          60% {
            transform: translateY(-5px); /* Smaller move up */
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      injectKeyframes();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div style={styles.scrollButton} onClick={scrollToTop}>
          <BsArrowUp style={styles.arrowIcon} />
        </div>
      )}
    </div>
  );
};

const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '120px',
    right: '30px',
    backgroundColor: '#155E95',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    animation: 'bounce 2s infinite',
  },
  arrowIcon: {
    fontSize: '24px',
  },
};

export default ScrollToTopButton;
