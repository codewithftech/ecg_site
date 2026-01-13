const ContactForm = ({ values, errors, isSubmitting, inputBase, withError, onField, onSubmit }) => {
  return (
    <div id="contact-form-section" className="lg:col-span-2">
      <div className="bg-card rounded-3xl p-5 sm:p-8 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
        <p className="text-secondary mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

        <form id="contact-form" className="space-y-6" onSubmit={onSubmit} noValidate>
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
                onChange={(e) => onField('firstName', e.target.value)}
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
                onChange={(e) => onField('lastName', e.target.value)}
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
                onChange={(e) => onField('email', e.target.value)}
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
                onChange={(e) => onField('phone', e.target.value)}
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
              onChange={(e) => onField('company', e.target.value)}
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
              onChange={(e) => onField('subject', e.target.value)}
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
              onChange={(e) => onField('message', e.target.value)}
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
  );
};

export default ContactForm;


