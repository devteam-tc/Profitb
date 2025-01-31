"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";
import Link from "next/link";


const Container = styled.div`
  width: 100%;
  // max-width: 1280px;
  padding: 0 20px;
  @media (max-width: 992px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 52px;
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
  @media (max-width: 1280px) {
    font-size: 42px;  /* Slightly reduced font size */
  }
  @media (max-width: 992px) {
    font-size: 30px;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;

  @media (max-width: 992px) {
    justify-content: space-between; /* Ensure buttons are spread across */
    flex-direction: column; /* Stack buttons on mobile */
    gap: 12px; /* Adjust gap for mobile */
  }
@media (max-width: 1280px) {
    gap: 12px;  /* Reduced gap between buttons */
  }
  @media (min-width: 992px) {
    justify-content: flex-start; /* Align buttons side by side */
    flex-direction: row; /* Align buttons horizontally */
  }
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--Color-8-Color-8300, #D3D3D3);
  background: #FFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  width: calc(35% - 8px); /* Ensure each button takes up 50% of the row */
  
  &:hover {
    background-color: #f5f5f5;
  }
 @media (max-width: 1280px) {
    width: calc(50% - 8px);  /* Buttons take more space */
  
  @media (max-width: 992px) {
    width: 100%; /* Make buttons full width on smaller screens */
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
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.125rem;
  text-decoration: none;
  margin-bottom: 10px;
gap: 0px;
  color:  #EF5226;
  font-family: Poppins;
  font-weight: 500;
border-radius: 30px;
background: #FFF;
padding: 6px 12px;
border :1px solid #ef5226;
  &:hover {
    text-decoration: none;
     #EF5226
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
  background-image: url('/assets/bgimg.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  padding: 250px 20px;
  background-position: 100% 100%;
  color: #333;
  
  @media (max-width: 1280px) {
    padding: 200px 20px;
  }
  @media (max-width: 992px) {
    padding: 120px 10px;
      background-position: 100% 100%;
  background-size: cover;

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
  @media (min-width: 992px) {
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
  max-width: 650px;
  height: auto;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const BannerSection = () => {

 

  return (
    <>
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
                <Button>Quick ERP Setup for Businesses</Button>
                <Button>Complete Business Control </Button>
                <Button>Real-Time Insights for Growth</Button>
                <Button>Secure Cloud Access Anytime </Button>
              </ButtonGroup>
{/* 
              <LinksGroup>
                <StyledLink href="#"  className="flex items-center" >
                  Contact Us <IconWrapper />
                </StyledLink>
              </LinksGroup> */}
            </LeftColumn>
            {/* Right Column */}
            <RightColumn>
            <Image
          src="/assets/chart.webp" 
          alt="Tech Cloud Illustration"
          width={600}
          height={550}
          className="max-w-full h-auto"
        />

            </RightColumn>
          </ContentWrapper>
        </Container>
      </SectionWrapper>

    
    </>
  );
};

export default BannerSection;