import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-card rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all group">
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
  );
};

export default BlogCard;


