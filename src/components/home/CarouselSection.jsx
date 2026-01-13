import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from './SectionHeader';

const CarouselSection = ({
  id,
  title,
  viewAllTo,
  items,
  renderSlide,
  slidesPerView,
  spaceBetween = 16,
  breakpoints,
  dotsActiveClassName = 'bg-primary',
  dotsInactiveClassName = 'bg-border',
}) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader title={title} viewAllTo={viewAllTo} />

        <div className="relative">
          <Swiper
            onSwiper={(s) => {
              swiperRef.current = s;
              setActive(s.realIndex ?? 0);
            }}
            onSlideChange={(s) => setActive(s.realIndex ?? 0)}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
            loop
            className="py-2"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={item?.id ?? item?.name ?? idx}>{renderSlide(item, idx)}</SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label={`Previous ${title}`}
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            aria-label={`Next ${title}`}
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {items.map((item, idx) => (
            <button
              key={`${item?.id ?? item?.name ?? idx}-dot-${idx}`}
              type="button"
              aria-label={`Go to ${title} item ${idx + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`w-3 h-3 rounded-full ${idx === active ? dotsActiveClassName : dotsInactiveClassName}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;


