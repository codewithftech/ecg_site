import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../components/ProductCard';

const UNIT_PRICE = 45.99;
const TAX_RATE = 0.13;

const Product = ({ productId, embedded = false }) => {
  const params = useParams();
  const id = productId ?? params.id;
  const [productQty, setProductQty] = useState(1);
  const [activeDetailsTab, setActiveDetailsTab] = useState('description');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, text: '' });
  const [reviewErrors, setReviewErrors] = useState({});

  const images = useMemo(
    () => [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
    ],
    []
  );
  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState('black');

  const relatedProducts = useMemo(
    () => [
      {
        id: 'r1',
        name: 'SMOK RPM Coils',
        description: 'Compatible Replacement Coils',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
      },
      {
        id: 'r2',
        name: 'VOOPOO Drag X',
        description: '80W Pod Mod Kit',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
      },
      {
        id: 'r3',
        name: 'Battery Charger',
        description: 'Universal USB-C Charger',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c0de1216ae-181b8af6607142bb4604.png',
      },
      {
        id: 'r4',
        name: 'Premium E-liquid',
        description: '50ml Bottle - Multiple Flavors',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-598aba635dbe543cf56c.png',
      },
    ],
    []
  );

  const baseReviewsCount = 248;
  const seedReviews = useMemo(
    () => [
      {
        id: 'rev-1',
        name: 'Ahmed R.',
        date: 'Dec 12, 2025',
        rating: 5,
        text: 'Great build quality and excellent flavor. Our customers love it. Shipping was fast and packaging was solid.',
      },
      {
        id: 'rev-2',
        name: 'Sarah K.',
        date: 'Nov 28, 2025',
        rating: 4,
        text: 'Very reliable device and easy to sell. Would like to see more color options in the bundle.',
      },
      {
        id: 'rev-3',
        name: 'Bilal M.',
        date: 'Oct 03, 2025',
        rating: 5,
        text: 'Strong battery life and smooth airflow control. Perfect for wholesale.',
      },
    ],
    []
  );

  const REVIEWS_STORAGE_KEY = useMemo(() => `ecg_product_reviews_${id ?? 'unknown'}`, [id]);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setUserReviews(parsed);
    } catch {
      // ignore
    }
  }, [REVIEWS_STORAGE_KEY]);

  const allReviews = useMemo(() => [...userReviews, ...seedReviews], [userReviews, seedReviews]);
  const reviewsCount = baseReviewsCount + userReviews.length;

  const validateReview = (data) => {
    const next = {};
    const name = String(data.name ?? '').trim();
    const text = String(data.text ?? '').trim();
    const rating = Number(data.rating);

    if (!name) next.name = 'Name is required.';
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) next.rating = 'Rating must be between 1 and 5.';
    if (text.length < 10) next.text = 'Review must be at least 10 characters.';

    return next;
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const errors = validateReview(reviewForm);
    setReviewErrors(errors);
    if (Object.keys(errors).length) return;

    const newReview = {
      id: `user-${Date.now()}`,
      name: String(reviewForm.name).trim(),
      date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' }),
      rating: Number(reviewForm.rating),
      text: String(reviewForm.text).trim(),
    };

    const next = [newReview, ...userReviews];
    setUserReviews(next);
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }

    setIsWriteReviewOpen(false);
    setReviewForm({ name: '', rating: 5, text: '' });
    setReviewErrors({});
  };
  const relatedSwiperRef = useRef(null);
  const [activeRelated, setActiveRelated] = useState(0);
  const groups = useMemo(
    () => [
      {
        id: 'classic',
        title: 'Classic Edition',
        countLabel: '4 Products',
        borderClass: 'border-primary',
        tagClass: 'bg-primary/10 text-primary',
        items: [
          {
            id: 'classic-1',
            name: 'SMOK Nord 5 - Black Edition',
            desc: '80W Pod Mod with RPM3 Coils',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
            tag: 'Classic',
            sku: 'SMOK-N5-BLK',
          },
          {
            id: 'classic-2',
            name: 'SMOK Nord 5 - Blue Edition',
            desc: '80W Pod Mod with RPM3 Coils',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
            tag: 'Classic',
            sku: 'SMOK-N5-BLU',
          },
          {
            id: 'classic-3',
            name: 'SMOK Nord 5 - Red Edition',
            desc: '80W Pod Mod with RPM3 Coils',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
            tag: 'Classic',
            sku: 'SMOK-N5-RED',
          },
          {
            id: 'classic-4',
            name: 'SMOK Nord 5 - Silver Edition',
            desc: '80W Pod Mod with RPM3 Coils',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
            tag: 'Classic',
            sku: 'SMOK-N5-SLV',
          },
        ],
      },
      {
        id: 'sweet',
        title: 'Sweet Edition',
        countLabel: '3 Products',
        borderClass: 'border-accent',
        tagClass: 'bg-accent/10 text-accent',
        items: [
          {
            id: 'sweet-1',
            name: 'SMOK Nord 5 - Strawberry Sweet',
            desc: 'Limited Edition with Fruity Design',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
            tag: 'Sweet',
            sku: 'SMOK-N5-STR',
          },
          {
            id: 'sweet-2',
            name: 'SMOK Nord 5 - Candy Sweet',
            desc: 'Limited Edition with Candy Design',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
            tag: 'Sweet',
            sku: 'SMOK-N5-CND',
          },
          {
            id: 'sweet-3',
            name: 'SMOK Nord 5 - Grape Sweet',
            desc: 'Limited Edition with Grape Design',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
            tag: 'Sweet',
            sku: 'SMOK-N5-GRP',
          },
        ],
      },
      {
        id: 'ice',
        title: 'Ice Edition',
        countLabel: '2 Products',
        borderClass: 'border-blue-500',
        tagClass: 'bg-blue-100 text-blue-600',
        items: [
          {
            id: 'ice-1',
            name: 'SMOK Nord 5 - Ice Blue',
            desc: 'Cool Edition with Frost Design',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
            tag: 'Ice',
            sku: 'SMOK-N5-ICE',
          },
          {
            id: 'ice-2',
            name: 'SMOK Nord 5 - Arctic White',
            desc: 'Cool Edition with Arctic Design',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
            tag: 'Ice',
            sku: 'SMOK-N5-ARC',
          },
        ],
      },
    ],
    []
  );

  // Bundle quantity + totals (from GroupItems)
  const allItemIds = useMemo(() => groups.flatMap((g) => g.items.map((i) => i.id)), [groups]);
  const initialQtyById = useMemo(() => Object.fromEntries(allItemIds.map((itemId) => [itemId, 0])), [allItemIds]);
  const [qtyById, setQtyById] = useState(initialQtyById);

  const updateBundleQuantity = (itemId, change) => {
    setQtyById((prev) => {
      const currentValue = prev[itemId] ?? 0;
      const nextValue = Math.max(0, currentValue + change);
      return { ...prev, [itemId]: nextValue };
    });
  };

  const setBundleQuantity = (itemId, value) => {
    const n = Number.isFinite(value) ? value : 0;
    setQtyById((prev) => ({ ...prev, [itemId]: Math.max(0, Math.floor(n)) }));
  };

  const subtotalFor = (itemId) => (qtyById[itemId] ?? 0) * UNIT_PRICE;
  const taxFor = (itemId) => subtotalFor(itemId) * TAX_RATE;
  const bundleTotal = allItemIds.reduce((sum, itemId) => sum + subtotalFor(itemId), 0);
  const bundleTax = allItemIds.reduce((sum, itemId) => sum + taxFor(itemId), 0);

  return (
    <main className={embedded ? 'px-4 sm:px-6 py-6' : 'container mx-auto px-6 py-8'}>
      <nav id="breadcrumb" className="text-sm text-secondary mb-6">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>{' '}
        /{' '}
        <Link to="/category" className="hover:text-primary">
          Hardware
        </Link>{' '}
        /{' '}
        <Link to="/category" className="hover:text-primary">
          Mods &amp; Kits
        </Link>{' '}
        / <span className="text-foreground font-medium">SMOK Nord 5 Kit</span>
      </nav>

      <div className="flex  flex-row gap-12 mb-12">
        <div id="product-gallery" className="space-y-4 lg:basis-2/5 lg:max-w-[40%]">
          <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg">
            <img id="main-image" className="w-full h-full object-cover" src={mainImage} alt="SMOK Nord 5 Kit main" />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {images.map((src, idx) => {
              const active = src === mainImage;
              return (
                <button
                  key={src}
                  type="button"
                  className={`h-20 overflow-hidden rounded-lg cursor-pointer border-2 transition-colors ${
                    active ? 'border-primary' : 'border-border hover:border-primary'
                  }`}
                  onClick={() => setMainImage(src)}
                  aria-label={`Select image ${idx + 1}`}
                >
                  <img className="w-full h-full object-cover" src={src} alt={`SMOK Nord 5 view ${idx + 1}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div id="product-info" className="space-y-6 lg:basis-3/5 lg:max-w-[60%]">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">New Arrival</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">In Stock</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">SMOK Nord 5 Kit</h1>
            <p className="text-lg text-secondary mb-4">80W Pod Mod with RPM3 Coils - Premium Vaping Experience</p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-star text-accent"></i>
                <i className="fas fa-star text-accent"></i>
                <i className="fas fa-star text-accent"></i>
                <i className="fas fa-star text-accent"></i>
                <i className="fas fa-star text-accent"></i>
                <span className="ml-2 text-sm text-secondary">(247 reviews)</span>
              </div>
              <span className="text-sm text-secondary">SKU: SMOK-N5-001</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-card outline-none focus:ring-2 focus:ring-primary">
                <option>Pod Mods</option>
                <option>Starter Kits</option>
                <option>Box Mods</option>
              </select>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-foreground mb-2">Color</label>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setSelectedColor('black')}
                  className={`w-12 h-12 rounded-full bg-black border-2 ${selectedColor === 'black' ? 'border-primary' : 'border-border hover:border-primary'} transition-colors`}
                  aria-label="Black"
                ></button>
                <button
                  type="button"
                  onClick={() => setSelectedColor('blue')}
                  className={`w-12 h-12 rounded-full bg-blue-500 border-2 ${selectedColor === 'blue' ? 'border-primary' : 'border-border hover:border-primary'} transition-colors`}
                  aria-label="Blue"
                ></button>
                <button
                  type="button"
                  onClick={() => setSelectedColor('red')}
                  className={`w-12 h-12 rounded-full bg-red-500 border-2 ${selectedColor === 'red' ? 'border-primary' : 'border-border hover:border-primary'} transition-colors`}
                  aria-label="Red"
                ></button>
                <button
                  type="button"
                  onClick={() => setSelectedColor('silver')}
                  className={`w-12 h-12 rounded-full bg-silver border-2 ${selectedColor === 'silver' ? 'border-primary' : 'border-border hover:border-primary'} transition-colors`}
                  aria-label="Silver"
                ></button>
              </div>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-foreground mb-2">Flavor Profile</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-card outline-none focus:ring-2 focus:ring-primary">
                <option>Compatible with All E-liquids</option>
                <option>Fruit Flavors</option>
                <option>Dessert Flavors</option>
                <option>Menthol/Mint</option>
                <option>Tobacco</option>
              </select>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border rounded-xl">
                  <button
                    type="button"
                    className="px-4 py-2 hover:bg-muted rounded-l-xl"
                    onClick={() => setProductQty((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={productQty}
                    min="1"
                    readOnly
                    className="w-16 text-center border-l border-r border-border outline-none"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 hover:bg-muted rounded-r-xl"
                    onClick={() => setProductQty((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-secondary">50 units available</span>
              </div>
            </div> */}

            <div className="bg-card rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Bundle Contents</h2>

          {groups.map((group) => (
            <div key={group.id} id={`${group.id}-edition`} className="mb-10">
              <div className={`flex items-center justify-between mb-4 pb-3 border-b-2 ${group.borderClass}`}>
                <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                <span className="text-sm text-secondary">{group.countLabel}</span>
              </div>

              <div className="space-y-4">
                {group.items.map((item) => {
                  const qty = qtyById[item.id] ?? 0;
                  const subtotal = subtotalFor(item.id);
                  const tax = taxFor(item.id);

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-20 h-20 overflow-hidden rounded-lg">
                          <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          <p className="text-sm text-secondary">{item.desc}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`text-xs ${group.tagClass} px-2 py-1 rounded`}>{item.tag}</span>
                            <span className="text-xs text-secondary">SKU: {item.sku}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm text-secondary mb-1">Unit Price</p>
                          <p className="text-lg font-bold text-foreground">${UNIT_PRICE.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center border border-border rounded-lg">
                          <button className="px-3 py-2 hover:bg-muted rounded-l-lg" onClick={() => updateBundleQuantity(item.id, -1)}>
                            -
                          </button>
                          <input
                            type="number"
                            value={qty}
                            min="0"
                            onChange={(e) => setBundleQuantity(item.id, Number(e.target.value))}
                            className="w-16 text-center border-l border-r border-border outline-none"
                          />
                          <button className="px-3 py-2 hover:bg-muted rounded-r-lg" onClick={() => updateBundleQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>

                        <div className="text-right w-32">
                          <p className="text-sm text-secondary mb-1">Subtotal</p>
                          <p className="text-lg font-bold text-foreground">${subtotal.toFixed(2)}</p>
                          {qty > 0 && <p className="text-xs text-accent">Tax: ${tax.toFixed(2)}</p>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between p-6 bg-primary/5 rounded-xl border-2 border-primary">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Bundle Total</h3>
              <p className="text-sm text-secondary">Tax calculated at checkout</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">${bundleTotal.toFixed(2)}</p>
              <p className="text-sm text-accent mt-1">Total Tax: ${bundleTax.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <button className="flex-1 bg-primary text-primary-foreground px-8 py-4  rounded-full font-semibold hover:opacity-90 transition-opacity">
              <i className="fas fa-cart-shopping mr-2"></i>Add Bundle to Cart
            </button>
            <button className="px-6 py-4 border-2 border-border  rounded-full hover:border-primary transition-colors">
              <i className="far fa-heart text-xl"></i>
            </button>
          </div>
        </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl text-center">
            <i className="fas fa-lock text-4xl text-secondary mb-3"></i>
            <h3 className="text-lg font-semibold text-foreground mb-2">B2B Pricing Available</h3>
            <p className="text-secondary text-sm mb-4">Sign in to view wholesale prices and bulk discounts</p>
            <div className="flex space-x-3">
              <Link
                to="/login"
                className="flex-1 bg-primary text-primary-foreground px-6 py-3  rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <i className="fas fa-right-to-bracket mr-2"></i>
                Login to View Pricing
              </Link>
              <button
                type="button"
                className="flex-1 border border-border px-6 py-3  rounded-full font-semibold hover:bg-muted transition-colors"
              >
                <i className="far fa-heart mr-2"></i>
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-3">Lab Reports &amp; Compliance</h4>
            <div className="space-y-2">
              <Link to="/labreport" className="flex items-center text-primary hover:text-accent transition-colors">
                <i className="fas fa-download mr-2"></i>
                <span className="text-sm">COA Certificate - Batch #2024-001</span>
              </Link>
              <Link to="/labreport" className="flex items-center text-primary hover:text-accent transition-colors">
                <i className="fas fa-download mr-2"></i>
                <span className="text-sm">Safety Data Sheet (SDS)</span>
              </Link>
              <Link to="/labreport" className="flex items-center text-primary hover:text-accent transition-colors">
                <i className="fas fa-download mr-2"></i>
                <span className="text-sm">FDA Registration Document</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="product-details" className="mb-12">
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center gap-10 px-6 pt-4 border-b border-border">
            {[
              { key: 'description', label: 'Description' },
              { key: 'specs', label: 'Specifications' },
              { key: 'reviews', label: `Reviews (${reviewsCount})` },
              { key: 'shipping', label: 'Shipping & Returns' },
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveDetailsTab(t.key)}
                className={`pb-4 text-sm font-semibold transition-colors ${
                  activeDetailsTab === t.key ? 'text-foreground border-b-2 border-primary' : 'text-secondary hover:text-foreground'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            {activeDetailsTab === 'description' && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Product Description</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  The SMOK Nord 5 Kit represents the latest evolution in pod mod technology, featuring an impressive 80W
                  output and compatibility with RPM3 coils. This device combines the portability of a pod system with the
                  power and customization options of a traditional box mod.
                </p>
                <p className="text-secondary leading-relaxed mb-8">
                  Designed for both MTL and DTL vaping styles, the Nord 5 offers adjustable airflow and multiple coil
                  options to suit any vaping preference. The large 2000mAh battery ensures all-day vaping, while the Type-C
                  charging port provides fast and convenient charging.
                </p>

                <h4 className="text-xl font-bold text-foreground mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Advanced Coil Technology', desc: 'Enhanced flavor and vapor production' },
                    { title: 'Smart Battery Management', desc: 'Optimized power delivery and longevity' },
                    { title: 'Adjustable Airflow', desc: 'Customizable vaping experience' },
                    { title: 'Premium Build Quality', desc: 'Durable zinc alloy construction' },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-xs"></i>
                      </span>
                      <div>
                        <div className="font-semibold text-foreground">{f.title}</div>
                        <div className="text-sm text-secondary">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDetailsTab === 'specs' && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Device Specs</h4>
                    <ul className="space-y-2 text-sm text-secondary">
                      <li>Output Power: 5-80W</li>
                      <li>Battery: 2000mAh</li>
                      <li>Charging: Type-C</li>
                      <li>Material: Zinc Alloy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Pod Specs</h4>
                    <ul className="space-y-2 text-sm text-secondary">
                      <li>Capacity: 5ml</li>
                      <li>Coil: RPM3 Series</li>
                      <li>Filling: Side Fill</li>
                      <li>Airflow: Adjustable</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

              {activeDetailsTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Reviews</h3>
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen((v) => !v)}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90"
                  >
                    Write a Review
                  </button>
                </div>

                {isWriteReviewOpen && (
                  <form onSubmit={handleSubmitReview} className="border border-border rounded-xl p-5 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <input
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm((s) => ({ ...s, name: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl border bg-card outline-none focus:ring-2 focus:ring-primary ${
                            reviewErrors.name ? 'border-destructive' : 'border-border'
                          }`}
                          placeholder="Your name"
                        />
                        {reviewErrors.name && <p className="text-sm text-destructive mt-1">{reviewErrors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const star = i + 1;
                            const active = star <= Number(reviewForm.rating || 0);
                            return (
                              <button
                                key={`rate-${star}`}
                                type="button"
                                onClick={() => setReviewForm((s) => ({ ...s, rating: star }))}
                                className="p-1"
                                aria-label={`Rate ${star} star`}
                              >
                                <i className={`fas fa-star text-lg ${active ? 'text-accent' : 'text-border'}`} />
                              </button>
                            );
                          })}
                        </div>
                        {reviewErrors.rating && <p className="text-sm text-destructive mt-1">{reviewErrors.rating}</p>}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Review</label>
                      <textarea
                        rows={4}
                        value={reviewForm.text}
                        onChange={(e) => setReviewForm((s) => ({ ...s, text: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-card outline-none focus:ring-2 focus:ring-primary ${
                          reviewErrors.text ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder="Write your review..."
                      />
                      {reviewErrors.text && <p className="text-sm text-destructive mt-1">{reviewErrors.text}</p>}
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-5">
                      <button
                        type="button"
                        onClick={() => {
                          setIsWriteReviewOpen(false);
                          setReviewErrors({});
                        }}
                        className="px-6 py-3 rounded-full border border-border font-semibold hover:bg-muted transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-6">
                  {allReviews.map((r) => (
                    <div key={r.id} className="border border-border rounded-xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-foreground">{r.name}</div>
                        <div className="text-xs text-secondary">{r.date}</div>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={`${r.id}-star-${i}`}
                            className={`fas fa-star text-sm ${i < r.rating ? 'text-accent' : 'text-border'}`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="text-secondary leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDetailsTab === 'shipping' && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Shipping & Returns</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Shipping</h4>
                    <ul className="space-y-2 text-sm text-secondary">
                      <li>Orders ship within 1–2 business days (verified accounts).</li>
                      <li>Tracking provided via email once dispatched.</li>
                      <li>Free shipping may apply on qualified wholesale orders.</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Returns</h4>
                    <ul className="space-y-2 text-sm text-secondary">
                      <li>Returns accepted within 7 days for unopened items.</li>
                      <li>Defective items may be eligible for replacement.</li>
                      <li>Contact support with your order number to start a return.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-destructive mb-3">
                    <i className="fas fa-triangle-exclamation mr-2"></i>
                    Compliance Warning
                  </h4>
                  <ul className="space-y-2 text-sm text-destructive">
                    <li>• This product contains nicotine</li>
                    <li>• Not for sale to minors</li>
                    <li>• Keep away from children and pets</li>
                    <li>• For adult use only (21+)</li>
                    <li>• Not for pregnant or nursing women</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="related-products" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>

        <div className="relative">
          <Swiper
            onSwiper={(s) => {
              relatedSwiperRef.current = s;
              setActiveRelated(s.realIndex ?? 0);
            }}
            onSlideChange={(s) => setActiveRelated(s.realIndex ?? 0)}
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 20 },
              768: { slidesPerView: 2.6, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="py-2"
          >
            {relatedProducts.map((rp) => (
              <SwiperSlide key={rp.id}>
                <ProductCard product={rp} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous related products"
            onClick={() => relatedSwiperRef.current?.slidePrev()}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            aria-label="Next related products"
            onClick={() => relatedSwiperRef.current?.slideNext()}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Pagination dots (same style as Home Hot Items, active = primary) */}
        <div className="flex justify-center gap-2 mt-6">
          {relatedProducts.map((p, idx) => (
            <button
              key={`related-dot-${p.id}-${idx}`}
              type="button"
              aria-label={`Go to related product ${idx + 1}`}
              onClick={() => relatedSwiperRef.current?.slideToLoop(idx)}
              className={`w-3 h-3 rounded-full ${idx === activeRelated ? 'bg-primary' : 'bg-border'}`}
            />
          ))}
        </div>
      </section>

      {!embedded && <div className="text-xs text-secondary">Product ID: {id}</div>}
    </main>
  );
};

export default Product;

