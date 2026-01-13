const MissionValues = () => {
  return (
    <section id="mission-values" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We're committed to providing exceptional wholesale services while maintaining the highest standards of
            quality and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-medal text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
            <p className="text-secondary text-sm">
              We source only authentic products from verified manufacturers, ensuring every item meets our strict
              quality standards.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-shield-check text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Full Compliance</h3>
            <p className="text-secondary text-sm">
              Our operations adhere to all federal and state regulations, providing you with complete regulatory peace
              of mind.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-headset text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Dedicated Support</h3>
            <p className="text-secondary text-sm">
              Our B2B specialists provide personalized support to help grow your business with expert guidance and
              assistance.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-truck-fast text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Fast Fulfillment</h3>
            <p className="text-secondary text-sm">
              Same-day processing and expedited shipping options ensure your inventory is restocked quickly and
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;


