const TrustCertification = () => {
  return (
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
  );
};

export default TrustCertification;


