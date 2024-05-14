import styles from './slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import cn from 'classnames';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title}>АКСЕЛЕРАТОР</h2>
              <span className={styles.card__subtitle}>проходит с 29.06 по 04.07</span>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={styles.card__block}>
                <h3 className={styles.block__title}>1 ВАРИАНТ</h3>
                <div className={styles.block__text}>
                  <span className={styles.text}>
                    Участник может доработать и представить свой проект.
                  </span>
                </div>
                <div className={styles.text__wrapper}>
                  <span className={styles.text__medium}>Лучший получает</span>
                  <span className={styles.text__big}>300 тысяч рублей!</span>
                </div>
              </div>
              <div className={styles.card__block}>
                <h3 className={styles.block__title}>2 ВАРИАНТ</h3>
                <div className={styles.block__text}>
                  <span className={styles.text}>
                    Участник выбирает 1 из 5 тематик и создает продукт вместе с описанием.
                  </span>
                  <span className={styles.text__medium}>Тематики:</span>
                  <div className={styles.text__list}>
                    <span className={styles.text}>1. БПЛА для сельского хозяйства;</span>
                    <span className={styles.text}>
                      2. Средства наблюдения, идентификации и связи;
                    </span>
                    <span className={styles.text}>
                      3. Новые материалы и технологии корпусов БАС;
                    </span>
                    <span className={styles.text}>
                      4. Средства управления или контроля полета БВС;
                    </span>
                    <span className={styles.text}>5. Средства обеспечения безопасности.</span>
                  </div>
                </div>
                <div className={styles.text__wrapper}>
                  <span className={styles.text__medium}>Приз в каждой номинации по</span>
                  <span className={styles.text__big}>300 тысяч рублей!</span>
                </div>
              </div>
              <div className={styles.card__block}>
                <h3 className={styles.block__title}>3 ВАРИАНТ</h3>
                <div className={styles.block__text}>
                  <span className={styles.text}>
                    Участник предоставляет свою идею и наши эксперты наставляют его, чтоб он ее
                    развивал.
                  </span>
                </div>
                <div className={styles.text__wrapper}>
                  <span className={styles.text__medium}>Приз за лучшую идею</span>
                  <span className={styles.text__big}>200 тысяч рублей!</span>
                </div>
                <div className={styles.text__wrapper}>
                  <span className={styles.text__medium}>Приз зрительских симпатий</span>
                  <span className={styles.text__big}>100 тысяч рублей!</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title}>ДЕНЬ ИИ</h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__ii)}>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>1. Мастер класс:</span>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- ИИ в изучении местности;</span>
                    <span className={styles.text}>- ИИ в транспорте;</span>
                    <span className={styles.text}>- ИИ в медицине.</span>
                  </div>
                </div>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>2. Лекции:</span>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Как ИИ изменил мир вокруг нас?</span>
                    <span className={styles.text}>
                      - Как компании могут внедрить ИИ в свою работу?
                    </span>
                  </div>
                </div>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>3. Хакатон:</span>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- 3 трека с призовым фондом 300к;</span>
                    <span className={styles.text}>- Школьный и студенческий трек;</span>
                    <span className={styles.text}>- Длительность 48 часов далее стопкодинг</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ ХИМИИ И МЕДИЦИНЫ
              </h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__medicine)}>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Мастер классы;</span>
                    <span className={styles.text}>- Лекции;</span>
                    <span className={styles.text}>- Хакатон;</span>
                    <span className={styles.text}>- Основной партнёр Сколково;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>ДЕНЬ БПЛА</h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__medicine)}>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Выставка современных БПЛА;</span>
                    <span className={styles.text}>- Выставка морских БПЛА;</span>
                    <span className={styles.text}>- Выставка школьных БПЛА.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ РОБОТОТЕХНИКИ
              </h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__medicine)}>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Мастер класс;</span>
                    <span className={styles.text}>- Лекции;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>ДЕНЬ СТРОИТЕЛЕЙ</h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__medicine)}>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Мастер класс;</span>
                    <span className={styles.text}>- Лекции;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>ДЕНЬ КОСМОСА</h2>
            </div>
            <div className={styles.card__blockWrapper}>
              <div className={cn(styles.card__block, styles.card__block__medicine)}>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>1. Выставка:</span>
                  <div className={styles.text__list}>
                    <span className={styles.text}>- Спутники;</span>
                    <span className={styles.text}>- Радиоприёмники;</span>
                    <span className={styles.text}>- Зонды.</span>
                  </div>
                </div>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>2. Лекции.</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
