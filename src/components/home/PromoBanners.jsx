const PromoBanners = () => {
  return (
    <section id="promo-banners" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1f5fc27250-42a8884b950547498a00.png"
              alt="vape wholesale bulk discount banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="px-5 sm:px-8">
                <h3 className="text-3xl font-bold text-white mb-2">Bulk Order Discounts</h3>
                <p className="text-white/90 mb-4">Save up to 30% on large orders</p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/aaafb69278-743249b476011a3e47ae.png"
              alt="free shipping vape wholesale banner"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="px-5 sm:px-8">
                <h3 className="text-3xl font-bold text-white mb-2">Free Shipping</h3>
                <p className="text-white/90 mb-4">On orders over $500</p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:opacity-90">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;


