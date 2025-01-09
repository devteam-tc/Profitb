"use client";  // Add this at the top of your file

import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledButton } from "../GetStartedForm";
import Link from 'next/link';  // Import from next/link
import Container from "react-bootstrap/Container";
import { constants } from "../../utils/constants";

// Style the Navbar.Toggle component
const NavbarToggle = styled(BootstrapNavbar.Toggle)`
  padding:12px 8px 13px 11px;
  text-align:center;
  span {
    display: block;
    width: 30px;
    border:none !important;
    height: 3px;
    background-color: #000;
    margin: 3px auto;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  span:nth-child(1) {
    transform: ${props => props.expanded ? 'rotate(45deg) translateY(8px)' : 'rotate(0) translateY(0)'};
  }

  span:nth-child(2) {
    opacity: ${props => props.expanded ? '0' : '1'};
  }

  span:nth-child(3) {
    transform: ${props => props.expanded ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0) translateY(0)'};
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #EF5226;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #EF5226;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

// Functional Navbar component
function Navbar() {
  const [expand, setExpand] = useState(false);

  // Handle toggle state
  const handleToggle = () => {
    setExpand(prevExpand => !prevExpand);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" expanded={expand}>
      <Container>
        <BootstrapNavbar.Brand href="/" className="py-0">
          <img src={constants.logo} alt="Legacy Insurance" style={{ height: '9vh' }} />
        </BootstrapNavbar.Brand>
        <NavbarToggle
          aria-controls="navbar-toggler collapsed"
          expanded={expand}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavbarToggle>
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav expanded={expand} className="ms-auto my-3 my-md-0 align-items-center fs-5 gap-3 gap-md-5 fw-semibold">
            <StyledNavLink as={Link} href="/life">Life</StyledNavLink>
            <StyledNavLink as={Link} href="/health">Health</StyledNavLink>
            <StyledNavLink as={Link} href="/car">Car</StyledNavLink>
            <StyledNavLink as={Link} href="/bike">Bike</StyledNavLink>
            <StyledButton>Book An Insurance</StyledButton>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
