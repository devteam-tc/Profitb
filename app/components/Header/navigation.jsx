"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./navigation.module.css"; // Import CSS module

export const menuData = [
  { label: "Home", href: "/" },
  { label: "Our Modules", href: "/modules" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
  { label: "Features", href: "/features" },
  { label: "Contact Us", href: "/contact-us" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Menu Toggle for Mobile */}
        <div
          className={styles.menuToggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>

        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/assets/logo.webp"
              alt="Logo"
              width={130}
              height={0}
              style={{ maxWidth: "100%", height: "auto" }}
              priority={true}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${open ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {menuData.map(({ label, href }) => (
              <li key={label} className={styles.navItem}>
                <Link href={href} onClick={handleLinkClick}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <a
            href="/assets/RankCard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Brochure"
          >
            <button className={styles.button}>Download Flyer</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
