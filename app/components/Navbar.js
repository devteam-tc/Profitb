"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';
import NavLogo from "../../public/assets/logo.png";

// Styled Components
const Header = styled.header`
  padding: 0.5rem 0;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  // border-radius: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    padding: 0 1rem;
    height: 50px;
    justify-content: space-between; /* Ensure space between logo and hamburger menu */
  }
`;

export const LogoWrapper = styled.div`
  @media (min-width: 1024px) {
    position: static;
    transform: none;
    left: 0;
  }

  @media (max-width: 1024px) {
    /* Move logo to left side on mobile */
    position: absolute;
    left: 1rem;
  }
`;

const MenuToggle = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 30px;
    height: 24px;
    font-size: 30px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
    right: -21rem; /* Move hamburger menu to the right */
  }
`;



const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
color: #000;
font-family: Poppins;
font-size: 12px;
font-weight: 500;
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
    &:hover {
      color: #ef5226;
    }
  }
`;


const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const WhatsAppSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
span{
color: #000;
font-family: Poppins;
font-weight: 600;
}
  img {
    width: 30px;
    height: 30px;
   
  }

`;

const Button = styled.button`
  border: 1px solid black;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
font-weight :600;
  &:hover {
    background-color: #ef5226;
    color: white;
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Close the hamburger menu when a link is clicked
  };

  return (
    <Header>
      <Container>
        {/* Menu Toggle for Mobile */}
        <MenuToggle onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
          {open ? <FiX /> : <FiMenu />}
        </MenuToggle>

        {/* Navigation Links */}
        <NavLinks open={open}>
          <NavList>
                <NavItem>
        <ScrollLink
          to="modules"
          smooth={true}
          duration={500}
          offset={-70} // Adjust if the navbar covers the section
          onClick={handleLinkClick}
        >
          Modules
        </ScrollLink>
      </NavItem>

      <NavItem>
        <ScrollLink
          to="price-section"
          smooth={true}
          duration={500}
          offset={-70} // Adjust if the navbar covers the section
          onClick={handleLinkClick}
        >
          Pricing
        </ScrollLink>
      </NavItem>
            <NavItem>
              <Link href="/partners" onClick={handleLinkClick}>
                Partners
              </Link>
            </NavItem>
            <NavItem>
        <ScrollLink
          to="about-intro"
          smooth={true}
          duration={500}
          offset={-70} // Adjust if the navbar covers the section
          onClick={handleLinkClick}
        >
          About Us
        </ScrollLink>
      </NavItem>
      <NavItem>
        <ScrollLink
          to="contact-form"
          smooth={true}
          duration={500}
          offset={-70} // Adjust if the navbar covers the section
          onClick={handleLinkClick}
        >
          Contact Us
        </ScrollLink>
      </NavItem>
          </NavList>
        </NavLinks>

        {/* Logo */}
        <LogoWrapper>
          <Link href="/">
            <Image src={NavLogo} alt="Logo" width={120} height={40} priority={true} />
          </Link>
        </LogoWrapper>

        {/* Right Section */}
        <RightSection>
          {/* WhatsApp Section with Clickable Link */}
          <Link
            href="https://api.whatsapp.com/send?phone=+918886606458&text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppSection>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              <span>8886606458</span>
            </WhatsAppSection>
          </Link>
          <Button>Buy Now</Button>
          <Button>Download</Button>
        </RightSection>
      </Container>
    </Header>
  );
};

export default Nav;
