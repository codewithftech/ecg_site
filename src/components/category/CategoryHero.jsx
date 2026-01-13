import { Link } from 'react-router-dom';

const CategoryHero = ({ categoryInfo }) => {
  return (
    <section id="category-hero" className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <nav className="text-sm text-secondary mb-4">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>{' '}
              / <span className="text-foreground font-medium"> {categoryInfo.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-foreground mb-4">{categoryInfo.name}</h1>
            <p className="text-lg text-secondary mb-6">{categoryInfo.description}</p>
            <div className="flex items-center space-x-4">
              <span className="bg-card px-4 py-2 rounded-full text-sm font-medium border border-border">
                {categoryInfo.productCount} Products
              </span>
              <span className="bg-card px-4 py-2 rounded-full text-sm font-medium border border-border">
                {categoryInfo.brandCount} Brands
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-80 h-64 overflow-hidden rounded-xl shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={categoryInfo.heroImage}
                alt="vape hardware collection display"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;


