import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ResetPassword = () => {
  const { defaults } = useAuth();
  const [email, setEmail] = useState(defaults?.email || '');
  const [status, setStatus] = useState('idle'); // idle | sent

  const helper = useMemo(
    () => ({
      title: 'Email must be registered',
      body: 'The email address must be associated with an existing Strictly ECIG business account.',
    }),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  return (
    <main id="reset-password-main" className="min-h-screen bg-gradient-to-r from-primary to-accent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Image Section (reuse login visual) */}
          <div id="reset-password-illustration" className="hidden lg:block">
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

          {/* Right Side - Reset Password Form */}
          <div id="reset-password-form-section" className="w-full  mx-auto lg:max-w-none flex flex-col">
            <div className="bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#EEEEEE] p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0EB7EE]/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lock text-[#0EB7EE] text-xl" aria-hidden="true"></i>
                </div>
                <h1
                  className="text-3xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '30px', fontWeight: 700, lineHeight: '1.2', color: '#0F172A' }}
                >
                  Reset Password
                </h1>
                <p
                  className="text-secondary"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5', color: '#64748B' }}
                >
                  Follow the steps to recover your account
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: '#0F172A' }}>
                  Enter Email Address
                </h3>
                <p className="text-sm text-secondary" style={{ fontFamily: "'Poppins', sans-serif", color: '#64748B' }}>
                  Enter the email address associated with your account
                </p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="reset-email"
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#0F172A' }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@business-email.com"
                    className="w-full px-5 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                    style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5' }}
                  />
                </div>

                {status === 'sent' && (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                      Reset link sent (demo). Please check your inbox.
                    </div>
                    <Link
                      to="/reset-password/new"
                      className="block w-full text-center py-3 rounded-full bg-[#0EB7EE] text-white font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: '1.5' }}
                    >
                      Continue
                    </Link>
                  </div>
                )}

                <div className="border border-[#BFDBFE] bg-[#EFF6FF] rounded-xl p-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-info text-[#2563EB] text-xs" aria-hidden="true"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1E3A8A]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {helper.title}
                      </div>
                      <div className="text-sm text-[#1D4ED8]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {helper.body}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: '1.5' }}
                >
                  Send Reset Link
                </button>

                <Link
                  to="/login"
                  className="block w-full text-center py-3 rounded-full border border-[#EEEEEE] bg-white text-secondary font-medium hover:bg-muted transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#64748B' }}
                >
                  Back to Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;


