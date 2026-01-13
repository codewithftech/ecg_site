import { Link } from 'react-router-dom';

const SidebarCategories = ({ categories, onSelect }) => {
  const categoryMap = {
    News: 'news',
    Regulations: 'regulations',
    Products: 'products',
    'Business Tips': 'business',
    'Industry Trends': 'trends',
  };

  return (
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
              onSelect(categoryMap[category.name] || 'all');
            }}
          >
            <span>{category.name}</span>
            <span className="bg-muted px-2 py-1 rounded-full text-xs">{category.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarCategories;


