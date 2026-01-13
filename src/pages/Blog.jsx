import { useState } from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import CategoryFilters from '../components/blog/CategoryFilters';
import BlogGrid from '../components/blog/BlogGrid';
import BlogPagination from '../components/blog/BlogPagination';
import BlogSidebar from '../components/blog/BlogSidebar';

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
      <BlogHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryFilters activeCategory={activeCategory} onChange={filterCategory} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BlogGrid posts={filteredPosts} />
          <BlogPagination />
        </div>

        <BlogSidebar popularPosts={popularPosts} categories={categories} onSelectCategory={filterCategory} />
      </div>
    </main>
  );
};

export default Blog;
