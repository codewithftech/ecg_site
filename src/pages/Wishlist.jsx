import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Wishlist = ({ embedded = false }) => {
  const { isAuthenticated } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 101,
      name: 'SMOK Nord 4 Pod System Kit',
      description: 'Premium pod system with adjustable airflow',
      category: 'Hardware',
      addedLabel: 'Added 3 days ago',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-2f9fafa89eacdc906c22.png',
      price: '$245.00',
    },
    {
      id: 102,
      name: 'Elf Bar BC5000 Disposable',
      description: '5000 puffs rechargeable disposable vape',
      category: 'Disposables',
      addedLabel: 'Added 1 week ago',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c1b38ef8c9-19015643434b6acf2d96.png',
      price: '$189.00',
    },
    {
      id: 103,
      name: 'Naked 100 Brain Freeze E-Liquid',
      description: '60ml premium e-juice, 3mg nicotine',
      category: 'E-Juice',
      addedLabel: 'Added 2 days ago',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30024de213-9a823795992f8f824eb4.png',
      price: '$79.99',
    },
    {
      id: 104,
      name: 'Uwell Crown 5 Sub-Ohm Tank',
      description: '5ml capacity with mesh coil technology',
      category: 'Hardware',
      addedLabel: 'Added 5 days ago',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-8f2fd85b6806236dadfb.png',
      price: '$129.00',
    },
    {
      id: 105,
      name: 'Vaporesso GTX Coils 5-Pack',
      description: '0.2ohm mesh coils for intense flavor',
      category: 'Accessories',
      addedLabel: 'Added 1 day ago',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-b3ab4660343af719ae76.png',
      price: '$45.00',
    },
  ]);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert('Wishlist link copied to clipboard!');
    } catch {
      alert(url);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main id="wishlist-main" className={embedded ? 'px-6 py-6' : 'container mx-auto px-6 py-12'}>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Wishlist</h1>
            <p className="text-secondary">Save your favorite products for later</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-secondary">{wishlistItems.length} items saved</span>
            <button
              type="button"
              onClick={handleShare}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <i className="fas fa-share mr-2"></i>Share Wishlist
            </button>
          </div>
        </div>
      </div>

      {wishlistItems.length > 0 ? (
        <>
          <div id="wishlist-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="wishlist-card bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-destructive hover:text-white transition-all"
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label="Remove from wishlist"
                  >
                    <i className="fas fa-xmark text-sm"></i>
                  </button>

                  {!isAuthenticated && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        to="/login"
                        className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                      >
                        <i className="fas fa-lock mr-2"></i>Login to View Pricing
                      </Link>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item.name}</h3>
                  <p className="text-secondary text-sm mb-3">{item.description}</p>

                  {isAuthenticated ? (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-secondary">Wholesale Price</span>
                      <span className="text-[#0EB7EE] font-bold">{item.price}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-secondary">Wholesale Price</span>
                      <Link to="/login" className="text-sm text-primary hover:underline">
                        Login to view
                      </Link>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-secondary mb-4">
                    <span>
                      <i className="fas fa-tag mr-1"></i>
                      {item.category}
                    </span>
                    <span>
                      <i className="fas fa-calendar mr-1"></i>
                      {item.addedLabel}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="flex-1 bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
                      onClick={() => {
                        if (!isAuthenticated) {
                          window.location.href = '/login';
                          return;
                        }
                        window.dispatchEvent(new CustomEvent('cart-open'));
                      }}
                    >
                      <i className="fas fa-cart-shopping mr-1"></i>Move to Cart
                    </button>
                    <Link
                      to={`/product/${item.id}`}
                      className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Quick view"
                    >
                      <i className="fas fa-eye text-secondary"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isAuthenticated && (
            <div
              id="login-reminder"
              className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <i className="fas fa-lock text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Login to View Pricing</h3>
              <p className="text-secondary mb-6">
                Access wholesale pricing and add items to your cart by logging into your business account
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/login"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Login to Account
                </Link>
                <Link
                  to="/register"
                  className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
                >
                  Apply for Business Account
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div id="empty-wishlist" className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <i className="far fa-heart text-4xl text-secondary"></i>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Wishlist is Empty</h2>
          <p className="text-secondary mb-8">Start saving your favorite products to access them quickly later</p>
          <Link
            to="/shop"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Browse Products
          </Link>
        </div>
      )}
    </main>
  );
};

export default Wishlist;

