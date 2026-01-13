const CategoryFilters = ({ activeCategory, onChange }) => {
  const Btn = ({ id, label }) => (
    <button
      type="button"
      className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
        activeCategory === id ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary hover:text-white'
      }`}
      onClick={() => onChange(id)}
    >
      {label}
    </button>
  );

  return (
    <section id="category-filters" className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        <Btn id="all" label="All Posts" />
        <Btn id="news" label="News" />
        <Btn id="regulations" label="Regulations" />
        <Btn id="products" label="Products" />
        <Btn id="business" label="Business Tips" />
        <Btn id="trends" label="Industry Trends" />
      </div>
    </section>
  );
};

export default CategoryFilters;


