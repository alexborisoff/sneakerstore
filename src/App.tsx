import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Sneakers } from './pages/Sneakers';
import { Payment } from './pages/Payment';
import { AboutUs } from './pages/AboutUs';
import { Contacts } from './pages/Contacts';
import { Cart } from './pages/Cart';
import { Header } from './components/Header';
import { Blog } from './pages/Blog';
import { Footer } from './components/Footer';
import './styles/app.css';

export const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Sneakers />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
};
