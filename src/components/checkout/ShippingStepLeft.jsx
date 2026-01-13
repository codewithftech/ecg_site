const ShippingStepLeft = ({
  savedAddresses,
  selectedAddressId,
  setSelectedAddressId,
  shippingMethodChoice,
  setShippingMethodChoice,
  shippingPaymentChoice,
  setShippingPaymentChoice,
}) => {
  return (
    <div id="step-1-content">
      <div className="space-y-6">
        {/* Shipping Address */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-foreground">Shipping Address</h2>
            <button type="button" className="text-sm font-semibold text-accent hover:underline">
              Add New Address
            </button>
          </div>
          <div className="text-sm text-secondary mb-4">Choose from Saved Addresses</div>

          <div className="space-y-4">
            {savedAddresses.map((a) => {
              const selected = a.id === selectedAddressId;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setSelectedAddressId(a.id)}
                  className={`w-full text-left rounded-2xl p-5 border transition-colors ${
                    selected ? 'bg-muted/50 border-transparent' : 'bg-background border-border hover:bg-muted/30'
                  }`}
                >
                  <div className="font-semibold text-foreground mb-2">{a.title}</div>
                  <div className="text-sm text-secondary leading-relaxed">
                    {a.line1}
                    <br />
                    {a.line2}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Shipping Method */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Shipping Method</h2>
          <div className="space-y-4">
            {[
              { id: 'carrier', label: 'Carrier-specific methods' },
              { id: 'other', label: 'Other Delivery Methods' },
              { id: 'pickup', label: 'Pickup Only', badge: 'Address Validation Required' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setShippingMethodChoice(m.id)}
                className="w-full flex items-center justify-between border border-border rounded-2xl p-5 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      shippingMethodChoice === m.id ? 'border-primary' : 'border-border'
                    }`}
                  >
                    {shippingMethodChoice === m.id && <span className="w-3 h-3 rounded-full bg-primary" />}
                  </span>
                  <span className="font-medium text-foreground">{m.label}</span>
                </div>
                {m.badge && <span className="text-xs bg-destructive text-white px-4 py-2 rounded-full">{m.badge}</span>}
              </button>
            ))}
          </div>
        </section>

        {/* Restrictions checks */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Shipping Restrictions Validation System checks</h2>
          <div className="space-y-4">
            {[
              { label: 'Restricted states', ok: true },
              { label: 'Restricted ZIP codes', ok: true },
              { label: 'Restricted SKUs', ok: true },
              { label: 'Restricted categories', ok: false },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    r.ok ? 'bg-green-500 text-white' : 'border border-border text-foreground'
                  }`}
                >
                  <i className={`fas ${r.ok ? 'fa-check' : 'fa-check'} text-xs`} />
                </span>
                <span className="text-secondary">{r.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Method (as screenshot) */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Payment Method</h2>
          <div className="space-y-4">
            {[
              { id: 'bank', label: 'Bank Transfer' },
              { id: 'support', label: 'via Customer Service' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setShippingPaymentChoice(m.id)}
                className="w-full flex items-center justify-between border border-border rounded-2xl p-5 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      shippingPaymentChoice === m.id ? 'border-primary' : 'border-border'
                    }`}
                  >
                    {shippingPaymentChoice === m.id && <span className="w-3 h-3 rounded-full bg-primary" />}
                  </span>
                  <i className="fas fa-building-columns text-foreground" aria-hidden="true" />
                  <span className="font-medium text-foreground">{m.label}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingStepLeft;


