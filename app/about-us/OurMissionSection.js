"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProfitIntroSection } from "../utils/constants";
import styles from "./OurMissionSection.module.css";

const IntroSection = () => {
  return (
    <Container id="about-intro" className={styles.container}>
      <Row className={styles.row}>
        {/* Image Section */}
        <Col lg={6} md={12} className="text-center">
          <img
            src={ProfitIntroSection.image}
            alt={ProfitIntroSection.altText}
            className={styles.image}
          />
        </Col>
        {/* Text Section */}
        <Col lg={6} md={12}>
          <h1 className={styles.title}>
            {ProfitIntroSection.title.part1} <span>Profit</span><sup>b</sup>?
          </h1>

          {ProfitIntroSection.description.map((text, index) => (
            <p key={index} className={styles.description}>{text}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default IntroSection;
