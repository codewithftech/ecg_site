import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState({
    hardware: false,
    ejuice: false,
    disposables: false,
    pages: false,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchWrapRef = useRef(null);

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const searchIndex = useMemo(
    () => [
      // Pages
      { type: 'page', label: 'Home', to: '/' },
      { type: 'page', label: 'Shop', to: '/shop' },
      { type: 'page', label: 'Category', to: '/category' },
      { type: 'page', label: 'Brand', to: '/brand' },
      { type: 'page', label: 'Cart', to: '/cart' },
      { type: 'page', label: 'Wishlist', to: '/whislist' },
      { type: 'page', label: 'My Account', to: '/my_account' },
      { type: 'page', label: 'Checkout', to: '/checkout' },
      { type: 'page', label: 'Compare Products', to: '/compare_prodcut' },
      { type: 'page', label: 'Group Items', to: '/group_items' },
      { type: 'page', label: 'Live Chat', to: '/live_chat' },
      { type: 'page', label: 'Lab Report', to: '/labreport' },
      { type: 'page', label: 'About', to: '/about' },
      { type: 'page', label: 'Blog', to: '/blog' },
      { type: 'page', label: 'Contact', to: '/contact' },
      { type: 'page', label: 'FAQ', to: '/faq' },
      { type: 'page', label: 'Privacy', to: '/privacy' },
      { type: 'page', label: 'Login', to: '/login' },
      { type: 'page', label: 'Register', to: '/register' },
      { type: 'page', label: 'Reset Password', to: '/reset-password' },
      { type: 'page', label: 'Create New Password', to: '/reset-password/new' },

      // Products (demo suggestions)
      { type: 'product', label: 'SMOK Nord 4 Pod System Kit', to: '/product/101' },
      { type: 'product', label: 'Elf Bar BC5000 Disposable', to: '/product/102' },
      { type: 'product', label: 'Naked 100 Brain Freeze E-Liquid', to: '/product/103' },
      { type: 'product', label: 'Uwell Crown 5 Sub-Ohm Tank', to: '/product/104' },
      { type: 'product', label: 'Vaporesso GTX Coils 5-Pack', to: '/product/105' },
    ],
    []
  );

  const filteredSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex.filter((x) => x.label.toLowerCase().includes(q)).slice(0, 8);
  }, [searchIndex, searchQuery]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      const root = searchWrapRef.current;
      if (!root) return;
      if (root.contains(e.target)) return;
      setSearchOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleCartClick = (e) => {
    // Open cart sidebar on every page
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('cart-toggle'));
  };

  const SearchBox = ({ className = '', inputClassName = '' }) => {
    return (
      <div ref={searchWrapRef} className={`relative ${className}`}>
        <div className="flex bg-muted rounded-full px-4 py-2 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className={`bg-transparent outline-none text-sm ${inputClassName}`}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => setSearchOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const target = filteredSuggestions[0];
                if (target) {
                  navigate(target.to);
                } else if (searchQuery.trim()) {
                  navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                }
                setSearchOpen(false);
                setMobileOpen(false);
              }
            }}
          />
          <button
            type="button"
            className="ml-2"
            aria-label="Search"
            onClick={() => {
              if (searchQuery.trim()) navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
              setSearchOpen(false);
              setMobileOpen(false);
            }}
          >
            <i className="fas fa-magnifying-glass text-secondary"></i>
          </button>
        </div>

        {searchOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-card border border-border rounded-2xl shadow-lg overflow-hidden z-50">
            {filteredSuggestions.length > 0 ? (
              <div className="py-2">
                {filteredSuggestions.map((s) => (
                  <button
                    key={`${s.type}:${s.to}`}
                    type="button"
                    onClick={() => {
                      navigate(s.to);
                      setSearchOpen(false);
                      setMobileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center justify-between"
                  >
                    <div className="min-w-0">
                      <div className="text-sm text-foreground truncate">{s.label}</div>
                      <div className="text-xs text-secondary">{s.type === 'product' ? 'Product' : 'Page'}</div>
                    </div>
                    <i className="fas fa-arrow-right text-xs text-secondary flex-shrink-0"></i>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-3 text-sm text-secondary">No results</div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <header id="header" className="bg-card sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
            Ecig
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('hardware')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground font-medium hover:text-primary transition-colors">
                Hardware <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
              <div className={`mega-menu absolute left-0 top-full mt-0 w-[800px] bg-card rounded-xl shadow-lg p-8 border border-border ${activeMenu === 'hardware' ? 'active' : ''}`}>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8889ee715f-bf006080ecb8b9e3ad54.png" alt="modern vape device hardware" />
                    <h4 className="font-semibold mb-2">Mods & Kits</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Box Mods</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Pod Systems</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Starter Kits</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-d3ce64cde5efc2dac22f.png" alt="vape tanks and atomizers" />
                    <h4 className="font-semibold mb-2">Tanks & Atomizers</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Sub-Ohm Tanks</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">RDAs</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">RTAs</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-61696afccf40b1f78817.png" alt="vape coils and parts" />
                    <h4 className="font-semibold mb-2">Coils & Parts</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Replacement Coils</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Batteries</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Chargers</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('ejuice')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground font-medium hover:text-primary transition-colors">
                E-Juice <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
              <div className={`mega-menu absolute left-0 top-full mt-0 w-[800px] bg-card rounded-xl shadow-lg p-8 border border-border ${activeMenu === 'ejuice' ? 'active' : ''}`}>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/acfff343d2-4125f93c499bac181ecd.png" alt="vape juice bottles fruit flavors" />
                    <h4 className="font-semibold mb-2">By Flavor</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Fruit</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Dessert</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Menthol</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4ddb833651-48e1d3dace5bd23a8a83.png" alt="nicotine salt e-liquid bottles" />
                    <h4 className="font-semibold mb-2">By Nicotine</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">0mg</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">3mg</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">6mg</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/03fb66c9ba-6ca7e4d409249f62f725.png" alt="premium vape juice brands" />
                    <h4 className="font-semibold mb-2">Premium Brands</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Naked 100</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Juice Head</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Pachamama</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('disposables')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground font-medium hover:text-primary transition-colors">
                Disposables <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
              <div className={`mega-menu absolute left-0 top-full mt-0 w-[800px] bg-card rounded-xl shadow-lg p-8 border border-border ${activeMenu === 'disposables' ? 'active' : ''}`}>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5297142e99-b5b5329f3a408cf811de.png" alt="disposable vape devices colorful" />
                    <h4 className="font-semibold mb-2">By Puff Count</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">3000+ Puffs</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">5000+ Puffs</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">7000+ Puffs</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c6b69f0e3b-f77fd4f460bc0f888b72.png" alt="rechargeable disposable vapes" />
                    <h4 className="font-semibold mb-2">Rechargeable</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">USB-C Charging</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Long Lasting</Link>
                  </div>
                  <div>
                    <img className="w-full h-32 object-cover rounded-lg mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d86388cc01-f21025f2cfc8fd4f9b44.png" alt="top disposable vape brands" />
                    <h4 className="font-semibold mb-2">Top Brands</h4>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Elf Bar</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Geek Bar</Link>
                    <Link to="/category" className="block text-sm text-secondary hover:text-primary py-1">Puff Bar</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/category" className="text-foreground font-medium hover:text-primary transition-colors">Accessories</Link>
            <Link to="/brand" className="text-foreground font-medium hover:text-primary transition-colors">Brands</Link>

            {/* Pages dropdown (all routes) */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('pages')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground font-medium hover:text-primary transition-colors">
                Pages <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
              <div
                className={`mega-menu absolute left-0 top-full mt-0 w-[360px] bg-card rounded-xl shadow-lg p-4 border border-border ${
                  activeMenu === 'pages' ? 'active' : ''
                }`}
              >
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Home
                  </Link>
                  <Link to="/shop" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Shop
                  </Link>
                  <Link to="/category" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Category
                  </Link>
                  <Link to="/brand" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Brand
                  </Link>
                  <Link to="/product/1" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Product
                  </Link>
                  <Link to="/cart" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Cart
                  </Link>
                  <Link to="/whislist" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Wishlist
                  </Link>
                  <Link to="/my_account" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    My Account
                  </Link>
                  <Link to="/checkout" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Checkout
                  </Link>
                  <Link to="/compare_prodcut" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Compare Product
                  </Link>
                  <Link to="/group_items" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Group Items
                  </Link>
                  <Link to="/live_chat" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Live Chat
                  </Link>
                  <Link to="/labreport" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Lab Report
                  </Link>
                  <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    About
                  </Link>
                  <Link to="/blog" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Blog
                  </Link>
                  <Link to="/single_blog/1" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Single Blog
                  </Link>
                  <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Contact
                  </Link>
                  <Link to="/faq" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    FAQ
                  </Link>
                  <Link to="/privacy" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Privacy
                  </Link>
                  <Link to="/login" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Login
                  </Link>
                  <Link to="/register" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Register
                  </Link>
                  <Link to="/reset-password" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Reset Password
                  </Link>
                  <Link to="/reset-password/new" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    Create New Password
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <SearchBox className="hidden lg:block" inputClassName="w-48" />
            
            <Link to="/whislist" className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <i className="far fa-heart text-xl text-foreground"></i>
              <span className="absolute -top-1 -right-1 bg-accent text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
            
            <Link
              to="/cart"
              onClick={handleCartClick}
              className="relative p-2 hover:bg-muted rounded-full transition-colors"
            >
              <i className="fas fa-cart-shopping text-xl text-primary"></i>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </Link>

            {isAuthenticated ? (
              <button
                type="button"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                onClick={() => {
                  logout();
                  navigate('/login', { replace: true });
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                Login
              </Link>
            )}
            
            <button
              type="button"
              className="lg:hidden text-foreground text-2xl"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 w-[min(92vw,420px)] bg-card shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xl font-bold text-primary">Menu</div>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <i className="fas fa-xmark" />
              </button>
            </div>

            {/* Search in drawer */}
            <SearchBox className="mb-6" inputClassName="w-full" />

            <div className="space-y-2">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-muted">
                Home
              </Link>
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-muted">
                Shop
              </Link>
              <Link to="/brand" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-muted">
                Brands
              </Link>
              <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-muted">
                Categories
              </Link>

              {/* Collapsible groups */}
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted"
                onClick={() => setMobileSection((p) => ({ ...p, hardware: !p.hardware }))}
              >
                <span className="font-medium">Hardware</span>
                <i className={`fas fa-chevron-${mobileSection.hardware ? 'up' : 'down'} text-xs text-secondary`} />
              </button>
              {mobileSection.hardware && (
                <div className="ml-4 mb-2 space-y-2 text-sm text-secondary">
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Box Mods
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Pod Systems
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Starter Kits
                  </Link>
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted"
                onClick={() => setMobileSection((p) => ({ ...p, ejuice: !p.ejuice }))}
              >
                <span className="font-medium">E-Juice</span>
                <i className={`fas fa-chevron-${mobileSection.ejuice ? 'up' : 'down'} text-xs text-secondary`} />
              </button>
              {mobileSection.ejuice && (
                <div className="ml-4 mb-2 space-y-2 text-sm text-secondary">
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Fruit
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Dessert
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    Menthol
                  </Link>
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted"
                onClick={() => setMobileSection((p) => ({ ...p, disposables: !p.disposables }))}
              >
                <span className="font-medium">Disposables</span>
                <i className={`fas fa-chevron-${mobileSection.disposables ? 'up' : 'down'} text-xs text-secondary`} />
              </button>
              {mobileSection.disposables && (
                <div className="ml-4 mb-2 space-y-2 text-sm text-secondary">
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    3000+ Puffs
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    5000+ Puffs
                  </Link>
                  <Link to="/category" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    7000+ Puffs
                  </Link>
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted"
                onClick={() => setMobileSection((p) => ({ ...p, pages: !p.pages }))}
              >
                <span className="font-medium">Pages</span>
                <i className={`fas fa-chevron-${mobileSection.pages ? 'up' : 'down'} text-xs text-secondary`} />
              </button>
              {mobileSection.pages && (
                <div className="ml-4 mb-2 grid grid-cols-2 gap-2 text-sm text-secondary">
                  {[
                    { to: '/about', label: 'About' },
                    { to: '/blog', label: 'Blog' },
                    { to: '/single_blog/1', label: 'Single Blog' },
                    { to: '/contact', label: 'Contact' },
                    { to: '/faq', label: 'FAQ' },
                    { to: '/privacy', label: 'Privacy' },
                    { to: '/labreport', label: 'Lab Report' },
                    { to: '/compare_prodcut', label: 'Compare' },
                    { to: '/group_items', label: 'Group Items' },
                    { to: '/checkout', label: 'Checkout' },
                    { to: '/my_account', label: 'My Account' },
                    { to: '/register', label: 'Register' },
                  ].map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 rounded-lg hover:bg-muted"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-border pt-6 space-y-3">
              <button
                type="button"
                onClick={(e) => {
                  // open cart sidebar then close menu
                  handleCartClick(e);
                  setMobileOpen(false);
                }}
                className="w-full bg-muted px-4 py-3 rounded-xl flex items-center justify-between hover:bg-secondary hover:text-white transition-colors"
              >
                <span className="font-medium">
                  <i className="fas fa-cart-shopping mr-2" /> Cart
                </span>
                <span className="text-xs bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <Link
                to="/whislist"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-muted px-4 py-3 rounded-xl flex items-center justify-between hover:bg-secondary hover:text-white transition-colors"
              >
                <span className="font-medium">
                  <i className="far fa-heart mr-2" /> Wishlist
                </span>
                <span className="text-xs bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center">3</span>
              </Link>

              {isAuthenticated ? (
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                    navigate('/login', { replace: true });
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

