import { useMemo, useState } from 'react';

const LabReport = () => {
  const [query, setQuery] = useState('');
  const [testType, setTestType] = useState('');
  const [status, setStatus] = useState('');
  const [activeReportId, setActiveReportId] = useState(null);

  const reports = useMemo(
    () => [
      {
        id: 'report-1',
        date: '2024-11-15',
        product: 'Premium Pod Kit V2',
        sku: 'PPK-V2-001',
        lot: 'LOT-2024-1115',
        testType: 'Heavy Metals',
        testTypeValue: 'heavy-metals',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
      {
        id: 'report-2',
        date: '2024-11-14',
        product: 'Strawberry E-Liquid 30ml',
        sku: 'SEL-30-002',
        lot: 'LOT-2024-1114',
        testType: 'Nicotine Content',
        testTypeValue: 'nicotine',
        statusValue: 'warning',
        statusLabel: 'Trace Amounts',
        statusClass: 'status-warning',
      },
      {
        id: 'report-3',
        date: '2024-11-13',
        product: 'Disposable Vape 2000 Puffs',
        sku: 'DV-2000-003',
        lot: 'LOT-2024-1113',
        testType: 'Purity Analysis',
        testTypeValue: 'purity',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
      {
        id: 'report-4',
        date: '2024-11-12',
        product: 'Mesh Coil Tank',
        sku: 'MCT-001-004',
        lot: 'LOT-2024-1112',
        testType: 'Microbiological',
        testTypeValue: 'microbiological',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
    ],
    []
  );

  const filteredReports = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      const matchesQuery =
        !q ||
        r.lot.toLowerCase().includes(q) ||
        r.sku.toLowerCase().includes(q) ||
        r.product.toLowerCase().includes(q);
      const matchesType = !testType || r.testTypeValue === testType;
      const matchesStatus = !status || r.statusValue === status;
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [query, reports, status, testType]);

  const activeReport = useMemo(
    () => reports.find((r) => r.id === activeReportId) ?? null,
    [activeReportId, reports]
  );

  return (
    <>
      <main id="lab-reports-main" className="container mx-auto px-6 py-12">
        <div id="lab-reports-header" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Lab Reports &amp; Testing Results</h1>
          <p className="text-secondary text-lg mb-8">
            View recent lab test reports for our products — purity, safety, and compliance guaranteed
          </p>

          <div
            id="search-filter-section"
            className="flex  lg:flex-row items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            <div className="relative flex-1 max-w-md">
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
              className="px-6 py-3 rounded-full border border-border bg-input text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
              className="px-6 py-3 rounded-full border border-border bg-input text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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

        <div id="reports-table-section" className="mb-12">
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Report Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Product / SKU</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Batch/Lot</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Test Type</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody id="reports-tbody">
                  {filteredReports.map((r) => (
                    <tr key={r.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-6 text-secondary">{r.date}</td>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-foreground">{r.product}</p>
                          <p className="text-sm text-secondary">SKU: {r.sku}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-secondary">{r.lot}</td>
                      <td className="py-4 px-6 text-secondary">{r.testType}</td>
                      <td className="py-4 px-6">
                        <span className={`${r.statusClass} px-3 py-1 rounded-full text-sm font-medium`}>
                          {r.statusLabel}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                            title="View Details"
                            onClick={() => setActiveReportId(r.id)}
                          >
                            <i className="fas fa-eye text-primary"></i>
                          </button>
                          <button className="p-2 hover:bg-secondary/10 rounded-full transition-colors" title="Download PDF">
                            <i className="fas fa-download text-secondary"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredReports.length === 0 && (
                    <tr>
                      <td className="py-8 px-6 text-center text-secondary" colSpan={6}>
                        No reports found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div id="pagination" className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground">1</button>
              <button className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">2</button>
              <button className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">3</button>
              <button className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="trust-certification-section" className="bg-card rounded-xl border border-border p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">Certified Lab Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">ISO Certified Labs</h3>
              <p className="text-secondary text-sm">All testing performed by ISO 17025 certified laboratories</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-check text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Third-Party Testing</h3>
              <p className="text-secondary text-sm">Independent verification ensures accurate results</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-shield text-2xl text-primary"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compliance Ready</h3>
              <p className="text-secondary text-sm">Reports meet all regulatory requirements</p>
            </div>
          </div>
        </div>

        <div id="cta-section" className="text-center">
          <div className="bg-muted rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Lab Report?</h2>
            <p className="text-secondary mb-6">Request specific batch testing for your business requirements</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Request Lab Report
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Apply for Business Account
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Report Modal */}
      <div
        id="report-modal"
        className={`fixed inset-0 bg-black/50 z-50 ${activeReport ? 'flex' : 'hidden'} items-center justify-center p-4`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveReportId(null);
        }}
      >
        <div className="bg-card rounded-xl max-w-4xl w-full overflow-y-auto" style={{ maxHeight: '90vh' }}>
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Lab Report Details</h2>
            <button
              onClick={() => setActiveReportId(null)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-xmark text-secondary"></i>
            </button>
          </div>

          <div className="p-6">
            {activeReport && (
              <div className="mb-6">
                <div className="text-sm text-secondary mb-1">Selected Report</div>
                <div className="font-semibold text-foreground">
                  {activeReport.product} <span className="text-secondary font-medium">(SKU: {activeReport.sku})</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div id="report-data">
                <h3 className="font-semibold text-foreground mb-4">Test Parameters</h3>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Lead (Pb)</span>
                      <span className="font-medium text-foreground">0.12 mg/kg</span>
                    </div>
                    <div className="text-xs text-secondary mt-1">Limit: ≤ 0.5 mg/kg</div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Cadmium (Cd)</span>
                      <span className="font-medium text-foreground">0.05 mg/kg</span>
                    </div>
                    <div className="text-xs text-secondary mt-1">Limit: ≤ 0.1 mg/kg</div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Mercury (Hg)</span>
                      <span className="font-medium text-foreground">0.02 mg/kg</span>
                    </div>
                    <div className="text-xs text-secondary mt-1">Limit: ≤ 0.1 mg/kg</div>
                  </div>
                </div>
              </div>

              <div id="report-chart">
                <h3 className="font-semibold text-foreground mb-4">Results vs Limits</h3>
                <div id="results-chart" style={{ height: 300 }}></div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Lab Interpretation</h4>
              <p className="text-secondary text-sm">
                All tested parameters are within acceptable limits according to FDA regulations and industry standards.
                The product meets safety requirements for commercial distribution.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                <i className="fas fa-download mr-2"></i>
                Download Full PDF Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabReport;

