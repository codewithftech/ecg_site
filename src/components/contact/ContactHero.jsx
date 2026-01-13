const ContactHero = () => {
  return (
    <section id="contact-hero" className="bg-primary min-h-[320px] sm:min-h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
      <div className="relative container mx-auto px-6 h-full flex items-center py-14 sm:py-0">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl font-bold my-6">Let's Connect with Your Business.</h1>
          <p className="text-base sm:text-xl opacity-90 mb-8">
            Ready to partner with us? Get in touch and discover how we can help grow your business with our wholesale
            solutions.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone w-4"></i>
              <span>1-800-ECIG-PRO</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope w-4"></i>
              <span className="break-words">sales@strictlyecig.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock w-4"></i>
              <span>Mon-Fri 9AM-6PM EST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;


