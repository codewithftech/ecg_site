import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product, featured = false }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-card rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow border border-border max-w-sm w-full">
      <div className="relative z-0 mb-0 overflow-hidden rounded-lg">
        <img
          className={`relative z-0 w-full h-48 object-cover rounded-lg ${isAuthenticated ? '' : 'blur-sm'}`}
          src={product.image}
          alt={product.name}
        />
        {product?.badge === 'Sale' && (
          <span className="absolute top-4 left-4 bg-[#BA1212] text-white text-xs font-medium px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        {!isAuthenticated && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#0EB7EE] to-[#00D4FF] text-white px-8 py-3 rounded-full text-base font-semibold hover:opacity-90 shadow-lg"
            >
              Login to view price
            </Link>
          </div>
        )}

        <div className={`absolute top-2 right-2 z-30 flex flex-col space-y-2 ${isAuthenticated ? '' : 'opacity-50'}`}>
          {isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('quick-view-open', { detail: { productId: product?.id ?? '1' } })
                  );
                }}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Quick view"
              >
                <i className="far fa-eye"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('wishlist-open'));
                }}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Open wishlist"
              >
                <i className="far fa-heart"></i>
              </button>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('compare-open'));
                }}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Open compare"
              >
                <i className="fas fa-arrows-left-right"></i>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <i className="far fa-eye"></i>
              </Link>
              <Link
                to="/login"
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <i className="far fa-heart"></i>
              </Link>
              <Link
                to="/login"
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <i className="fas fa-arrows-left-right"></i>
              </Link>
            </>
          )}
        </div>


      </div>



      <div className={isAuthenticated ? '' : 'blur-sm'}>


        {isAuthenticated && product.category && (
          <div className="relative z-40 flex items-center justify-between -mt-3">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
              {product.category}
            </span>
            {product.brand && (
              <span className="bg-[#B7B5B5] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                {product.brand}
              </span>
            )}
          </div>
        )}
        <h3 className="font-semibold text-foreground mb-2 mt-4">{product.name}</h3>
        <div className="flex items-center justify-between">
          {isAuthenticated ?

            <div>
              <div className="text-[24px] font-bold leading-8 text-[#0EB7EE]">
                {product.price ?? '$79.99'}
              </div>
              <div className="text-[10px] font-normal leading-5 text-[#F65D2C]">
                {product.compareAt ?? '$99.99'}
              </div>
            </div> :
            <span className="text-secondary text-sm">
              {isAuthenticated ? (product.price ?? 'Wholesale Pricing') : 'Login to view price'}
            </span>}
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('quick-view-open', { detail: { productId: product?.id ?? '1' } })
              );
            }}
            className="bg-gradient-to-r from-[#0EB7EE] to-[#00D4FF] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 shadow-md"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

