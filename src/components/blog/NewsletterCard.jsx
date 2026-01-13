const NewsletterCard = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-sm text-white">
      <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
      <p className="text-sm mb-4 opacity-90">Subscribe to our newsletter for exclusive B2B insights</p>
      <div className="flex flex-col space-y-2">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-3 rounded-full outline-none text-foreground"
        />
        <button type="button" className="bg-white text-primary py-3 rounded-full font-semibold hover:bg-opacity-90 transition-opacity">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsletterCard;


