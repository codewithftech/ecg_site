const CompareTable = ({ products, features, onRemove }) => {
  return (
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
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                        aria-label="Add to wishlist"
                      >
                        <i className="far fa-heart text-sm"></i>
                      </button>
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                        aria-label="Quick view"
                      >
                        <i className="fas fa-eye text-sm"></i>
                      </button>
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-all"
                        onClick={() => onRemove(p.id)}
                        aria-label="Remove product"
                      >
                        <i className="fas fa-xmark text-sm"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-sm"
                    >
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
  );
};

export default CompareTable;


