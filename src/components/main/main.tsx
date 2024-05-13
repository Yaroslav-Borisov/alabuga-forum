import { useEffect } from 'react';
import HomeBlotIcon from '../icons/HomeBlot';
import HomeButtonIcon from '../icons/HomeButton';
import HomeDateIcon from '../icons/HomeDate';
import styles from './main.module.css';
import postscribe from 'postscribe';
import Slider from '../slider/slider';
import DashedLine from '../icons/DashedLine';

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
        <h2 className={styles.home__title}>САМОЕ МАСШТАБНОЕ МЕРОПРИЯТИЕ ОЭЗ ППТ «АЛАБУГА»!</h2>
        <div className={styles.home__dateWrapper}>
          <HomeDateIcon />
        </div>
        <div className={styles.home__buttonWrapper}>
          <HomeButtonIcon />
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.content__desc__grey}>
          Нетворкинг, обучение, выявление талантов, новые идеи!
        </span>
        <span className={styles.content__desc}>
          БОЛЕЕ 2.000.000 РУБЛЕЙ РАСПРЕДЕЛЕННЫЕ КАЖДОМУ ПОБЕДИТЕЛЮ!
        </span>
      </div>
      <div className={styles.program}>
        <h2 className={styles.program__title}>О программе</h2>
        <Slider />
      </div>
      <div className={styles.terms}>
        <h2 className={styles.terms__title}>Условия участия в программе</h2>
        <div className={styles.terms__content}>
          <DashedLine className={styles.content__line} />
          <p className={styles.content__text__right}>
            Вы готовы прибыть
            <br />в <span className={styles.text__blue}>ОЭЗ «Алабуга»</span> г. Елабуга
            <br />
            Республика Татарстан
            <br />с 28 июня по 5 июля.
          </p>
          <p className={styles.content__text__left}>
            Перелёт
            <br />
            Жильё
            <br />
            Питание
          </p>
          <p className={styles.content__text__bottom}>
            <span className={styles.text__blue}>Наша компания</span> – лидер по мировым практикам,
            если вы энергичны, хотите развиваться и считаете себя лидером, мы ждем Вас! Вы готовы
            прибыть
          </p>
        </div>
      </div>
      <div className={styles.application}>
        <h2 className={styles.application__title}>Заявка для участия</h2>
        <div id="form"></div>
      </div>
    </main>
  );
};

export default Main;
