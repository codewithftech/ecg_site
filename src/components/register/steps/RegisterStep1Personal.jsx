import { Link } from 'react-router-dom';

const RegisterStep1Personal = ({
  form,
  setForm,
  showPassword,
  setShowPassword,
  showConfirm,
  setShowConfirm,
  mismatch,
  submitted,
  checks,
  onSubmit,
}) => {
  return (
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
  );
};

export default RegisterStep1Personal;


