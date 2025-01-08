"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { ProfitIntroSection } from "../utils/constant";

// Styled Title Component
// Styled Title Component
export const StyledTitle = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 3rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem; /* Adjust title size for mobile */
  }

  span {
    color: #EF5226; /* Highlight color */
  }

  sup {
    font-size: 0.6em; /* Smaller font size for superscript */
    vertical-align: super; /* Align it as superscript */
    font-weight: bold; /* Optional: you can set weight if needed */
    color:#05a7cc;
  }
`;



// Styled Container Component
const StyledContainer = styled(Container)`
  padding: 3rem 2rem;
  border-radius: 15px;
  max-width: 1200px;
  margin: 2rem auto;

  @media (max-width: 992px) {
    padding: 2rem 1rem; /* Adjust padding for mobile */
    max-width: 992px;  /* Ensure the container width doesn't exceed 992px */
  }

  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust further for smaller screens */
  }
`;

// Styled Row Component
const StyledRow = styled(Row)`
  align-items: center; /* Vertically center content */
  justify-content: center; /* Horizontally center content */
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column; /* Stack content vertically for smaller screens */
    text-align: center;
  }
`;

// Styled Description Component
const StyledDescription = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
color: #000;
font-family: Poppins;
font-size: 15px;
font-weight: 400;

  @media (max-width: 992px) {
    font-size: 1rem; /* Adjust text size for mobile */
  }

  @media (max-width: 768px) {
    text-align: justify; /* Justify text for better mobile readability */
  }
`;

// Styled Image Component
export const StyledImage = styled.img`
  max-width: 532px;
  height: auto;
  margin-top: 1rem;
  border-radius: 15px;

  @media (max-width: 992px) {
    max-width: 90%; /* Make image responsive */
    margin-top: 2rem;
  }
`;

// Profit-b Section Component
const IntroSection = () => {
  return (
    <StyledContainer>
      <StyledRow>
        {/* Text Section */}
        <Col lg={6} md={12}>



         <StyledTitle>
  {ProfitIntroSection.title.part1} <span>Profit</span><sup>b</sup>?
</StyledTitle>

          {ProfitIntroSection.description.map((text, index) => (
            <StyledDescription key={index}>{text}</StyledDescription>
          ))}
        </Col>

        {/* Image Section */}
        <Col lg={6} md={12} className="text-center">
          <StyledImage
            src={ProfitIntroSection.image}
            alt={ProfitIntroSection.altText}
          />
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default IntroSection;
