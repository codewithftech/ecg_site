import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Register from './pages/Register';
import About from './pages/About';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Category from './pages/Category';
import Brand from './pages/Brand';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Wishlist from './pages/Wishlist';
import MyAccount from './pages/MyAccount';
import LabReport from './pages/LabReport';
import Checkout from './pages/Checkout';
import CompareProduct from './pages/CompareProduct';
import GroupItems from './pages/GroupItems';
import LiveChat from './pages/LiveChat';
import './App.css';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/new" element={<CreateNewPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/single_blog/:id" element={<SingleBlog />} />
            <Route path="/category" element={<Category />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/whislist" element={<Wishlist />} />
            <Route path="/my_account" element={<MyAccount />} />
            <Route path="/labreport" element={<LabReport />} />
            <Route path="/checkout" element={<Navigate to="/checkout/shipping" replace />} />
            <Route path="/checkout/:step" element={<Checkout />} />
            {/* Backward-compatible routes */}
            <Route path="/payment1" element={<Navigate to="/checkout/shipping" replace />} />
            <Route path="/payment2" element={<Navigate to="/checkout/payment" replace />} />
            <Route path="/compare_prodcut" element={<CompareProduct />} />
            <Route path="/group_items" element={<GroupItems />} />
            <Route path="/live_chat" element={<LiveChat />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
