import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/home/HeroSlider';
import CarouselSection from '../components/home/CarouselSection';
import PromoBanners from '../components/home/PromoBanners';
import HomeCtas from '../components/home/HomeCtas';
import BlogSection from '../components/home/BlogSection';

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
      <HeroSlider slides={heroSlides} />

      <CarouselSection
        id="brands-swiper"
        title="Brands"
        viewAllTo="/brand"
        items={brands}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
        }}
        renderSlide={(brand) => (
          <Link
            to="/brand"
            className="bg-card rounded-xl shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer w-full h-[112px]"
          >
            <img className="w-32 h-16 object-contain" src={brand.image} alt={brand.name} />
          </Link>
        )}
      />

      <CarouselSection
        id="categories-swiper"
        title="Categories"
        viewAllTo="/category"
        items={categories}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          768: { slidesPerView: 3.2, spaceBetween: 24 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
        }}
        renderSlide={(category) => (
          <Link
            to="/category"
            className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer w-full block"
          >
            <img className="w-full h-40 object-cover" src={category.image} alt={category.name} />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-foreground">{category.name}</h3>
            </div>
          </Link>
        )}
      />

      <CarouselSection
        id="new-arrivals-swiper"
        title="New Arrivals"
        viewAllTo="/shop"
        items={newArrivals}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 2.2, spaceBetween: 18 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        renderSlide={(product) => <ProductCard product={product} featured={product.featured} />}
      />

      <CarouselSection
        id="hot-items-swiper"
        title="Hot Items"
        viewAllTo="/shop"
        items={hotItems.length > 1 ? hotItems : newArrivals}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 2.2, spaceBetween: 18 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        renderSlide={(product) => <ProductCard product={product} featured={product.featured} />}
      />

      <CarouselSection
        id="clearance-swiper"
        title="Clearance Sale"
        viewAllTo="/shop"
        items={newArrivals}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 2.2, spaceBetween: 18 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        renderSlide={(product) => <ProductCard product={product} featured={product.featured} />}
      />

      <PromoBanners />
      <HomeCtas />
      <BlogSection />
    </>
  );
};

export default Home;

