const BlogHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <section id="blog-header" className="text-center mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Blog & Industry Insights</h1>
      <p className="text-secondary text-base sm:text-lg mb-8">
        Stay updated with the latest news, regulations, and trends in the vaping industry
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="flex bg-card rounded-full px-6 py-3 shadow-sm border border-border">
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-1 bg-transparent outline-none text-foreground"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="button" className="text-primary hover:text-accent transition-colors" aria-label="Search">
            <i className="fas fa-magnifying-glass text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;


