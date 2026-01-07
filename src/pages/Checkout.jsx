import { useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const steps = ['shipping', 'payment', 'review'];

function clampStep(step) {
  if (!step) return 'shipping';
  const normalized = String(step).toLowerCase();
  return steps.includes(normalized) ? normalized : 'shipping';
}

function formatCardNumber(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const activeStep = clampStep(step);

  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(false);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('credit-card'); // credit-card | bank-transfer | customer-service | net-terms

  const [shipping, setShipping] = useState({
    businessName: '',
    taxId: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    billingAddress: '',
    city: '',
    state: '',
    zip: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    deliveryNotes: '',
  });

  const [payment, setPayment] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    bankReference: '',
    bankReceipt: null,
    customerMessage: '',
    poNumber: '',
    ageVerification: false,
    businessVerification: false,
    termsConditions: false,
  });

  const [errors, setErrors] = useState({});

  // Shipping step UI (saved addresses + methods)
  const savedAddresses = useMemo(
    () => [
      {
        id: 'addr-1',
        title: 'Address 1',
        line1: 'Office # 3, Basement Floor, Durrani Plaza, Plot # 7-C, Block-C, Main',
        line2: 'Double Road, PWD',
      },
      {
        id: 'addr-2',
        title: 'Address 1',
        line1: 'Office # 3, Basement Floor, Durrani Plaza, Plot # 7-C, Block-C, Main',
        line2: 'Double Road, PWD',
      },
      {
        id: 'addr-3',
        title: 'Address 1',
        line1: 'Office # 3, Basement Floor, Durrani Plaza, Plot # 7-C, Block-C, Main',
        line2: 'Double Road, PWD',
      },
    ],
    []
  );
  const [selectedAddressId, setSelectedAddressId] = useState('addr-1');
  const [shippingMethodChoice, setShippingMethodChoice] = useState('carrier'); // carrier | other | pickup
  const [shippingPaymentChoice, setShippingPaymentChoice] = useState('bank'); // bank | support
  const [discountCode, setDiscountCode] = useState('');

  const orderItems = useMemo(
    () => [
      {
        id: '1',
        name: 'SMOK Nord 5 Kit',
        qtyLabel: 'Qty: 50',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
        price: '$XXX',
        tax: 'Tax : $XX',
      },
      {
        id: '2',
        name: 'SMOK RPM Coils',
        qtyLabel: 'Qty: 100',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
        price: '$XXX',
        tax: 'Tax : $XX',
      },
    ],
    []
  );

  const goTo = (nextStep) => navigate(`/checkout/${nextStep}`);

  const validateShipping = () => {
    const next = {};
    const required = [
      ['businessName', 'Business name is required'],
      ['taxId', 'Tax ID is required'],
      ['contactName', 'Contact name is required'],
      ['email', 'Valid email is required'],
      ['phone', 'Phone number is required'],
      ['billingAddress', 'Address is required'],
      ['city', 'City is required'],
      ['state', 'State is required'],
      ['zip', 'ZIP is required'],
    ];

    required.forEach(([k, msg]) => {
      if (!String(shipping[k] ?? '').trim()) next[k] = msg;
    });

    if (shipping.email && !/\S+@\S+\.\S+/.test(shipping.email)) next.email = 'Valid email is required';

    // shipping fields only if not same-as-billing
    if (!shippingSameAsBilling) {
      const shippingRequired = [
        ['shippingAddress', 'Shipping address is required'],
        ['shippingCity', 'Shipping city is required'],
        ['shippingState', 'Shipping state is required'],
        ['shippingZip', 'Shipping ZIP is required'],
      ];
      shippingRequired.forEach(([k, msg]) => {
        if (!String(shipping[k] ?? '').trim()) next[k] = msg;
      });
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const validatePayment = () => {
    const next = {};

    if (paymentMethod === 'credit-card') {
      if (!payment.cardholderName.trim()) next.cardholderName = 'Cardholder name is required';
      if (!payment.cardNumber.replace(/\s/g, '').trim()) next.cardNumber = 'Valid card number is required';
      if (!payment.expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(payment.expiryDate)) next.expiryDate = 'Valid expiry date is required';
      if (!payment.cvv.trim()) next.cvv = 'CVV is required';
    }

    if (paymentMethod === 'bank-transfer') {
      if (!String(payment.bankReference ?? '').trim()) next.bankReference = 'Bank transfer reference is required';
    }

    if (paymentMethod === 'customer-service') {
      if (String(payment.customerMessage ?? '').trim().length < 10) next.customerMessage = 'Please enter a short message (min 10 chars).';
    }

    if (paymentMethod === 'net-terms') {
      if (!String(payment.poNumber ?? '').trim()) next.poNumber = 'PO number is required';
    }

    if (!payment.ageVerification) next.ageVerification = true;
    if (!payment.businessVerification) next.businessVerification = true;
    if (!payment.termsConditions) next.termsConditions = true;

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const stepIdx = steps.indexOf(activeStep);
  const isStep1 = activeStep === 'shipping';
  const isStep2 = activeStep === 'payment';
  const isStep3 = activeStep === 'review';

  // If user directly visits /checkout/review, keep it simple: allow, but show placeholder.
  if (!steps.includes(activeStep)) return <Navigate to="/checkout/shipping" replace />;

  return (
    <main className="container mx-auto px-6 py-8">
      <div id="checkout-header" className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Secure Checkout</h1>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div
              id="step-1"
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                stepIdx === 0 ? 'step-active' : stepIdx > 0 ? 'step-complete' : 'bg-muted text-secondary'
              }`}
            >
              1
            </div>
            <span className={`ml-2 ${stepIdx === 0 ? 'text-foreground font-medium' : stepIdx > 0 ? 'text-foreground font-medium' : 'text-secondary'}`}>
              Shipping
            </span>
          </div>
          <div className="h-px w-12 bg-border"></div>
          <div className="flex items-center">
            <div
              id="step-2"
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                stepIdx === 1 ? 'step-active' : stepIdx > 1 ? 'step-complete' : 'bg-muted text-secondary'
              }`}
            >
              2
            </div>
            <span className={`ml-2 ${stepIdx >= 1 ? 'text-foreground font-medium' : 'text-secondary'}`}>Payment</span>
          </div>
          <div className="h-px w-12 bg-border"></div>
          <div className="flex items-center">
            <div
              id="step-3"
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                stepIdx === 2 ? 'step-active' : 'bg-muted text-secondary'
              }`}
            >
              3
            </div>
            <span className={`ml-2 ${stepIdx === 2 ? 'text-foreground font-medium' : 'text-secondary'}`}>Review</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {isStep1 && (
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
                        {m.badge && (
                          <span className="text-xs bg-destructive text-white px-4 py-2 rounded-full">
                            {m.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Restrictions checks */}
                <section className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Shipping Restrictions Validation System checks
                  </h2>
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
          )}

          {isStep2 && (
            <div id="step-2-content">
              <form
                id="payment-form"
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (validatePayment()) goTo('review');
                }}
              >
                <section id="payment-method-section" className="bg-card rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    <i className="fas fa-credit-card mr-2 text-primary"></i>Payment Method
                  </h2>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        id: 'credit-card',
                        icon: 'fas fa-credit-card',
                        title: 'Credit/Debit Card',
                        sub: 'Visa, Mastercard, American Express',
                      },
                      {
                        id: 'bank-transfer',
                        icon: 'fas fa-building-columns',
                        title: 'Bank Transfer',
                        sub: 'ACH Transfer (3-5 business days)',
                      },
                      {
                        id: 'customer-service',
                        icon: 'fas fa-headset',
                        title: 'via Customer Service',
                        sub: 'We will contact you to complete payment',
                      },
                      {
                        id: 'net-terms',
                        icon: 'fas fa-calendar-days',
                        title: 'Net Terms',
                        sub: 'Net 30/60 (Approved accounts only)',
                      },
                    ].map((m) => (
                      <div
                        key={m.id}
                        className={`payment-method border-2 rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === m.id ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod(m.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(evt) => {
                          if (evt.key === 'Enter' || evt.key === ' ') setPaymentMethod(m.id);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <i className={`${m.icon} text-xl text-primary`}></i>
                            <div>
                              <h3 className="font-semibold text-foreground">{m.title}</h3>
                              <p className="text-sm text-secondary">{m.sub}</p>
                            </div>
                          </div>
                          <input type="radio" name="payment-method" value={m.id} checked={paymentMethod === m.id} readOnly className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {paymentMethod === 'credit-card' && (
                  <section id="credit-card-details" className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Card Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name *</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all ${
                            errors.cardholderName ? 'error-input' : ''
                          }`}
                          placeholder="John Doe"
                          value={payment.cardholderName}
                          onChange={(e) => setPayment((p) => ({ ...p, cardholderName: e.target.value }))}
                        />
                        {errors.cardholderName && <span className="error-text">Cardholder name is required</span>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Card Number *</label>
                        <div className="relative">
                          <input
                            type="text"
                            className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all pr-16 ${
                              errors.cardNumber ? 'error-input' : ''
                            }`}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            value={payment.cardNumber}
                            onChange={(e) => setPayment((p) => ({ ...p, cardNumber: formatCardNumber(e.target.value) }))}
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-1">
                            <i className="fab fa-cc-visa text-2xl text-blue-600"></i>
                            <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
                            <i className="fab fa-cc-amex text-2xl text-blue-500"></i>
                          </div>
                        </div>
                        {errors.cardNumber && <span className="error-text">Valid card number is required</span>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all ${
                              errors.expiryDate ? 'error-input' : ''
                            }`}
                            placeholder="MM/YY"
                            maxLength={5}
                            value={payment.expiryDate}
                            onChange={(e) => setPayment((p) => ({ ...p, expiryDate: formatExpiry(e.target.value) }))}
                          />
                          {errors.expiryDate && <span className="error-text">Valid expiry date is required</span>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">CVV *</label>
                          <div className="relative">
                            <input
                              type="text"
                              className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all pr-10 ${
                                errors.cvv ? 'error-input' : ''
                              }`}
                              placeholder="123"
                              maxLength={4}
                              value={payment.cvv}
                              onChange={(e) => setPayment((p) => ({ ...p, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                            />
                            <i className="fas fa-circle-question absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary cursor-help" title="3-digit code on back of card"></i>
                          </div>
                          {errors.cvv && <span className="error-text">CVV is required</span>}
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {paymentMethod === 'bank-transfer' && (
                  <section id="bank-transfer-details" className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Bank Transfer Details</h3>
                    <div className="bg-muted/30 p-4 rounded-xl mb-4 text-sm text-secondary">
                      Please initiate a bank transfer using the details below. After payment, enter your transfer reference.
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-secondary">Bank</div>
                        <div className="font-semibold text-foreground">ECIG Wholesale Bank</div>
                      </div>
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-secondary">Account</div>
                        <div className="font-semibold text-foreground">**** **** 1234</div>
                      </div>
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-secondary">Routing</div>
                        <div className="font-semibold text-foreground">110000000</div>
                      </div>
                      <div className="bg-background border border-border rounded-xl p-4">
                        <div className="text-xs text-secondary">SWIFT</div>
                        <div className="font-semibold text-foreground">ECIGUSXX</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Transfer Reference *</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all ${
                            errors.bankReference ? 'error-input' : ''
                          }`}
                          placeholder="e.g. TRX-123456"
                          value={payment.bankReference}
                          onChange={(e) => setPayment((p) => ({ ...p, bankReference: e.target.value }))}
                        />
                        {errors.bankReference && <span className="error-text">{errors.bankReference}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Upload Receipt (optional)</label>
                        <input
                          type="file"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-input outline-none"
                          onChange={(e) => setPayment((p) => ({ ...p, bankReceipt: e.target.files?.[0] ?? null }))}
                        />
                      </div>
                    </div>
                  </section>
                )}

                {paymentMethod === 'customer-service' && (
                  <section id="customer-service-details" className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Customer Service Payment</h3>
                    <div className="bg-muted/30 p-4 rounded-xl mb-4 text-sm text-secondary">
                      Our team will reach out to confirm your order and arrange payment. Please leave any notes below.
                    </div>

                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all ${
                        errors.customerMessage ? 'error-input' : ''
                      }`}
                      placeholder="Write a message for customer service..."
                      value={payment.customerMessage}
                      onChange={(e) => setPayment((p) => ({ ...p, customerMessage: e.target.value }))}
                    />
                    {errors.customerMessage && <span className="error-text">{errors.customerMessage}</span>}

                    <div className="mt-4 text-sm text-secondary">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-phone text-primary" /> <span>+1 (555) 000-0000</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <i className="fas fa-envelope text-primary" /> <span>support@strictlyecig.com</span>
                      </div>
                    </div>
                  </section>
                )}

                {paymentMethod === 'net-terms' && (
                  <section id="net-terms-details" className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Net Terms Details</h3>
                    <div className="bg-muted/30 p-4 rounded-xl mb-4 text-sm text-secondary">
                      Net terms are available for approved business accounts only.
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">PO Number *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all ${
                          errors.poNumber ? 'error-input' : ''
                        }`}
                        placeholder="e.g. PO-000123"
                        value={payment.poNumber}
                        onChange={(e) => setPayment((p) => ({ ...p, poNumber: e.target.value }))}
                      />
                      {errors.poNumber && <span className="error-text">{errors.poNumber}</span>}
                    </div>
                  </section>
                )}

                {paymentMethod === 'credit-card' && (
                <section id="billing-address-section" className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Billing Address</h3>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                        checked={billingSameAsShipping}
                        onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                      />
                      <span className="ml-2 text-sm text-secondary">Same as shipping address</span>
                    </label>
                  </div>

                  <div id="billing-address-fields" className={`space-y-4 ${billingSameAsShipping ? 'opacity-50 pointer-events-none' : ''}`}>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Street address"
                      value={payment.billingStreet}
                      onChange={(e) => setPayment((p) => ({ ...p, billingStreet: e.target.value }))}
                      disabled={billingSameAsShipping}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="City"
                        value={payment.billingCity}
                        onChange={(e) => setPayment((p) => ({ ...p, billingCity: e.target.value }))}
                        disabled={billingSameAsShipping}
                      />
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all"
                        value={payment.billingState}
                        onChange={(e) => setPayment((p) => ({ ...p, billingState: e.target.value }))}
                        disabled={billingSameAsShipping}
                      >
                        <option value="">Select State</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="NY">New York</option>
                        <option value="FL">Florida</option>
                      </select>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="ZIP Code"
                        value={payment.billingZip}
                        onChange={(e) => setPayment((p) => ({ ...p, billingZip: e.target.value }))}
                        disabled={billingSameAsShipping}
                      />
                    </div>
                  </div>
                </section>
                )}

                <section id="compliance-section" className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    <i className="fas fa-shield-check mr-2 text-primary"></i>Compliance &amp; Terms
                  </h3>

                  <div className="space-y-4">
                    <label className={`flex items-start space-x-3 cursor-pointer ${errors.ageVerification ? 'text-destructive' : ''}`}>
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary mt-1"
                        checked={payment.ageVerification}
                        onChange={(e) => setPayment((p) => ({ ...p, ageVerification: e.target.checked }))}
                      />
                      <span className="text-sm text-foreground">
                        I confirm that I am 21 years of age or older and legally authorized to purchase tobacco products in my jurisdiction.
                      </span>
                    </label>

                    <label className={`flex items-start space-x-3 cursor-pointer ${errors.businessVerification ? 'text-destructive' : ''}`}>
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary mt-1"
                        checked={payment.businessVerification}
                        onChange={(e) => setPayment((p) => ({ ...p, businessVerification: e.target.checked }))}
                      />
                      <span className="text-sm text-foreground">
                        I confirm that this purchase is for a legitimate business and will comply with all local, state, and federal regulations regarding
                        the sale and distribution of vaping products.
                      </span>
                    </label>

                    <label className={`flex items-start space-x-3 cursor-pointer ${errors.termsConditions ? 'text-destructive' : ''}`}>
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary mt-1"
                        checked={payment.termsConditions}
                        onChange={(e) => setPayment((p) => ({ ...p, termsConditions: e.target.checked }))}
                      />
                      <span className="text-sm text-foreground">
                        I agree to the{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Terms &amp; Conditions
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                  </div>
                </section>

                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    className="px-6 py-3 border border-border rounded-xl font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => goTo('shipping')}
                  >
                    <i className="fas fa-arrow-left mr-2"></i>Back to Shipping
                  </button>

                  <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Continue to Review <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </form>
            </div>
          )}

          {isStep3 && (
            <div id="step-3-content" className="space-y-6">
              {/* My Cart (review) */}
              <section className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">My Cart</h2>
                <div className="space-y-4">
                  {orderItems.map((item) => (
                    <div key={`review-${item.id}`} className="bg-background border border-border rounded-2xl p-5">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-foreground">{item.name}</div>
                          <div className="text-sm text-secondary">80W Pod Mod with RPM3 Coils</div>
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-xs text-secondary">
                            <span>Color: Black</span>
                            <span>SKU: SMOK-N5-001</span>
                            <span className="bg-muted/40 px-3 py-1 rounded-full">Qty: 5</span>
                          </div>
                        </div>
                        <div className="text-right min-w-[110px]">
                          <div className="text-2xl font-bold text-foreground">$840.00</div>
                          <div className="text-xs text-secondary">$7.00 each</div>
                        </div>
                        <button type="button" className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors" aria-label="Remove item">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Shipping Address</h2>
                <div className="font-semibold text-foreground mb-2">Address 1</div>
                <div className="text-secondary leading-relaxed">
                  {(() => {
                    const a = savedAddresses.find((x) => x.id === selectedAddressId) ?? savedAddresses[0];
                    return (
                      <>
                        {a.line1}
                        <br />
                        {a.line2}
                      </>
                    );
                  })()}
                </div>
              </section>

              <section className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Shipping Method</h2>
                <div className="text-secondary">
                  {shippingMethodChoice === 'carrier'
                    ? 'Carrier-specific methods'
                    : shippingMethodChoice === 'other'
                      ? 'Other Delivery Methods'
                      : 'Pickup Only'}
                </div>
              </section>

              <section className="bg-card border border-border rounded-2xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Payment Method</h2>
                <div className="text-secondary">
                  {paymentMethod === 'bank-transfer'
                    ? 'Bank Transfer (Online) via payment gateway'
                    : paymentMethod === 'customer-service'
                      ? 'via Customer Service'
                      : paymentMethod === 'credit-card'
                        ? 'Credit/Debit Card'
                        : 'Net Terms'}
                </div>
              </section>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  className="px-6 py-3 border border-border rounded-full font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => goTo('payment')}
                >
                  <i className="fas fa-arrow-left mr-2"></i>Back to Payment
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          {isStep1 ? (
            <div className="space-y-6 sticky top-24">
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
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-secondary text-white font-semibold shadow hover:opacity-90 transition-opacity"
                    >
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
          ) : isStep3 ? (
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment Summary</h2>

                <div className="space-y-3 text-sm pb-4 border-b border-border">
                  <div className="flex justify-between text-secondary">
                    <span>Subtotal (3 items)</span>
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
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-secondary text-white font-semibold shadow hover:opacity-90 transition-opacity"
                    >
                      Apply
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      window.alert('Order placed (demo)');
                      navigate('/', { replace: true });
                    }}
                    className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
                  >
                    Order Now
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
          ) : (
            <div id="order-summary" className="bg-card rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-border">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img src={item.image} alt="product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-secondary">{item.qtyLabel}</p>
                    </div>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Subtotal</span>
                  <span className="font-medium">{activeStep === 'payment' || activeStep === 'review' ? '$2,800.00' : 'Login to view'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Shipping</span>
                  <span className="font-medium">{activeStep === 'payment' || activeStep === 'review' ? 'Free' : 'Calculated at review'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Tax</span>
                  <span className="font-medium">{activeStep === 'payment' || activeStep === 'review' ? '$238.00' : 'Calculated at review'}</span>
                </div>

                <div className="pt-4">
                  <div className="text-sm font-semibold text-foreground mb-3">Discount Code</div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-3 rounded-full border border-border bg-background outline-none"
                    />
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-secondary text-white font-semibold shadow hover:opacity-90 transition-opacity"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">{activeStep === 'payment' || activeStep === 'review' ? '$3,038.00' : '$XXX.XX'}</span>
                </div>

                {activeStep === 'shipping' && (
                  <div className="bg-muted/50 p-3 rounded-lg text-xs text-secondary">
                    <i className="fas fa-circle-info mr-1"></i>Final pricing will be displayed after login verification
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-secondary">
                  <i className="fas fa-shield-halved text-primary mr-2"></i>
                  <span>Secure SSL Encryption</span>
                </div>
                <div className="flex items-center text-sm text-secondary">
                  <i className="fas fa-truck text-primary mr-2"></i>
                  <span>Free shipping on orders $500+</span>
                </div>
                <div className="flex items-center text-sm text-secondary">
                  <i className="fas fa-rotate-left text-primary mr-2"></i>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;


