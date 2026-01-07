import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Brand = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const brandInfo = {
    name: 'SMOK',
    tagline: 'Innovation Keeps Changing the Vaping Experience',
    logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c4a1f673e8-20922e367a42c7c39f28.png',
    heroImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/04c7f8aabf-a3e3fe427c9e76de9c70.png',
    stats: [
      { value: '250+', label: 'Products' },
      { value: '15+', label: 'Years' },
      { value: 'Global', label: 'Leader' },
    ],
  };

  const products = [
    {
      id: 1,
      name: 'SMOK Nord 5 Kit',
      description: '80W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bfc35734d9-0ded04407dace8893200.png',
    },
    {
      id: 2,
      name: 'SMOK Morph 3 Kit',
      description: '230W Box Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8889ee715f-bf006080ecb8b9e3ad54.png',
    },
    {
      id: 3,
      name: 'SMOK RPM 5 Kit',
      description: '80W Pod Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f5d2f3a6ba-d35a378777cd5e94ddd8.png',
    },
    {
      id: 4,
      name: 'SMOK TFV18 Tank',
      description: 'Sub-Ohm Tank 7.5ml',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-d3ce64cde5efc2dac22f.png',
    },
    {
      id: 5,
      name: 'SMOK Novo X Kit',
      description: '25W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-61696afccf40b1f78817.png',
    },
    {
      id: 6,
      name: 'SMOK Stick V9 Max',
      description: '60W Starter Kit',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5297142e99-b5b5329f3a408cf811de.png',
    },
    {
      id: 7,
      name: 'SMOK Mag P3 Kit',
      description: '230W Box Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c6b69f0e3b-f77fd4f460bc0f888b72.png',
    },
    {
      id: 8,
      name: 'SMOK Pozz X Kit',
      description: '40W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d86388cc01-f21025f2cfc8fd4f9b44.png',
    },
  ];

  return (
    <>
      {/* Brand Hero Section */}
      <section id="brand-hero" className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="flex  rounded-2xl lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="bg-card rounded-2xl p-8 inline-block shadow-lg mb-6">
                <img
                  className="w-48 h-48 object-contain"
                  src={brandInfo.logo}
                  alt={`${brandInfo.name} brand logo modern vape company`}
                />
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-4">{brandInfo.name}</h1>
              <p className="text-xl text-secondary mb-6">{brandInfo.tagline}</p>
              <div className="flex items-center space-x-4">
                {brandInfo.stats.map((stat, index) => (
                  <div key={index} className="bg-card rounded-lg px-6 py-3 shadow">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
           

            <div className="hidden lg:block">
              <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg flex justify-end">
                <img 
                  className="w-full h-full object-cover" 
                  src={brandInfo.heroImage} 
                  alt="vape hardware collection display" 
                />
              </div>
          
              

            </div>
          </div>
        </div>
      </section>

      {/* Brand Description Section */}
      <section id="brand-description" className="py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About {brandInfo.name}</h2>
            <div className="prose prose-lg">
              <p className="text-secondary leading-relaxed mb-4">
                {brandInfo.name} is a world-leading electronic cigarette brand founded in 2010. With over a decade of experience in the vaping industry, {brandInfo.name} has consistently pushed the boundaries of innovation, creating cutting-edge devices that combine advanced technology with exceptional design.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                From powerful box mods to sleek pod systems, {brandInfo.name} offers a comprehensive range of products that cater to both beginners and experienced vapers. Their commitment to quality, performance, and user satisfaction has made them one of the most trusted names in the vaping community worldwide.
              </p>
              <p className="text-secondary leading-relaxed">
                Every {brandInfo.name} product undergoes rigorous testing and quality control to ensure reliability, safety, and an unparalleled vaping experience. Join millions of satisfied customers who have made {brandInfo.name} their brand of choice.
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

      {/* Brand Products Section */}
      <section id="brand-products" className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{brandInfo.name} Products</h2>
              <p className="text-secondary">Explore our complete range of {brandInfo.name} devices and accessories</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-card border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary">
                <option>Sort by: Featured</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="hidden md:flex items-center space-x-2">
                <button
                  className={`p-2 border border-border rounded-lg transition-colors ${viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'hover:bg-muted'
                    }`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-table-cells-large"></i>
                </button>
                <button
                  className={`p-2 border border-border rounded-lg transition-colors ${viewMode === 'list'
                      ? 'bg-primary text-white'
                      : 'hover:bg-muted'
                    }`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">3</button>
              <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </nav>
          </div>
        </div>
      </section>


      <section
        id="b2b-cta"
        className="py-20 bg-gradient-to-r from-primary to-accent"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlock Wholesale Pricing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of retailers accessing premium vape products at competitive
            B2B prices
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow">
              Sign In to View Pricing
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors">
              Apply for Business Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
