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
            <span>Если вы школьник от 15 до 19 лет</span>
            <LogoIcon color={'#00ADEF'} className={styles.content__text__rightIcon} />
          </div>
          Вы готовы прибыть
          <br />в <span className={styles.text__blue}>ОЭЗ «Алабуга»</span> г. Елабуга
          <br />
          Республика Татарстан
          <br />с 28 июня по 5 июля
        </div>
        <LineIcon className={styles.content__lineIcon} />
        <div className={cn(styles.content__text__right, styles.content__text__rightBig)}>
          <div className={styles.content__text__rightIconWrapper}>
            <LogoIcon color={'#7DD5F7'} className={styles.content__text__rightIcon} />
            <span>Мы оплатим вам</span>
          </div>
          Перелёт
          <br />
          Жильё
          <br />
          Питание
        </div>
        <LineIcon className={styles.content__lineIcon} />
        <div className={styles.content__text__right}>
          <div className={styles.content__text__rightIconWrapper}>
            <span>Вы полны энергии и хотите развиваться!</span>
            <LogoIcon color={'#3B66BA'} className={styles.content__text__rightIcon} />
          </div>
          <span className={styles.text__blue}>Наша компания</span> – лидер по мировым практикам,
          если вы энергичны, хотите развиваться и считаете себя лидером, мы ждем Вас!
        </div>
      </div>
    </div>
  );
};

export default TermsSmall;
