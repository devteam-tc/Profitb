

import { menuData } from '../../utils/menuData';
import MenuItem from './menu-item';
import CalendlyWidget from './calendly-widget'; // Import the component
import styles from './page.module.css'

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  const { openCalendlyWidget } = CalendlyWidget({ url: 'https://calendly.com/your-schedule' }); // Get the function

  const handleMenuClick = (isDemo) => {
    if (isDemo && openCalendlyWidget) {
      openCalendlyWidget();
    }
  };

  return (
    <div className={styles.nav__container}>
      <nav className={styles.nav}>
        <ul>
          {menuData.map(({ label, href, children, isDemo }, index) => (
            <MenuItem
              key={index}
              {...{
                label,
                href,
                children,
                setIsDrawerOpen,
                isDemo,
              }}
              onToggle={() => handleToggle && handleToggle(index)}
              active={clicked === index}
              onMenuClick={() => handleMenuClick(isDemo)} 
              onClick={() => window.scrollTo(0, 0)} 
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;