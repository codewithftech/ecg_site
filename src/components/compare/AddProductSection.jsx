const AddProductSection = () => {
  return (
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
          className="flex-1 px-4 py-2 rounded-full border border-border outline-none focus:border-primary transition-colors w-full sm:w-auto"
        />
        <button
          type="button"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          <i className="fas fa-magnifying-glass mr-1"></i>Search
        </button>
      </div>
    </div>
  );
};

export default AddProductSection;


