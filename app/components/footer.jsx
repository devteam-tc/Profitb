"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

const obfuscateEmail = (name, domain, tld) => {
  return `${name}@${domain}.${tld}`;
};

const headquartersEmail = obfuscateEmail("contact", "profitpowerb", "com");
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image src="/assets/logo.webp" width={250} height={150} priority />
        </a>
      </div>
      <h3 className={styles.heading}>UPSKILL FOR A BETTER FUTURE</h3>
      <h1 className={styles.mainTitle}>Request More Information</h1>
      <p className={styles.description}>
        Profit<sup className={styles.supText}>b</sup> powered by  <a href="https://profitpowerb.com/" className={styles.techCloudERPLink}>
        Tech Cloud ERP</a>, ready to take your business to the next level. With Profit<sup className="text-[#05a7cc] text-[0.6em] font-bold align-super">b</sup>, success is just a step away. Join today and experience seamless growth with our powerful, user-friendly solutions tailored for small businesses. Let's build a brighter future together!
      </p>
      <div className={styles.contactDetails}>
        <p className="flex items-center gap-2">
          <FaEnvelope /> {headquartersEmail}
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneAlt /> +91 8919439603, +91 7032803200
        </p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/profile.php?id=61572204759827">
          <FaFacebookF />
        </a>
        <a href="https://x.com/Profitpower_b">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/company/profit-power-b/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/profitpowerb/">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@Profitpowerb">
          <FaYoutube />
        </a>
        <a href="https://www.pinterest.com/profitb0167/">
          <FaPinterest />
        </a>
      </div>
      <p className={`${styles.footerText} mt-5`}>
      <span>
      © {currentYear}  Profit<sup className={styles.supText}>b</sup>
      <span className="text-black"> All Rights Reserved.</span>
    </span>
      </p>
    </section>
  );
};

export default Footer;
