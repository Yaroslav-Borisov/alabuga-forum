import LogoAlabugaIcon from '../icons/LogoAlabuga';
import styles from './header.module.css';
import cn from 'classnames';

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
        <a
          className={cn(styles.navigation__link, styles.navigation__link__contacts)}
          href="tel:+7(927)432-98-17"
        >
          Call-Центр: <span className={styles.text__blue}>+7 (927) 432 98-17</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
