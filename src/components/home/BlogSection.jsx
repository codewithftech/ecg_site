import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader title="Latest Blog Posts" viewAllTo="/blog" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ee0a46007a-174e88e91b0960765359.png"
              alt="vape product review blog"
            />
            <div className="p-6">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Product Review
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">Top 10 Disposables of 2024</h3>
              <p className="text-secondary mb-4">
                Discover the most popular disposable vapes that are flying off the shelves this year and why retailers
                love them...
              </p>
              <Link to="/single_blog/1" className="text-primary font-semibold hover:underline rounded-full">
                Read More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </article>

          <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/685ccd0fb7-6c7066bdfab484b4194d.png"
              alt="vape business tips blog"
            />
            <div className="p-6">
              <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Business Tips
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">Maximizing Profit Margins</h3>
              <p className="text-secondary mb-4">
                Learn proven strategies to increase your vape shop's profitability and optimize your product mix for
                better returns...
              </p>
              <Link to="/single_blog/1" className="text-primary font-semibold hover:underline rounded-full">
                Read More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </article>

          <article className="bg-card rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              className="w-full h-48 object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ee0a46007a-174e88e91b0960765359.png"
              alt="vape product review blog"
            />
            <div className="p-6">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                Product Review
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">Top 10 Disposables of 2024</h3>
              <p className="text-secondary mb-4">
                Discover the most popular disposable vapes that are flying off the shelves this year and why retailers
                love them...
              </p>
              <Link to="/single_blog/1" className="text-primary font-semibold hover:underline rounded-full">
                Read More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


