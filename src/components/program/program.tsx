import styles from './program.module.css';
import PersonIcon from '../icons/Person';
import SliderBig from '../sliderBig/sliderBig';
import SliderSmall from '../sliderSmall/sliderSmall';

const Program = () => {
  return (
    <div className={styles.program} id="about">
      <PersonIcon className={styles.programIcon} />
      <h2 className={styles.program__title}>О программе</h2>
      <div className={styles.sliderBig__wrapper}>
        <SliderBig />
      </div>
      <div className={styles.sliderSmall__wrapper}>
        <SliderSmall />
      </div>
    </div>
  );
};

export default Program;
