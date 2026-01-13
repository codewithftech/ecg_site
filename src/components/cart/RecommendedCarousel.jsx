import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';

const RecommendedCarousel = ({ products }) => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="recommended-products" className="mt-16">
      <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Products</h2>

      <div className="relative">
        <Swiper
          onSwiper={(s) => {
            swiperRef.current = s;
            setActive(s.realIndex ?? 0);
          }}
          onSlideChange={(s) => setActive(s.realIndex ?? 0)}
          slidesPerView={1.15}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="py-2"
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={`rec-${product.id}`}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous recommended products"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          type="button"
          aria-label="Next recommended products"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {products.map((p, idx) => (
          <button
            key={`rec-dot-${p.id}-${idx}`}
            type="button"
            aria-label={`Go to recommended product ${idx + 1}`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`w-3 h-3 rounded-full ${idx === active ? 'bg-primary' : 'bg-border'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCarousel;


