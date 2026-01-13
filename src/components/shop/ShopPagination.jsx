const ShopPagination = () => {
  return (
    <div id="pagination" className="flex justify-center items-center space-x-2">
      <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors" aria-label="Previous page">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium" aria-current="page">
        1
      </button>
      <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">2</button>
      <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">3</button>
      <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">4</button>
      <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors" aria-label="Next page">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ShopPagination;


