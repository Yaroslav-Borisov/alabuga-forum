import styles from './sliderBig.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import cn from 'classnames';

const SliderBig = () => {
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
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__aks)}>
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
              <div className={cn(styles.card__block, styles.card__block__withBorder)}>
                <h3 className={styles.block__title}>2 ВАРИАНТ</h3>
                <div className={styles.block__text}>
                  <span className={cn(styles.text, styles.text__margin)}>
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
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ
                <br />
                РОБОТОТЕХНИКИ И СТРОИТЕЛЕЙ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Мастер классы
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__robot,
                        styles.text__medium__bordered
                      )}
                    >
                      Лекции
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Выставка робототехники
                    </span>
                  </div>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Экскурсия на ОПП
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__robot,
                        styles.text__medium__bordered
                      )}
                    >
                      Турниры
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Галограммы
                    </span>
                  </div>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Bim - модели и моделирование
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__robot,
                        styles.text__medium__bordered
                      )}
                    >
                      Экскурсия
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Стройки
                    </span>
                  </div>
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
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__aks)}>
              <div className={styles.card__block}>
                <h3 className={styles.block__title}>МАСТЕР КЛАССЫ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>ИИ в изучении местности;</span>
                    <span className={styles.text__medium}>ИИ в транспорте;</span>
                    <span className={styles.text__medium}>ИИ в медицине;</span>
                  </div>
                </div>
              </div>
              <div className={cn(styles.card__block, styles.card__block__withBorder)}>
                <h3 className={styles.block__title}>ЛЕКЦИИ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={cn(styles.text__medium, styles.text__margin)}>
                      Как ИИ изменил мир вокруг нас?
                    </span>
                    <span className={styles.text__medium}>
                      Как компании могут внедрить ИИ в свою работу?
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.card__block}>
                <h3 className={styles.block__title}>ХАКАТОН</h3>
                <div className={styles.block__text}>
                  <span className={styles.text__medium}>Школьный трек</span>
                </div>
                <div className={styles.text__wrapper}>
                  <span className={styles.text__medium}>3 трека с призовым фондом</span>
                  <span className={styles.text__big}>300 тысяч рублей!</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ
                <br />
                ХИМИИ И МЕДИЦИНЫ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Мастер классы
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__robot,
                        styles.text__medium__bordered
                      )}
                    >
                      Лекции
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Хакатон
                    </span>
                  </div>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Тренинг
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__robot,
                        styles.text__medium__bordered
                      )}
                    >
                      Экскурсии в Мед-блок
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Турниры
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title}>ДЕНЬ КОСМОСА И БПЛА</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__space)}>
              <div className={cn(styles.card__block, styles.card__block__withRightBorder)}>
                <h3 className={styles.block__title}>ВЫСТАВКИ И ЛЕКЦИИ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>Выставка современных БПЛА</span>
                    <span className={styles.text__medium}>Выставка морских БПЛА</span>
                    <span className={styles.text__medium}>Выставка школьных БПЛА</span>
                    <span className={styles.text__medium}>Спутники</span>
                    <span className={styles.text__medium}>Радиоприемники</span>
                    <span className={styles.text__medium}>Зонды</span>
                  </div>
                </div>
              </div>
              <div className={cn(styles.card__block)}>
                <h3 className={styles.block__title}>ИГРЫ И ШОУ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>Шоу дронов</span>
                    <span className={styles.text__medium}>Пейнтбол</span>
                    <span className={styles.text__medium}>Запуск шара</span>
                    <span className={styles.text__medium}>И многое другое</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBig;
