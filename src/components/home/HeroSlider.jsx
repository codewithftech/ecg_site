import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlider = ({ slides }) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[85vh] bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActive(swiper.realIndex ?? 0);
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex ?? 0)}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative h-[85vh]">
              <div className="absolute inset-0">
                <img src={slide.image} alt="Hero background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 h-full">
                <div className="flex items-center h-full px-0 sm:px-6">
                  <div className="max-w-[672px]">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">{slide.title}</h1>
                    <p className="text-base sm:text-xl text-white mb-10 leading-relaxed">{slide.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/login"
                        className="h-[52px] px-8 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg inline-flex items-center justify-center w-full sm:w-auto"
                      >
                        Sign In to View Pricing
                      </Link>
                      <Link
                        to="/contact"
                        className="h-[52px] px-8 bg-transparent border-2 border-white text-white rounded-full font-semibold text-base hover:bg-white/10 transition-colors inline-flex items-center justify-center w-full sm:w-auto"
                      >
                        Apply for Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors backdrop-blur-sm z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors backdrop-blur-sm z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white rotate-180"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      <div className="absolute bottom-6 sm:bottom-11 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`w-3 h-3 rounded-full ${idx === active ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;


