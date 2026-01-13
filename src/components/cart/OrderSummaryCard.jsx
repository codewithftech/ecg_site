import { Link } from 'react-router-dom';

const OrderSummaryCard = ({ totalItems, subtotal, shipping, tax, total, discountCode, setDiscountCode }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-6">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-secondary">
          <span>Subtotal ({totalItems} items)</span>
          <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-secondary">
          <span>Shipping</span>
          <span className="text-foreground font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-secondary">
          <span>Tax</span>
          <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
        </div>
        <hr className="border-border" />
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground">Total</span>
          <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-semibold text-foreground mb-3">Discount Code</div>
        <div className="flex items-center gap-3">
          <input
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 px-4 py-3 rounded-full border border-border bg-background outline-none"
          />
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-muted text-foreground font-semibold shadow hover:bg-muted/70 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      <Link
        to="/checkout"
        className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
      >
        Proceed to Checkout
      </Link>

      <div className="mt-6 text-center">
        <p className="text-xs text-secondary mb-3">Secure Checkout</p>
        <div className="flex justify-center gap-4 text-secondary">
          <i className="fas fa-shield-halved"></i>
          <i className="fas fa-lock"></i>
          <i className="fas fa-credit-card"></i>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;


