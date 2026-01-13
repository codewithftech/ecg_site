import { Link } from 'react-router-dom';

const CartActionsRow = ({ onClear }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
      <Link to="/shop" className="text-primary font-medium hover:underline flex items-center gap-2">
        <i className="fas fa-arrow-left"></i> Continue Shopping
      </Link>
      <button type="button" className="text-destructive font-medium hover:underline flex items-center gap-2 w-fit" onClick={onClear}>
        <i className="fas fa-trash"></i> Clear Cart
      </button>
    </div>
  );
};

export default CartActionsRow;


