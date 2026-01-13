const ContactSidebar = () => {
  return (
    <div id="contact-sidebar" className="space-y-8">
      <div className="bg-card rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <i className="fas fa-clock text-primary"></i>
          Support Hours
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between gap-4">
            <span className="text-secondary">Monday - Friday</span>
            <span className="text-foreground font-medium text-right">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-secondary">Saturday</span>
            <span className="text-foreground font-medium text-right">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-secondary">Sunday</span>
            <span className="text-foreground font-medium text-right">Closed</span>
          </div>
          <div className="text-sm text-secondary mt-4 p-3 bg-muted rounded-2xl">
            <i className="fas fa-circle-info mr-2"></i>
            All times are in Eastern Standard Time (EST)
          </div>
        </div>
      </div>

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
            <div className="min-w-0">
              <div className="font-medium text-foreground">Email</div>
              <div className="text-sm text-secondary break-words">sales@strictlyecig.com</div>
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
  );
};

export default ContactSidebar;


