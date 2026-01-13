const ShippingStepSummary = ({
  orderItems,
  savedAddresses,
  selectedAddressId,
  discountCode,
  setDiscountCode,
  shippingPaymentChoice,
  setPaymentMethod,
  goTo,
}) => {
  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* My Cart */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground mb-4">My Cart</h2>
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground text-sm">{item.name}</div>
                <div className="text-xs text-secondary">{item.qtyLabel}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-foreground">{item.price}</div>
                <div className="text-xs text-secondary">{item.tax}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Address summary */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground mb-3">Shipping Address</h2>
        <div className="text-secondary leading-relaxed">
          {(() => {
            const a = savedAddresses.find((x) => x.id === selectedAddressId) ?? savedAddresses[0];
            return (
              <>
                {a.line1}
                <br />
                {a.line2}, Islamabad, Pakistan
              </>
            );
          })()}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>

        <div className="space-y-3 text-sm pb-4 border-b border-border">
          <div className="flex justify-between text-secondary">
            <span>Subtotal (8 items)</span>
            <span>$XXX</span>
          </div>
          <div className="flex justify-between text-secondary">
            <span>Shipping</span>
            <span>$XXX</span>
          </div>
          <div className="flex justify-between text-secondary">
            <span>Tax</span>
            <span>$XXX</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-foreground">Total</span>
            <span className="text-2xl font-bold text-foreground">$XXX</span>
          </div>

          <div className="text-sm font-semibold text-foreground mb-3">Discount Code</div>
          <div className="flex items-center gap-3">
            <input
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background outline-none"
            />
            <button type="button" className="px-6 py-3 rounded-full bg-secondary text-white font-semibold shadow hover:opacity-90 transition-opacity">
              Apply
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              // Carry step-1 payment choice into step-2 selection
              setPaymentMethod(shippingPaymentChoice === 'bank' ? 'bank-transfer' : 'customer-service');
              goTo('payment');
            }}
            className="mt-6 w-full bg-primary text-primary-foreground py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Confirm
          </button>

          <div className="mt-6 text-center">
            <div className="text-xs text-secondary mb-3">Secure Checkout</div>
            <div className="flex justify-center gap-4 text-secondary">
              <i className="fas fa-shield-halved" />
              <i className="fas fa-lock" />
              <i className="fas fa-credit-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingStepSummary;


