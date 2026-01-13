import { Link } from 'react-router-dom';

const CompareHeader = ({ embedded }) => {
  return (
    <div id="page-header" className="mb-8">
      <div className="flex items-center text-sm text-secondary mb-4">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <i className="fas fa-chevron-right mx-2 text-xs"></i>
        <Link to="/shop" className="hover:text-primary transition-colors">
          Shop
        </Link>
        <i className="fas fa-chevron-right mx-2 text-xs"></i>
        <span className="text-foreground">Compare Products</span>
      </div>

      <div className="text-center py-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Compare Products</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Compare product specifications and features to choose the best fit for your business.
        </p>

        {!embedded && (
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center justify-center gap-2 text-foreground font-medium hover:text-primary hover:underline transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            Back to Shop
          </Link>
        )}
      </div>
    </div>
  );
};

export default CompareHeader;


