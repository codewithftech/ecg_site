import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function hasUpper(s) {
  return /[A-Z]/.test(s);
}
function hasLower(s) {
  return /[a-z]/.test(s);
}
function hasNumber(s) {
  return /\d/.test(s);
}
function hasSpecial(s) {
  return /[^A-Za-z0-9]/.test(s);
}

const Register = () => {
  const [step, setStep] = useState(1); // 1..5 (UI only for now)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [business, setBusiness] = useState({
    taxVat: '',
    skipTobacco: false,
    taxIdFile: null,
    businessLicenseFile: null,
    tobaccoLicenseFile: null,
  });
  const [contact, setContact] = useState({
    companyName: '',
    phone: '',
    addressName: 'Address 1',
    country: '',
    state: '',
    city: '',
    zip: '',
    address1: '',
    address2: '',
    address3: '',
  });
  const [preferences, setPreferences] = useState({
    newsletter: false,
    promos: false,
    orderUpdates: true,
    agreeTos: false,
    ageVerified: false,
  });

  const taxIdInputRef = useRef(null);
  const businessLicenseInputRef = useRef(null);
  const tobaccoLicenseInputRef = useRef(null);

  const mismatch = form.confirmPassword.length > 0 && form.password !== form.confirmPassword;

  const checks = useMemo(() => {
    const pwd = form.password;
    return [
      { id: 'len', ok: pwd.length >= 10 },
      { id: 'upper', ok: hasUpper(pwd) },
      { id: 'lower', ok: hasLower(pwd) },
      { id: 'num', ok: hasNumber(pwd) },
      { id: 'spec', ok: hasSpecial(pwd) },
    ];
  }, [form.password]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (mismatch) return;
    setStep(2);
  };

  const onBusinessSubmit = (e) => {
    e.preventDefault();
    // demo: move to step 3
    setStep(3);
  };

  const onContactSubmit = (e) => {
    e.preventDefault();
    // demo: move to step 4
    setStep(4);
  };

  const onPreferencesSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!preferences.agreeTos || !preferences.ageVerified) return;
    setStep(5);
  };

  const onFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // demo only: send to login after submission
    window.alert('Application submitted (demo). Your account will be reviewed.');
    window.location.href = '/login';
  };

  const FileBox = ({ title, file, onClick, disabled }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`w-full border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${
          disabled ? 'bg-[#F8FAFC] border-[#E5E7EB] cursor-not-allowed opacity-60' : 'bg-white border-[#E5E7EB] hover:border-[#0EB7EE]'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <i className="fas fa-cloud-arrow-up text-2xl text-secondary mb-3" aria-hidden="true"></i>
          <div className="font-medium text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
            {file ? file.name : 'Click to upload'}
          </div>
          <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#94A3B8' }}>
            PDF, JPG, PNG (Max 5MB)
          </div>
        </div>
      </button>
    );
  };

  return (
    <main
      id="register-main"
      className="min-h-screen py-12"
      style={{
        background: 'linear-gradient(90deg, #13B5E6 0%, #C08A1C 100%)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Image Section (same visual as login) */}
          <div id="register-illustration" className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4acdbd98f8-4205ad13c48d519d6453.png"
                  alt="modern vape wholesale business illustration with professional design elements"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 z-10 text-white">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 700, lineHeight: '1.33' }}
                >
                  Welcome to StrictlyEcig
                </h3>
                <p
                  className="text-white/90"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5' }}
                >
                  Your trusted B2B wholesale partner for premium vaping products
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Register Card */}
          <div id="register-form-section" className="w-full mx-auto lg:max-w-none flex flex-col">
            <div className="bg-white rounded-2xl shadow-[0px_10px_24px_rgba(0,0,0,0.2)] border border-[#EEEEEE] p-8 lg:p-10">
              <div className="text-center">
                <h1
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: '1.2', color: '#0F172A' }}
                >
                  Create Business Account
                </h1>
              </div>

              {/* Stepper */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {[1, 2, 3, 4, 5].map((n, idx) => {
                  const isActive = n === step;
                  const isDone = n < step;
                  return (
                    <div key={n} className="flex items-center">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                        style={{
                          backgroundColor: isActive || isDone ? '#0EB7EE' : '#E5E7EB',
                          color: isActive || isDone ? '#FFFFFF' : '#64748B',
                        }}
                      >
                        {n}
                      </div>
                      {idx < 4 && <div className="w-10 h-px bg-[#E5E7EB] mx-3" />}
                    </div>
                  );
                })}
              </div>

              {/* Step 1 */}
              {step === 1 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                  Personal Information
                </h2>
                <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                  Let's start with your basic details
                </p>

                <form className="mt-6 space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        First Name *
                      </label>
                      <input
                        value={form.firstName}
                        onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                        placeholder="Enter your first name"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Last Name *
                      </label>
                      <input
                        value={form.lastName}
                        onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                        placeholder="Enter your last name"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                      Sign-In Information
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="your@business-email.com"
                      className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                        placeholder="Create a strong password"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    <p className="text-xs text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                      Minimum 10 characters with uppercase, lowercase, number, and special character
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        value={form.confirmPassword}
                        onChange={(e) => setForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                        placeholder="Confirm your password"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors"
                        aria-label={showConfirm ? 'Hide password' : 'Show password'}
                      >
                        <i className={`far ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    {mismatch && (
                      <p className="text-xs mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#EF4444' }}>
                        Passwords do not match
                      </p>
                    )}
                    {submitted && !mismatch && form.password && checks.filter((c) => c.ok).length < 3 && (
                      <p className="text-xs mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#EF4444' }}>
                        Please choose a stronger password
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#EEEEEE] flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/login"
                      className="flex-1 text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: '#64748B' }}
                    >
                      Back to Login
                    </Link>
                    <button
                      type="submit"
                      className="flex-1 bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
                    >
                      Continue to Business Info
                    </button>
                  </div>
                </form>
              </div>
              )}

              {/* Step 2 (Business Information) */}
              {step === 2 && (
                <div className="mt-8">
                  <h2
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}
                  >
                    Business Information
                  </h2>
                  <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                    Upload your business documents for verification
                  </p>

                  <form className="mt-6 space-y-6" onSubmit={onBusinessSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Tax/VAT Number *
                      </label>
                      <input
                        value={business.taxVat}
                        onChange={(e) => setBusiness((p) => ({ ...p, taxVat: e.target.value }))}
                        placeholder="Enter your tax/VAT number"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        required
                      />
                      <p className="text-xs text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#94A3B8' }}>
                        Format varies by country
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <div className="text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Tax ID Document *
                        </div>
                        <FileBox
                          title="Tax ID Document"
                          file={business.taxIdFile}
                          onClick={() => taxIdInputRef.current?.click()}
                        />
                        <input
                          ref={taxIdInputRef}
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) => setBusiness((p) => ({ ...p, taxIdFile: e.target.files?.[0] || null }))}
                        />
                      </div>

                      <div>
                        <div className="text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Business License *
                        </div>
                        <FileBox
                          title="Business License"
                          file={business.businessLicenseFile}
                          onClick={() => businessLicenseInputRef.current?.click()}
                        />
                        <input
                          ref={businessLicenseInputRef}
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) => setBusiness((p) => ({ ...p, businessLicenseFile: e.target.files?.[0] || null }))}
                        />
                      </div>

                      <div>
                        <div className="text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Tobacco License *
                        </div>
                        <FileBox
                          title="Tobacco License"
                          file={business.tobaccoLicenseFile}
                          disabled={business.skipTobacco}
                          onClick={() => tobaccoLicenseInputRef.current?.click()}
                        />
                        <input
                          ref={tobaccoLicenseInputRef}
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) => setBusiness((p) => ({ ...p, tobaccoLicenseFile: e.target.files?.[0] || null }))}
                        />
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-5">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={business.skipTobacco}
                          onChange={(e) =>
                            setBusiness((p) => ({
                              ...p,
                              skipTobacco: e.target.checked,
                              tobaccoLicenseFile: e.target.checked ? null : p.tobaccoLicenseFile,
                            }))
                          }
                          className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                        />
                        <div>
                          <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                            I will not be purchasing tobacco/nicotine products at this address
                          </div>
                          <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            Check this to skip tobacco license upload. Tobacco/nicotine items will be mb-3 for this address.
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="pt-4 border-t border-[#EEEEEE] flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: '#64748B' }}
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
                      >
                        Continue to Contact Info
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3 (Contact Information) */}
              {step === 3 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                    Contact Information
                  </h2>
                  <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                    Business details and primary address
                  </p>

                  <form className="mt-6 space-y-6" onSubmit={onContactSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Company Name *
                        </label>
                        <input
                          value={contact.companyName}
                          onChange={(e) => setContact((p) => ({ ...p, companyName: e.target.value }))}
                          placeholder="Your Business Name"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Phone Number *
                        </label>
                        <input
                          value={contact.phone}
                          onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Address Name *
                      </label>
                      <input
                        value={contact.addressName}
                        onChange={(e) => setContact((p) => ({ ...p, addressName: e.target.value }))}
                        placeholder="Address 1"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        required
                      />
                      <p className="text-xs text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#94A3B8' }}>
                        You can add more addresses later in your dashboard
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Country *
                        </label>
                        <select
                          value={contact.country}
                          onChange={(e) => setContact((p) => ({ ...p, country: e.target.value }))}
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="UK">United Kingdom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          State/Province *
                        </label>
                        <select
                          value={contact.state}
                          onChange={(e) => setContact((p) => ({ ...p, state: e.target.value }))}
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="DXB">Dubai</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          City *
                        </label>
                        <input
                          value={contact.city}
                          onChange={(e) => setContact((p) => ({ ...p, city: e.target.value }))}
                          placeholder="Enter city"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          ZIP/Postal Code *
                        </label>
                        <input
                          value={contact.zip}
                          onChange={(e) => setContact((p) => ({ ...p, zip: e.target.value }))}
                          placeholder="12345"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Address Line 1 *
                      </label>
                      <input
                        value={contact.address1}
                        onChange={(e) => setContact((p) => ({ ...p, address1: e.target.value }))}
                        placeholder="Street address"
                        className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Address Line 2
                        </label>
                        <input
                          value={contact.address2}
                          onChange={(e) => setContact((p) => ({ ...p, address2: e.target.value }))}
                          placeholder="Apartment, suite, etc. (optional)"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Address Line 3
                        </label>
                        <input
                          value={contact.address3}
                          onChange={(e) => setContact((p) => ({ ...p, address3: e.target.value }))}
                          placeholder="Additional address info (optional)"
                          className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-[#0EB7EE] focus:ring-2 focus:ring-[#0EB7EE]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EEEEEE] flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: '#64748B' }}
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
                      >
                        Continue to Preferences
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 4 (Preferences & Opt-ins) */}
              {step === 4 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                    Preferences &amp; Opt-ins
                  </h2>
                  <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                    Customize your account preferences
                  </p>

                  <form className="mt-6 space-y-6" onSubmit={onPreferencesSubmit}>
                    {/* Communication Preferences */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-6">
                      <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Communication Preferences
                      </h3>

                      <div className="mt-5 space-y-5">
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={preferences.newsletter}
                            onChange={(e) => setPreferences((p) => ({ ...p, newsletter: e.target.checked }))}
                            className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                          />
                          <div>
                            <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                              Newsletter Subscription
                            </div>
                            <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                              Receive updates about new products, promotions, and industry news
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={preferences.promos}
                            onChange={(e) => setPreferences((p) => ({ ...p, promos: e.target.checked }))}
                            className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                          />
                          <div>
                            <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                              Promotional Offers
                            </div>
                            <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                              Get notified about special deals and wholesale discounts
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={preferences.orderUpdates}
                            onChange={(e) => setPreferences((p) => ({ ...p, orderUpdates: e.target.checked }))}
                            className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                          />
                          <div>
                            <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                              Order Updates
                            </div>
                            <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                              Essential notifications about your orders and account (recommended)
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6">
                      <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Terms &amp; Conditions
                      </h3>

                      <div className="mt-5 space-y-5">
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={preferences.agreeTos}
                            onChange={(e) => setPreferences((p) => ({ ...p, agreeTos: e.target.checked }))}
                            className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                          />
                          <div>
                            <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                              I agree to the Terms of Service and Privacy Policy <span className="text-red-500">*</span>
                            </div>
                            <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                              By checking this, you agree to our{' '}
                              <Link to="/privacy" className="text-[#0EB7EE] hover:underline">
                                Terms of Service
                              </Link>{' '}
                              and{' '}
                              <Link to="/privacy" className="text-[#0EB7EE] hover:underline">
                                Privacy Policy
                              </Link>
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={preferences.ageVerified}
                            onChange={(e) => setPreferences((p) => ({ ...p, ageVerified: e.target.checked }))}
                            className="mt-1 w-4 h-4 rounded border border-[#CBD5E1] text-[#0EB7EE] focus:ring-[#0EB7EE]"
                          />
                          <div>
                            <div className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                              Age Verification <span className="text-red-500">*</span>
                            </div>
                            <div className="text-xs text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                              I confirm that I am 21+ years old and legally authorized to purchase tobacco products for business purposes
                            </div>
                          </div>
                        </label>

                        {submitted && (!preferences.agreeTos || !preferences.ageVerified) && (
                          <div className="text-xs" style={{ fontFamily: "'Poppins', sans-serif", color: '#EF4444' }}>
                            Please accept the required terms to continue.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EEEEEE] flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: '#64748B' }}
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
                      >
                        Review &amp; Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 5 (Review & Submit) */}
              {step === 5 && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                    Review &amp; Submit
                  </h2>
                  <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                    Please review your information before submitting
                  </p>

                  <form className="mt-6 space-y-6" onSubmit={onFinalSubmit}>
                    {/* Account Summary */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-6">
                      <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                        Account Summary
                      </h3>

                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                            Personal Information
                          </div>
                          <div className="text-sm text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            {(form.firstName || 'John') + ' ' + (form.lastName || 'Smith')}
                          </div>
                          <div className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            {form.email || 'john@businessemail.com'}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                            Business Information
                          </div>
                          <div className="text-sm text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            {contact.companyName || 'ABC Wholesale Inc.'}
                          </div>
                          <div className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                            Tax ID: {business.taxVat || '12-3456789'}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                          Primary Address
                        </div>
                        <div className="text-sm text-secondary mt-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                          {contact.address1 || '123 Business Street, Suite 100'}
                        </div>
                        <div className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                          {(contact.city || 'New York') +
                            ', ' +
                            (contact.state || 'NY') +
                            ' ' +
                            (contact.zip || '10001') +
                            ', ' +
                            (contact.country ? (contact.country === 'US' ? 'United States' : contact.country) : 'United States')}
                        </div>
                      </div>
                    </div>

                    {/* Approval required alert */}
                    <div className="rounded-2xl border p-5 sm:p-6 flex gap-4" style={{ backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F59E0B1A' }}>
                        <i className="fas fa-circle-info" style={{ color: '#F97316' }}></i>
                      </div>
                      <div>
                        <div className="font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: '#B45309' }}>
                          Account Approval Required
                        </div>
                        <div className="text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: '#EA580C' }}>
                          Your account will be reviewed within 24-48 hours. You'll receive an email notification once approved.
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EEEEEE] flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="flex-1 text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 500, color: '#64748B' }}
                      >
                        Previous Step
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;


