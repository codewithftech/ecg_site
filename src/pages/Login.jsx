import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('12345');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.ok) {
      setError('');
      navigate('/', { replace: true });
      return;
    }
    setError(result.message || 'Invalid email or password.');
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main id="login-main" className="min-h-screen bg-gradient-to-r from-primary to-accent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        
        {/* Left Side - Image Section */}
        <div id="login-illustration" className="hidden lg:block">
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
              <h3 className="text-2xl font-bold mb-2" style={{fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 700, lineHeight: '1.33'}}>
                Welcome to StrictlyEcig
              </h3>
              <p className="text-white/90" style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5'}}>
                Your trusted B2B wholesale partner for premium vaping products
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form Section */}
        <div id="login-form-section" className="w-full  mx-auto lg:max-w-none flex flex-col">
          {/* Login Form Card */}
          <div className="bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#EEEEEE] p-8 lg:p-12 order-1">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2" style={{fontFamily: "'Poppins', sans-serif", fontSize: '30px', fontWeight: 700, lineHeight: '1.2', color: '#0F172A'}}>
                Welcome Back
              </h1>
              <p className="text-secondary" style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5', color: '#64748B'}}>
                Sign in to your wholesale account
              </p>
            </div>

            <form id="login-form" className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#0F172A'}}>
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                    required 
                    style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5'}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary">
                    <path d="M2 4C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4H2ZM2 6H14V8L8 12L2 8V6ZM2 18V10.5L7.5 13.5C7.8 13.7 8.2 13.7 8.5 13.5L14 10.5V18H2Z" fill="#64748B"/>
                  </svg>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.5', color: '#0F172A'}}>
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    className="w-full px-4 py-3 rounded-full border border-[#EEEEEE] bg-white text-foreground placeholder-[#ADAEBC] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12" 
                    required 
                    style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 400, lineHeight: '1.5'}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    type="button" 
                    onClick={togglePassword} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7062 11.7062L15.7062 8.70615C16.0968 8.31553 16.0968 7.68115 15.7062 7.29053L12.7062 4.29053C12.3155 3.8999 11.6812 3.8999 11.2905 4.29053C10.8999 4.68115 10.8999 5.31553 11.2905 5.70615L12.5843 6.9999H3.4124L4.70615 5.70615C5.09678 5.31553 5.09678 4.68115 4.70615 4.29053C4.31553 3.8999 3.68115 3.8999 3.29053 4.29053L0.290527 7.29053C-0.100098 7.68115 -0.100098 8.31553 0.290527 8.70615L3.29053 11.7062C3.68115 12.0968 4.31553 12.0968 4.70615 11.7062C5.09678 11.3155 5.09678 10.6812 4.70615 10.2905L3.41553 8.9999H12.5874L11.2937 10.2937C10.903 10.6843 10.903 11.3187 11.2937 11.7093C11.6843 12.0999 12.3187 12.0999 12.7093 11.7093L12.7062 11.7062Z" fill="black"/>
                      </svg>
                    ) : (
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99995 2.5C6.96245 2.5 5.28745 3.425 4.00308 4.61562C2.79995 5.73438 1.9687 7.0625 1.5437 8C1.9687 8.9375 2.79995 10.2656 3.99995 11.3844C5.28745 12.575 6.96245 13.5 8.99995 13.5C11.0375 13.5 12.7125 12.575 13.9968 11.3844C15.2 10.2656 16.0312 8.9375 16.4562 8C16.0312 7.0625 15.2 5.73438 14 4.61562C12.7125 3.425 11.0375 2.5 8.99995 2.5ZM2.9812 3.51875C4.45308 2.15 6.47495 1 8.99995 1C11.525 1 13.5468 2.15 15.0187 3.51875C16.4812 4.87812 17.4593 6.5 17.9249 7.61562C18.0281 7.8625 18.0281 8.1375 17.9249 8.38437C17.4593 9.5 16.4812 11.125 15.0187 12.4812C13.5468 13.85 11.525 15 8.99995 15C6.47495 15 4.45308 13.85 2.9812 12.4812C1.5187 11.125 0.540576 9.5 0.0780762 8.38437C-0.0250488 8.1375 -0.0250488 7.8625 0.0780762 7.61562C0.540576 6.5 1.5187 4.875 2.9812 3.51875ZM8.99995 10.5C10.3812 10.5 11.5 9.38125 11.5 8C11.5 6.61875 10.3812 5.5 8.99995 5.5C8.97808 5.5 8.95933 5.5 8.93745 5.5C8.97808 5.65938 8.99995 5.82812 8.99995 6C8.99995 7.10313 8.10308 8 6.99995 8C6.82808 8 6.65933 7.97813 6.49995 7.9375C6.49995 7.95937 6.49995 7.97813 6.49995 8C6.49995 9.38125 7.6187 10.5 8.99995 10.5ZM8.99995 4C10.0608 4 11.0782 4.42143 11.8284 5.17157C12.5785 5.92172 13 6.93913 13 8C13 9.06087 12.5785 10.0783 11.8284 10.8284C11.0782 11.5786 10.0608 12 8.99995 12C7.93909 12 6.92167 11.5786 6.17152 10.8284C5.42138 10.0783 4.99995 9.06087 4.99995 8C4.99995 6.93913 5.42138 5.92172 6.17152 5.17157C6.92167 4.42143 7.93909 4 8.99995 4Z" fill="black"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-[13px] h-[13px] rounded border border-black/50 text-primary focus:ring-primary focus:ring-offset-0" 
                    style={{borderRadius: '1px'}}
                  />
                  <span className="ml-2 text-sm text-secondary" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.43', color: '#64748B'}}>
                    Remember me
                  </span>
                </label>
                <Link to="/reset-password" className="text-sm text-primary hover:text-primary/80 transition-colors" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.5', color: '#0EB7EE'}}>
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button 
                type="submit" 
                className="w-full bg-[#0EB7EE] text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center" 
                style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: '1.5'}}
              >
                <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M15.5 11.5L10.5 6.5M15.5 11.5L10.5 16.5M15.5 11.5H0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign In
              </button>
            </form>

            {/* Apply Now Section */}
            <div className="mt-8 text-center">
              <p className="text-secondary text-sm mb-2" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.43', color: '#64748B'}}>
                Don't have a wholesale account?
              </p>
              <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium inline-block" style={{fontFamily: "'Poppins', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: '1.5', color: '#0EB7EE'}}>
                Apply Now
              </Link>
            </div>
          </div>

          {/* Business Account Notice (below form) */}
          <div id="business-notice" className="mt-6 bg-white border border-[#E5E7EB] rounded-xl p-4 order-2">
            <div className="flex items-start space-x-3">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 flex-shrink-0">
                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12ZM8 6C7.45 6 7 6.45 7 7V9C7 9.55 7.45 10 8 10C8.55 10 9 9.55 9 9V7C9 6.45 8.55 6 8 6Z" fill="#D08C16"/>
              </svg>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1" style={{fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, lineHeight: '1.43', color: '#0F172A'}}>
                  Business Account Required
                </h4>
                <p className="text-xs text-secondary" style={{fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 400, lineHeight: '1.33', color: '#64748B'}}>
                  This platform is exclusively for verified wholesale partners. Valid business credentials required for account approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Login;
