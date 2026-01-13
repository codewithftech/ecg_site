import { Link } from 'react-router-dom';

const SectionHeader = ({ title, viewAllTo, viewAllText = 'View All' }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      {viewAllTo ? (
        <Link to={viewAllTo} className="text-primary font-medium hover:underline flex items-center">
          {viewAllText} <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
};

export default SectionHeader;


