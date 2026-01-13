const BlogPagination = () => {
  return (
    <div id="pagination" className="mt-12 flex justify-center items-center space-x-2">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
        aria-label="Previous page"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button type="button" className="w-10 h-10 rounded-full bg-primary text-white" aria-current="page">
        1
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
      >
        2
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
      >
        3
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
      >
        4
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
        aria-label="Next page"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default BlogPagination;


