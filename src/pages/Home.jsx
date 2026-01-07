import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const heroSlides = useMemo(
    () => [
      {
        id: 'hero-1',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/73e9917fb10f24abe1aa6952bb47ed96a7bd2773?width=2880',
        title: 'Premium Vape Wholesale',
        subtitle: 'Discover the latest hardware, e-liquids, and disposables at competitive B2B prices',
      },
      {
        id: 'hero-2',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2f8d95a8de-2c2e1a4e4efad7c3d6d5.png',
        title: 'Trusted B2B Partner',
        subtitle: 'Fast fulfillment, verified brands, and dedicated wholesale support for your business',
      },
      {
        id: 'hero-3',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1cc6cc9baf-4e9f0f58e5c6d2b8f3d1.png',
        title: 'New Arrivals Weekly',
        subtitle: 'Stay ahead with fresh inventory across disposables, pods, and e-liquids',
      },
    ],
    []
  );

  const heroSwiperRef = useRef(null);
  const brandsSwiperRef = useRef(null);
  const categoriesSwiperRef = useRef(null);
  const newArrivalsSwiperRef = useRef(null);
  const hotItemsSwiperRef = useRef(null);
  const clearanceSwiperRef = useRef(null);
  const [activeHero, setActiveHero] = useState(0);
  const [activeBrand, setActiveBrand] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeNewArrival, setActiveNewArrival] = useState(0);
  const [activeHotItem, setActiveHotItem] = useState(0);
  const [activeClearance, setActiveClearance] = useState(0);

  const hotItems = [
    {
      id: 1,
      name: 'Pod System Elite',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f5d2f3a6ba-d35a378777cd5e94ddd8.png',
      category: 'Category',
      brand: 'Brand'
    }
  ];

  const newArrivals = [
    {
      id: 1,
      name: 'Pod System Elite',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bfc35734d9-0ded04407dace8893200.png',
      category: 'Category',
      brand: 'Brand'
    },
    {
      id: 2,
      name: 'Pod System Elite',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c978799376-e58c0d38d124e6e451c3.png',
      category: 'Category',
      brand: 'Brand'
    },
    {
      id: 3,
      name: 'Pod System Elite',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f5d2f3a6ba-d35a378777cd5e94ddd8.png',
      category: 'Category',
      brand: 'Brand',
      featured: true
    },
    {
      id: 4,
      name: 'Pod System Elite',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-e77b0d92236b04c96cb4.png',
      category: 'Category',
      brand: 'Brand'
    }
  ];

  const categories = [
    { name: 'Mods & Kits', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3b006bb3cb-0e1ffbc1213bef2e8619.png' },
    { name: 'E-Liquids', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/50fcedc415-984c0aeeadb4511681d5.png' },
    { name: 'Disposables', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e0819a8cd7-4924d8b1591aad510f18.png' },
    { name: 'Coils & Parts', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/002a3b67ac-42755deb022bdb875a41.png' },
    { name: 'Accessories', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6b29b50277-5b59721d1a73c4a57204.png' }
  ];

  const brands = [
    { name: 'SMOK', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/38fdb47833-7056fc38ecefe592f3b3.png' },
    { name: 'VOOPOO', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/ea83c499ff-10d886d3c3b5cd951cc5.png' },
    { name: 'VAPORESSO', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/68faecf252-69f41e2f0ce9a0805847.png' },
    { name: 'GEEKVAPE', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d64915ff64-1e6883046f6b56259900.png' },
    { name: 'ASPIRE', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7269e7c135-645e6ff51aeaa0de94c9.png' },
    { name: 'UWELL', image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4f50a1e8ec-c7cf55d3af57266a9847.png' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh]  bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden">
        <Swiper
          slidesPerView={1}
          loop
          grabCursor
          onSwiper={(swiper) => {
            heroSwiperRef.current = swiper;
            setActiveHero(swiper.realIndex ?? 0);
          }}
          onSlideChange={(swiper) => {
            setActiveHero(swiper.realIndex ?? 0);
          }}
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-full">
              <div className="relative h-[85vh]">
                <div className="absolute inset-0">
                  <img src={slide.image} alt="Hero background" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                </div>

                <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 h-full">
                  <div className="flex items-center h-full px-0 sm:px-6">
                    <div className="max-w-[672px]">
                      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">{slide.title}</h1>
                      <p className="text-base sm:text-xl text-white mb-10 leading-relaxed">{slide.subtitle}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to="/login"
                          className="h-[52px] px-8 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg inline-flex items-center justify-center"
                        >
                          Sign In to View Pricing
                        </Link>
                        <Link
                          to="/contact"
                          className="h-[52px] px-8 bg-transparent border-2 border-white text-white rounded-full font-semibold text-base hover:bg-white/10 transition-colors inline-flex items-center justify-center"
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
          onClick={() => heroSwiperRef.current?.slidePrev()}
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
          onClick={() => heroSwiperRef.current?.slideNext()}
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

        {/* Custom dots (same as previous UI) */}
        <div className="absolute bottom-6 sm:bottom-11 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => heroSwiperRef.current?.slideToLoop(idx)}
              className={`w-3 h-3 rounded-full ${idx === activeHero ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Brands Swiper Carousel */}
      <section id="brands-swiper" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Brands</h2>
            <Link to="/brand" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(s) => {
                brandsSwiperRef.current = s;
                setActiveBrand(s.realIndex ?? 0);
              }}
              onSlideChange={(s) => setActiveBrand(s.realIndex ?? 0)}
              slidesPerView={2}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 6, spaceBetween: 24 },
              }}
              className="py-2"
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={`${brand.name}-${index}`}>
                  <Link
                    to="/brand"
                    className="bg-card rounded-xl shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer w-full h-[112px]"
                  >
                    <img className="w-32 h-16 object-contain" src={brand.image} alt={brand.name} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous brands"
              onClick={() => brandsSwiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next brands"
              onClick={() => brandsSwiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination dots (same style as hero, active = primary) */}
          <div className="flex justify-center gap-2 mt-6">
            {brands.map((b, idx) => (
              <button
                key={`${b.name}-dot-${idx}`}
                type="button"
                aria-label={`Go to brand ${idx + 1}`}
                onClick={() => brandsSwiperRef.current?.slideToLoop(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeBrand ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Swiper Carousel */}
      <section id="categories-swiper" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Categories</h2>
            <Link to="/category" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(s) => {
                categoriesSwiperRef.current = s;
                setActiveCategory(s.realIndex ?? 0);
              }}
              onSlideChange={(s) => setActiveCategory(s.realIndex ?? 0)}
              slidesPerView={1.2}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                768: { slidesPerView: 3.2, spaceBetween: 24 },
                1024: { slidesPerView: 5, spaceBetween: 24 },
              }}
              className="py-2"
            >
              {categories.map((category, index) => (
                <SwiperSlide key={`${category.name}-${index}`}>
                  <Link to="/category" className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer w-full block">
                    <img className="w-full h-40 object-cover" src={category.image} alt={category.name} />
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{category.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => categoriesSwiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next categories"
              onClick={() => categoriesSwiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination dots (same style as hero, active = primary) */}
          <div className="flex justify-center gap-2 mt-6">
            {categories.map((c, idx) => (
              <button
                key={`${c.name}-dot-${idx}`}
                type="button"
                aria-label={`Go to category ${idx + 1}`}
                onClick={() => categoriesSwiperRef.current?.slideToLoop(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeCategory ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Swiper Carousel */}
      <section id="new-arrivals-swiper" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">New Arrivals</h2>
            <Link to="/shop" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(s) => {
                newArrivalsSwiperRef.current = s;
                setActiveNewArrival(s.realIndex ?? 0);
              }}
              onSlideChange={(s) => setActiveNewArrival(s.realIndex ?? 0)}
              slidesPerView={1.15}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 2.1, spaceBetween: 20 },
                768: { slidesPerView: 2.6, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="py-2"
            >
              {newArrivals.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} featured={product.featured} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous new arrivals"
              onClick={() => newArrivalsSwiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next new arrivals"
              onClick={() => newArrivalsSwiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination dots (same style as hero, active = primary) */}
          <div className="flex justify-center gap-2 mt-6">
            {newArrivals.map((p, idx) => (
              <button
                key={`${p.id}-dot-${idx}`}
                type="button"
                aria-label={`Go to new arrival ${idx + 1}`}
                onClick={() => newArrivalsSwiperRef.current?.slideToLoop(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeNewArrival ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Items Swiper Carousel */}
      <section id="hot-items-swiper" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Hot Items</h2>
            <Link to="/shop" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(s) => {
                hotItemsSwiperRef.current = s;
                setActiveHotItem(s.realIndex ?? 0);
              }}
              onSlideChange={(s) => setActiveHotItem(s.realIndex ?? 0)}
              slidesPerView={1.15}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 2.1, spaceBetween: 20 },
                768: { slidesPerView: 2.6, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="py-2"
            >
              {(hotItems.length > 1 ? hotItems : newArrivals).map((product) => (
                <SwiperSlide key={`hot-${product.id}`}>
                  <ProductCard product={product} featured={product.featured} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous hot items"
              onClick={() => hotItemsSwiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next hot items"
              onClick={() => hotItemsSwiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination dots (same style as hero, active = primary) */}
          <div className="flex justify-center gap-2 mt-6">
            {(hotItems.length > 1 ? hotItems : newArrivals).map((p, idx) => (
              <button
                key={`hot-dot-${p.id}-${idx}`}
                type="button"
                aria-label={`Go to hot item ${idx + 1}`}
                onClick={() => hotItemsSwiperRef.current?.slideToLoop(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeHotItem ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clearance Sale Swiper Carousel */}
      <section id="clearance-swiper" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Clearance Sale</h2>
            <Link to="/shop" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="relative">
            <Swiper
              onSwiper={(s) => {
                clearanceSwiperRef.current = s;
                setActiveClearance(s.realIndex ?? 0);
              }}
              onSlideChange={(s) => setActiveClearance(s.realIndex ?? 0)}
              slidesPerView={1.15}
              spaceBetween={16}
              breakpoints={{
                640: { slidesPerView: 2.1, spaceBetween: 20 },
                768: { slidesPerView: 2.6, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="py-2"
            >
              {newArrivals.map((product) => (
                <SwiperSlide key={`clearance-${product.id}`}>
                  <ProductCard product={product} featured={product.featured} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              aria-label="Previous clearance items"
              onClick={() => clearanceSwiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              aria-label="Next clearance items"
              onClick={() => clearanceSwiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination dots (same style as hero, active = primary) */}
          <div className="flex justify-center gap-2 mt-6">
            {newArrivals.map((p, idx) => (
              <button
                key={`clearance-dot-${p.id}-${idx}`}
                type="button"
                aria-label={`Go to clearance item ${idx + 1}`}
                onClick={() => clearanceSwiperRef.current?.slideToLoop(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeClearance ? 'bg-primary' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section id="promo-banners" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1f5fc27250-42a8884b950547498a00.png"
                alt="vape wholesale bulk discount banner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="px-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Bulk Order Discounts</h3>
                  <p className="text-white/90 mb-4">Save up to 30% on large orders</p>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/aaafb69278-743249b476011a3e47ae.png"
                alt="free shipping vape wholesale banner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="px-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Free Shipping</h3>
                  <p className="text-white/90 mb-4">On orders over $500</p>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="b2b-cta"
        className="py-20 bg-gradient-to-r from-primary to-accent"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlock Wholesale Pricing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of retailers accessing premium vape products at competitive
            B2B prices
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow">
              Sign In to View Pricing
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors">
              Apply for Business Account
            </button>
          </div>
        </div>
      </section>
      <section id="join-ecig-cta" className="py-20 bg-[#272E3F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join ECIG Wholesale Network
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Access exclusive B2B pricing, industry insight, and premium wholesale
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow">
              Apply for Business Account
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>



      {/* (Moved Hot Items carousel to directly after New Arrivals) */}

      {/* (Moved Categories/Brands carousels to directly after Hero) */}

      {/* (Moved New Arrivals carousel to directly after Categories) */}

      {/* (Moved Clearance Sale carousel to directly after Hot Items) */}

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest Blog Posts</h2>
            <Link to="/blog" className="text-primary font-medium hover:underline flex items-center">
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ee0a46007a-174e88e91b0960765359.png" alt="vape product review blog" />
              <div className="p-6">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">Product Review</span>
                <h3 className="text-xl font-bold text-foreground mb-2">Top 10 Disposables of 2024</h3>
                <p className="text-secondary mb-4">Discover the most popular disposable vapes that are flying off the shelves this year and why retailers love them...</p>
                <Link to="/single_blog" className="text-primary font-semibold hover:underline rounded-full">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </article>

            <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/685ccd0fb7-6c7066bdfab484b4194d.png" alt="vape business tips blog" />
              <div className="p-6">
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold mb-3">Business Tips</span>
                <h3 className="text-xl font-bold text-foreground mb-2">Maximizing Profit Margins</h3>
                <p className="text-secondary mb-4">Learn proven strategies to increase your vape shop's profitability and optimize your product mix for better returns...</p>
                <Link to="/single_blog" className="text-primary font-semibold hover:underline rounded-full">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </article>

            <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ee0a46007a-174e88e91b0960765359.png" alt="vape product review blog" />
              <div className="p-6">
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">Product Review</span>
                <h3 className="text-xl font-bold text-foreground mb-2">Top 10 Disposables of 2024</h3>
                <p className="text-secondary mb-4">Discover the most popular disposable vapes that are flying off the shelves this year and why retailers love them...</p>
                <Link to="/single_blog" className="text-primary font-semibold hover:underline rounded-full">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

