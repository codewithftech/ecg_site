const CartItemRow = ({ item, onDecrease, onIncrease, onRemove }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-20 h-20 overflow-hidden rounded-xl bg-muted flex-shrink-0">
            <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
          </div>

          <div className="min-w-0">
            <div className="font-bold text-foreground truncate">{item.name}</div>
            <div className="text-sm text-secondary truncate">{item.description}</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-xs text-secondary">
              {item.attributes.map((attr) => (
                <span key={`${item.id}-${attr.label}`}>
                  {attr.label}: {attr.value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6 lg:ml-auto">
          <div className="flex items-center border border-border rounded-xl overflow-hidden bg-white w-fit">
            <button
              type="button"
              className="px-4 py-2 hover:bg-muted transition-colors"
              onClick={onDecrease}
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
              onClick={onIncrease}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="sm:text-right min-w-[110px]">
            <div className="text-2xl font-bold text-foreground">${(item.linePrice ?? 0).toFixed(2)}</div>
            <div className="text-xs text-secondary">{item.eachLabel}</div>
          </div>

          <button
            type="button"
            className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors w-fit"
            onClick={onRemove}
            aria-label="Remove item"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemRow;


