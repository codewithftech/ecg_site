import { useMemo, useState } from 'react';
import RegisterIllustration from '../components/register/RegisterIllustration';
import RegisterStepper from '../components/register/RegisterStepper';
import RegisterStep1Personal from '../components/register/steps/RegisterStep1Personal';
import RegisterStep2Business from '../components/register/steps/RegisterStep2Business';
import RegisterStep3Contact from '../components/register/steps/RegisterStep3Contact';
import RegisterStep4Preferences from '../components/register/steps/RegisterStep4Preferences';
import RegisterStep5Review from '../components/register/steps/RegisterStep5Review';

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
          <RegisterIllustration />

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
              <RegisterStepper step={step} />

              {/* Step 1 */}
              {step === 1 && (
                <RegisterStep1Personal
                  form={form}
                  setForm={setForm}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirm={showConfirm}
                  setShowConfirm={setShowConfirm}
                  mismatch={mismatch}
                  submitted={submitted}
                  checks={checks}
                  onSubmit={onSubmit}
                />
              )}

              {/* Step 2 (Business Information) */}
              {step === 2 && (
                <RegisterStep2Business business={business} setBusiness={setBusiness} onBack={() => setStep(1)} onSubmit={onBusinessSubmit} />
              )}

              {/* Step 3 (Contact Information) */}
              {step === 3 && (
                <RegisterStep3Contact contact={contact} setContact={setContact} onBack={() => setStep(2)} onSubmit={onContactSubmit} />
              )}

              {/* Step 4 (Preferences & Opt-ins) */}
              {step === 4 && (
                <RegisterStep4Preferences
                  preferences={preferences}
                  setPreferences={setPreferences}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  onBack={() => setStep(3)}
                  onSubmit={onPreferencesSubmit}
                />
              )}

              {/* Step 5 (Review & Submit) */}
              {step === 5 && (
                <RegisterStep5Review form={form} business={business} contact={contact} onBack={() => setStep(4)} onSubmit={onFinalSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;


