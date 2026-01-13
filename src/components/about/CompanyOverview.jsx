import { Link } from 'react-router-dom';

const CompanyOverview = () => {
  return (
    <section id="company-overview" className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Leading B2B Vape Wholesale Distributor
            </h2>
            <p className="text-secondary mb-6 leading-relaxed">
              With over 8 years of experience in the vaping industry, StrictlyEcig has established itself as the premier
              wholesale distributor for retailers across the nation. We specialize exclusively in business-to-business
              relationships, ensuring our partners receive the highest quality products at competitive wholesale prices.
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
              <Link
                to="/login"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Apply for Business Account
              </Link>
              <Link
                to="/contact"
                className="border border-border px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors text-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/94e7ea0383-e1e873823167399bf67b.png"
              alt="modern warehouse with vape products distribution center professional lighting"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;


