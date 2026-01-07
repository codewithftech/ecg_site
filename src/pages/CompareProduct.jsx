import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const CompareProduct = ({ embedded = false }) => {
  const [products, setProducts] = useState([
    {
      id: 'smok-nord-4',
      name: 'SMOK Nord 4',
      subtitle: 'Pod System Kit',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-2f9fafa89eacdc906c22.png',
      brand: 'SMOK',
      category: 'Pod Systems',
      deviceType: 'Refillable Pod',
      batteryCapacity: '2000mAh',
      coilType: 'Mesh Coils',
      capacity: '4.5ml',
      weight: '115g',
      colors: '7 Colors',
      charging: 'USB-C',
      safety: '8 Protections',
      pros: ['Large battery capacity', 'Adjustable airflow', 'Multiple coil options', 'Fast charging'],
      cons: ['Heavier than competitors', 'Learning curve for beginners'],
    },
    {
      id: 'elfbar-bc5000',
      name: 'Elf Bar BC5000',
      subtitle: 'Disposable Vape',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c1b38ef8c9-19015643434b6acf2d96.png',
      brand: 'Elf Bar',
      category: 'Disposables',
      deviceType: 'Disposable',
      batteryCapacity: '650mAh',
      coilType: 'Built-in Mesh',
      capacity: '13ml (5000 puffs)',
      weight: '78g',
      colors: '15+ Flavors',
      charging: 'USB-C',
      safety: 'Basic Protection',
      pros: ['Ready to use', 'Great flavor variety', 'Compact size', 'No maintenance'],
      cons: ['Not refillable', 'Higher long-term cost'],
    },
    {
      id: 'uwell-crown-5',
      name: 'Uwell Crown 5',
      subtitle: 'Sub-Ohm Tank',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-8f2fd85b6806236dadfb.png',
      brand: 'Uwell',
      category: 'Tanks',
      deviceType: 'Sub-Ohm Tank',
      batteryCapacity: 'N/A',
      coilType: 'UN2 Mesh',
      capacity: '5ml',
      weight: '68g',
      colors: '5 Colors',
      charging: 'N/A',
      safety: 'N/A',
      pros: ['Excellent flavor production', 'Easy top-fill design', 'Leak-resistant', 'Premium build quality'],
      cons: ['Requires separate mod', 'Higher juice consumption'],
    },
  ]);

  const features = useMemo(
    () => [
      { key: 'brand', label: 'Brand', icon: 'fas fa-tag' },
      { key: 'category', label: 'Category', icon: 'fas fa-layer-group' },
      { key: 'deviceType', label: 'Device Type', icon: 'fas fa-microchip' },
      { key: 'batteryCapacity', label: 'Battery Capacity', icon: 'fas fa-battery-full' },
      { key: 'coilType', label: 'Coil Type', icon: 'fas fa-fire' },
      { key: 'capacity', label: 'Capacity', icon: 'fas fa-droplet' },
      { key: 'weight', label: 'Weight', icon: 'fas fa-weight-scale' },
      { key: 'colors', label: 'Available Colors', icon: 'fas fa-palette' },
      { key: 'charging', label: 'Charging', icon: 'fas fa-plug' },
      { key: 'safety', label: 'Safety Features', icon: 'fas fa-shield-halved' },
    ],
    []
  );

  const removeProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <main id="comparison-main" className={embedded ? 'px-6 py-6' : 'container mx-auto px-6 py-12'}>
      <div id="page-header" className="mb-8">
        <div className="flex items-center text-sm text-secondary mb-4">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <i className="fas fa-chevron-right mx-2 text-xs"></i>
          <Link to="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <i className="fas fa-chevron-right mx-2 text-xs"></i>
          <span className="text-foreground">Compare Products</span>
        </div>

        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-foreground mb-3">Compare Products</h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Compare product specifications and features to choose the best fit for your business.
          </p>

          {!embedded && (
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center justify-center gap-2 text-foreground font-medium hover:text-primary hover:underline transition-colors"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Shop
            </Link>
          )}
        </div>
      </div>

      <div id="comparison-container" className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-muted">
              <tr>
                <td className="p-6 w-64">
                  <div className="text-lg font-semibold text-foreground">Product Features</div>
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-6">
                    <div className="product-header text-center">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                        <img className="w-full h-full object-cover" src={p.image} alt={p.name} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{p.name}</h3>
                      <p className="text-sm text-secondary mb-3">{p.subtitle}</p>
                      <div className="flex justify-center space-x-2 mb-3">
                        <button className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                          <i className="far fa-heart text-sm"></i>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                          <i className="fas fa-eye text-sm"></i>
                        </button>
                        <button
                          className="w-8 h-8 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-all"
                          onClick={() => removeProduct(p.id)}
                          aria-label="Remove product"
                        >
                          <i className="fas fa-xmark text-sm"></i>
                        </button>
                      </div>
                      <button className="w-full bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm">
                        <i className="fas fa-lock mr-1"></i>Login to View Price
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((f) => (
                <tr key={f.key} className="border-b border-border">
                  <td className="p-4 bg-muted/50 font-medium text-foreground">
                    <i className={`${f.icon} mr-2 text-primary`}></i>
                    {f.label}
                  </td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 text-center">
                      {p[f.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="pros-cons-section" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {products.map((p) => (
          <div key={p.id} className="bg-card rounded-xl shadow-sm border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4 text-center">{p.name} - Pros &amp; Cons</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-green-600 mb-2">
                  <i className="fas fa-check mr-1"></i>Pros
                </h4>
                <ul className="text-sm text-secondary space-y-1">
                  {p.pros.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-red-600 mb-2">
                  <i className="fas fa-xmark mr-1"></i>Cons
                </h4>
                <ul className="text-sm text-secondary space-y-1">
                  {p.cons.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        id="add-product-section"
        className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
          <i className="fas fa-plus text-2xl text-primary"></i>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Add Another Product</h3>
        <p className="text-secondary mb-6">Compare up to 4 products side by side</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products to compare..."
            className="flex-1 px-4 py-2 rounded-full border border-border outline-none focus:border-primary transition-colors"
          />
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            <i className="fas fa-magnifying-glass mr-1"></i>Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default CompareProduct;

