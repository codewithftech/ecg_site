const LabReportsTable = ({ reports, onView }) => {
  return (
    <div id="reports-table-section" className="mb-12">
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px]">
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
              {reports.map((r) => (
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
                    <span className={`${r.statusClass} px-3 py-1 rounded-full text-sm font-medium`}>{r.statusLabel}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                        title="View Details"
                        onClick={() => onView(r.id)}
                      >
                        <i className="fas fa-eye text-primary"></i>
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-secondary/10 rounded-full transition-colors"
                        title="Download PDF"
                      >
                        <i className="fas fa-download text-secondary"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {reports.length === 0 && (
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
    </div>
  );
};

export default LabReportsTable;


