import DashedLine from '../icons/DashedLine';
import DronIcon from '../icons/Dron';
import LogoIcon from '../icons/Logo';
import RobotIcon from '../icons/Robot';
import styles from './terms.module.css';

const Terms = () => {
  return (
    <div className={styles.terms} id="terms">
      <RobotIcon className={styles.terms__robotIcon} />
      <DronIcon className={styles.terms__dronIcon} />
      <h2 className={styles.terms__title}>
        Условия участия
        <br />в программе
      </h2>
      <div className={styles.terms__content}>
        <DashedLine className={styles.content__line} />
        <div className={styles.content__text__right}>
          <div className={styles.content__text__rightIconWrapper}>
            <span>Тебе от 15 до 19 лет?</span>
            <LogoIcon color={'#00ADEF'} className={styles.content__text__rightIcon} />
          </div>
          Готов приехать
          <br />в <span className={styles.text__blue}>ОЭЗ «Алабуга»</span> г. Елабуга
          <br />
          Республика Татарстан
          <br />с 28 июня по 4 июля
        </div>
        <div className={styles.content__text__left}>
          <div className={styles.content__text__leftIconWrapper}>
            <LogoIcon color={'#7DD5F7'} className={styles.content__text__leftIcon} />
            <span>Тогда мы ждем именно тебя!</span>
          </div>
          <span className={styles.text__blue}>Заполняй заявку</span>,
          <br />
          а мы оплатим пререлёт,
          <br />
          проживание и питание
        </div>
        <div className={styles.content__text__bottom}>
          <div className={styles.content__text__bottomIconWrapper}>
            <span>Ты полон энергии и хочешь развиваться!</span>
            <LogoIcon color={'#3B66BA'} className={styles.content__text__bottomIcon} />
          </div>
          <span className={styles.text__blue}>Наша компания</span> – лидер по мировым практикамю.
          Если Ты энергичен, хочешь развиваться и считаешь себя лидером, мы ждем именно Тебя!
        </div>
      </div>
    </div>
  );
};

export default Terms;
