import ProductCard from '../ProductCard';

const ShopProductGrid = ({ products }) => {
  return (
    <div id="product-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start mb-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ShopProductGrid;


