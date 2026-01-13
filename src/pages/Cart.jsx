import { useState } from 'react';
import CartHeader from '../components/cart/CartHeader';
import CartFiltersRow from '../components/cart/CartFiltersRow';
import CartItemsList from '../components/cart/CartItemsList';
import CartActionsRow from '../components/cart/CartActionsRow';
import OrderSummaryCard from '../components/cart/OrderSummaryCard';
import OrderNotesCard from '../components/cart/OrderNotesCard';
import RecommendedCarousel from '../components/cart/RecommendedCarousel';

const Cart = () => {
  const [filterFlags, setFilterFlags] = useState({
    allProducts: true,
    similarCategories: false,
    promotionsOnly: false,
    freeShipping: false,
  });
  const [discountCode, setDiscountCode] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

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
      <CartHeader itemCount={cartItems.length} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left */}
        <section className="lg:col-span-2">
          <CartFiltersRow filterFlags={filterFlags} setFilterFlags={setFilterFlags} />
          <CartItemsList
            items={cartItems}
            onDecreaseQty={(id) => updateQuantity(id, -1)}
            onIncreaseQty={(id) => updateQuantity(id, 1)}
            onRemove={removeItem}
          />
          <CartActionsRow onClear={() => window.alert('Clear cart (demo)')} />
        </section>

        {/* Right */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1">
          <OrderSummaryCard
            totalItems={totalItems}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            discountCode={discountCode}
            setDiscountCode={setDiscountCode}
          />
          <OrderNotesCard orderNotes={orderNotes} setOrderNotes={setOrderNotes} />
        </aside>
      </div>

      <RecommendedCarousel products={recommendedProducts} />
      </main>
  );
};

export default Cart;
