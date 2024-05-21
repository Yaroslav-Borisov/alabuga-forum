import LineIcon from '../icons/Line';
import LogoIcon from '../icons/Logo';
import styles from './termsSmall.module.css';
import cn from 'classnames';

const TermsSmall = () => {
  return (
    <div className={styles.terms} id="terms">
      <h2 className={styles.terms__title}>
        Условия участия
        <br />в программе
      </h2>
      <div className={styles.terms__content}>
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
        <LineIcon className={styles.content__lineIcon} />
        <div className={cn(styles.content__text__right, styles.content__text__rightBig)}>
          <div className={styles.content__text__rightIconWrapper}>
            <LogoIcon color={'#7DD5F7'} className={styles.content__text__rightIcon} />
            <span>Тогда мы ждем именно тебя!</span>
          </div>
          <span className={styles.text__blue}>Заполняй заявку</span>,
          <br />
          а мы оплатим пререлёт,
          <br />
          проживание и питание
        </div>
        <LineIcon className={styles.content__lineIcon} />
        <div className={styles.content__text__right}>
          <div className={styles.content__text__rightIconWrapper}>
            <span>Ты полон энергии и хочешь развиваться!</span>
            <LogoIcon color={'#3B66BA'} className={styles.content__text__rightIcon} />
          </div>
          <span className={styles.text__blue}>Наша компания</span> – лидер по мировым практикам.
          Если Ты энергичен, хочешь развиваться и считаешь себя лидером, мы ждем именно Тебя!
        </div>
      </div>
    </div>
  );
};

export default TermsSmall;
