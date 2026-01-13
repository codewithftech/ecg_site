import { useEffect, useMemo, useRef, useState } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactSidebar from '../components/contact/ContactSidebar';
import MapSection from '../components/contact/MapSection';
import SuccessToast from '../components/contact/SuccessToast';

const Contact = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const toastTimerRef = useRef(null);

  const requiredFields = useMemo(
    () => ['firstName', 'lastName', 'email', 'company', 'subject', 'message'],
    []
  );

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    // live clear
    setErrors((e) => {
      if (!e[name]) return e;
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const validateAll = () => {
    const nextErrors = {};

    requiredFields.forEach((name) => {
      if (!String(values[name] ?? '').trim()) {
        nextErrors[name] = 'This field is required';
      }
    });

    if (values.email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email.trim())) {
        nextErrors.email = 'Please enter a valid email address';
      }
    }

    if (values.phone?.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
      if (!phoneRegex.test(values.phone.trim())) {
        nextErrors.phone = 'Please enter a valid phone number';
      }
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const showToast = () => {
    setToastOpen(true);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastOpen(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateAll();
    const firstErrorKey = Object.keys(nextErrors)[0];

    if (firstErrorKey) {
      const el = document.getElementById(firstErrorKey);
      if (el?.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (el?.focus) el.focus();
      return;
    }

    setIsSubmitting(true);
    // simulate request
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);

    setValues({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setErrors({});
    showToast();
  };

  const inputBase =
    'w-full px-4 py-3 rounded-full border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all';

  const withError = (name) => (errors[name] ? ' border-destructive' : '');

  return (
    <>
      <ContactHero />

      {/* Contact Content */}
      <section id="contact-content" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ContactForm
              values={values}
              errors={errors}
              isSubmitting={isSubmitting}
              inputBase={inputBase}
              withError={withError}
              onField={setField}
              onSubmit={handleSubmit}
            />

            <ContactSidebar />
          </div>
        </div>
      </section>

      <MapSection />

      <SuccessToast
        open={toastOpen}
        message={"Message sent successfully! We'll get back to you soon."}
      />
    </>
  );
};

export default Contact;

