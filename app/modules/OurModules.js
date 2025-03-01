"use client";

import { useState, useEffect } from "react";
import styles from "./OurModules.module.css"; // Import CSS Module
import { cards } from "../utils/constants";
import Image from "next/image";

const OurModules = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.sectionWrapper} >
      <h2 className={styles.title}>Our Integrated Modules</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <Image
              className={styles.cardImage}
              src={card.image}
              alt={card.altText}
              width={300}
              height={300}
              quality={100}
              priority
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>

            {/* Overlay Section */}
            <div className={styles.overlay}>
              <h3 className={styles.overlayTitle}>{card.overlayTitle}</h3>
              {card.overlayButtons.map((buttonText, buttonIndex) => (
                <button key={buttonIndex} className={styles.overlayButton}>
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurModules;
