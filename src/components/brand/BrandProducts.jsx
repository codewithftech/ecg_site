import ProductCard from '../ProductCard';

const BrandProducts = ({ brandInfo, products, viewMode, setViewMode }) => {
  return (
    <section id="brand-products" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{brandInfo.name} Products</h2>
            <p className="text-secondary">
              Explore our complete range of {brandInfo.name} devices and accessories
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <select className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto">
              <option>Sort by: Featured</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <div className="hidden md:flex items-center space-x-2">
              <button
                type="button"
                className={`p-2 border border-border rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
                onClick={() => setViewMode('grid')}
              >
                <i className="fas fa-table-cells-large"></i>
              </button>
              <button
                type="button"
                className={`p-2 border border-border rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-muted'
                }`}
                onClick={() => setViewMode('list')}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <button
              type="button"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous page"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button type="button" className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center" aria-current="page">
              1
            </button>
            <button type="button" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              2
            </button>
            <button type="button" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              3
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next page"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BrandProducts;


