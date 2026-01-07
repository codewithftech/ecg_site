import { useEffect, useMemo, useRef, useState } from 'react';

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
      {/* Contact Hero Section */}
      <section id="contact-hero" className="bg-primary h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl font-bold mb-6">Let's Connect with Your Business.</h1>
            <p className="text-xl opacity-90 mb-8">
              Ready to partner with us? Get in touch and discover how we can help grow your business with our wholesale
              solutions.
            </p>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone w-4"></i>
                <span>1-800-ECIG-PRO</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope w-4"></i>
                <span>sales@strictlyecig.com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-clock w-4"></i>
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact-content" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div id="contact-form-section" className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-secondary mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        onChange={(e) => setField('firstName', e.target.value)}
                        className={inputBase + withError('firstName')}
                        required
                      />
                      {errors.firstName && <div className="text-destructive text-sm mt-1">{errors.firstName}</div>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        onChange={(e) => setField('lastName', e.target.value)}
                        className={inputBase + withError('lastName')}
                        required
                      />
                      {errors.lastName && <div className="text-destructive text-sm mt-1">{errors.lastName}</div>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => setField('email', e.target.value)}
                        className={inputBase + withError('email')}
                        required
                      />
                      {errors.email && <div className="text-destructive text-sm mt-1">{errors.email}</div>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={(e) => setField('phone', e.target.value)}
                        className={inputBase + withError('phone')}
                      />
                      {errors.phone && <div className="text-destructive text-sm mt-1">{errors.phone}</div>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={values.company}
                      onChange={(e) => setField('company', e.target.value)}
                      className={inputBase + withError('company')}
                      required
                    />
                    {errors.company && <div className="text-destructive text-sm mt-1">{errors.company}</div>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={values.subject}
                      onChange={(e) => setField('subject', e.target.value)}
                      className={inputBase + withError('subject')}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="wholesale-inquiry">Wholesale Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Customer Support</option>
                      <option value="billing">Billing Questions</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <div className="text-destructive text-sm mt-1">{errors.subject}</div>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={(e) => setField('message', e.target.value)}
                      className={
                        'w-full px-4 py-3 rounded-3xl border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none' +
                        (errors.message ? ' border-destructive' : '')
                      }
                      required
                    />
                    {errors.message && <div className="text-destructive text-sm mt-1">{errors.message}</div>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="fas fa-paper-plane ml-2"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div id="contact-sidebar" className="space-y-8">
              {/* Support Hours */}
              <div className="bg-card rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <i className="fas fa-clock text-primary"></i>
                  Support Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                  <div className="text-sm text-secondary mt-4 p-3 bg-muted rounded-2xl">
                    <i className="fas fa-circle-info mr-2"></i>
                    All times are in Eastern Standard Time (EST)
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-card rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <i className="fas fa-headset text-primary"></i>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-muted transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-secondary">1-800-ECIG-PRO</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-muted transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-secondary">sales@strictlyecig.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-muted transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-comments text-primary"></i>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Live Chat</div>
                      <div className="text-sm text-secondary">Available during business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-accent/10 rounded-3xl p-6 border border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <i className="fas fa-triangle-exclamation text-accent"></i>
                  Urgent Matters
                </h3>
                <p className="text-sm text-secondary mb-3">For urgent business matters outside of business hours:</p>
                <a href="tel:1-800-URGENT" className="text-accent font-medium hover:underline">
                  1-800-URGENT-1
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section id="map-section" className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Headquarters</h2>
            <p className="text-secondary">Located in the heart of the business district</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-3xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3959!2d-74.0059413!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959045"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-3xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Office Address</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-location-dot text-primary mt-1"></i>
                    <div>
                      <div className="font-medium text-foreground">Strictly ECIG Headquarters</div>
                      <div className="text-secondary text-sm">
                        123 Business Boulevard
                        <br />
                        Suite 500
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-3xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Transportation</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-train-subway text-primary"></i>
                    <span className="text-secondary">Subway: Times Square-42nd St</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-bus text-primary"></i>
                    <span className="text-secondary">Bus: Multiple lines available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-car text-primary"></i>
                    <span className="text-secondary">Parking: Garage available nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Toast */}
      <div
        id="success-toast"
        className={`fixed top-20 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg transform ${
          toastOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center gap-3">
          <i className="fas fa-circle-check"></i>
          <span>Message sent successfully! We'll get back to you soon.</span>
        </div>
      </div>
    </>
  );
};

export default Contact;

