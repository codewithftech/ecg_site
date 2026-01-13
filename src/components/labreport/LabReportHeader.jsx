const LabReportHeader = ({ query, setQuery, testType, setTestType, status, setStatus }) => {
  return (
    <div id="lab-reports-header" className="text-center mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Lab Reports &amp; Testing Results</h1>
      <p className="text-secondary text-base sm:text-lg mb-8">
        View recent lab test reports for our products — purity, safety, and compliance guaranteed
      </p>

      <div
        id="search-filter-section"
        className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 max-w-4xl mx-auto"
      >
        <div className="relative flex-1 w-full">
          <input
            type="text"
            id="report-search"
            placeholder="Search by batch, SKU, or product name..."
            className="w-full px-4 py-3 rounded-full border border-border bg-input text-foreground placeholder-secondary/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="fas fa-magnifying-glass absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary"></i>
        </div>

        <select
          id="test-type-filter"
          className="px-6 py-3 rounded-full border border-border bg-input text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full lg:w-auto"
          value={testType}
          onChange={(e) => setTestType(e.target.value)}
        >
          <option value="">All Test Types</option>
          <option value="nicotine">Nicotine Content</option>
          <option value="heavy-metals">Heavy Metals</option>
          <option value="purity">Purity Analysis</option>
          <option value="microbiological">Microbiological</option>
          <option value="pesticides">Pesticides</option>
        </select>

        <select
          id="status-filter"
          className="px-6 py-3 rounded-full border border-border bg-input text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full lg:w-auto"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="passed">Passed</option>
          <option value="warning">Warning</option>
          <option value="failed">Failed</option>
        </select>
      </div>
    </div>
  );
};

export default LabReportHeader;


