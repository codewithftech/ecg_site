const CategoryPagination = () => {
  return (
    <div id="pagination" className="flex items-center justify-center space-x-2 mt-8">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        aria-label="Previous page"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      <button type="button" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center" aria-current="page">
        1
      </button>
      <button type="button" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        2
      </button>
      <button type="button" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        3
      </button>
      <button type="button" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        4
      </button>
      <span className="px-2">...</span>
      <button type="button" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        24
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        aria-label="Next page"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>
    </div>
  );
};

export default CategoryPagination;


