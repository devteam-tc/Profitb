// components/SocialLinks.js
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    { href: 'https://www.instagram.com', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://www.facebook.com', icon: <FaFacebook />, label: 'Facebook' },
    { href: 'https://www.twitter.com', icon: <FaTwitter />, label: 'Twitter' },
    { href: 'https://www.youtube.com', icon: <FaYoutube />, label: 'YouTube' },
    { href: 'https://www.pinterest.com', icon: <FaPinterest />, label: 'Pinterest' },
  ];

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#f1f1f1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#007bff',
            fontSize: '20px',
            textDecoration: 'none',
            transition: 'background 0.3s',
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
