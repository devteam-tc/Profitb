"use client";
import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import MegaMenu from './mega-menu';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

const MobileNavigationDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  drawerButtonRef,
}) => {
  const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      // Focus the drawer when it opens
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDrawerOpen(false);
      // Focus the drawer button when it closes
      if (drawerButtonRef.current) {
        drawerButtonRef.current.focus();
      }
    }
  };

  return (
    <div
      className={styles.mobile_navigation}
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setIsDrawerOpen(false);
            // Focus the drawer button when it closes
            if (drawerButtonRef.current) {
              drawerButtonRef.current.focus();
            }
          }}
        ></div>
      )}

      <div className={`${styles.drawer_content} ${isDrawerOpen ?  `${styles.active}`  : 'none'}`}>
        <div className={styles.close_drawer}>
          <img
            src="/logo.webp"
            alt="MobileLogoImg"
            height={50}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              router.push('/');
            }}
          />
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              if (drawerButtonRef.current) {
                drawerButtonRef.current.focus();
              }
            }}
          >
            <X size={50} />
          </button>
        </div>

        <div>
          <MegaMenu
            handleToggle={handleToggle}
            clicked={clicked}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
