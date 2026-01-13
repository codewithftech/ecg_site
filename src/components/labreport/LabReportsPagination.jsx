const LabReportsPagination = () => {
  return (
    <div id="pagination" className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        <button type="button" className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors" aria-label="Previous page">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button type="button" className="px-4 py-2 rounded-full bg-primary text-primary-foreground" aria-current="page">
          1
        </button>
        <button type="button" className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
          2
        </button>
        <button type="button" className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
          3
        </button>
        <button type="button" className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors" aria-label="Next page">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default LabReportsPagination;


