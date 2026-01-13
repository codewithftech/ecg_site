import BlogCard from './BlogCard';

const BlogGrid = ({ posts }) => {
  return (
    <div id="blog-grid" className="lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;


