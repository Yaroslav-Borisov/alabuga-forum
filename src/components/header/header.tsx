import LogoAlabugaIcon from '../icons/LogoAlabuga';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoAlabugaIcon className={styles.logo__icon} />
      </div>
      <nav className={styles.navigation}>
        <a className={styles.navigation__link} href="#about">
          О программе
        </a>
        <a className={styles.navigation__link} href="#terms">
          Условия участия
        </a>
        <a className={styles.navigation__link} href="#application">
          Участвовать
        </a>
      </nav>
    </header>
  );
};

export default Header;
