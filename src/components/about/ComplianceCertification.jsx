const ComplianceCertification = () => {
  return (
    <section id="compliance-certification" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Compliance & Certification</h2>
          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-scale-balanced text-primary text-2xl"></i>
                </div>
                <h4 className="font-semibold text-foreground mb-2">FDA Compliant</h4>
                <p className="text-secondary text-sm">All operations meet FDA regulations for tobacco products.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-contract text-accent text-2xl"></i>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Licensed Distributor</h4>
                <p className="text-secondary text-sm">Fully licensed in all states where we operate.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-microscope text-primary text-2xl"></i>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quality Tested</h4>
                <p className="text-secondary text-sm">Third-party lab testing for all e-liquid products.</p>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-left">
              <p className="text-sm text-secondary">
                <strong>Important:</strong> We only sell to verified retailers with valid tobacco licenses. Age
                verification required for all accounts. Products are intended for adult use only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertification;


