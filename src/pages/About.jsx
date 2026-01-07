import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Header Section */}
      <section id="hero-header" className="bg-gradient-to-r from-primary to-accent text-white h-[400px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <nav className="text-sm text-white/80 mb-4">
              <Link to="/" className="hover:text-white">Home</Link> / 
              <span className="text-white font-medium"> About Us</span>
            </nav>
            <h1 className="text-5xl font-bold mb-4">About StrictlyEcig</h1>
            <p className="text-xl text-white/90">Your Trusted Partner in Vape Distribution</p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Leading B2B Vape Wholesale Distributor</h2>
              <p className="text-secondary mb-6 leading-relaxed">
                With over 8 years of experience in the vaping industry, StrictlyEcig has established itself as the premier wholesale distributor for retailers across the nation. We specialize exclusively in business-to-business relationships, ensuring our partners receive the highest quality products at competitive wholesale prices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-1">8+ Years</h4>
                  <p className="text-sm text-secondary">Industry Experience</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-1">5000+</h4>
                  <p className="text-sm text-secondary">Active Retailers</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-1">100%</h4>
                  <p className="text-sm text-secondary">Compliance Rate</p>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-1">24/7</h4>
                  <p className="text-sm text-secondary">B2B Support</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center">
                  Apply for Business Account
                </Link>
                <Link to="/contact" className="border border-border px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors text-center">
                  Contact Our Team
                </Link>
              </div>
            </div>
            <div className="h-[500px] overflow-hidden rounded-xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/94e7ea0383-e1e873823167399bf67b.png" 
                alt="modern warehouse with vape products distribution center professional lighting" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission-values" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We're committed to providing exceptional wholesale services while maintaining the highest standards of quality and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-medal text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-secondary text-sm">
                We source only authentic products from verified manufacturers, ensuring every item meets our strict quality standards.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-shield-check text-accent text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Full Compliance</h3>
              <p className="text-secondary text-sm">
                Our operations adhere to all federal and state regulations, providing you with complete regulatory peace of mind.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-headset text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dedicated Support</h3>
              <p className="text-secondary text-sm">
                Our B2B specialists provide personalized support to help grow your business with expert guidance and assistance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-truck-fast text-accent text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Fulfillment</h3>
              <p className="text-secondary text-sm">
                Same-day processing and expedited shipping options ensure your inventory is restocked quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section id="company-timeline" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              From a small startup to the leading B2B vape distributor, here's our story of growth and innovation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <h3 className="font-semibold text-foreground mb-2">Company Founded</h3>
                      <p className="text-secondary text-sm">
                        Started as a small retail operation with a vision to serve the growing vaping community.
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8">
                    <span className="text-primary font-semibold">2016</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <span className="text-accent font-semibold">2018</span>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <h3 className="font-semibold text-foreground mb-2">B2B Expansion</h3>
                      <p className="text-secondary text-sm">
                        Transitioned to wholesale distribution, establishing partnerships with major manufacturers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <h3 className="font-semibold text-foreground mb-2">Warehouse Expansion</h3>
                      <p className="text-secondary text-sm">
                        Opened our 50,000 sq ft distribution center to serve customers nationwide.
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8">
                    <span className="text-primary font-semibold">2020</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <span className="text-accent font-semibold">2024</span>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <h3 className="font-semibold text-foreground mb-2">Industry Leader</h3>
                      <p className="text-secondary text-sm">
                        Recognized as the top B2B vape distributor with over 5,000 active retail partners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose StrictlyEcig</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We provide comprehensive wholesale solutions that help your business thrive in the competitive vaping market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-globe text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Brand Selection</h3>
              <p className="text-secondary text-sm">Access to over 200 premium brands from leading manufacturers worldwide.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-certificate text-accent text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verified Products</h3>
              <p className="text-secondary text-sm">Every product is authenticated and tested for quality and compliance standards.</p>
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
              <p className="text-secondary text-sm">Dedicated account managers to help optimize your inventory and sales.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-lock text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure B2B Platform</h3>
              <p className="text-secondary text-sm">Advanced security features with encrypted transactions and data protection.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-accent text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Business Analytics</h3>
              <p className="text-secondary text-sm">Comprehensive reporting tools to track sales trends and inventory performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certification Section */}
      <section id="compliance-certification" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compliance & Certification</h2>
            <div className="bg-card p-8 rounded-xl shadow-sm">
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
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-secondary">
                  <strong>Important:</strong> We only sell to verified retailers with valid tobacco licenses. Age verification required for all accounts. Products are intended for adult use only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Wholesale Network</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to partner with the industry's leading B2B vape distributor? Start your application today and unlock wholesale pricing.
          </p>
          <Link to="/login" className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors inline-block">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
