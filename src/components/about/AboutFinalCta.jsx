import { Link } from 'react-router-dom';

const AboutFinalCta = () => {
  return (
    <section id="final-cta" className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Wholesale Network</h2>
        <p className="text-base sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ready to partner with the industry's leading B2B vape distributor? Start your application today and unlock
          wholesale pricing.
        </p>
        <Link
          to="/login"
          className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors inline-block w-full sm:w-auto"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default AboutFinalCta;


