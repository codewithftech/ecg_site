const CompanyTimeline = () => {
  const items = [
    {
      year: '2016',
      accent: false,
      title: 'Company Founded',
      text: "Started as a small retail operation with a vision to serve the growing vaping community.",
    },
    {
      year: '2018',
      accent: true,
      title: 'B2B Expansion',
      text: 'Transitioned to wholesale distribution, establishing partnerships with major manufacturers.',
    },
    {
      year: '2020',
      accent: false,
      title: 'Warehouse Expansion',
      text: 'Opened our 50,000 sq ft distribution center to serve customers nationwide.',
    },
    {
      year: '2024',
      accent: true,
      title: 'Industry Leader',
      text: 'Recognized as the top B2B vape distributor with over 5,000 active retail partners.',
    },
  ];

  return (
    <section id="company-timeline" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            From a small startup to the leading B2B vape distributor, here's our story of growth and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Desktop center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            <div className="space-y-6 md:space-y-12">
              {items.map((it, idx) => {
                const dotClass = it.accent ? 'bg-accent' : 'bg-primary';
                const yearClass = it.accent ? 'text-accent' : 'text-primary';
                const alignLeftOnDesktop = idx % 2 === 0;

                return (
                  <div key={it.year} className="md:flex md:items-center">
                    {/* Mobile: year above card */}
                    <div className={`md:hidden ${yearClass} font-semibold mb-2`}>{it.year}</div>

                    {/* Desktop: left/right layout */}
                    <div className="hidden md:block flex-1 pr-8 text-right">
                      {alignLeftOnDesktop ? (
                        <div className="bg-card p-6 rounded-xl shadow-sm inline-block text-left">
                          <h3 className="font-semibold text-foreground mb-2">{it.title}</h3>
                          <p className="text-secondary text-sm">{it.text}</p>
                        </div>
                      ) : (
                        <span className={`${yearClass} font-semibold`}>{it.year}</span>
                      )}
                    </div>

                    {/* Dot */}
                    <div className={`hidden md:block w-4 h-4 ${dotClass} rounded-full border-4 border-background z-10`}></div>

                    <div className="hidden md:block flex-1 pl-8">
                      {!alignLeftOnDesktop ? (
                        <div className="bg-card p-6 rounded-xl shadow-sm">
                          <h3 className="font-semibold text-foreground mb-2">{it.title}</h3>
                          <p className="text-secondary text-sm">{it.text}</p>
                        </div>
                      ) : (
                        <span className={`${yearClass} font-semibold`}>{it.year}</span>
                      )}
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden bg-card p-6 rounded-xl shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 ${dotClass} rounded-full`} />
                        <h3 className="font-semibold text-foreground">{it.title}</h3>
                      </div>
                      <p className="text-secondary text-sm">{it.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;


