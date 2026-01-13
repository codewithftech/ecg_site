import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section
      id="hero-header"
      className="bg-gradient-to-r from-primary to-accent text-white min-h-[280px] sm:min-h-[400px] flex items-center"
    >
      <div className="container mx-auto px-6 py-12 sm:py-0">
        <div className="max-w-3xl">
          <nav className="text-sm text-white/80 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{' '}
            / <span className="text-white font-medium"> About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About StrictlyEcig</h1>
          <p className="text-base sm:text-xl text-white/90">Your Trusted Partner in Vape Distribution</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;


