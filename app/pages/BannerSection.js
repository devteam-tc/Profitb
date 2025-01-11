"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import bgImage from "../../public/assets/bgimg.png";
import chartImage from "../../public/assets/chart.png";
import { FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";

// Styled Components

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
  @media (max-width: 992px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  span {
    color: #f44336;
    display: block;
  }
     sup {
    font-size: 0.6em; /* Smaller font size for superscript */
    vertical-align: super; /* Align it as superscript */
    font-weight: bold; /* Optional: you can set weight if needed */
    color:#05a7cc;
  }
  @media (min-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 992px) {
    font-size: 30px;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  @media (max-width: 992px) {
    flex-direction: row; /* Align buttons side by side on mobile */
    gap: 12px; /* Adjust gap for mobile */
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 500;
border: 1px solid var(--Color-8-Color-8300, #D3D3D3);
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
     @media (max-width: 992px) {
    width: 100%; /* Make buttons full-width on mobile */
  }
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  align-items: center;
  @media (max-width: 992px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.125rem;
  text-decoration: none;
  margin-bottom: 12px;
  color: var(--Foundation-techcloud-primary-techcloud-primary-500, #EF5226);
  font-family: Poppins;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:nth-child(2) {
    text-decoration: underline; /* Add underline for "Request a Demo" */
  }

  @media (max-width: 992px) {
    margin-bottom: 16px; /* Space between links on mobile */
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

const IconWrapper = styled(FaChevronCircleRight)`
  margin-left: 8px;
  width: 30px;
height: 30px;
  font-size: 1.5rem; /* Increase icon size */
  vertical-align: middle; /* Align icon with text */
`;

const SectionWrapper = styled.div`
  background-image: url(${bgImage.src});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  padding: 180px 20px;
  background-position: 100% 100%;
  color: #333;
  @media (max-width: 992px) {
    padding: 120px 10px; /* Adjust padding for mobile */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }
`;

const RightColumn = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 511px;
  height: auto;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const BannerSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          {/* Left Column */}
          <LeftColumn>
          <Title>
  Simplify Your Business
  <span> Operations with Profit<sup>b</sup></span>
</Title>

            <ButtonGroup>
              <Button>Lightning-fast GST uploads</Button>
              <Button>One-click GST reconciliation</Button>
              <Button>Full control over ITC risks</Button>
              <Button>Automated ledger generation</Button>
            </ButtonGroup>
            <LinksGroup>
  {/* <StyledLink href="/free-trial" className="flex items-center">
    Start Your Free Trial <IconWrapper />
  </StyledLink> */}
  
  <StyledLink href="/request-demo" className="flex items-center">Request a Demo <IconWrapper /></StyledLink>
</LinksGroup>

          </LeftColumn>

          {/* Right Column */}
          <RightColumn>
            <Image
              src={chartImage}
              alt="Tech Cloud Illustration"
              width={511}
              height={450}
              className="max-w-full h-auto"
            />
          </RightColumn>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default BannerSection;
