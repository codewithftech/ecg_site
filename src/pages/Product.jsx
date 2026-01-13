import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductGallery from '../components/product/ProductGallery';
import BundleContents from '../components/product/BundleContents';
import ProductDetailsTabs from '../components/product/ProductDetailsTabs';
import RelatedProductsCarousel from '../components/product/RelatedProductsCarousel';

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
  // related carousel state is inside component now
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

      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        <ProductGallery images={images} mainImage={mainImage} setMainImage={setMainImage} />

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

            <BundleContents
              groups={groups}
              qtyById={qtyById}
              subtotalFor={subtotalFor}
              taxFor={taxFor}
              updateBundleQuantity={updateBundleQuantity}
              setBundleQuantity={setBundleQuantity}
              unitPrice={UNIT_PRICE}
              bundleTotal={bundleTotal}
              bundleTax={bundleTax}
            />
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

      <ProductDetailsTabs
        activeTab={activeDetailsTab}
        setActiveTab={setActiveDetailsTab}
        reviewsCount={reviewsCount}
        isWriteReviewOpen={isWriteReviewOpen}
        setIsWriteReviewOpen={setIsWriteReviewOpen}
        reviewForm={reviewForm}
        setReviewForm={setReviewForm}
        reviewErrors={reviewErrors}
        setReviewErrors={setReviewErrors}
        onSubmitReview={handleSubmitReview}
        allReviews={allReviews}
      />

      <RelatedProductsCarousel products={relatedProducts} />

      {!embedded && <div className="text-xs text-secondary">Product ID: {id}</div>}
    </main>
  );
};

export default Product;

