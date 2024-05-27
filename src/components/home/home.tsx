import CircleMovement from "../icons/CircleMovement";
import FirstIcon from "../icons/First";
import HomeBlotIcon from "../icons/HomeBlot";
import HomeButtonIcon from "../icons/HomeButton";
import HomeDateIcon from "../icons/HomeDate";
import RSOIcon from "../icons/RSOIcon";
import styles from "./home.module.css";
import cn from "classnames";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__icons}>
        <FirstIcon
          className={cn(styles.home__icon, styles.home__first)}
          color={"#FFFFFF"}
        />
        <CircleMovement
          className={cn(styles.home__icon, styles.home__circleMovement)}
          color={"#FFFFFF"}
        />
        <RSOIcon
          className={cn(styles.home__icon, styles.home__rso)}
          color={"#FFFFFF"}
        />
      </div>

      <div className={styles.home__blotWrapper}>
        <HomeBlotIcon className={cn(styles.icon, styles.icon__blot)} />
      </div>
      <h2 className={styles.home__title}>
        Форум талантливой молодежи!
        <br />
        Создадим будущее вместе уже сегодня!
      </h2>
      <div className={styles.home__dateWrapper}>
        <HomeDateIcon className={cn(styles.icon, styles.icon__date)} />
      </div>
      <div className={styles.home__buttonWrapper}>
        <a href="#application">
          <HomeButtonIcon className={cn(styles.icon, styles.icon__button)} />
        </a>
      </div>
    </div>
  );
};

export default Home;
