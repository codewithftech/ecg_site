const PrivacyContent = () => {
  return (
    <div id="content-area" className="flex-1 bg-card rounded-xl border border-border p-6 sm:p-8 lg:p-12">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
        <p className="text-secondary mb-8">Last Updated: November 17, 2024</p>

        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <p className="text-secondary leading-relaxed mb-4">
            Welcome to StrictlyEcig (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our B2B wholesale platform.
          </p>
          <p className="text-secondary leading-relaxed">
            By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our practices, please do not
            use our platform.
          </p>
        </section>

        <section id="information-collection" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Business Information</h3>
          <p className="text-secondary leading-relaxed mb-4">When you register for a business account, we collect:</p>
          <ul className="list-disc list-inside space-y-2 text-secondary mb-6">
            <li>Business name and legal entity information</li>
            <li>Tax identification number (EIN/VAT)</li>
            <li>Business license and certification documents</li>
            <li>Business address and contact information</li>
            <li>Authorized representative details</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Personal Information</h3>
          <ul className="list-disc list-inside space-y-2 text-secondary mb-6">
            <li>Name, email address, and phone number</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Account credentials (encrypted)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Automatically Collected Information</h3>
          <ul className="list-disc list-inside space-y-2 text-secondary">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our platform</li>
            <li>Referring website and search terms</li>
            <li>Cookie data and similar tracking technologies</li>
          </ul>
        </section>

        <section id="use-of-information" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
          <p className="text-secondary leading-relaxed mb-4">We use the collected information for the following purposes:</p>
          <div className="bg-muted rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Account Management</h4>
            <p className="text-secondary text-sm">Creating and managing your business account, verifying credentials, and processing applications.</p>
          </div>
          <div className="bg-muted rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Order Processing</h4>
            <p className="text-secondary text-sm">Processing orders, managing inventory, handling payments, and arranging shipments.</p>
          </div>
          <div className="bg-muted rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Customer Service</h4>
            <p className="text-secondary text-sm">Responding to inquiries, providing support, and resolving disputes.</p>
          </div>
          <div className="bg-muted rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-foreground mb-2">Marketing Communications</h4>
            <p className="text-secondary text-sm">Sending promotional materials, product updates, and industry news (with your consent).</p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-2">Compliance &amp; Legal</h4>
            <p className="text-secondary text-sm">Ensuring age verification, regulatory compliance, fraud prevention, and legal obligations.</p>
          </div>
        </section>

        <section id="data-sharing" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing &amp; Disclosure</h2>
          <p className="text-secondary leading-relaxed mb-4">We do not sell your personal information. However, we may share your data with:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fas fa-circle-check text-primary mt-1 mr-3"></i>
              <div>
                <span className="font-semibold text-foreground">Service Providers:</span>{' '}
                <span className="text-secondary">Third-party vendors who assist with payment processing, shipping, analytics, and marketing.</span>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-circle-check text-primary mt-1 mr-3"></i>
              <div>
                <span className="font-semibold text-foreground">Legal Authorities:</span>{' '}
                <span className="text-secondary">When required by law or to protect our rights and safety.</span>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-circle-check text-primary mt-1 mr-3"></i>
              <div>
                <span className="font-semibold text-foreground">Business Transfers:</span>{' '}
                <span className="text-secondary">In the event of a merger, acquisition, or sale of assets.</span>
              </div>
            </li>
          </ul>
        </section>

        <section id="cookies" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies &amp; Tracking Technologies</h2>
          <p className="text-secondary leading-relaxed mb-4">
            We use cookies and similar technologies to enhance your experience. Types of cookies we use:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
              <p className="text-secondary text-sm">Required for platform functionality and security.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
              <p className="text-secondary text-sm">Help us understand user behavior and improve our services.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
              <p className="text-secondary text-sm">Used to deliver relevant advertisements.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">Preference Cookies</h4>
              <p className="text-secondary text-sm">Remember your settings and preferences.</p>
            </div>
          </div>
          <p className="text-secondary text-sm mt-4">You can manage cookie preferences through your browser settings.</p>
        </section>

        <section id="data-security" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
          <p className="text-secondary leading-relaxed mb-4">We implement industry-standard security measures to protect your information:</p>
          <ul className="list-disc list-inside space-y-2 text-secondary">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure servers with firewall protection</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Restricted access to personal data</li>
            <li>Employee training on data protection</li>
          </ul>
          <div className="bg-accent/10 border border-accent rounded-lg p-4 mt-4">
            <p className="text-accent text-sm">
              <i className="fas fa-triangle-exclamation mr-2"></i>
              While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>
        </section>

        <section id="your-rights" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
          <p className="text-secondary leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
          <div className="space-y-3">
            {[
              { title: 'Access:', text: 'Request a copy of your personal data.' },
              { title: 'Correction:', text: 'Update or correct inaccurate information.' },
              { title: 'Deletion:', text: 'Request deletion of your data (subject to legal requirements).' },
              { title: 'Opt-Out:', text: 'Unsubscribe from marketing communications.' },
              { title: 'Data Portability:', text: 'Receive your data in a structured format.' },
            ].map((r) => (
              <div key={r.title} className="flex items-start">
                <i className="fas fa-arrow-right text-primary mt-1 mr-3"></i>
                <p className="text-secondary">
                  <span className="font-semibold text-foreground">{r.title}</span> {r.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-secondary text-sm mt-4">To exercise these rights, please contact us at privacy@strictlyecig.com</p>
        </section>

        <section id="age-restriction" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Age Restriction &amp; Compliance</h2>
          <div className="bg-destructive/10 border border-destructive rounded-lg p-6">
            <p className="text-foreground font-semibold mb-2">
              <i className="fas fa-shield-check text-destructive mr-2"></i>
              Age Verification Required
            </p>
            <p className="text-secondary leading-relaxed">
              Our platform is strictly for business-to-business transactions. All account holders must be at least 21 years of age (or the legal age in their
              jurisdiction) and hold valid business licenses. We comply with all applicable tobacco and vaping regulations, including FDA, TPD, and local laws.
            </p>
          </div>
        </section>

        <section id="changes" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-secondary leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. We
            encourage you to review this policy periodically. Continued use of our platform after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
          <p className="text-secondary leading-relaxed mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary w-6"></i>
                <span className="text-secondary">privacy@strictlyecig.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary w-6"></i>
                <span className="text-secondary">1-800-ECIG-B2B</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-location-dot text-primary w-6 mt-1"></i>
                <span className="text-secondary">123 Vape Street, Commerce City, CA 90001</span>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-border pt-8">
          <p className="text-secondary text-sm text-center">
            By using StrictlyEcig, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;


