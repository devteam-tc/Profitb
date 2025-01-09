"use client";

import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;
  padding: 200px 20px;
  // background: linear-gradient(180deg, #d74100, #a83200);
  color: #fff;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("/assets/featurebg.png");
    background-size: 100% 100%;
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const StyledRow = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "reverse",
})`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledCol = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "reverse",
})`
  flex: 1;
  padding: 20px;
  text-align: ${({ reverse }) => (reverse ? "right" : "left")};

  img {
    max-width: 100%;
    height: auto;
  }

  h2 {
    margin-bottom: 10px;
    color: var(--Base-Base-White, #fafafafa);
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    width: 412px;
  }

  p {
    line-height: 1.5;
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    width: 419px;
    font-weight: 400;
  }

  @media (max-width: 992px) {
    text-align: center;

    h2 {
      font-size: 25px;
    }

    p {
      font-size: 0.9em;
      padding: 6px 12px;
    }
  }
`;



const features = [
  {
    id: 1,
    title: "Effortless Setup, Seamless Usage",
    description:
      "Profit b empowers small businesses with effortless solutions, intuitive tools and seamless operations. Focus on growth while we handle the rest.",
    image: "/assets/secure.png",
  },
  {
    id: 2,
    title: "Powerful Reports for Smarter Decisions",
    description:
      "Empower your small business with insightful, easy-to-understand reports. Make informed decisions, boost profits and drive growth. Get the clarity you need to take your business to the next level!",
    image: "/assets/powerful.png",
  },
  {
    id: 3,
    title: "Secure Access to Your Business Anytime, Anywhere",
    description:
      "Securely access essential tools anytime, anywhere. Boost productivity, protect data and streamline operations with budget-friendly solutions. Stay connected and grow confidently.",
    image: "/assets/effortless.png",
  },
];

const FeatureSection = () => {
  return (
    <StyledSection>
      <BackgroundWrapper />
      <Container>
          {features.map((feature, index) => (
      <StyledRow key={feature.id} reverse={index % 2 == 0}>
        <StyledCol reverse={index % 2 !== 0}>
          <img src={feature.image} alt={feature.title} />
        </StyledCol>
        <StyledCol reverse={index % 2 !== 0}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </StyledCol>
      </StyledRow>
    ))}
      </Container>
    </StyledSection>
  );
};
export default FeatureSection;
