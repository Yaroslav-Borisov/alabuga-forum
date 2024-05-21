import styles from './sliderSmall.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import cn from 'classnames';
import ArrowIcon from '../icons/Arrow';

const SliderSmall = () => {
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
                <div className={styles.arrowIcon__wrapper}>
                  <ArrowIcon className={styles.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title}>АКСЕЛЕРАТОР</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__aks)}>
              <div className={cn(styles.card__block)}>
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title}>АКСЕЛЕРАТОР</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__aks)}>
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
          {/* <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title__small}>
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
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Лекции
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Выставка робототехники
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Экскурсия на ОПП
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Турниры
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Галограммы
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Bim - модели и моделирование
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robot)}>
                      Экскурсия на стройки
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title__small}>ДЕНЬ ПРОЕКТИРОВАНИЯ И СТРОИТЕЛЬСТВА</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      3D и голографические модели лучшей экономической зоны в Европе, крупнейшего
                      логистического центра в России им. Дэн Сяопина
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Лекции о современных методах строительства
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Мастер-классы по BIM-проектированию
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Применение БПЛА в геодезии, проектировании, контроле строительства,
                      картографии
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
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>ИИ в изучении местности</span>
                    <span className={styles.text__medium}>ИИ в транспорте</span>
                    <span className={styles.text__medium}>ИИ в медицине</span>
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
                <h3 className={styles.block__title}>ЛЕКЦИИ</h3>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>Как ИИ изменил мир вокруг нас?</span>
                    <span className={styles.text__medium}>
                      Как компании могут внедрить ИИ в свою работу?
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
                <h3 className={styles.block__title}>ХАКАТОН</h3>
                <div className={styles.block__text}>
                  <div className={styles.text__list}>
                    <span className={cn(styles.text__medium, styles.text__mediumWithMargin)}>
                      Школьные треки
                    </span>
                  </div>
                  <div className={styles.text__wrapper}>
                    <span className={styles.text__medium}>3 трека с призовым фондом</span>
                    <span className={styles.text__big}>300 тысяч рублей!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__titleWrapper}>
              <h2 className={styles.card__title__small}>
                ДЕНЬ МЕДИЦИНСКИХ И ХИМИЧЕСКИХ ТЕХНОЛОГИЙ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Лекции о развитии малотоннажной химии, о направлениях развития химической
                      промышленности в России
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Лекции об инновациях в медицине, а также посещение современного медицинского
                      блока
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Обучение сердечно-легочной реанимации на пациентах-фантомах
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Обучение навыкам оказания первой медицинской помощи
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Осмотр и диагностика пациентов в VR
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
              <h2 className={styles.card__title__small}>
                ДЕНЬ БЕСПИЛОТНЫХ И СПУТНИКОВЫХ ТЕХНОЛОГИЙ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Выставка современных БПЛА
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Выставка морских БПЛА
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Выставка школьных БПЛА
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Выставка спутниковых технологий
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Шоу дронов
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Лекция о будущем БПЛА и космонавтики
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Запуск шара
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
              <h2 className={styles.card__title__small}>ДЕНЬ РОБОТОТЕХНИКИ</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Выставка робототехники (манипуляторы, андроиды, сервисные роботы, станки ЧПУ,
                      медицинская и образовательная робототехника)
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Мастер-классы и лекции по робототехнике и микроэлектронике
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Экскурсия на роботизированное опытное производство поддонов
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Бои роботов-убийц
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
              <h2 className={styles.card__title__small}>А ТАКЖЕ</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__bordered)}>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Турниры и розыгрыши
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Финал Alabuga Skills Junior
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Экскурсия по ОЭЗ «Алабуга»
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Экскурсия по Елабуге
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Тренинги по soft skills
                    </span>
                    <span
                      className={cn(
                        styles.text__medium,
                        styles.text__medium__build,
                        styles.text__medium__robot
                      )}
                    >
                      Спортивные мероприятия
                    </span>
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

export default SliderSmall;
