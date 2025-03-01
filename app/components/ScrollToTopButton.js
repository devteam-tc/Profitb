"use client"; // Ensures it runs on the client side

import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import styles from "./ScrollToTopButton.module.css"; // Import the CSS module

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button className={styles.scrollButton} onClick={scrollToTop}>
          <BsArrowUp className={styles.arrowIcon} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
