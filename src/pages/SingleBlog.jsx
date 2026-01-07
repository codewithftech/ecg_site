import { useParams, Link } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();

  // In a real app, you'd fetch this data based on the id
  const blogPost = {
    id: id || '1',
    title: 'New FDA Regulations Impact Vape Industry: What Wholesalers Need to Know',
    category: 'Industry News',
    date: 'December 15, 2024',
    author: {
      name: 'Michael Chen',
      role: 'Senior Industry Analyst',
      avatar: 'https://i.pravatar.cc/80?img=12',
      bio: 'Michael has over 8 years of experience in regulatory compliance and industry analysis for the vaping sector.',
    },
    // Use the FDA hero image (same as earlier template)
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1a4f03a324-c993ca22a285ab1037e7.png',
  };

  const relatedArticles = [
    {
      id: 1,
      title: '2024 Vaping Market Trends Report',
      description: 'Industry insights and forecasts for wholesale partners...',
      date: 'Dec 10, 2024',
      // From Blog.jsx (Industry Trends)
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-866577e06babf03a6016.png',
    },
    {
      id: 2,
      title: 'Compliance Checklist for B2B Distributors',
      description: 'Essential steps to ensure regulatory compliance...',
      date: 'Dec 5, 2024',
      // From Blog.jsx (Regulations)
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-cf5f6744dfc0522afcee.png',
    },
    {
      id: 3,
      title: 'Optimizing Wholesale Pricing Strategies',
      description: 'Maximize profit margins while staying competitive...',
      date: 'Nov 28, 2024',
      // From Blog.jsx (Business Tips)
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-b066f3764ed492d04929.png',
    },
  ];

  return (
    <>
      <main className="bg-background">
        <div className="container mx-auto px-6 pt-10 pb-16">
          <nav className="text-sm text-secondary mb-6">
            <Link to="/" className="hover:text-primary">Home</Link> /{' '}
            <Link to="/blog" className="hover:text-primary">Blog</Link> /{' '}
            <span className="text-foreground/80">{blogPost.category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <section className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  {blogPost.category}
                </span>
                <span className="text-secondary text-sm">{blogPost.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                {blogPost.title}
              </h1>

              <div className="flex items-center gap-3 text-secondary mb-8">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                  <img className="w-full h-full object-cover" src={blogPost.author.avatar} alt={blogPost.author.name} />
                </div>
                <div>
                  <div className="text-foreground font-semibold leading-5">{blogPost.author.name}</div>
                  <div className="text-sm text-secondary">{blogPost.author.role}</div>
                </div>
              </div>

              <div className="w-full overflow-hidden rounded-2xl mb-10">
                <img className="w-full h-[320px] md:h-[420px] object-cover" src={blogPost.image} alt="FDA regulation document and vaping products" />
              </div>

              <div className="space-y-8 text-secondary leading-relaxed">
                <p>
                  The vaping industry is experiencing significant changes as new FDA regulations take effect this
                  quarter. For wholesale distributors and B2B partners, understanding these compliance requirements is
                  crucial for maintaining operations and protecting business interests.
                </p>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Key Regulatory Changes</h2>
                  <p className="mb-4">
                    The Food and Drug Administration has implemented stricter guidelines for product manufacturing
                    labeling, and distribution. These changes directly impact how wholesale operations must handle
                    inventory documentation and customer verification processes.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Enhanced product tracking and batch documentation requirements</li>
                    <li>Stricter age verification protocols for B2B transactions</li>
                    <li>Updated labeling standards for all nicotine products</li>
                    <li>Mandatory compliance reporting for wholesalers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Impact on Wholesale Operations</h2>
                  <p>
                    Wholesale distributors must now implement more robust compliance systems to meet federal
                    requirements. This includes enhanced record-keeping, improved supply chain transparency, and
                    stricter customer verification processes.
                  </p>
                </div>

                {/* Quote card */}
                <div className="bg-card rounded-2xl border-l-4 border-primary p-6">
                  <p className="text-lg italic">
                    "The new regulations represent a significant shift toward greater accountability in the vaping
                    industry. Distributors who proactively adapt their operations will be better positioned for long-term success."
                  </p>
                  <p className="text-sm text-secondary mt-3">— Sarah Johnson, Regulatory Affairs Expert</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Compliance Best Practices</h2>
                  <p className="mb-4">
                    To ensure full compliance with new regulations, wholesale partners should focus on the following areas:
                  </p>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground">Documentation Requirements</h3>
                        <p className="text-sm text-secondary mt-1">
                          Maintain comprehensive records of all product batches, including manufacturing dates, ingredient lists, and distribution chains.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Customer Verification</h3>
                        <p className="text-sm text-secondary mt-1">
                          Implement enhanced age verification systems and maintain updated business license documentation for all retail partners.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Training Programs</h3>
                        <p className="text-sm text-secondary mt-1">
                          Regular staff training on compliance requirements and proper handling procedures is essential for maintaining regulatory standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Looking Ahead</h2>
                  <p className="mb-4">
                    The regulatory landscape continues to evolve, with additional changes expected in the coming months. Staying informed and maintaining flexible compliance systems will be key to navigating these ongoing developments successfully.
                  </p>
                  <p>
                    For wholesale partners seeking guidance on compliance implementation, our regulatory affairs team provides comprehensive support and consultation services to ensure your operations meet all federal requirements.
                  </p>
                </div>

                {/* Tags + Share */}
                <div className="pt-8 border-t border-border">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['#FDA', '#Regulations', '#Compliance', '#Wholesale', '#B2B'].map((t) => (
                      <span key={t} className="bg-muted/50 text-secondary px-4 py-2 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-secondary text-sm mr-2">Share this article:</span>
                    <button className="w-10 h-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity" aria-label="Share on Facebook">
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity" aria-label="Share on Twitter">
                      <i className="fab fa-twitter" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary text-white hover:opacity-90 transition-opacity" aria-label="Share on LinkedIn">
                      <i className="fab fa-linkedin-in" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-muted text-secondary hover:bg-muted/70 transition-colors" aria-label="Copy link">
                      <i className="fas fa-link" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Right / Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* About the Author */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                    <img className="w-full h-full object-cover" src={blogPost.author.avatar} alt={blogPost.author.name} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{blogPost.author.name}</div>
                    <div className="text-sm text-secondary">{blogPost.author.role}</div>
                  </div>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{blogPost.author.bio}</p>
                <div className="flex items-center gap-4 mt-4 text-secondary">
                  <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4">Related Articles</h3>
                <div className="space-y-5">
                  {relatedArticles.map((a) => (
                    <Link key={a.id} to={`/single_blog/${a.id}`} className="flex gap-4 group">
                      <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={a.image} alt={a.title} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {a.title}
                        </div>
                        <div className="text-sm text-secondary mt-1">{a.description}</div>
                        <div className="text-xs text-secondary mt-2">{a.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Stay Updated */}
              <div className="bg-primary rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-white/80 text-sm mb-5">
                  Get the latest industry news and regulatory updates delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-3 rounded-full outline-none text-foreground mb-3"
                />
                <button className="w-full bg-white text-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleBlog;
