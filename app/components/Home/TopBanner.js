import React from 'react';
import styles from './TopBanner.module.css';
import Image from 'next/image';

const TopBanner = ({ title, description, imageSrc }) => {
  if (!title || !description || !imageSrc) {
    console.error("Missing banner data:", { title, description, imageSrc });
    return null; 
  }

  return (
<section className={`${styles.bannerSection} mt-5`}>
<div className={styles.textContainer}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSrc} 
          alt={title} 
          width={500} 
          height={300} 
          className={styles.bannerImage}
        />
      </div>
    </section>
  );
};

export default TopBanner;
