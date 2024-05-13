import LogoAlabugaIcon from '../icons/LogoAlabuga';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <LogoAlabugaIcon />
        </div>
        <span className={styles.logo__text}>
          Форум 2024 <span className={styles.logo__text__blue}>«Выбирай!»</span>
        </span>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <h3 className={styles.about__title}>О нас</h3>
          <p className={styles.about__text}>
            ОЭЗ «Алабуга» - лучшая экономическая зона в России!
            <br />С каждым годом мы реализуем все более масштабные проекты для развития нашей
            страны!
            <br />
            Мы ждём именно тебя!
          </p>
        </div>
        <button className={styles.footer__button}>Заявка</button>
      </div>
    </footer>
  );
};

export default Footer;
