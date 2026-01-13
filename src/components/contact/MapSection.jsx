const MapSection = () => {
  return (
    <section id="map-section" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Visit Our Headquarters</h2>
          <p className="text-secondary">Located in the heart of the business district</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-3xl overflow-hidden h-80 sm:h-96">
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
  );
};

export default MapSection;


