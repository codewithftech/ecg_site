const ReportModal = ({ report, onClose }) => {
  const open = Boolean(report);

  return (
    <div
      id="report-modal"
      className={`fixed inset-0 bg-black/50 z-50 ${open ? 'flex' : 'hidden'} items-center justify-center p-4`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-card rounded-xl max-w-4xl w-full overflow-y-auto" style={{ maxHeight: '90vh' }}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Lab Report Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Close">
            <i className="fas fa-xmark text-secondary"></i>
          </button>
        </div>

        <div className="p-6">
          {report && (
            <div className="mb-6">
              <div className="text-sm text-secondary mb-1">Selected Report</div>
              <div className="font-semibold text-foreground">
                {report.product} <span className="text-secondary font-medium">(SKU: {report.sku})</span>
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
  );
};

export default ReportModal;


