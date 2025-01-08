"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import styled from "styled-components";

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

const LogoWrapper = styled.div`
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

  svg {
    width: 20px;
    height: 20px;
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
              <Link href="/" onClick={handleLinkClick}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/support" onClick={handleLinkClick}>
                Support
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/partners" onClick={handleLinkClick}>
                Partners
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/resources" onClick={handleLinkClick}>
                Resources
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" onClick={handleLinkClick}>
                About Us
              </Link>
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
          <WhatsAppSection>
            <FaWhatsapp />
            <span>080 68103666</span>
          </WhatsAppSection>
          <Button>Buy Now</Button>
          <Button>Download</Button>
        </RightSection>
      </Container>
    </Header>
  );
};

export default Nav;
