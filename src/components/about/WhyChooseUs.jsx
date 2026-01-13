const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Choose StrictlyEcig</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We provide comprehensive wholesale solutions that help your business thrive in the competitive vaping
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-globe text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Global Brand Selection</h3>
            <p className="text-secondary text-sm">
              Access to over 200 premium brands from leading manufacturers worldwide.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-certificate text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Verified Products</h3>
            <p className="text-secondary text-sm">
              Every product is authenticated and tested for quality and compliance standards.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-truck-fast text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Express Shipping</h3>
            <p className="text-secondary text-sm">Same-day processing with next-day delivery options available nationwide.</p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-user-tie text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Account Specialists</h3>
            <p className="text-secondary text-sm">
              Dedicated account managers to help optimize your inventory and sales.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-lock text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Secure B2B Platform</h3>
            <p className="text-secondary text-sm">
              Advanced security features with encrypted transactions and data protection.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Business Analytics</h3>
            <p className="text-secondary text-sm">
              Comprehensive reporting tools to track sales trends and inventory performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


