const HomeCtas = () => {
  return (
    <>
      <section id="b2b-cta" className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Unlock Wholesale Pricing</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of retailers accessing premium vape products at competitive B2B prices
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              Sign In to View Pricing
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors w-full sm:w-auto">
              Apply for Business Account
            </button>
          </div>
        </div>
      </section>

      <section id="join-ecig-cta" className="py-20 bg-[#272E3F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join ECIG Wholesale Network</h2>
          <p className="text-xl text-white/90 mb-8">
            Access exclusive B2B pricing, industry insight, and premium wholesale
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              Apply for Business Account
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors w-full sm:w-auto">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCtas;


