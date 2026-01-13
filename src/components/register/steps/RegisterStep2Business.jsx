import { useRef } from 'react';
import RegisterFileBox from '../RegisterFileBox';

const RegisterStep2Business = ({ business, setBusiness, onBack, onSubmit }) => {
  const taxIdInputRef = useRef(null);
  const businessLicenseInputRef = useRef(null);
  const tobaccoLicenseInputRef = useRef(null);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
        Business Information
      </h2>
      <p className="text-sm text-secondary mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
        Upload your business documents for verification
      </p>

      <form className="mt-6 space-y-6" onSubmit={onSubmit}>
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
            <RegisterFileBox file={business.taxIdFile} onClick={() => taxIdInputRef.current?.click()} />
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
            <RegisterFileBox file={business.businessLicenseFile} onClick={() => businessLicenseInputRef.current?.click()} />
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
            <RegisterFileBox
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
            Continue to Contact Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep2Business;


