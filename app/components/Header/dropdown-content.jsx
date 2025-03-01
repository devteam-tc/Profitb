// Import necessary dependencies
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';


const DropdownContent = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
  parentLabel,
}) => {
  const isIndustries = parentLabel === 'Industries';

  return (
    <div className={`${styles.dropdown_content} ${isIndustries ? `${styles.industries_grid}` : ''}`}>
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h6>{item.heading}</h6>
            {isIndustries && <hr />}
            <ul>
              {item.submenu.map(({ label, href }, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link href={href} onClick={() => { window.scrollTo(0, 0); }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
