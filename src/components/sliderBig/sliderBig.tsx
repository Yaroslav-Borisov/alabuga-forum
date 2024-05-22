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
                ДЕНЬ БЕСПИЛОТНЫХ И СПУТНИКОВЫХ ТЕХНОЛОГИЙ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__space)}>
              <div className={cn(styles.card__block, styles.card__block__withRightBorder)}>
                <h3 className={styles.block__title}>ВЫСТАВКИ И ЛЕКЦИИ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>Выставка современных БПЛА</span>
                    <span className={styles.text__medium}>Выставка морских БПЛА</span>
                    <span className={styles.text__medium}>Выставка спутниковых технологий</span>
                  </div>
                </div>
              </div>
              <div className={cn(styles.card__block)}>
                <h3 className={styles.block__title}>ИГРЫ И ШОУ</h3>
                <div className={styles.text__wrapper}>
                  <div className={styles.text__list}>
                    <span className={styles.text__medium}>Шоу дронов</span>
                    <span className={styles.text__medium}>
                      Лекция о будущем БПЛА и космонавтики
                    </span>
                    <span className={styles.text__medium}>Запуск шара в стратосферу</span>
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
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__borderedNew)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Выставка робототехники (манипуляторы, андроиды, сервисные роботы, станки ЧПУ,
                      медицинская и образовательная робототехника)
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Мастер-классы и лекции по робототехнике и микроэлектронике
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Экскурсия на роботизированное опытное производство поддонов
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
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
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА И КИБЕРФИЗИКИ
              </h2>
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
                ДЕНЬ МЕДИЦИНСКИХ И ХИМИЧЕСКИХ ТЕХНОЛОГИЙ
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__borderedNew)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Лекции о развитии малотоннажной химии, о направлениях развития химической
                      промышленности в России
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Лекции об инновациях в медицине, а также посещение современного медицинского
                      блока
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Обучение сердечно-легочной реанимации на пациентах-фантомах
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Обучение навыкам оказания первой медицинской помощи
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
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
              <h2 className={cn(styles.card__title, styles.card__title__small)}>
                ДЕНЬ ПРОЕКТИРОВАНИЯ И СТРОИТЕЛЬСТВА
              </h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__borderedNew)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      3D модели лучшей экономической зоны в Европе, крупнейшего логистического
                      центра в России им. Дэн Сяопина
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Лекции о современных методах строительства
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
                      Мастер-классы по BIM-проектированию
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew)}>
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
              <h2 className={cn(styles.card__title, styles.card__title__small)}>А ТАКЖЕ</h2>
            </div>
            <div className={cn(styles.card__blockWrapper, styles.card__blockWrapper__robot)}>
              <div className={cn(styles.card__block, styles.card__block__robot)}>
                <div className={styles.text__wrapper}>
                  <div className={cn(styles.text__list, styles.text__list__borderedNew__also)}>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
                      Турниры и розыгрыши
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
                      Финал Alabuga Skills Junior
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
                      Экскурсия по ОЭЗ «Алабуга»
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
                      Экскурсия по Елабуге
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
                      Тренинги по soft skills
                    </span>
                    <span className={cn(styles.text__medium, styles.text__medium__robotNew__also)}>
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

export default SliderBig;
