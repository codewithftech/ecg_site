import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

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

  return (
    <header id="header" className="bg-card sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              StrictlyEcig
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
            <div className="hidden md:flex bg-muted rounded-full px-4 py-2 items-center">
              <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-sm w-48" />
              <i className="fas fa-magnifying-glass text-secondary"></i>
            </div>
            
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
            
            <button className="lg:hidden text-foreground text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

