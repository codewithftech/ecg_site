import { Link } from 'react-router-dom';

const RegisterStep4Preferences = ({ preferences, setPreferences, submitted, setSubmitted, onBack, onSubmit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
        Preferences &amp; Opt-ins
      </h2>
      <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
        Customize your account preferences
      </p>

      <form
        className="mt-6 space-y-6"
        onSubmit={(e) => {
          setSubmitted(true);
          onSubmit(e);
        }}
      >
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
            onClick={onBack}
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
  );
};

export default RegisterStep4Preferences;


