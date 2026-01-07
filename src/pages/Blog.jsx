import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'New Vaping Regulations: What Wholesalers Need to Know in 2024',
      category: 'regulations',
      categoryLabel: 'Regulations',
      categoryColor: 'bg-accent/10 text-accent',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-cf5f6744dfc0522afcee.png',
      author: 'Sarah Johnson',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      excerpt: 'Understanding the latest compliance requirements and how they affect your wholesale business operations...',
    },
    {
      id: 2,
      title: 'Disposable Vape Market Trends: 2024 Growth Projections',
      category: 'trends',
      categoryLabel: 'Industry Trends',
      categoryColor: 'bg-primary/10 text-primary',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-866577e06babf03a6016.png',
      author: 'Michael Chen',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
      excerpt: 'Analyzing the explosive growth of disposable vapes and what it means for B2B wholesalers...',
    },
    {
      id: 3,
      title: 'Optimizing Inventory Management for Vape Wholesalers',
      category: 'business',
      categoryLabel: 'Business Tips',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-b066f3764ed492d04929.png',
      author: 'David Martinez',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      excerpt: 'Best practices for managing stock levels, reducing overhead, and maximizing profitability...',
    },
    {
      id: 4,
      title: 'Top New Product Launches This Quarter',
      category: 'products',
      categoryLabel: 'Products',
      categoryColor: 'bg-purple-100 text-purple-600',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-b95c140356c38c53b86e.png',
      author: 'Emily Roberts',
      date: 'Jan 8, 2024',
      readTime: '4 min read',
      excerpt: 'Discover the latest innovative devices and e-liquids hitting the wholesale market...',
    },
    {
      id: 5,
      title: 'Major Industry Merger Announced: Impact on Wholesale Pricing',
      category: 'news',
      categoryLabel: 'News',
      categoryColor: 'bg-blue-100 text-blue-600',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/63fd4e240f-40f63ccd7e6cf62acad4.png',
      author: 'James Wilson',
      date: 'Jan 5, 2024',
      readTime: '8 min read',
      excerpt: 'Breaking news on the latest merger and what it means for wholesale distributors...',
    },
    {
      id: 6,
      title: '5 Strategies to Improve Customer Retention in B2B Vape Sales',
      category: 'business',
      categoryLabel: 'Business Tips',
      categoryColor: 'bg-green-100 text-green-600',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/115b2aa473-598aba635dbe543cf56c.png',
      author: 'Lisa Anderson',
      date: 'Jan 3, 2024',
      readTime: '6 min read',
      excerpt: 'Proven tactics to keep your retail clients coming back and increasing order volumes...',
    },
  ];

  const popularPosts = [
    {
      id: 1,
      title: 'Understanding FDA Regulations for Vape Wholesalers',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-eebf403799948f9a633d.png',
      date: 'Dec 28, 2023',
    },
    {
      id: 2,
      title: 'Top 10 Best-Selling Disposable Vapes of 2023',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c0de1216ae-181b8af6607142bb4604.png',
      date: 'Dec 25, 2023',
    },
    {
      id: 3,
      title: 'How to Scale Your Vape Wholesale Business',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/30fcba796b-9963bb18c5d94ff5fd54.png',
      date: 'Dec 20, 2023',
    },
  ];

  const categories = [
    { name: 'News', count: 24 },
    { name: 'Regulations', count: 18 },
    { name: 'Products', count: 32 },
    { name: 'Business Tips', count: 15 },
    { name: 'Industry Trends', count: 21 },
  ];

  const filterCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Blog Header Section */}
      <section id="blog-header" className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Blog & Industry Insights</h1>
        <p className="text-secondary text-lg mb-8">Stay updated with the latest news, regulations, and trends in the vaping industry</p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-card rounded-full px-6 py-3 shadow-sm border border-border">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="flex-1 bg-transparent outline-none text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="text-primary hover:text-accent transition-colors">
              <i className="fas fa-magnifying-glass text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters Section */}
      <section id="category-filters" className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('all')}
          >
            All Posts
          </button>
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'news' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('news')}
          >
            News
          </button>
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'regulations' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('regulations')}
          >
            Regulations
          </button>
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'products' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('products')}
          >
            Products
          </button>
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'business' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('business')}
          >
            Business Tips
          </button>
          <button 
            className={`category-tab px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'trends' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card hover:bg-primary hover:text-white'
            }`}
            onClick={() => filterCategory('trends')}
          >
            Industry Trends
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Grid */}
        <div id="blog-grid" className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src={post.image} 
                    alt={post.title}
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block ${post.categoryColor} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                    {post.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-secondary mb-4">
                    <div className="flex items-center space-x-4">
                      <span>
                        <i className="fas fa-user mr-1"></i>
                        {post.author}
                      </span>
                      <span>
                        <i className="fas fa-calendar mr-1"></i>
                        {post.date}
                      </span>
                    </div>
                    <span>
                      <i className="fas fa-clock mr-1"></i>
                      {post.readTime}
                    </span>
                  </div>
                  <Link 
                    to={`/single_blog/${post.id}`}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition-opacity block text-center"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div id="pagination" className="mt-12 flex justify-center items-center space-x-2">
            <button className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white">1</button>
            <button className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all">2</button>
            <button className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all">3</button>
            <button className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all">4</button>
            <button className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Blog Sidebar */}
        <aside id="blog-sidebar" className="lg:col-span-1">
          {/* Popular Posts */}
          <div className="bg-card rounded-xl p-6 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Popular Posts</h3>
            <div className="space-y-4">
              {popularPosts.map((post) => (
                <Link key={post.id} to={`/single_blog/${post.id}`} className="flex space-x-3 group">
                  <div className="w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
                    <img className="w-full h-full object-cover" src={post.image} alt={post.title} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-secondary">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-card rounded-xl p-6 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  to="#" 
                  className="flex justify-between items-center py-2 text-secondary hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const categoryMap = {
                      'News': 'news',
                      'Regulations': 'regulations',
                      'Products': 'products',
                      'Business Tips': 'business',
                      'Industry Trends': 'trends',
                    };
                    filterCategory(categoryMap[category.name] || 'all');
                  }}
                >
                  <span>{category.name}</span>
                  <span className="bg-muted px-2 py-1 rounded-full text-xs">{category.count}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-sm text-white">
            <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
            <p className="text-sm mb-4 opacity-90">Subscribe to our newsletter for exclusive B2B insights</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-full outline-none text-foreground"
              />
              <button className="bg-white text-primary py-3 rounded-full font-semibold hover:bg-opacity-90 transition-opacity">
                Subscribe Now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Blog;
