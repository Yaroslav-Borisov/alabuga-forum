import LogoAlabugaIcon from '../icons/LogoAlabuga';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoAlabugaIcon />
      </div>
      <nav className={styles.navigation}>
        <a className={styles.navigation__link}>О программе</a>
        <a className={styles.navigation__link}>Условия участия</a>
      </nav>
    </header>
  );
};

export default Header;
