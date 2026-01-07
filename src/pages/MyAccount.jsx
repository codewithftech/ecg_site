import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiveChatEmbed } from './LiveChat';
import { useAuth } from '../context/AuthContext';

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // dashboard | orders | wishlist | addresses | payment | profile | tax-documents | support
  const [sidebarOpen, setSidebarOpen] = useState({
    home: true,
    dashboard: true,
    orders: true,
    account: true,
  });

  const { logout } = useAuth();
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 'wl-1',
      name: 'JUUL Pods Variety Pack',
      units: '50 units per case',
      price: '$245.00',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b1702812ff-ef82d93cadcac69ea0a5.png',
    },
    {
      id: 'wl-2',
      name: 'JUUL Pods Variety Pack',
      units: '50 units per case',
      price: '$245.00',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b1702812ff-ef82d93cadcac69ea0a5.png',
    },
  ]);
  const [wishlistRemoving, setWishlistRemoving] = useState({}); // { [id]: true }

  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const addCardFormRef = useRef(null);

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const setSection = (section) => {
    setActiveSection(section);
  };

  const onLogout = () => {
    logout();
    navigate('/login');
  };

  const removeFromWishlist = (id) => {
    if (!window.confirm('Remove this item from your wishlist?')) return;
    setWishlistRemoving((prev) => ({ ...prev, [id]: true }));
    window.setTimeout(() => {
      setWishlistItems((prev) => prev.filter((x) => x.id !== id));
      setWishlistRemoving((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }, 300);
  };

  const openAddCardForm = () => {
    setShowAddCardForm(true);
    window.setTimeout(() => {
      addCardFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const statsOverviewCards = useMemo(
    () => [
      {
        id: 'total-orders',
        topRight: 'This Month',
        value: '24',
        bottomLabel: 'Total Orders',
        iconWrapClass: 'bg-primary/10',
        iconClass: 'fas fa-box',
        iconColorClass: 'text-primary',
      },
      {
        id: 'total-spent',
        topRight: 'Total Spent',
        value: '$12,450',
        bottomLabel: 'Lifetime Value',
        iconWrapClass: 'bg-accent/10',
        iconClass: 'fas fa-dollar-sign',
        iconColorClass: 'text-accent',
      },
      {
        id: 'wishlist-items',
        topRight: 'Saved',
        value: '18',
        bottomLabel: 'Wishlist Items',
        iconWrapClass: 'bg-green-100',
        iconClass: 'fas fa-heart',
        iconColorClass: 'text-green-600',
      },
    ],
    []
  );

  const recentOrders = useMemo(
    () => [
      {
        id: 'o-1',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3ef34c93cd-d1defc0a0892c02a09f7.png',
        title: 'Order #ORD-2024-1245',
        sub: '5 items • Placed on Jan 15, 2024',
        status: { label: 'Delivered', cls: 'bg-green-100 text-green-700', icon: 'fas fa-check' },
        total: '$1,245.00',
      },
      {
        id: 'o-2',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b1702812ff-ef82d93cadcac69ea0a5.png',
        title: 'Order #ORD-2024-1244',
        sub: '8 items • Placed on Jan 12, 2024',
        status: { label: 'In Transit', cls: 'bg-blue-100 text-blue-700', icon: 'fas fa-truck' },
        total: '$2,890.00',
      },
      {
        id: 'o-3',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/88cfa3d58b-cd160a896a094cf094ee.png',
        title: 'Order #ORD-2024-1243',
        sub: '12 items • Placed on Jan 8, 2024',
        status: { label: 'Processing', cls: 'bg-amber-100 text-amber-700', icon: 'fas fa-clock' },
        total: '$3,650.00',
      },
    ],
    []
  );

  const StatsOverview = ({ idPrefix }) => {
    return (
      <div
        id={`${idPrefix}stats-overview`}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
      >
        {statsOverviewCards.map((c) => (
          <div key={c.id} className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${c.iconWrapClass} rounded-full flex items-center justify-center`}>
                <i className={`${c.iconClass} ${c.iconColorClass} text-lg sm:text-xl`}></i>
              </div>
              <span className="text-xs sm:text-sm text-secondary">{c.topRight}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{c.value}</h3>
            <p className="text-secondary text-xs sm:text-sm">{c.bottomLabel}</p>
          </div>
        ))}
      </div>
    );
  };

  const RecentOrdersCard = ({ idPrefix, className = '' }) => {
    return (
      <div id={`${idPrefix}recent-orders`} className={`bg-card rounded-2xl shadow-sm p-4 sm:p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Recent Orders</h2>
          <a
            href="#"
            className="text-primary hover:underline flex items-center gap-2 text-sm sm:text-base"
            onClick={(e) => e.preventDefault()}
          >
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="space-y-4">
          {recentOrders.map((o) => (
            <div
              key={o.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted rounded-2xl hover:shadow-md transition-all gap-3"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-card rounded-xl overflow-hidden">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{o.title}</h4>
                  <p className="text-sm text-secondary">{o.sub}</p>
                </div>
              </div>
              <div className="text-right w-full sm:w-auto">
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-2 ${o.status.cls}`}>
                  <i className={`${o.status.icon} mr-1`}></i>
                  {o.status.label}
                </span>
                <p className="text-foreground font-semibold">{o.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="account-hero" className="bg-gradient-to-r from-primary to-accent py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">My Account</h1>
              <p className="text-white/90 text-sm sm:text-base">Manage your wholesale business profile and orders</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-left sm:text-right">
                <p className="text-white/80 text-sm">Welcome back,</p>
                <p className="text-white font-semibold text-base sm:text-lg">John's Vape Shop</p>
              </div>
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                alt="User Avatar"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="account-content" className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            <aside id="account-sidebar" className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                      alt="User Avatar"
                      className="w-20 h-20 rounded-full border-4 border-primary/20"
                    />
                    <div className="mt-4">
                      <h3 className="font-semibold text-foreground text-base leading-tight">John's Vape Shop</h3>
                      <p className="text-sm text-secondary mt-1">Verified B2B Account</p>
                    </div>

                    <div className="mt-4 w-full bg-muted rounded-full px-4 py-2 text-sm text-foreground flex items-center justify-center gap-2">
                      <i className="fas fa-crown text-accent"></i>
                      <span>Premium Member</span>
                    </div>
                  </div>
                </div>

                <nav className="p-5">
                  {/* Dashboard pill */}
                  <button
                    type="button"
                    onClick={() => setSection('dashboard')}
                    className={`w-full flex items-center gap-3 px-5 py-3 rounded-full transition-all ${
                      activeSection === 'dashboard'
                        ? 'bg-[#0EB7EE] text-white shadow-[0px_10px_24px_rgba(14,183,238,0.25)]'
                        : 'bg-white text-foreground border border-[#EEEEEE] hover:bg-muted'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activeSection === 'dashboard' ? 'bg-white/20' : 'bg-[#0EB7EE]/10'
                      }`}
                    >
                      <i className={`fas fa-gauge-high ${activeSection === 'dashboard' ? 'text-white' : 'text-[#0EB7EE]'}`}></i>
                    </span>
                    <span className="font-semibold">Dashboard</span>
                  </button>

                  {/* Accordion sections */}
                  <div className="mt-6 space-y-5">
                    {/* HOME */}
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left font-semibold text-foreground"
                        onClick={() => setSidebarOpen((p) => ({ ...p, home: !p.home }))}
                      >
                        <span className="text-lg">Home</span>
                        <i className={`fas fa-chevron-${sidebarOpen.home ? 'down' : 'right'} text-secondary`}></i>
                      </button>
                      {sidebarOpen.home && (
                        <div className="mt-3 pl-4 space-y-3 text-sm text-secondary">
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('dashboard')}>
                            Overview
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('orders')}>
                            Updates
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('tax-documents')}>
                            Reports
                          </button>
                        </div>
                      )}
                    </div>

                    {/* DASHBOARD */}
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left font-semibold text-foreground"
                        onClick={() => setSidebarOpen((p) => ({ ...p, dashboard: !p.dashboard }))}
                      >
                        <span className="text-lg">Dashboard</span>
                        <i className={`fas fa-chevron-${sidebarOpen.dashboard ? 'down' : 'right'} text-secondary`}></i>
                      </button>
                      {sidebarOpen.dashboard && (
                        <div className="mt-3 pl-4 space-y-3 text-sm text-secondary">
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('dashboard')}>
                            Overview
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('dashboard')}>
                            Weekly
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('dashboard')}>
                            Monthly
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('dashboard')}>
                            Annually
                          </button>
                        </div>
                      )}
                    </div>

                    {/* ORDERS */}
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left font-semibold text-foreground"
                        onClick={() => setSidebarOpen((p) => ({ ...p, orders: !p.orders }))}
                      >
                        <span className="text-lg">Orders</span>
                        <i className={`fas fa-chevron-${sidebarOpen.orders ? 'down' : 'right'} text-secondary`}></i>
                      </button>
                      {sidebarOpen.orders && (
                        <div className="mt-3 pl-4 space-y-3 text-sm text-secondary">
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('orders')}>
                            New
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('orders')}>
                            Processed
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('orders')}>
                            Shipped
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('orders')}>
                            Returned
                          </button>
                        </div>
                      )}
                    </div>

                    {/* ACCOUNT */}
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left font-semibold text-foreground"
                        onClick={() => setSidebarOpen((p) => ({ ...p, account: !p.account }))}
                      >
                        <span className="text-lg">Account</span>
                        <i className={`fas fa-chevron-${sidebarOpen.account ? 'down' : 'right'} text-secondary`}></i>
                      </button>
                      {sidebarOpen.account && (
                        <div className="mt-3 pl-4 space-y-3 text-sm text-secondary">
                          {/* Keep your existing tabs reachable */}
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('wishlist')}>
                            Wishlist
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('profile')}>
                            Profile
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('addresses')}>
                            Addresses
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('payment')}>
                            Settings
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={() => setSection('support')}>
                            Support
                          </button>
                          <button type="button" className="block hover:text-foreground" onClick={onLogout}>
                            Sign Out
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border my-6"></div>

                  <button
                    type="button"
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-2 py-2 text-[#0EB7EE] font-medium hover:opacity-80 transition-opacity"
                  >
                    <i className="fas fa-arrow-right-from-bracket"></i>
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </aside>

            <main id="account-main" className="lg:col-span-3">
              {/* Dashboard Content */}
              <div id="dashboard-content" className={activeSection === 'dashboard' ? '' : 'hidden'}>
                <StatsOverview idPrefix="dashboard-" />
                <RecentOrdersCard idPrefix="dashboard-" className="mb-6 sm:mb-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div id="account-info" className="bg-card rounded-2xl shadow-sm p-4 sm:p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6">Account Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-secondary mb-1 block">Business Name</label>
                        <input
                          type="text"
                          defaultValue="John's Vape Shop"
                          className="w-full px-4 py-3 rounded-full border border-border bg-input focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-secondary mb-1 block">Email Address</label>
                        <input
                          type="email"
                          defaultValue="john@vapeshop.com"
                          className="w-full px-4 py-3 rounded-full border border-border bg-input focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-secondary mb-1 block">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-4 py-3 rounded-full border border-border bg-input focus:outline-none focus:border-primary"
                        />
                      </div>
                      <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                        Update Information
                      </button>
                    </div>
                  </div>

                  <div id="shipping-address" className="bg-card rounded-2xl shadow-sm p-4 sm:p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6">Default Shipping Address</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-2xl">
                        <p className="font-semibold text-foreground mb-2">John's Vape Shop</p>
                        <p className="text-secondary text-sm">1234 Commerce Street</p>
                        <p className="text-secondary text-sm">Suite 100</p>
                        <p className="text-secondary text-sm">Los Angeles, CA 90001</p>
                        <p className="text-secondary text-sm">United States</p>
                      </div>
                      <button className="w-full border-2 border-primary text-primary py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all">
                        Edit Address
                      </button>
                      <button className="w-full bg-muted text-muted-foreground py-3 rounded-full font-medium hover:bg-secondary hover:text-secondary-foreground transition-all">
                        Add New Address
                      </button>
                    </div>
                  </div>
                </div>

                <div id="saved-payment" className="bg-card rounded-2xl shadow-sm p-4 sm:p-6 mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Payment Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative">
                        <i className="fab fa-cc-visa text-4xl mb-4"></i>
                        <p className="text-sm mb-2 opacity-90">**** **** **** 4532</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Expires 12/25</span>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Default</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                      <i className="fas fa-plus text-3xl text-secondary mb-2"></i>
                      <p className="text-secondary font-medium">Add New Card</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders Content */}
              <div id="orders-content" className={activeSection === 'orders' ? '' : 'hidden'}>
                <StatsOverview idPrefix="orders-" />
                <RecentOrdersCard idPrefix="orders-" className="mb-6 sm:mb-8" />

                {/* Order History */}
                <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Order History</h2>
                    <button
                      type="button"
                      className="px-6 py-2 rounded-full border border-border bg-white text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      All Orders
                    </button>
                  </div>

                  <div className="border border-border rounded-2xl p-5 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 mb-6">
                      <div>
                        <div className="font-bold text-foreground text-lg sm:text-xl">Order #ORD-2024-1245</div>
                        <div className="text-secondary">Placed on January 15, 2024</div>
                      </div>

                      <div className="sm:text-right w-full sm:w-auto">
                        <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700">
                          <i className="fas fa-check"></i>
                          Delivered
                        </div>
                        <div className="text-foreground font-bold text-xl sm:text-2xl mt-3">$1,245.00</div>
                      </div>
                    </div>
    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-10">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted overflow-hidden flex-shrink-0">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b1702812ff-ef82d93cadcac69ea0a5.png"
                              alt="JUUL Pods Variety Pack"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">JUUL Pods Variety Pack</div>
                            <div className="text-secondary text-sm">Qty: 50 units</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muted overflow-hidden flex-shrink-0">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b1702812ff-ef82d93cadcac69ea0a5.png"
                              alt="Vape Starter Kits"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">Vape Starter Kits</div>
                            <div className="text-secondary text-sm">Qty: 25 units</div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="self-start lg:self-center px-7 py-3 rounded-full border-2 border-[#0EB7EE] text-[#0EB7EE] font-medium bg-white shadow-[0px_10px_24px_rgba(14,183,238,0.25)] hover:bg-[#0EB7EE] hover:text-white transition-colors"
                      >
                        Reorder Items
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wishlist Content */}
              <div id="wishlist-content" className={activeSection === 'wishlist' ? '' : 'hidden'}>
                <div
                  className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
                  style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}
                >
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: 1.2, color: '#0F172A' }}
                  >
                    My Wishlist
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="border border-[#EEEEEE] rounded-2xl p-5 sm:p-6"
                        style={wishlistRemoving[item.id] ? { transition: 'opacity 0.3s', opacity: 0 } : undefined}
                      >
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F3F4F6] rounded-2xl overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3
                              className="font-semibold text-foreground text-base mb-1"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.5, color: '#0F172A' }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-secondary mb-2"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.5, color: '#64748B' }}
                            >
                              {item.units}
                            </p>
                            <p
                              className="text-lg font-bold text-[#0EB7EE]"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, lineHeight: 1.2, color: '#0EB7EE' }}
                            >
                              {item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="sm:self-start p-3 rounded-full hover:bg-muted transition-colors"
                            title="Remove from wishlist"
                            aria-label="Remove from wishlist"
                          >
                            <i className="fas fa-trash text-[#0EB7EE]"></i>
                          </button>
                        </div>

                        <button
                          type="button"
                          className="mt-5 w-full bg-[#0EB7EE] text-white rounded-full h-12 font-medium hover:opacity-90 transition-opacity"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Addresses Content */}
              <div id="addresses-content" className={activeSection === 'addresses' ? '' : 'hidden'}>
                <div className="bg-white rounded-2xl shadow-sm p-6" style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}>
                  <h2
                    className="text-2xl font-bold text-foreground mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 700, lineHeight: 1.33, color: '#0F172A' }}
                  >
                    Saved Addresses
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[1, 2].map((idx) => (
                      <div key={idx} className="border-2 border-[#0EB7EE] rounded-2xl p-6" style={{ borderRadius: 16 }}>
                        <div className="flex justify-between items-center mb-4">
                          <span
                            className="bg-[#0EB7EE] text-white px-3 py-1 rounded-full text-sm"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, padding: '4px 12px' }}
                          >
                            Default
                          </span>
                          <button
                            type="button"
                            className="text-[#0EB7EE] hover:opacity-80 transition-opacity"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#0EB7EE' }}
                          >
                            Edit
                          </button>
                        </div>
                        <h3
                          className="font-semibold text-foreground mb-3"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.5, color: '#0F172A' }}
                        >
                          Business Address
                        </h3>
                        <div
                          className="text-secondary space-y-1"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#64748B' }}
                        >
                          <p>123 Main Street</p>
                          <p>Suite 100</p>
                          <p>New York, NY 10001</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-white rounded-2xl shadow-sm p-6 border border-[#EEEEEE]"
                    style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: 16 }}
                  >
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Company Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Your Business Name"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium text-foreground mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                        >
                          Address Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Address 1"
                          className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#000000' }}
                        />
                        <p
                          className="text-sm text-secondary"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.43, color: '#64748B' }}
                        >
                          You can add more addresses later in your dashboard
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Country *
                          </label>
                          <select
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.44, color: '#000000' }}
                          >
                            <option>Select Country</option>
                            <option>United States</option>
                            <option>Canada</option>
                          </select>
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            State/Province *
                          </label>
                          <select
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.44, color: '#000000' }}
                          >
                            <option>Select State</option>
                            <option>New York</option>
                            <option>California</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            City *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter city"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            ZIP/Postal Code *
                          </label>
                          <input
                            type="text"
                            placeholder="12345"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium text-foreground mb-2"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                        >
                          Address Line 1 *
                        </label>
                        <input
                          type="text"
                          placeholder="Street address"
                          className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            placeholder="Apartment, suite, etc. (optional)"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Address Line 3
                          </label>
                          <input
                            type="text"
                            placeholder="Additional address info (optional)"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#EEEEEE]">
                        <button
                          type="button"
                          className="flex-1 px-6 py-3 rounded-full border border-[#EEEEEE] text-secondary hover:bg-muted transition-all"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 16,
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: '#64748B',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-6 py-3 rounded-full bg-[#0EB7EE] text-white hover:opacity-90 transition-all"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 16,
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: '#FFFFFF',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Settings Content */}
              <div id="profile-content" className={activeSection === 'profile' ? '' : 'hidden'}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6" style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: 16 }}>
                      <h3
                        className="text-xl font-bold text-foreground mb-6"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: '#0F172A' }}
                      >
                        Business Information
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Business Name', value: "John's Vape Shop" },
                          { label: 'Business License Number', value: 'BL-2024-VS-001' },
                          { label: 'Email Address', value: 'john@vapeshop.com' },
                          { label: 'Phone Number', value: '+1 (555) 123-4567' },
                        ].map((f) => (
                          <div key={f.label}>
                            <label
                              className="block text-sm text-secondary mb-2"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.43, color: '#64748B' }}
                            >
                              {f.label}
                            </label>
                            <input
                              type="text"
                              defaultValue={f.value}
                              className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#000000' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6" style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: 16 }}>
                      <h3
                        className="text-xl font-bold text-foreground mb-6"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: '#0F172A' }}
                      >
                        Account Settings
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Current Password', placeholder: 'Enter current password' },
                          { label: 'New Password', placeholder: 'Enter new password' },
                          { label: 'Confirm New Password', placeholder: 'Confirm new password' },
                        ].map((f) => (
                          <div key={f.label}>
                            <label
                              className="block text-sm text-secondary mb-2"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.43, color: '#64748B' }}
                            >
                              {f.label}
                            </label>
                            <input
                              type="password"
                              placeholder={f.placeholder}
                              className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                            />
                          </div>
                        ))}

                        <div className="bg-[#FAFAFA] rounded-2xl p-4 flex items-center justify-between" style={{ borderRadius: 16 }}>
                          <div>
                            <h4
                              className="font-medium text-foreground mb-1"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#0F172A' }}
                            >
                              Two-Factor Authentication
                            </h4>
                            <p
                              className="text-sm text-secondary"
                              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#64748B' }}
                            >
                              Add extra security to your account
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={twoFactorEnabled}
                              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0EB7EE] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EB7EE]"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="px-8 py-3 rounded-full bg-[#0EB7EE] text-white hover:opacity-90 transition-all"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#FFFFFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Methods Content */}
              <div id="payment-content" className={activeSection === 'payment' ? '' : 'hidden'}>
                <div className="bg-white rounded-2xl shadow-sm p-6" style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}>
                  <h2
                    className="text-2xl font-bold text-foreground mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 700, lineHeight: 1.33, color: '#0F172A' }}
                  >
                    Payment Methods
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-[#0EB7EE] to-[#0EB7EE]/80 rounded-2xl text-white relative overflow-hidden" style={{ borderRadius: 16 }}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <i className="fab fa-cc-visa text-4xl"></i>
                          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Default</span>
                        </div>
                        <p className="text-lg mb-4 opacity-90" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 400, letterSpacing: 2 }}>
                          **** **** **** 4532
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs opacity-75 mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12 }}>
                              Cardholder Name
                            </p>
                            <p className="text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14 }}>
                              John's Vape Shop
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs opacity-75 mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12 }}>
                              Expires
                            </p>
                            <p className="text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14 }}>
                              12/25
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20 flex gap-2">
                          <button
                            type="button"
                            className="flex-1 px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-all"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400 }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="flex-1 px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-all"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400 }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={openAddCardForm}
                      className="p-6 border-2 border-dashed border-[#EEEEEE] rounded-2xl flex flex-col items-center justify-center hover:border-[#0EB7EE] hover:bg-[#0EB7EE]/5 transition-all cursor-pointer"
                      style={{ borderRadius: 16 }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') openAddCardForm();
                      }}
                    >
                      <div className="w-16 h-16 bg-[#0EB7EE]/10 rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-plus text-3xl text-[#0EB7EE]"></i>
                      </div>
                      <p
                        className="text-secondary font-medium text-center"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#64748B' }}
                      >
                        Add New Payment Method
                      </p>
                      <p
                        className="text-xs text-secondary mt-2 text-center"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 400, color: '#64748B' }}
                      >
                        Click to add a new credit or debit card
                      </p>
                    </div>
                  </div>

                  <div
                    id="add-card-form"
                    ref={addCardFormRef}
                    className={`${showAddCardForm ? '' : 'hidden'} bg-[#FAFAFA] rounded-2xl p-6 mt-6`}
                    style={{ borderRadius: 16 }}
                  >
                    <h3
                      className="text-xl font-bold text-foreground mb-6"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: '#0F172A' }}
                    >
                      Add New Card
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Card Number', placeholder: '1234 5678 9012 3456', type: 'text' },
                        { label: 'Cardholder Name', placeholder: "John's Vape Shop", type: 'text' },
                      ].map((f) => (
                        <div key={f.label}>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                      ))}

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-foreground mb-2"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.43, color: '#0F172A' }}
                          >
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white focus:outline-none focus:border-[#0EB7EE] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: '#9CA3AF' }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="set-default" className="w-4 h-4 text-[#0EB7EE] border-[#EEEEEE] rounded focus:ring-[#0EB7EE]" />
                        <label
                          htmlFor="set-default"
                          className="text-sm text-secondary"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, lineHeight: 1.43, color: '#64748B' }}
                        >
                          Set as default payment method
                        </label>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowAddCardForm(false)}
                          className="flex-1 px-6 py-3 rounded-full border border-[#EEEEEE] text-secondary hover:bg-muted transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#64748B' }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-6 py-3 rounded-full bg-[#0EB7EE] text-white hover:opacity-90 transition-all"
                          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#FFFFFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                        >
                          Add Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Documents Content */}
              <div id="tax-documents-content" className={activeSection === 'tax-documents' ? '' : 'hidden'}>
                <div
                  className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
                  style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}
                >
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-foreground"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: 1.2, color: '#0F172A' }}
                  >
                    Legal Documents Verification
                  </h2>

                  <div
                    className="mt-6 rounded-2xl border p-5 sm:p-6 flex gap-4"
                    style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F59E0B1A' }}>
                      <i className="fas fa-clock" style={{ color: '#F97316' }}></i>
                    </div>
                    <div>
                      <div className="font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: '#B45309' }}>
                        Verification Status: Under Review
                      </div>
                      <div className="text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: '#EA580C' }}>
                        Your documents are being reviewed by our admin team. This process typically takes 2-3 business days.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Uploaded: Business License */}
                    <div className="border border-[#EEEEEE] rounded-2xl p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Business License
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
                          <i className="fas fa-check"></i> Uploaded
                        </span>
                      </div>

                      <div className="mt-5 bg-[#F8FAFC] rounded-2xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                          <div className="text-center leading-none">
                            <div className="text-[#0EB7EE] text-lg font-bold">PDF</div>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-foreground truncate" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            business-license.pdf
                          </div>
                          <div className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Uploaded on Jan 10, 2024
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-6 w-full h-12 rounded-full border-2 border-[#0EB7EE] text-[#0EB7EE] font-medium hover:bg-[#0EB7EE] hover:text-white transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Replace Document
                      </button>
                    </div>

                    {/* Uploaded: Tobacco Retailer License */}
                    <div className="border border-[#EEEEEE] rounded-2xl p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Tobacco Retailer License
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
                          <i className="fas fa-check"></i> Uploaded
                        </span>
                      </div>

                      <div className="mt-5 bg-[#F8FAFC] rounded-2xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                          <div className="text-center leading-none">
                            <div className="text-[#0EB7EE] text-lg font-bold">PDF</div>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-foreground truncate" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            tobacco-license.pdf
                          </div>
                          <div className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Uploaded on Jan 10, 2024
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-6 w-full h-12 rounded-full border-2 border-[#0EB7EE] text-[#0EB7EE] font-medium hover:bg-[#0EB7EE] hover:text-white transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Replace Document
                      </button>
                    </div>

                    {/* Pending: Tax ID Certificate (left column on md+) */}
                    <div className="border-2 border-dashed border-[#E5E7EB] rounded-2xl p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Tax ID Certificate
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                          <i className="fas fa-clock"></i> Pending
                        </span>
                      </div>

                      <div className="mt-8 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-[#F1F5F9] flex items-center justify-center mb-4">
                          <i className="fas fa-cloud-arrow-up text-2xl text-secondary"></i>
                        </div>
                        <div className="text-secondary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Upload your Tax ID Certificate
                        </div>
                        <button
                          type="button"
                          className="mt-5 h-12 px-8 rounded-full bg-[#0EB7EE] text-white font-medium hover:opacity-90 transition-opacity"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Upload Document
                        </button>
                      </div>
                    </div>

                    <div className="hidden md:block" />
                  </div>

                  {/* Tax Documents (Download list) */}
                  <div className="mt-8">
                    <h3
                      className="text-2xl font-bold text-foreground"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: 1.2, color: '#0F172A' }}
                    >
                      Tax Documents
                    </h3>

                    <div className="mt-6 border border-[#EEEEEE] rounded-2xl p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="min-w-0">
                          <div
                            className="font-semibold text-foreground truncate"
                            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.5, color: '#0F172A' }}
                          >
                            Tax Invoice - January 2024
                          </div>
                          <div className="text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            Invoice #TAX-2024-001
                          </div>
                        </div>

                        <button
                          type="button"
                          className="inline-flex items-center gap-3 text-[#0EB7EE] font-medium hover:opacity-80 transition-opacity"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <i className="fas fa-download"></i>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Content */}
              <div id="support-content" className={activeSection === 'support' ? '' : 'hidden'}>
                <div className="space-y-6">
                  <StatsOverview idPrefix="support-" />

                  {/* Customer Support */}
                  <div
                    className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
                    style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}
                  >
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-foreground"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: 1.2, color: '#0F172A' }}
                    >
                      Customer Support
                    </h2>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-[#EEEEEE] rounded-2xl p-6 sm:p-8 text-center">
                        <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#0EB7EE] text-3xl">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="mt-4 font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Email Support
                        </div>
                        <div className="mt-2 text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                          support@strictlyecig.com
                        </div>
                        <button
                          type="button"
                          className="mt-6 h-11 px-8 rounded-full bg-[#0EB7EE] text-white font-medium hover:opacity-90 transition-opacity"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Send Email
                        </button>
                      </div>

                      <div className="border border-[#EEEEEE] rounded-2xl p-6 sm:p-8 text-center">
                        <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#0EB7EE] text-3xl">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="mt-4 font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Phone Support
                        </div>
                        <div className="mt-2 text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                          +1 (800) 555-ECIG
                        </div>
                        <a
                          href="tel:+18005553244"
                          className="inline-flex items-center justify-center mt-6 h-11 px-8 rounded-full bg-[#0EB7EE] text-white font-medium hover:opacity-90 transition-opacity"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Live Chat (reuse JSX from LiveChat page) */}
                  <div
                    className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
                    style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}
                  >
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-foreground"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: 1.2, color: '#0F172A' }}
                    >
                      Live Chat
                    </h2>

                    <div className="mt-6">
                      <LiveChatEmbed />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;

