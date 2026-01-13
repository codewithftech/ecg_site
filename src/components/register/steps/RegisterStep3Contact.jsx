const RegisterStep3Contact = ({ contact, setContact, onBack, onSubmit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
        Contact Information
      </h2>
      <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
        Business details and primary address
      </p>

      <form className="mt-6 space-y-6" onSubmit={onSubmit}>
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
            Continue to Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep3Contact;


