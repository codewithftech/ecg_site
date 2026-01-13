import PopularPosts from './PopularPosts';
import SidebarCategories from './SidebarCategories';
import NewsletterCard from './NewsletterCard';

const BlogSidebar = ({ popularPosts, categories, onSelectCategory }) => {
  return (
    <aside id="blog-sidebar" className="lg:col-span-1">
      <PopularPosts posts={popularPosts} />
      <SidebarCategories categories={categories} onSelect={onSelectCategory} />
      <NewsletterCard />
    </aside>
  );
};

export default BlogSidebar;


