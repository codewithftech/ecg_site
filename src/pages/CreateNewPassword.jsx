import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const CreateNewPassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const checks = useMemo(() => {
    const pwd = newPassword;
    return [
      { id: 'len', label: 'Minimum 10 characters', ok: pwd.length >= 10 },
      { id: 'upper', label: 'At least one uppercase letter', ok: hasUpper(pwd) },
      { id: 'lower', label: 'At least one lowercase letter', ok: hasLower(pwd) },
      { id: 'num', label: 'At least one number', ok: hasNumber(pwd) },
      { id: 'spec', label: 'At least one special character', ok: hasSpecial(pwd) },
    ];
  }, [newPassword]);

  const strengthCount = checks.reduce((acc, c) => acc + (c.ok ? 1 : 0), 0);
  const strengthPct = Math.round((strengthCount / checks.length) * 100);
  const mismatch = confirm.length > 0 && newPassword !== confirm;

  const strengthColor =
    strengthPct >= 80 ? '#22C55E' : strengthPct >= 40 ? '#F59E0B' : '#EF4444';

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (mismatch) return;
    if (strengthCount < 3) return;
    // demo flow - return user to login
    navigate('/login', { replace: true });
  };

  return (
    <main id="create-new-password-main" className="min-h-screen bg-gradient-to-r from-primary to-accent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Image Section (reuse login visual) */}
          <div id="create-new-password-illustration" className="hidden lg:block">
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

          {/* Right Side - Create New Password Form */}
          <div id="create-new-password-form-section" className="w-full  mx-auto lg:max-w-none flex flex-col">
            <div className="bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#EEEEEE] p-8 lg:p-12">
              <div className="text-center mb-8">
                <h1
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: '1.2', color: '#0F172A' }}
                >
                  Create New Password
                </h1>
                <p className="text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                  Enter a strong password for your account
                </p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                {/* New password */}
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#0F172A' }}
                  >
                    New Password *
                  </label>
                  <div className="relative">
                    <input
                      id="new-password"
                      type={showNew ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12"
                      required
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-foreground transition-colors"
                      aria-label={showNew ? 'Hide password' : 'Show password'}
                    >
                      <i className={`far ${showNew ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>

                  <div className="mt-3">
                    <div className="text-xs text-secondary mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                      Password strength:
                    </div>
                    <div className="h-2 rounded-full bg-[#E5E7EB] overflow-hidden">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${strengthPct}%`, backgroundColor: strengthColor, transition: 'width 200ms' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Confirm */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#0F172A' }}
                  >
                    Confirm New Password *
                  </label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      type={showConfirm ? 'text' : 'password'}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12"
                      required
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5' }}
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
                    <div className="mt-2 text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: '#EF4444' }}>
                      Passwords do not match
                    </div>
                  )}
                </div>

                {/* Requirements */}
                <div className="bg-[#F8FAFC] rounded-2xl p-5">
                  <div className="font-semibold text-foreground mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                    Password Requirements:
                  </div>
                  <div className="space-y-2">
                    {checks.map((c) => (
                      <div key={c.id} className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: c.ok ? '#DCFCE7' : '#FEE2E2' }}
                        >
                          <i
                            className={`fas ${c.ok ? 'fa-check' : 'fa-xmark'}`}
                            style={{ color: c.ok ? '#16A34A' : '#EF4444', fontSize: 12 }}
                          ></i>
                        </span>
                        <span className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                          {c.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {submitted && strengthCount < 3 && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    Please choose a stronger password.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: '1.5' }}
                >
                  Reset Password
                </button>

                <Link
                  to="/login"
                  className="block w-full text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#64748B' }}
                >
                  Cancel Reset
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateNewPassword;


