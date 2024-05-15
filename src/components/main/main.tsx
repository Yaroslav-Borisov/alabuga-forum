import { useEffect } from 'react';
import HomeBlotIcon from '../icons/HomeBlot';
import HomeButtonIcon from '../icons/HomeButton';
import HomeDateIcon from '../icons/HomeDate';
import styles from './main.module.css';
import postscribe from 'postscribe';
import Slider from '../slider/slider';
import DashedLine from '../icons/DashedLine';
import LogoIcon from '../icons/Logo';
import PersonIcon from '../icons/Person';
import RobotIcon from '../icons/Robot';
import DronIcon from '../icons/Dron';

const Main = () => {
  useEffect(() => {
    postscribe(
      '#form',
      `<script data-b24-form="inline/86/k6idnt" data-skip-moving="true">
        (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://team.alabuga.ru/upload/crm/form/loader_86_k6idnt.js');
      </script>`
    );
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <div className={styles.home__blotWrapper}>
          <HomeBlotIcon />
        </div>
        <h2 className={styles.home__title}>Будущее твоими руками! Создадим будущие вместе!</h2>
        <div className={styles.home__dateWrapper}>
          <HomeDateIcon />
        </div>
        <div className={styles.home__buttonWrapper}>
          <a href="#application">
            <HomeButtonIcon />
          </a>
        </div>
      </div>
      <div className={styles.program} id="about">
        <PersonIcon className={styles.programIcon} />
        <h2 className={styles.program__title}>О программе</h2>
        <div className={styles.slider__wrapper}>
          <Slider />
        </div>
      </div>
      <div className={styles.terms} id="terms">
        <RobotIcon className={styles.terms__robotIcon} />
        <DronIcon className={styles.terms__dronIcon} />
        <h2 className={styles.terms__title}>Условия участия в программе</h2>
        <div className={styles.terms__content}>
          <DashedLine className={styles.content__line} />
          <div className={styles.content__text__right}>
            <div className={styles.content__text__rightIconWrapper}>
              <span>Вам должно быть от 15 до 24 лет</span>
              <LogoIcon color={'#00ADEF'} className={styles.content__text__rightIcon} />
            </div>
            Вы готовы прибыть
            <br />в <span className={styles.text__blue}>ОЭЗ «Алабуга»</span> г. Елабуга
            <br />
            Республика Татарстан
            <br />с 28 июня по 5 июля
          </div>
          <div className={styles.content__text__left}>
            <div className={styles.content__text__leftIconWrapper}>
              <LogoIcon color={'#7DD5F7'} className={styles.content__text__leftIcon} />
              <span>Мы оплатим вам!</span>
            </div>
            Перелёт
            <br />
            Жильё
            <br />
            Питание
          </div>
          <div className={styles.content__text__bottom}>
            <div className={styles.content__text__bottomIconWrapper}>
              <span>Вы полны энергии и хотите развиваться!</span>
              <LogoIcon color={'#3B66BA'} className={styles.content__text__bottomIcon} />
            </div>
            <span className={styles.text__blue}>Наша компания</span> – лидер по мировым практикам,
            если вы энергичны, хотите развиваться и считаете себя лидером, мы ждем Вас!
          </div>
        </div>
      </div>
      <div className={styles.application} id="application">
        <h2 className={styles.application__title}>Заявка для участия</h2>
        <div id="form"></div>
      </div>
    </main>
  );
};

export default Main;
