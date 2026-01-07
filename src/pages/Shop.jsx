import ProductCard from '../components/ProductCard';
import { useMemo, useState } from 'react';

const Shop = () => {
  const [filters, setFilters] = useState({
    brands: { SMOK: false, VooPoo: false, GeekVape: false },
    categories: { 'Mods & Kits': false, Disposables: false, 'E-Liquids': false },
    nicotine: { '0mg': true, '3mg': false, '6mg': false },
    deviceType: { 'Pod Systems': false, 'Box Mods': false, Disposables: false },
    stockStatus: { 'In Stock': false, 'Pre-Order': false },
    priceMin: 5,
    priceMax: 99,
  });

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
        <div className="flex  lg:flex-row gap-8">
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
                    Brands
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(filters.brands).map(([k, v]) => (
                      <CheckboxRow
                        key={k}
                        label={k}
                        checked={v}
                        onChange={(next) =>
                          setFilters((s) => ({ ...s, brands: { ...s.brands, [k]: next } }))
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                    Categories
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(filters.categories).map(([k, v]) => (
                      <CheckboxRow
                        key={k}
                        label={k}
                        checked={v}
                        onChange={(next) =>
                          setFilters((s) => ({
                            ...s,
                            categories: { ...s.categories, [k]: next },
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                    Nicotine Strength
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(filters.nicotine).map(([k, v]) => (
                      <CheckboxRow
                        key={k}
                        label={k}
                        checked={v}
                        onChange={(next) =>
                          setFilters((s) => ({
                            ...s,
                            nicotine: { ...s.nicotine, [k]: next },
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                    Device Type
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(filters.deviceType).map(([k, v]) => (
                      <CheckboxRow
                        key={k}
                        label={k}
                        checked={v}
                        onChange={(next) =>
                          setFilters((s) => ({
                            ...s,
                            deviceType: { ...s.deviceType, [k]: next },
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                    Stock Status
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(filters.stockStatus).map(([k, v]) => (
                      <CheckboxRow
                        key={k}
                        label={k}
                        checked={v}
                        onChange={(next) =>
                          setFilters((s) => ({
                            ...s,
                            stockStatus: { ...s.stockStatus, [k]: next },
                          }))
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">
                    Price Range
                  </h4>

                  <div className="relative">
                    {/* Track */}
                    <div className="relative h-2 rounded-full bg-white border border-[#8ED7F3]">
                      {/* Selected range */}
                      <div
                        className="absolute top-0 h-full rounded-full bg-[#8ED7F3]"
                        style={{
                          left: `${Math.min(pricePercent.left, pricePercent.right)}%`,
                          width: `${Math.abs(pricePercent.right - pricePercent.left)}%`,
                        }}
                      />
                      {/* Handles */}
                      <div
                        className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                        style={{ left: `calc(${pricePercent.left}% - 10px)` }}
                      />
                      <div
                        className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                        style={{ left: `calc(${pricePercent.right}% - 10px)` }}
                      />
                    </div>

                    {/* Invisible inputs for interaction */}
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={filters.priceMin}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        setFilters((s) => ({ ...s, priceMin: Math.min(next, s.priceMax) }));
                      }}
                      className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                      aria-label="Minimum price"
                    />
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={filters.priceMax}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        setFilters((s) => ({ ...s, priceMax: Math.max(next, s.priceMin) }));
                      }}
                      className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                      aria-label="Maximum price"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[14px] font-medium text-[#0EB7EE]">
                      ${filters.priceMin}
                    </span>
                    <span className="text-[14px] font-medium text-[#F65D2C]">
                      ${filters.priceMax}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Shop All Products</h1>
              <p className="text-secondary">Discover our complete range of vape products</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <button className="lg:hidden bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                  <i className="fas fa-filter mr-2"></i>Filters
                </button>
                <div className="bg-card rounded-full px-4 py-2 flex items-center border border-border">
                  <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-sm w-64" />
                  <i className="fas fa-magnifying-glass text-secondary ml-2"></i>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <select className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary">
                  <option>Sort by: Featured</option>
                  <option>Name A-Z</option>
                  <option>Name Z-A</option>
                  <option>Newest First</option>
                </select>

                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    <i className="fas fa-table-cells-large"></i>
                  </button>
                  <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
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

            <div id="pagination" className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium">1</button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">2</button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">3</button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">4</button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
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
    </main>
  );
};

export default Shop;

