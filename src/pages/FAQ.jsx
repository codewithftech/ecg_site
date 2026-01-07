import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  const faqs = useMemo(
    () => [
      {
        id: 'q1',
        category: 'shipping',
        question: 'What are your shipping options and delivery times?',
        answer:
          'We offer multiple shipping options including standard ground (3-5 business days), expedited (2-3 business days), and overnight delivery. All orders are processed within 24 hours on business days. Free shipping is available for orders over $500.',
      },
      {
        id: 'q2',
        category: 'compliance',
        question: 'What compliance requirements do I need for wholesale purchasing?',
        answer:
          'All wholesale customers must provide valid business licenses, tax ID numbers, and age verification. We require tobacco retail licenses where applicable and maintain strict compliance with FDA regulations and state laws.',
      },
      {
        id: 'q3',
        category: 'ordering',
        question: 'What is the minimum order quantity?',
        answer:
          'Our minimum order value is $250. Some products may have specific minimum quantities. Bulk discounts are available for larger orders, with tier pricing starting at $1,000, $2,500, and $5,000+ orders.',
      },
      {
        id: 'q4',
        category: 'account',
        question: 'How do I apply for a wholesale account?',
        answer:
          'Click "Apply for Business Account" and complete the application form. You\'ll need to provide business documentation, tax information, and references. Account approval typically takes 1-3 business days after document verification.',
      },
      {
        id: 'q5',
        category: 'products',
        question: 'Do you provide lab reports and certificates?',
        answer:
          'Yes, we provide comprehensive lab reports, safety certificates, and compliance documentation for all products. These are available in your account dashboard and can be downloaded for your records.',
      },
      {
        id: 'q6',
        category: 'shipping',
        question: 'What is your return and exchange policy?',
        answer:
          'We accept returns within 30 days for defective products. All returns must be in original packaging and unused condition. Custom orders and e-liquids are non-returnable due to health regulations.',
      },
      {
        id: 'q7',
        category: 'ordering',
        question: 'What payment methods do you accept?',
        answer:
          'We accept bank transfers, business checks, and approved credit applications. Credit terms are available for qualified accounts with net 30-day payment terms after approval.',
      },
      {
        id: 'q8',
        category: 'compliance',
        question: 'Are your products FDA compliant?',
        answer:
          'All our products meet current FDA regulations and requirements. We maintain up-to-date compliance documentation and work closely with manufacturers to ensure all products meet safety standards.',
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { key: 'all', label: 'All' },
      { key: 'shipping', label: 'Shipping' },
      { key: 'compliance', label: 'Compliance' },
      { key: 'ordering', label: 'Ordering' },
      { key: 'account', label: 'Account' },
      { key: 'products', label: 'Products' },
    ],
    []
  );

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchesCategory = activeCategory === 'all' || f.category === activeCategory;
      const matchesQuery = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, faqs, query]);

  useEffect(() => {
    // if the open question is filtered out, close it
    if (!openId) return;
    const stillVisible = filteredFaqs.some((f) => f.id === openId);
    if (!stillVisible) setOpenId(null);
  }, [filteredFaqs, openId]);

  const testimonials = useMemo(
    () => [
      {
        id: 't1',
        name: 'Mike Johnson',
        role: 'Vape Shop Owner',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
        quote:
          '"Excellent product quality and fast shipping. StrictlyEcig has been our trusted wholesale partner for over 3 years."',
      },
      {
        id: 't2',
        name: 'Sarah Chen',
        role: 'Retailer',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
        quote:
          '"The customer service is outstanding. They always have the latest products and competitive wholesale pricing."',
      },
      {
        id: 't3',
        name: 'David Martinez',
        role: 'Store Manager',
        avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        quote:
          '"Reliable inventory and smooth ordering process. Their compliance documentation is always up-to-date."',
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => {
      setCurrentSlide((s) => (s + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(t);
  }, [testimonials.length]);

  return (
    <main id="faq-main" className="container mx-auto px-6 py-12">
      <div id="faq-header" className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-secondary text-lg mb-8">
          Find answers to common questions about our wholesale vaping products and services
        </p>

        <div id="faq-search" className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 rounded-full border border-border bg-input text-foreground placeholder-secondary/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <i className="fas fa-magnifying-glass absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary"></i>
          </div>
        </div>
      </div>

      <div id="faq-categories" className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((c) => {
          const active = c.key === activeCategory;
          return (
            <button
              key={c.key}
              type="button"
              className={
                active
                  ? 'category-btn active bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium transition-all'
                  : 'category-btn bg-muted text-foreground px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all'
              }
              onClick={() => setActiveCategory(c.key)}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div id="faq-content" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div id="faq-questions" className="lg:col-span-2">
          <div className="space-y-4">
            {filteredFaqs.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div key={f.id} className="faq-item bg-card rounded-xl border border-border shadow-sm">
                  <button
                    type="button"
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 rounded-xl transition-colors"
                    onClick={() => setOpenId((prev) => (prev === f.id ? null : f.id))}
                  >
                    <h3 className="font-semibold text-foreground">{f.question}</h3>
                    <i
                      className="fas fa-chevron-down text-secondary transition-transform"
                      style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className={`faq-answer px-6 pb-6 ${isOpen ? '' : 'hidden'}`}>
                    <p className="text-secondary">{f.answer}</p>
                  </div>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 text-center">
                <p className="text-secondary">No FAQs found. Try a different search.</p>
              </div>
            )}
          </div>
        </div>

        <div id="faq-sidebar" className="space-y-8">
          <div id="contact-card" className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Need More Help?</h3>
            <p className="text-secondary text-sm mb-4">
              Can&apos;t find what you&apos;re looking for? Our wholesale support team is here to help.
            </p>
            <div className="space-y-3">
              <a href="tel:555-123-4567" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <i className="fas fa-phone mr-2"></i>
                <span className="text-sm">(555) 123-4567</span>
              </a>
              <a
                href="mailto:wholesale@strictlyecig.com"
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>
                <span className="text-sm">wholesale@strictlyecig.com</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition-opacity block text-center"
            >
              Contact Support
            </Link>
          </div>

          <div id="testimonials-slider" className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">What Our Partners Say</h3>
            <div className="testimonial-container relative overflow-hidden">
              <div
                className="testimonial-slider flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="testimonial-slide min-w-full">
                    <div className="flex items-center mb-3">
                      <img src={t.avatar} alt="Customer" className="w-12 h-12 rounded-full mr-3" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{t.name}</h4>
                        <p className="text-secondary text-xs">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-secondary text-sm italic">{t.quote}</p>
                    <div className="flex text-accent mt-2">
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`testimonial-dot w-2 h-2 rounded-full ${i === currentSlide ? 'bg-primary' : 'bg-secondary'}`}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div id="resources-card" className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="font-semibold text-foreground mb-4">Helpful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-file-pdf mr-2"></i>Wholesale Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-book mr-2"></i>Compliance Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-truck mr-2"></i>Shipping Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-shield-halved mr-2"></i>Product Safety
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

