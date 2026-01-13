const BrandHero = ({ brandInfo }) => {
  return (
    <section id="brand-hero" className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="bg-card rounded-2xl p-8 inline-block shadow-lg mb-6">
              <img
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                src={brandInfo.logo}
                alt={`${brandInfo.name} brand logo modern vape company`}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{brandInfo.name}</h1>
            <p className="text-base sm:text-xl text-secondary mb-6">{brandInfo.tagline}</p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {brandInfo.stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-lg px-6 py-3 shadow">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
              <img className="w-full h-full object-cover object-center" src={brandInfo.heroImage} alt="vape hardware collection display" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;


