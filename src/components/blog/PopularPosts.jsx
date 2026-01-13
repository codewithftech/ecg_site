import { Link } from 'react-router-dom';

const PopularPosts = ({ posts }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm mb-6">
      <h3 className="text-lg font-bold text-foreground mb-4">Popular Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
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
  );
};

export default PopularPosts;


