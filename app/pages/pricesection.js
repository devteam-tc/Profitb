import React from "react";
import styled from "styled-components";
import { pricingPlans } from "../../utils/constants";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedUp";

// Styled components
const Section = styled.section`
  padding: 40px 0;
  background-color: #f9f9f9;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  position: relative; /* Added to position the badge */
  padding: 20px;
  border: 1px solid #b2e4ef;
  border-radius: 10px;
  cursor: pointer;
  max-width: 340px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px,
    rgba(173, 216, 230, 0.7) 0px 6px 6px;

  @media (max-width: 992px) {
    margin: 0 10px;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background-color: #ff5722;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
`;

const Price = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  margin-bottom: 10px;

  span {
    font-size: 16px;
  }
`;

const PlanTitle = styled.h2`
  background-color: ${(props) => props.tagColor || "#ff5722"};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid #b2e4ef;
  padding-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const CoverageList = styled.ul`
  text-align: left;
  margin-bottom: 20px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: -0.03em;
`;
export const Title = styled.h3`
  font-size: 40px;
  color: #ef5226;
  // line-height: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
const CoverageItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #ef5226;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
    font-size: 14px;
  }
`;

const PopularButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  width: 35% !important;
  padding: 5px 10px;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 10px;
`;

const PricingSection = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Section>
      <Title className="text-center pt-4 pt-md-0">Tech Cloud ERP Pricing</Title>
      <CardContainer>
        {pricingPlans.map((pkg, index) => (
          <AnimatedSection key={index} className="animated-section">
          <Card
            key={index}
            style={{ background: pkg.background, color: pkg.color }}
          >
            {/* Conditionally render badge for the second card only */}
            {index === 1 && <Badge>Popular</Badge>}

            {/* Conditionally render the PlanTitle only if index is not 1 */}
            {index !== 1 && <PlanTitle>{pkg.title || ""}</PlanTitle>}

            {/* Conditionally render "Enterprise" button only on the second card */}
            {index === 1 && <PopularButton>Enterprise</PopularButton>}
            {pkg.note && <Description>{pkg.note}</Description>}

            <Price>
              <FaIndianRupeeSign style={{ marginRight: "0px" }} />
              {pkg.price} <span></span>
            </Price>
            <Description>{pkg.description}</Description>
            <CoverageList>
              {pkg.coverages.map((coverage, i) => (
                <CoverageItem key={i}>
                  <GoCheckCircleFill style={{ marginRight: "8px" }} />
                  {coverage}
                </CoverageItem>
              ))}
            </CoverageList>
            <Link to="/contact-us" onClick={scrollToTop} aria-label="Buy Now">
            <Button>Buy Now</Button>
          </Link>
            <p className="text-center pt-3">{pkg.creditCardRequired}</p>
          </Card>
          </AnimatedSection>
        ))}
      </CardContainer>
    </Section>
  );
};

export default PricingSection;
export const pricingTableData = [
    {
      tier: "1",
      turnover: "0 - 10 Crores",
      modules: "",
      users: "5 - 10",
      userCost: "Rs. 2000 / User / Month",
    },
    {
      tier: "2",
      turnover: "11 - 25 Crores",
      modules: "Customer's Choose as per their Requirements",
      users: "11 - 20",
      userCost: "Rs. 2000 / User / Month",
    },
    {
      tier: "3",
      turnover: "26 - 50 Crores",
      modules: "",
      users: "20 - 50",
      userCost: "Rs. 1500 / User / Month",
    },
    {
      tier: "4",
      turnover: "51 - 100 Crores",
      modules: "",
      users: "50 - 200",
      userCost: "Rs. 1250 / User / Month",
    },
    {
      tier: "5",
      turnover: "101 - 500 Crores",
      modules: "",
      users: "200 & Above",
      userCost: "Rs. 1000 / User / Month",
    },
  ];