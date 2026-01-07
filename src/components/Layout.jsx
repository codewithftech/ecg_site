import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import QuickViewModal from './QuickViewModal';
import WishlistModal from './WishlistModal';
import CompareModal from './CompareModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CartSidebar />
      <QuickViewModal />
      <WishlistModal />
      <CompareModal />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

