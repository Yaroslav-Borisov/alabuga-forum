import { useEffect } from 'react';
import styles from './main.module.css';
import postscribe from 'postscribe';
import Home from '../home/home';
import Program from '../program/program';
import Terms from '../terms/terms';
import TermsSmall from '../termsSmall/termsSmall';

const Main = () => {
  useEffect(() => {
    postscribe(
      '#form',
      `
      <script data-b24-form="inline/86/k6idnt" data-skip-moving="true">
        (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://team.alabuga.ru/upload/crm/form/loader_86_k6idnt.js');
      </script>`
    );
  }, []);

  return (
    <main className={styles.main}>
      <Home />
      <Program />
      <div className={styles.terms__big}>
        <Terms />
      </div>
      <div className={styles.terms__small}>
        <TermsSmall />
      </div>
      <div className={styles.application} id="application">
        <h2 className={styles.application__title}>Заявка для участия</h2>
        <div id="form"></div>
      </div>
    </main>
  );
};

export default Main;
