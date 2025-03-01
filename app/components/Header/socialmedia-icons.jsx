
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './SocialMediaIcons.module.css'; // Import CSS Module

const SocialMediaIcons = () => {
  return (
    <div className={styles.socialIconsContainer}>
      <a
        href="https://www.instagram.com/techclouderp/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/TechCloudERPSoftwareSolutions"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/company/13619340/admin/feed/posts/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://in.pinterest.com/techclouderp/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaPinterest />
      </a>
      <a
        href="https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaYoutube />
      </a>
      <a
        href="https://twitter.com/TechCloudERP"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FaXTwitter />
      </a>
    </div>
  );
};

export default SocialMediaIcons;