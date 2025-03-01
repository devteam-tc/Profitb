import React from "react";
import styles from "./WhatsappButton.module.css"; // Adjust path based on your project structure
import Image from "next/image";

const WhatsappButton = () => {
  return (
    <a
      className={styles.whatsappButton}
      href="https://api.whatsapp.com/send?phone=+917032082300&text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        className={styles.whatsappIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={55}
        height={55}
        priority // Optimizes image loading in Next.js
      />
    </a>
  );
};

export default WhatsappButton;
