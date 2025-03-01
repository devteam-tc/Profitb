"use client";

import React from "react";
import styles from "./FeaturePage.module.css";
import { constantss } from "../utils/constants";

const FeaturePage = () => {
  return (
    <section className={styles.styledSection}>
      <div className={styles.backgroundWrapper} />
      <div className={styles.container}>
        {constantss.map((feature, index) => (
          <div
            key={feature.id || index}
            className={`${styles.styledRow} ${
              index % 2 === 0 ? styles.reverseRow : ""
            }`}
          >
            <div
              className={`${styles.styledCol} ${
                index % 2 !== 0 ? styles.reverseCol : ""
              }`}
            >
              <img src={feature.image} alt={feature.altText} />
            </div>
            <div
              className={`${styles.styledCol} ${
                index % 2 !== 0 ? styles.reverseCol : ""
              }`}
            >
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturePage;
