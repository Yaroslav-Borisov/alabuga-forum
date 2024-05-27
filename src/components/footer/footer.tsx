import CircleMovement from "../icons/CircleMovement";
import FirstIcon from "../icons/First";
import LogoAlabugaIcon from "../icons/LogoAlabuga";
import RSOIcon from "../icons/RSOIcon";
import styles from "./footer.module.css";
import cn from "classnames";

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
        <a href="#application">
          <button className={styles.footer__button}>Заявка</button>
        </a>
      </div>

      <div className={styles.partnersWrapper}>
        <h3 className={styles.partners__title}>Партнеры</h3>

        <div className={styles.partnersIcon}>
          <FirstIcon
            className={cn(styles.home__icon, styles.home__first)}
            color={"#000000"}
          />
          <CircleMovement
            className={cn(styles.home__icon, styles.home__circleMovement)}
            color={"#000000"}
          />
          <RSOIcon
            className={cn(styles.home__icon, styles.home__rso)}
            color={"#01518D"}
          />
        </div>
      </div>
      <div className={styles.about}>
        <h3 className={styles.about__title}>О нас</h3>
        <p className={styles.about__text}>
          ОЭЗ «Алабуга» - лучшая экономическая зона в России!
          <br />С каждым годом мы реализуем все более масштабные проекты для
          развития нашей страны!
          <br />
          Мы ждём именно тебя!
        </p>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.about__title}>Контакты</h3>
        <p className={styles.about__text}>
          <a href="tel:+7(927)432-98-17">+7 (927) 432 98-17</a>
          <br />
          <a href="tel:+7(855)575-90-12">+7 (855) 575 90-12</a>
          <br />
          <a href="mailto:assessment@alabuga.ru">assessment@alabuga.ru</a>
          <br />
          <span className={styles.adress}>
            423601, Республика Татарстан, Территория ОЭЗ «Алабуга», ул.Ш-2,
            д.4/1
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
