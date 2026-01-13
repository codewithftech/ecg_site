const RegisterStep5Review = ({ form, business, contact, onBack, onSubmit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
        Review &amp; Submit
      </h2>
      <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
        Please review your information before submitting
      </p>

      <form className="mt-6 space-y-6" onSubmit={onSubmit}>
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
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep5Review;


