import { useMemo, useState } from 'react';
import CategoryHero from '../components/category/CategoryHero';
import CategoryFilterSidebar from '../components/category/CategoryFilterSidebar';
import CategoryFiltersDrawer from '../components/category/CategoryFiltersDrawer';
import CategoryToolbar from '../components/category/CategoryToolbar';
import CategoryPagination from '../components/category/CategoryPagination';
import ShopProductGrid from '../components/shop/ShopProductGrid';
import ShopB2bCta from '../components/shop/ShopB2bCta';

const Category = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    subCategories: [],
    brands: [],
    powerRange: [],
  });
  const [priceRange, setPriceRange] = useState({ min: 5, max: 99 });

  const categoryInfo = {
    name: 'Vape Hardware',
    description: 'Discover our complete range of premium vape mods, tanks, coils, and accessories. From beginner-friendly starter kits to advanced rebuildable atomizers, find everything you need for the perfect vaping experience.',
    productCount: '2,847',
    brandCount: '15',
    heroImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/29e1a8b60c-045dc802cd9e92c49291.png',
  };

  const subCategories = [
    { id: 1, name: 'Mods & Kits', count: 847 },
    { id: 2, name: 'Tanks & Atomizers', count: 523 },
    { id: 3, name: 'Coils & Parts', count: 1247 },
    { id: 4, name: 'Batteries & Chargers', count: 230 },
  ];

  const brands = [
    { id: 1, name: 'SMOK', count: 234 },
    { id: 2, name: 'VooPoo', count: 189 },
    { id: 3, name: 'GeekVape', count: 156 },
    { id: 4, name: 'Uwell', count: 98 },
    { id: 5, name: 'Vaporesso', count: 87 },
  ];

  const powerRanges = [
    { id: 1, name: 'Under 50W' },
    { id: 2, name: '50W - 100W' },
    { id: 3, name: '100W - 200W' },
    { id: 4, name: '200W+' },
  ];

  const products = [
    {
      id: 1,
      name: 'SMOK Nord 5 Kit',
      description: '80W Pod Mod with RPM3 Coils',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
      badge: 'New',
      badgeColor: 'accent',
    },
    {
      id: 2,
      name: 'GeekVape Zeus X RTA',
      description: 'Top Airflow Rebuildable Tank',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
    },
    {
      id: 3,
      name: 'Uwell Caliburn Coils',
      description: 'Pack of 4 Replacement Coils',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-598aba635dbe543cf56c.png',
      badge: 'Sale',
      badgeColor: 'destructive',
    },
    {
      id: 4,
      name: 'Nitecore i4 Charger',
      description: 'Universal 4-Bay Battery Charger',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c0de1216ae-181b8af6607142bb4604.png',
    },
    {
      id: 5,
      name: 'VOOPOO Drag S',
      description: '60W Pod Mod Kit',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
    },
    {
      id: 6,
      name: 'Vaporesso Gen S',
      description: '220W Dual Battery Box Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
    },
    {
      id: 7,
      name: 'Aspire Nautilus GT',
      description: 'Complete Starter Kit 75W',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
      badge: 'Hot',
      badgeColor: 'accent',
    },
    {
      id: 8,
      name: 'Wotofo Profile RDA',
      description: 'Mesh Rebuildable Dripping Atomizer',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-0b74bf923b0afe23cf28.png',
    },
  ];

  const toggleFilter = (type, id) => {
    setSelectedFilters(prev => {
      const current = prev[type] || [];
      if (current.includes(id)) {
        return { ...prev, [type]: current.filter(item => item !== id) };
      } else {
        return { ...prev, [type]: [...current, id] };
      }
    });
  };

  const pricePercent = useMemo(() => {
    const min = 0;
    const max = 100;
    const left = ((priceRange.min - min) / (max - min)) * 100;
    const right = ((priceRange.max - min) / (max - min)) * 100;
    return { left: Math.max(0, Math.min(100, left)), right: Math.max(0, Math.min(100, right)) };
  }, [priceRange.min, priceRange.max]);

  return (
    <>
      <CategoryHero categoryInfo={categoryInfo} />

      {/* Category Content (same layout as Shop) */}
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          <CategoryFiltersDrawer
            open={filtersOpen}
            onClose={() => setFiltersOpen(false)}
            subCategories={subCategories}
            brands={brands}
            powerRanges={powerRanges}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            pricePercent={pricePercent}
          />

          <div className="flex flex-col lg:flex-row gap-8">
            <CategoryFilterSidebar
              subCategories={subCategories}
              brands={brands}
              powerRanges={powerRanges}
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              pricePercent={pricePercent}
            />

            {/* Products */}
            <section className="flex-1 min-w-0">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">{categoryInfo.name}</h1>
                <p className="text-secondary">Browse products in this category</p>
              </div>

              <CategoryToolbar viewMode={viewMode} setViewMode={setViewMode} onOpenFilters={() => setFiltersOpen(true)} />
              <ShopProductGrid products={products} />
              <CategoryPagination />
            </section>
          </div>
        </div>
      </main>

      <ShopB2bCta />
    </>
  );
};

export default Category;
