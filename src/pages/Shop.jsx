import { useMemo, useState } from 'react';
import ShopFilterSidebar from '../components/shop/ShopFilterSidebar';
import ShopFiltersDrawer from '../components/shop/ShopFiltersDrawer';
import ShopToolbar from '../components/shop/ShopToolbar';
import ShopProductGrid from '../components/shop/ShopProductGrid';
import ShopPagination from '../components/shop/ShopPagination';
import ShopB2bCta from '../components/shop/ShopB2bCta';

const Shop = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    brands: { SMOK: false, VooPoo: false, GeekVape: false },
    categories: { 'Mods & Kits': false, Disposables: false, 'E-Liquids': false },
    nicotine: { '0mg': true, '3mg': false, '6mg': false },
    deviceType: { 'Pod Systems': false, 'Box Mods': false, Disposables: false },
    stockStatus: { 'In Stock': false, 'Pre-Order': false },
    priceMin: 5,
    priceMax: 99,
  });

  const pricePercent = useMemo(() => {
    const min = 0;
    const max = 100;
    const left = ((filters.priceMin - min) / (max - min)) * 100;
    const right = ((filters.priceMax - min) / (max - min)) * 100;
    return { left: Math.max(0, Math.min(100, left)), right: Math.max(0, Math.min(100, right)) };
  }, [filters.priceMin, filters.priceMax]);

  const products = [
    {
      id: 1,
      name: 'Premium Vape Mod X1',
      description: 'Advanced temperature control',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bfc35734d9-0ded04407dace8893200.png',
      category: 'Mods & Kits',
      brand: 'SMOK',
      price: '$79.99',
      compareAt: '$99.99',
    },
    {
      id: 2,
      name: 'Disposable Pro 5000',
      description: '5000 puffs, rechargeable',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c978799376-e58c0d38d124e6e451c3.png',
      category: 'Disposables',
      brand: 'Geek Bar',
      price: '$24.99',
      compareAt: '$34.99',
    },
    {
      id: 3,
      name: 'Premium E-Juice Collection',
      description: 'Fruit blend, 60ml bottles',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8c29fb9519-c22f371d32cf17919a1c.png',
      category: 'E-Liquids',
      brand: 'Naked 100',
      price: '$12.99',
      compareAt: '$18.99',
    },
    {
      id: 4,
      name: 'Pod System Ultra',
      description: 'Compact design, long battery',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f5d2f3a6ba-d35a378777cd5e94ddd8.png',
      category: 'Pod Systems',
      brand: 'VooPoo',
      price: '$39.99',
      compareAt: '$49.99',
    },
    {
      id: 5,
      name: 'Sub-Ohm Tank Pro',
      description: 'Massive clouds, great flavor',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8889ee715f-bf006080ecb8b9e3ad54.png',
      category: 'Tanks',
      brand: 'GeekVape',
      price: '$29.99',
      compareAt: '$39.99',
    },
    {
      id: 6,
      name: 'Replacement Coil Pack',
      description: '5-pack, 0.15ohm mesh',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-d3ce64cde5efc2dac22f.png',
      category: 'Coils & Parts',
      brand: 'SMOK',
      price: '$9.99',
      compareAt: '$14.99',
    },
    {
      id: 7,
      name: 'Battery & Charger Kit',
      description: '18650 batteries, dual charger',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-61696afccf40b1f78817.png',
      category: 'Accessories',
      brand: 'Efest',
      price: '$19.99',
      compareAt: '$27.99',
    },
    {
      id: 8,
      name: 'Vape Tool Kit',
      description: 'Complete maintenance set',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/acfff343d2-4125f93c499bac181ecd.png',
      category: 'Accessories',
      brand: 'Coil Master',
      price: '$14.99',
      compareAt: '$21.99',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <ShopFiltersDrawer
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          filters={filters}
          setFilters={setFilters}
          pricePercent={pricePercent}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <ShopFilterSidebar filters={filters} setFilters={setFilters} pricePercent={pricePercent} />

          <section className="flex-1 min-w-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Shop All Products</h1>
              <p className="text-secondary">Discover our complete range of vape products</p>
            </div>

            <ShopToolbar onOpenFilters={() => setFiltersOpen(true)} />
            <ShopProductGrid products={products} />
            <ShopPagination />
          </section>
        </div>
      </div>
      <ShopB2bCta />
    </main>
  );
};

export default Shop;

