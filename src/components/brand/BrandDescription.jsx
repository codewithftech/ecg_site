const BrandDescription = ({ brandInfo }) => {
  return (
    <section id="brand-description" className="py-12 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">About {brandInfo.name}</h2>
          <div className="prose prose-lg">
            <p className="text-secondary leading-relaxed mb-4">
              {brandInfo.name} is a world-leading electronic cigarette brand founded in 2010. With over a decade of
              experience in the vaping industry, {brandInfo.name} has consistently pushed the boundaries of innovation,
              creating cutting-edge devices that combine advanced technology with exceptional design.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              From powerful box mods to sleek pod systems, {brandInfo.name} offers a comprehensive range of products
              that cater to both beginners and experienced vapers. Their commitment to quality, performance, and user
              satisfaction has made them one of the most trusted names in the vaping community worldwide.
            </p>
            <p className="text-secondary leading-relaxed">
              Every {brandInfo.name} product undergoes rigorous testing and quality control to ensure reliability,
              safety, and an unparalleled vaping experience. Join millions of satisfied customers who have made{' '}
              {brandInfo.name} their brand of choice.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-muted rounded-xl p-6 text-center">
              <i className="fas fa-award text-3xl text-primary mb-3"></i>
              <div className="font-semibold text-foreground">Award Winning</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center">
              <i className="fas fa-shield-halved text-3xl text-primary mb-3"></i>
              <div className="font-semibold text-foreground">Certified Quality</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center">
              <i className="fas fa-globe text-3xl text-primary mb-3"></i>
              <div className="font-semibold text-foreground">Global Reach</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center">
              <i className="fas fa-lightbulb text-3xl text-primary mb-3"></i>
              <div className="font-semibold text-foreground">Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDescription;


