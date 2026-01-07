import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Category = () => {
  const [viewMode, setViewMode] = useState('grid');
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

  const CheckboxRow = ({ label, checked, onChange }) => (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3 text-left w-full"
    >
      <span
        className={`w-6 h-6 rounded-[6px] border-2 border-[#0EB7EE] flex items-center justify-center ${
          checked ? 'bg-[#0EB7EE]' : 'bg-transparent'
        }`}
      />
      <span className="text-[16px] leading-6 text-[#64748B]">{label}</span>
    </button>
  );

  const pricePercent = useMemo(() => {
    const min = 0;
    const max = 100;
    const left = ((priceRange.min - min) / (max - min)) * 100;
    const right = ((priceRange.max - min) / (max - min)) * 100;
    return { left: Math.max(0, Math.min(100, left)), right: Math.max(0, Math.min(100, right)) };
  }, [priceRange.min, priceRange.max]);

  return (
    <>
      {/* Category Hero Section */}
      <section id="category-hero" className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <nav className="text-sm text-secondary mb-4">
                <Link to="/" className="hover:text-primary">Home</Link> / 
                <span className="text-foreground font-medium"> {categoryInfo.name}</span>
              </nav>
              <h1 className="text-4xl font-bold text-foreground mb-4">{categoryInfo.name}</h1>
              <p className="text-lg text-secondary mb-6">{categoryInfo.description}</p>
              <div className="flex items-center space-x-4">
                <span className="bg-card px-4 py-2 rounded-full text-sm font-medium border border-border">
                  {categoryInfo.productCount} Products
                </span>
                <span className="bg-card px-4 py-2 rounded-full text-sm font-medium border border-border">
                  {categoryInfo.brandCount} Brands
                </span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-80 h-64 overflow-hidden rounded-xl shadow-lg">
                <img 
                  className="w-full h-full object-cover" 
                  src={categoryInfo.heroImage} 
                  alt="vape hardware collection display" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Content (same layout as Shop) */}
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="flex lg:flex-row gap-8">
            {/* Sidebar */}
            <aside
              id="filter-sidebar"
              className="hidden lg:block w-[320px] shrink-0 bg-white rounded-[28px] px-8 py-10"
            >
              <div className="sticky top-24">
                <h3 className="flex items-center justify-between text-[22px] font-bold leading-7 text-[#0F172A] mb-8">
                  <span>Filters</span>
                  <i className="fas fa-filter text-primary text-[18px]" aria-hidden="true"></i>
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                      Sub-Categories
                    </h4>
                    <div className="space-y-4">
                      {subCategories.map((c) => (
                        <CheckboxRow
                          key={c.id}
                          label={c.name}
                          checked={selectedFilters.subCategories.includes(c.id)}
                          onChange={() => toggleFilter('subCategories', c.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                      Brands
                    </h4>
                    <div className="space-y-4">
                      {brands.map((b) => (
                        <CheckboxRow
                          key={b.id}
                          label={b.name}
                          checked={selectedFilters.brands.includes(b.id)}
                          onChange={() => toggleFilter('brands', b.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                      Power Range
                    </h4>
                    <div className="space-y-4">
                      {powerRanges.map((r) => (
                        <CheckboxRow
                          key={r.id}
                          label={r.name}
                          checked={selectedFilters.powerRange.includes(r.id)}
                          onChange={() => toggleFilter('powerRange', r.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                      Price Range
                    </h4>

                    <div className="relative">
                      <div className="relative h-2 rounded-full bg-white border border-[#8ED7F3]">
                        <div
                          className="absolute top-0 h-full rounded-full bg-[#8ED7F3]"
                          style={{
                            left: `${Math.min(pricePercent.left, pricePercent.right)}%`,
                            width: `${Math.abs(pricePercent.right - pricePercent.left)}%`,
                          }}
                        />
                        <div
                          className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                          style={{ left: `calc(${pricePercent.left}% - 10px)` }}
                        />
                        <div
                          className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                          style={{ left: `calc(${pricePercent.right}% - 10px)` }}
                        />
                      </div>

                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={priceRange.min}
                        onChange={(e) => {
                          const next = Number(e.target.value);
                          setPriceRange((s) => ({ ...s, min: Math.min(next, s.max) }));
                        }}
                        className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                        aria-label="Minimum price"
                      />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={priceRange.max}
                        onChange={(e) => {
                          const next = Number(e.target.value);
                          setPriceRange((s) => ({ ...s, max: Math.max(next, s.min) }));
                        }}
                        className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                        aria-label="Maximum price"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[14px] font-medium text-[#0EB7EE]">
                        ${priceRange.min}
                      </span>
                      <span className="text-[14px] font-medium text-[#F65D2C]">
                        ${priceRange.max}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products */}
            <section className="flex-1">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">{categoryInfo.name}</h1>
                <p className="text-secondary">Browse products in this category</p>
              </div>

              <div className="flex  md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <button className="lg:hidden bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                    <i className="fas fa-filter mr-2"></i>Filters
                  </button>
                  <div className="bg-card rounded-full px-4 py-2 flex items-center border border-border">
                    <input
                      type="text"
                      placeholder="Search hardware..."
                      className="bg-transparent outline-none text-sm w-64"
                    />
                    <i className="fas fa-magnifying-glass text-secondary ml-2"></i>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <select className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary">
                    <option>Sort by: Featured</option>
                    <option>Name A-Z</option>
                    <option>Name Z-A</option>
                    <option>Newest First</option>
                    <option>Most Popular</option>
                  </select>

                  <div className="flex items-center space-x-2">
                    <button
                      className={`p-2 border border-border rounded-lg transition-colors ${
                        viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-muted'
                      }`}
                      onClick={() => setViewMode('grid')}
                    >
                      <i className="fas fa-table-cells-large"></i>
                    </button>
                    <button
                      className={`p-2 border border-border rounded-lg transition-colors ${
                        viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-muted'
                      }`}
                      onClick={() => setViewMode('list')}
                    >
                      <i className="fas fa-list"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div id="product-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start mb-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

              <div id="pagination" className="flex items-center justify-center space-x-2 mt-8">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-chevron-left text-sm"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">2</button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">3</button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">4</button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">24</button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-chevron-right text-sm"></i>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

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
    </>
  );
};

export default Category;
