import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'item1',
      name: 'SMOK Nord 5 Kit',
      description: '80W Pod Mod with RPM3 Coils',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
      quantity: 2,
    },
    {
      id: 'item2',
      name: 'VOOPOO Drag X Kit',
      description: '80W Pod Mod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
      quantity: 1,
    },
    {
      id: 'item3',
      name: 'Premium E-liquid 50ml',
      description: 'Strawberry Cream Flavor',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-598aba635dbe543cf56c.png',
      quantity: 5,
    },
  ]);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const updateQuantity = (itemId, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id !== itemId) return item;
        const nextQty = item.quantity + change;
        return { ...item, quantity: nextQty >= 1 ? nextQty : 1 };
      })
    );
  };

  const removeItem = (itemId) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    const handleCartToggle = () => setIsCartOpen((prev) => !prev);
    const handleCartOpen = () => setIsCartOpen(true);
    const handleCartClose = () => setIsCartOpen(false);

    window.addEventListener('cart-toggle', handleCartToggle);
    window.addEventListener('cart-open', handleCartOpen);
    window.addEventListener('cart-close', handleCartClose);

    return () => {
      window.removeEventListener('cart-toggle', handleCartToggle);
      window.removeEventListener('cart-open', handleCartOpen);
      window.removeEventListener('cart-close', handleCartClose);
    };
  }, []);

  useEffect(() => {
    if (isCartOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        id="cart-overlay"
        className={`cart-overlay fixed inset-0 bg-black/50 z-40 ${isCartOpen ? 'active' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <aside
        id="cart-sidebar"
        className={`cart-sidebar fixed right-0 top-0 h-full w-96 bg-card shadow-lg z-50 overflow-y-auto ${isCartOpen ? 'active' : ''}`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Shopping Cart <span className="text-secondary font-medium">({totalItems})</span>
            </h2>
            <button
              type="button"
              className="p-2 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              <i className="fas fa-xmark text-lg"></i>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <div className="w-16 h-16 overflow-hidden rounded-lg">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-secondary">{item.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        type="button"
                        className="px-2 py-1 hover:bg-muted rounded-l-lg transition-colors"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="px-3 py-1 text-sm border-l border-r border-border">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-2 py-1 hover:bg-muted rounded-r-lg transition-colors"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <i className="fas fa-trash text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Subtotal ({totalItems} items)</span>
                <div className="flex items-center">
                  <i className="fas fa-lock text-secondary text-xs mr-2"></i>
                  <span className="text-secondary">Login Required</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Shipping</span>
                <span className="text-secondary">Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <div className="flex items-center">
                  <i className="fas fa-lock text-secondary text-sm mr-2"></i>
                  <span className="text-secondary">Login Required</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/cart"
              onClick={() => setIsCartOpen(false)}
              className="w-full border border-border py-3 rounded-xl font-semibold hover:bg-muted transition-colors flex items-center justify-center"
            >
              View Cart
            </Link>
            <Link
              to="/login"
              onClick={() => setIsCartOpen(false)}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <i className="fas fa-right-to-bracket mr-2"></i>Login to Continue
            </Link>
            <button
              type="button"
              className="w-full border border-border py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;


