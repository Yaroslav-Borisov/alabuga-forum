import HomeBlotIcon from '../icons/HomeBlot';
import HomeButtonIcon from '../icons/HomeButton';
import HomeDateIcon from '../icons/HomeDate';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__blotWrapper}>
        <HomeBlotIcon className={styles.icon} />
      </div>
      <h2 className={styles.home__title}>Будущее твоими руками! Создадим будущие вместе!</h2>
      <div className={styles.home__dateWrapper}>
        <HomeDateIcon className={styles.icon} />
      </div>
      <div className={styles.home__buttonWrapper}>
        <a href="#application">
          <HomeButtonIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Home;
