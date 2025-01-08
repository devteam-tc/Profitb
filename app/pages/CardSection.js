"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { cards } from "../utils/constant";
import Image from "next/image"; // Import Next.js Image component

const CardSection = () => {
  const [isClient, setIsClient] = useState(false); // Client-side state

  useEffect(() => {
    setIsClient(true); // Set to true on client-side
  }, []);

  if (!isClient) {
    return null; // Optionally render a loading state or nothing during SSR
  }

  return (
    <SectionWrapper>
      <Title>Our Integrated Modules</Title> {/* Add the title here */}
      <CardGrid>
        {cards.map((card, index) => (
          <Card key={index}>
                  <CardImage
          src={card.image}
          alt={card.title}
          width={300} // High resolution width
          height={300} // High resolution height
          quality={100} // Ensures highest image quality
          priority // Optimize loading for visible images
        />

            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
};

export default CardSection;

// Styled-components with media queries...
const SectionWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column; /* Add column direction to stack title and cards */
  align-items: center;
`;

const Title = styled.h2`
  color: #000; /* Black color */
  text-align: center; /* Center align the text */
  font-family: "Poppins", sans-serif; /* Poppins font */
  font-size: 32px; /* Font size */
  font-style: normal; /* Normal font style */
  font-weight: 600; /* Semi-bold weight */
  line-height: normal; /* Default line-height */
  margin-bottom: 30px; /* Spacing between title and cards */

  @media (max-width: 992px) {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
    gap: 15px; /* Adjust gap between cards */
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px;
  padding: 20px;
  width: 400px;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%; /* Full width on smaller screens */
    padding: 15px; /* Adjust padding */
  }
`;

const CardImage = styled(Image)`
  width: 250px !important; /* Set a consistent width */
  height: 250px !important; /* Set a consistent height */
  border-radius: 8px; /* Optional: Adds rounded corners */
  margin: 0 auto 0px; /* Centering the image */
  display: block; /* Ensures the image is treated as a block element */

  @media (max-width: 992px) {
    width: 120px !important;
    height: 120px !important; /* Smaller size for responsive screens */
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
    font-size: 16px; /* Adjust font size for smaller screens */
  }
`;

const CardDescription = styled.p`
margin-bottom : 20px;
text-align: center;
color: #000;
font-family: Poppins;
font-size: 16px;
font-weight: 400;
  @media (max-width: 992px) {
    font-size: 12px; /* Adjust font size for smaller screens */
  }
`;
