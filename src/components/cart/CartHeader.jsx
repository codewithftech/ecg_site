import { Link } from 'react-router-dom';

const CartHeader = ({ itemCount }) => {
  return (
    <>
      <nav id="breadcrumb" className="text-sm text-secondary mb-6 mt-6">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>{' '}
        /{' '}
        <Link to="/shop" className="hover:text-primary">
          Shop
        </Link>{' '}
        / <span className="text-foreground font-medium">Shopping Cart</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Shopping Cart</h1>
        <span className="text-secondary">{itemCount} items</span>
      </div>
    </>
  );
};

export default CartHeader;


