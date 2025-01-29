"use client";

import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { pricingPlans } from "../utils/constant"; // Import the data

const PricingSection = () => {
  return (
    <PricingContainer id="price-section">
      <Heading>Simple, Transparent Pricing</Heading>
      <Subheading>No contracts. No surprise fees.</Subheading>
      <PlansContainer>
        {pricingPlans.map((plan, index) => (
          <PlanCardWrapper key={index} isHighlighted={plan.isHighlighted}>
            {plan.isHighlighted && (
              <MostPopularBadge>{plan.badge}</MostPopularBadge>
            )}
            <Price  className="mt-3 ">
              {plan.price}
              <span>{plan.duration}</span>
            </Price>
            <PlanTitle >{plan.title}</PlanTitle>
            <PlanDescription>{plan.description}</PlanDescription>
            <Features>
              {plan.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>
                  <FeatureIcon />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </Features>
            <ChoosePlanButton  className="mt-5 mb-5">Choose Plan</ChoosePlanButton>
          </PlanCardWrapper>
        ))}
      </PlansContainer>
    </PricingContainer>
  );
};

export default PricingSection;

// Styled Components
const PricingContainer = styled.div`
  text-align: center;
  padding: 180px 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/pricingbg.webp');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
   @media (max-width: 992px) {
    padding: 300px 10px;
  }
`;

const Heading = styled.h2`
 color: #231D4F;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-weight: 500;
@media (max-width: 992px) {
    font-size: 28px;
  }
`;

const Subheading = styled.p`
 color: #848199;
text-align: center;
font-family: Poppins;
font-size: 20px;
font-weight: 400;
  margin-bottom: 40px;
   @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
   @media (max-width: 992px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const MostPopularBadge = styled.div`
  background: #00c0ff;
  color: #ffffff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 8px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Price = styled.h3`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 400;
  line-height: 46px;
  span {
    font-family: Poppins;
    font-size: 17px;
    font-weight: 400;
  }
     &:hover {
    color: #ffffff;
@media (max-width: 992px) {
    font-size: 28px;

    span {
      font-size: 14px;
    }
  }
`;

const PlanTitle = styled.h4`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  margin: 10px 0;
  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

const PlanDescription = styled.p`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
    @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
    &:hover {
    color: #ffffff;
@media (max-width: 992px) {
    font-size: 14px;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;

    svg {
      color: #ffffff; /* Change icon color on hover */
    }
      @media (max-width: 992px) {
    font-size: 14px;
  }
  }
`;

const FeatureIcon = styled(FaCheckCircle)`
  color: #ef5226; /* Default icon color */
   &:hover {
    color: #ffffff;

   
`;

const PlanCardWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isHighlighted",
})`
  background: #ffffff;
  color: #000000;
  border-radius: 40px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,
    rgba(173, 216, 230, 0.7) 0px 6px 6px;
  padding: 20px;
  cursor: pointer;
  width: 300px;
  text-align: left;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #ff7143;
    color: #ffffff;
  }

  ${(props) =>
    props.isHighlighted &&
    `
      border: none;
    `}

  @media (max-width: 992px) {
    margin: auto;
    display: block;
    padding: 15px;
  }
`;

const ChoosePlanButton = styled.button`
  background: #FCE2DB;
    color: #ef5226;
    font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;
@media (max-width: 992px) {
    padding: 8px 16px;
    font-size: 12px;
  }
  
`;
