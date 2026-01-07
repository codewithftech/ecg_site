import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const Cart = () => {
  const [filterFlags, setFilterFlags] = useState({
    allProducts: true,
    similarCategories: false,
    promotionsOnly: false,
    freeShipping: false,
  });
  const [discountCode, setDiscountCode] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [activeRecommended, setActiveRecommended] = useState(0);
  const recommendedSwiperRef = useRef(null);

  const [cartItems, setCartItems] = useState([
    {
      id: 'item1',
      name: 'SMOK Nord 5 Kit',
      description: '80W Pod Mod with RPM3 Coils',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
      quantity: 2,
      linePrice: 840,
      eachLabel: '$7.00 each',
      attributes: [
        { label: 'Color', value: 'Black' },
        { label: 'SKU', value: 'SMOK-N5-001' },
      ],
    },
    {
      id: 'item2',
      name: 'VOOPOO Drag X Kit',
      description: '80W Pod Mod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
      quantity: 1,
      linePrice: 840,
      eachLabel: '$7.00 each',
      attributes: [
        { label: 'Color', value: 'Blue' },
        { label: 'SKU', value: 'VOOPOO-DX-002' },
      ],
    },
    {
      id: 'item3',
      name: 'Premium E-liquid 50ml',
      description: 'Strawberry Cream Flavor',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-598aba635dbe543cf56c.png',
      quantity: 5,
      linePrice: 840,
      eachLabel: '$7.00 each',
      attributes: [
        { label: 'Nicotine', value: '3mg' },
        { label: 'SKU', value: 'ELIQ-SC-50' },
      ],
    },
  ]);

  const recommendedProducts = [
    {
      id: 1,
      name: 'SMOK RPM Coils',
      description: 'Compatible Replacement Coils',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
      category: 'Accessories',
      brand: 'SMOK',
    },
    {
      id: 2,
      name: 'Battery Charger',
      description: 'Universal USB-C Charger',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c0de1216ae-181b8af6607142bb4604.png',
      category: 'Accessories',
      brand: 'Universal',
    },
    {
      id: 3,
      name: 'Vape Carrying Case',
      description: 'Premium Protection Case',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
      category: 'Accessories',
      brand: 'StrictlyEcig',
    },
    {
      id: 4,
      name: 'Cleaning Kit',
      description: 'Complete Maintenance Set',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
      category: 'Accessories',
      brand: 'StrictlyEcig',
    },
  ];

  const updateQuantity = (itemId, change) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (itemId) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      setCartItems(items => items.filter(item => item.id !== itemId));
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.linePrice ?? 0), 0);
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  return (
    <main className="container mx-auto px-6 py-8">
      <nav id="breadcrumb" className="text-sm text-secondary mb-6 mt-6">
        <Link to="/" className="hover:text-primary">Home</Link> /{' '}
        <Link to="/shop" className="hover:text-primary">Shop</Link> /{' '}
        <span className="text-foreground font-medium">Shopping Cart</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
        <span className="text-secondary">{cartItems.length} items</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left */}
        <section className="lg:col-span-2">
          {/* Filters row */}
          <div className="bg-card border border-border rounded-2xl p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { key: 'allProducts', label: 'All Products' },
                { key: 'similarCategories', label: 'Similar Categories' },
                { key: 'promotionsOnly', label: 'Promotions Only' },
                { key: 'freeShipping', label: 'Free Shippings' },
              ].map((f) => (
                <label key={f.key} className="flex items-center gap-3 text-sm text-secondary">
                  <input
                    type="checkbox"
                    checked={!!filterFlags[f.key]}
                    onChange={(e) => setFilterFlags((s) => ({ ...s, [f.key]: e.target.checked }))}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 overflow-hidden rounded-xl bg-muted">
                    <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-foreground">{item.name}</div>
                    <div className="text-sm text-secondary">{item.description}</div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-xs text-secondary">
                      {item.attributes.map((attr) => (
                        <span key={`${item.id}-${attr.label}`}>
                          {attr.label}: {attr.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-border rounded-xl overflow-hidden bg-white">
                      <button
                        type="button"
                        className="px-4 py-2 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <div className="px-5 py-2 border-l border-r border-border min-w-[48px] text-center font-semibold">
                        {item.quantity}
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 hover:bg-muted transition-colors"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[110px]">
                      <div className="text-2xl font-bold text-foreground">${(item.linePrice ?? 0).toFixed(2)}</div>
                      <div className="text-xs text-secondary">{item.eachLabel}</div>
                    </div>

                    <button
                      type="button"
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <Link to="/shop" className="text-primary font-medium hover:underline flex items-center gap-2">
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
            <button type="button" className="text-destructive font-medium hover:underline flex items-center gap-2">
              <i className="fas fa-trash"></i> Clear Cart
            </button>
          </div>
        </section>

        {/* Right */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-secondary">
                <span>Subtotal ({totalItems} items)</span>
                <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span className="text-foreground font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Tax</span>
                <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-foreground mb-3">Discount Code</div>
              <div className="flex items-center gap-3">
                <input
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 px-4 py-3 rounded-full border border-border bg-background outline-none"
                />
                <button
                  type="button"
                  className="px-6 py-3 rounded-full bg-muted text-foreground font-semibold shadow hover:bg-muted/70 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              Proceed to Checkout
            </Link>

            <div className="mt-6 text-center">
              <p className="text-xs text-secondary mb-3">Secure Checkout</p>
              <div className="flex justify-center gap-4 text-secondary">
                <i className="fas fa-shield-halved"></i>
                <i className="fas fa-lock"></i>
                <i className="fas fa-credit-card"></i>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4">Order Notes</h3>
            <textarea
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="Special instructions or requests..."
              className="w-full min-h-[140px] rounded-2xl border border-border bg-background p-4 outline-none"
            />
          </div>
        </aside>
      </div>

      <section id="recommended-products" className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Products</h2>

        <div className="relative">
          <Swiper
            onSwiper={(s) => {
              recommendedSwiperRef.current = s;
              setActiveRecommended(s.realIndex ?? 0);
            }}
            onSlideChange={(s) => setActiveRecommended(s.realIndex ?? 0)}
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 20 },
              768: { slidesPerView: 2.6, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="py-2"
          >
            {recommendedProducts.map((product) => (
              <SwiperSlide key={`rec-${product.id}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous recommended products"
            onClick={() => recommendedSwiperRef.current?.slidePrev()}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            aria-label="Next recommended products"
            onClick={() => recommendedSwiperRef.current?.slideNext()}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {recommendedProducts.map((p, idx) => (
            <button
              key={`rec-dot-${p.id}-${idx}`}
              type="button"
              aria-label={`Go to recommended product ${idx + 1}`}
              onClick={() => recommendedSwiperRef.current?.slideToLoop(idx)}
              className={`w-3 h-3 rounded-full ${idx === activeRecommended ? 'bg-primary' : 'bg-border'}`}
            />
          ))}
        </div>
      </section>
      </main>
  );
};

export default Cart;
