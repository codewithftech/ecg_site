import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const UNIT_PRICE = 45.99;
const TAX_RATE = 0.13;

const GroupItems = () => {
  const product = useMemo(
    () => ({
      name: 'SMOK Nord 5 Kit Bundle',
      description: 'Complete Vaping Solution with Multiple Variants',
      sku: 'SMOK-BUNDLE-001',
      reviews: 247,
      badge: 'Bundle Deal',
      stockLabel: 'In Stock',
      images: [
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/83496dabfb-691c00d52619ac28e7b1.png',
      ],
    }),
    []
  );

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

  const allItemIds = useMemo(() => groups.flatMap((g) => g.items.map((i) => i.id)), [groups]);
  const initialQty = useMemo(() => Object.fromEntries(allItemIds.map((id) => [id, 0])), [allItemIds]);

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [qtyById, setQtyById] = useState(initialQty);

  const updateQuantity = (id, change) => {
    setQtyById((prev) => {
      const currentValue = prev[id] ?? 0;
      const nextValue = Math.max(0, currentValue + change);
      return { ...prev, [id]: nextValue };
    });
  };

  const setQuantity = (id, value) => {
    const n = Number.isFinite(value) ? value : 0;
    setQtyById((prev) => ({ ...prev, [id]: Math.max(0, Math.floor(n)) }));
  };

  const subtotalFor = (id) => (qtyById[id] ?? 0) * UNIT_PRICE;
  const taxFor = (id) => subtotalFor(id) * TAX_RATE;

  const bundleTotal = allItemIds.reduce((sum, id) => sum + subtotalFor(id), 0);
  const bundleTax = allItemIds.reduce((sum, id) => sum + taxFor(id), 0);

  return (
    <main className="container mx-auto px-6 py-8">
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
          Disposables
        </Link>{' '}
        / <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div id="product-gallery" className="space-y-4">
          <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg">
            <img id="main-image" className="w-full h-full object-cover" src={mainImage} alt={`${product.name} main image`} />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {product.images.map((src, idx) => (
              <div
                key={src}
                className={`h-20 overflow-hidden rounded-lg cursor-pointer border-2 ${
                  mainImage === src ? 'border-primary' : 'border-border hover:border-primary transition-colors'
                }`}
                onClick={() => setMainImage(src)}
              >
                <img className="w-full h-full object-cover" src={src} alt={`${product.name} view ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div id="product-info" className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">{product.badge}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">{product.stockLabel}</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-lg text-secondary mb-4">{product.description}</p>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-accent"></i>
                ))}
                <span className="ml-2 text-sm text-secondary">({product.reviews} reviews)</span>
              </div>
              <span className="text-sm text-secondary">SKU: {product.sku}</span>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl text-center">
            <i className="fas fa-lock text-4xl text-secondary mb-3"></i>
            <h3 className="text-lg font-semibold text-foreground mb-2">B2B Pricing Available</h3>
            <p className="text-secondary text-sm mb-4">Sign in to view wholesale prices and bulk discounts</p>
            <Link
              to="/login"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
            >
              <i className="fas fa-right-to-bracket mr-2"></i>Login to View Pricing
            </Link>
          </div>
        </div>
      </div>

      <section id="grouped-products" className="mb-12">
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
                          <p className="text-lg font-bold text-foreground">$XX.XX</p>
                        </div>

                        <div className="flex items-center border border-border rounded-lg">
                          <button className="px-3 py-2 hover:bg-muted rounded-l-lg" onClick={() => updateQuantity(item.id, -1)}>
                            -
                          </button>
                          <input
                            type="number"
                            value={qty}
                            min="0"
                            onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                            className="w-16 text-center border-l border-r border-border outline-none"
                          />
                          <button className="px-3 py-2 hover:bg-muted rounded-r-lg" onClick={() => updateQuantity(item.id, 1)}>
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
            <button className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              <i className="fas fa-cart-shopping mr-2"></i>Add Bundle to Cart
            </button>
            <button className="px-6 py-4 border-2 border-border rounded-xl hover:border-primary transition-colors">
              <i className="far fa-heart text-xl"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GroupItems;

