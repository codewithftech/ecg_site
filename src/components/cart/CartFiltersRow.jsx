const CartFiltersRow = ({ filterFlags, setFilterFlags }) => {
  return (
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
  );
};

export default CartFiltersRow;


