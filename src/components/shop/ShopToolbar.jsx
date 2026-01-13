const ShopToolbar = ({ onOpenFilters }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <button
          type="button"
          onClick={onOpenFilters}
          className="lg:hidden bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium shrink-0"
        >
          <i className="fas fa-filter mr-2"></i>Filters
        </button>
        <div className="bg-card rounded-full px-4 py-2 flex items-center border border-border w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm w-full md:w-64"
          />
          <i className="fas fa-magnifying-glass text-secondary ml-2"></i>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
        <select className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto">
          <option>Sort by: Featured</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
          <option>Newest First</option>
        </select>

        <div className="flex items-center space-x-2 justify-end">
          <button type="button" className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
            <i className="fas fa-table-cells-large"></i>
          </button>
          <button type="button" className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
            <i className="fas fa-list"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;


