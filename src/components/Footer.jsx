import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Promotions</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">Current Deals</Link></li>
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">Bulk Discounts</Link></li>
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">Seasonal Offers</Link></li>
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">Clearance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Lab Reports</h4>
            <ul className="space-y-2">
              <li><Link to="/labreport" className="text-white/80 hover:text-white transition-colors">Product Testing</Link></li>
              <li><Link to="/labreport" className="text-white/80 hover:text-white transition-colors">Compliance Reports</Link></li>
              <li><Link to="/labreport" className="text-white/80 hover:text-white transition-colors">Safety Documents</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Tax Guide</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">Tax Information</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">Resale Certificates</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">State Regulations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li><i className="fas fa-phone mr-2"></i> 1-800-VAPE-123</li>
              <li className="break-words"><i className="fas fa-envelope mr-2"></i> info@strictlyecig.com</li>
              <li><i className="fas fa-location-dot mr-2"></i> 123 Vape Street, NY</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="w-full md:w-auto">
              <h4 className="font-bold mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 rounded-full sm:rounded-l-full sm:rounded-r-none px-4 py-2 outline-none text-white placeholder-white/50 w-full sm:w-72"
                />
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full sm:rounded-r-full sm:rounded-l-none font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>© 2024 StrictlyEcig. All rights reserved.</p>
              <p className="mt-1">WARNING: This product contains nicotine. Nicotine is an addictive chemical.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

