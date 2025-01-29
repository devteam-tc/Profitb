"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { cards } from "../utils/constant";
import Image from "next/image";

const CardSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <SectionWrapper id="modules">
    <Title>Our Integrated Modules</Title>
    <CardGrid>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage
            src={card.image}
            alt={card.title}
            width={300}
            height={300}
            quality={100}
            priority
          />
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>

          {/* Overlay Section */}
          <Overlay>
            <OverlayTitle>{card.overlayTitle}</OverlayTitle>
            {card.overlayButtons.map((buttonText, buttonIndex) => (
              <OverlayButton key={buttonIndex}>{buttonText}</OverlayButton>
            ))}
          </Overlay>
        </Card>
      ))}
    </CardGrid>
  </SectionWrapper>
  );
};

export default CardSection;

// Styled-components with overlay effect
const SectionWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Card = styled.div`
  position: relative;
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  padding: 20px;
  width: 400px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 992px) {
    width: 100%;
    padding: 15px;
  }

  &:hover {
    transform: translateY(-5px);
    cursor :pointer;
    
    // Show overlay on hover
    & > div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardImage = styled(Image)`
  width: 250px !important;
  height: 250px !important;
  border-radius: 8px;
  margin: 0 auto 20px;
  display: block;

  @media (max-width: 992px) {
    width: 120px !important;
    height: 120px !important;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

// Overlay styles
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ef5226;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.4s ease-in-out;
`;

const OverlayTitle = styled.h3`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const OverlayButton = styled.button`
  background: #fff;
  color: #000;
      width: calc(75% - 8px);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  // &:hover {
  //   background: #ffd700;
  //   color: #000;
  // }
`;
