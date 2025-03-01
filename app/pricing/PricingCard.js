"use client";

import React from "react";
import styles from "./PricingCard.module.css"; // Import CSS module
import { FaCheckCircle } from "react-icons/fa";
import { pricingPlansdata } from "../utils/constants"; // Import the data

const PricingCard = () => {
  return (
    <div className={styles.pricingContainer} id="price-section">
      <h2 className={styles.heading}>Simple, Transparent Pricing</h2>
      <p className={styles.subheading}>No contracts. No surprise fees.</p>
      <div className={styles.plansContainer}>
        {pricingPlansdata.map((plan, index) => (
          <div key={index} className={styles.planCardWrapper}>
            {plan.isHighlighted && (
              <div className={styles.mostPopularBadge}>{plan.badge}</div>
            )}
            <h3 className={`${styles.price} mt-3`}>
              {plan.price}
              <span>{plan.duration}</span>
            </h3>
            <h4 className={styles.planTitle}>{plan.title}</h4>
            <p className={styles.planDescription}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  <FaCheckCircle className={styles.featureIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`${styles.choosePlanButton} mt-5 mb-5`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
