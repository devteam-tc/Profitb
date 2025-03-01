


import Link from 'next/link';
import Container from './container';
import DropdownContent from './dropdown-content';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

const MenuItem = ({ label, href, children, setIsDrawerOpen, onMenuClick }) => {
  const [active, setActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen size to determine desktop view
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 996);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleClick = () => {
    document.activeElement?.blur();
  };

  const handleItemClick = () => {
    onMenuClick && onMenuClick();
    handleClick();
    setIsDrawerOpen && setIsDrawerOpen(false);
  };

  const toggleDropdown = () => {
    setActive((prev) => !prev);
  };

  return (
    <li
      className={styles.nav_item}
      onMouseEnter={() => isDesktop && setActive(true)}
      onMouseLeave={() => isDesktop && setActive(false)}
    >
      <div className={styles.nav_item_content}>
        <Link
          href={href}
          className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          onClick={(e) => {
            handleItemClick(e);
            window.scrollTo(0, 0);
          }}
        >
          <div>{label}</div>
        </Link>
        {children && !isDesktop && ( // Hide + and - icons on desktop
          <button
            className={styles.toggleButton}
            onClick={toggleDropdown}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? 'true' : 'false'}
          >
            {active ? <FiMinus size={20} /> : <FiPlus size={20} />}
          </button>
        )}
      </div>
      {children && (
        <div className={`${styles.dropdown} ${active ? styles.open : styles.closed}`}>
          <Container>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
              parentLabel={label}
            />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
