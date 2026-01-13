const ProsConsGrid = ({ products }) => {
  return (
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
  );
};

export default ProsConsGrid;


