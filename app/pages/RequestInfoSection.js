"use client";

import React from 'react';
import styled from 'styled-components';

const RequestInfoSection = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <SectionWrapper>
      <SubHeading>UPSKILL FOR A BETTER FUTURE</SubHeading>
      <MainHeading>Request More Information</MainHeading>
      <Description>
        Profit<sup>b</sup> powered by <Link href="#">Tech Cloud ERP,</Link> ready to take your business to the next level with Profit<sup>b</sup>, success is just a step away. Join today and experience seamless growth with our powerful, user-friendly solutions tailored for small businesses. Let's build a brighter future together!
      </Description>
      <Button>Contact Us</Button>
      <Paragraph>
        <span>© {currentYear} Profit<sup>b</sup> All Rights Reserved.</span>
      </Paragraph>
    </SectionWrapper>
  );
};

export default RequestInfoSection;

// Styled Components
const SectionWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
  color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubHeading = styled.h3`
  font-size: 16px;
  color: #EF5226;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.8px;
`;

const MainHeading = styled.h1`
  color: #EF5226;
  margin-bottom: 20px;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #0A142F;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 33px;
`;

const Paragraph = styled.p`
  margin-top: 20px;
  max-width: 800px;
  text-align: center;
  line-height: 1.8;
  color: #000;
  font-family: poppins;
  font-size: 14px;
  font-weight: 400;

  sup {
    font-size: 0.6em; /* Smaller font size for superscript */
    vertical-align: super; /* Align it as superscript */
  }
`;

const Button = styled.button`
  background-color: #EF5226;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.11);
  border-radius: 30px;

  &:hover {
    background-color: #ff7043;
  }
`;

const Link = styled.a`
  color: #ff5a00;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
