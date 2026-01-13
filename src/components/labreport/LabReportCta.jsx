const LabReportCta = () => {
  return (
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
  );
};

export default LabReportCta;


