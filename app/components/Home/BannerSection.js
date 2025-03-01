"use client";

import React from "react";
import Image from "next/image";
import styles from "./BannerSection.module.css"; // Import the CSS module

const BannerSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h1 className={styles.title}>
              Simplify Your Business
              <span> Operations with Profit<sup>b</sup></span>
            </h1>

            <div className={styles.buttonGroup}>
              <button className={styles.button}>Quick ERP Setup for Businesses</button>
              <button className={styles.button}>Complete Business Control</button>
              <button className={styles.button}>Real-Time Insights for Growth</button>
              <button className={styles.button}>Secure Cloud Access Anytime</button>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <Image
              src="/assets/chart.webp"
              alt="Data analytics and insights on a screen, offering solutions for smarter business decisions and growth."
              width={600}
              height={550}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
