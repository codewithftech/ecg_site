const BundleContents = ({
  groups,
  qtyById,
  subtotalFor,
  taxFor,
  updateBundleQuantity,
  setBundleQuantity,
  unitPrice,
  bundleTotal,
  bundleTax,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6 sm:p-8">
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
                  className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 bg-muted/30 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-secondary truncate">{item.desc}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`text-xs ${group.tagClass} px-2 py-1 rounded`}>{item.tag}</span>
                        <span className="text-xs text-secondary">SKU: {item.sku}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                    <div className="text-left sm:text-right">
                      <p className="text-sm text-secondary mb-1">Unit Price</p>
                      <p className="text-lg font-bold text-foreground">${unitPrice.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center border border-border rounded-lg w-fit bg-white">
                      <button
                        type="button"
                        className="px-3 py-2 hover:bg-muted rounded-l-lg"
                        onClick={() => updateBundleQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={qty}
                        min="0"
                        onChange={(e) => setBundleQuantity(item.id, Number(e.target.value))}
                        className="w-16 text-center border-l border-r border-border outline-none"
                      />
                      <button
                        type="button"
                        className="px-3 py-2 hover:bg-muted rounded-r-lg"
                        onClick={() => updateBundleQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="text-left sm:text-right w-full sm:w-32">
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-primary/5 rounded-xl border-2 border-primary">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Bundle Total</h3>
          <p className="text-sm text-secondary">Tax calculated at checkout</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-3xl font-bold text-primary">${bundleTotal.toFixed(2)}</p>
          <p className="text-sm text-accent mt-1">Total Tax: ${bundleTax.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
        <button className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
          <i className="fas fa-cart-shopping mr-2"></i>Add Bundle to Cart
        </button>
        <button className="px-6 py-4 border-2 border-border rounded-full hover:border-primary transition-colors">
          <i className="far fa-heart text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default BundleContents;


