import styles from './page.module.css'

export default function Container ({ children }) {
    return <div className={styles.container}>{children}</div>;
  };