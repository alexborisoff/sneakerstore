import { Link } from 'react-router-dom';
import logo from '../assets/images/sneakers_logo.png';
import cart from '../assets/images/cart.png';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <Link className={styles.links} to="/">
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                        <p className={styles.title_name}> SneakersStore </p>
                    </div>
                </Link>
            </div>

            <nav className={styles.navigation}>
                <Link className={styles.links} to="/catalog">
                    Sneakers
                </Link>
                <Link className={styles.links} to="/payment">
                    Shipping & Payment
                </Link>
                <Link className={styles.links} to="/blog">
                    Blog
                </Link>
                <Link className={styles.links} to="/aboutUs">
                    About Us
                </Link>
                <Link className={styles.links} to="/contacts">
                    Contacts
                </Link>
            </nav>

            <div className={styles.call_us}>
                <input type="button" value="Call Us"/>
            </div>

            <div>
                <Link className={styles.links} to="/cart">
                    <div className={styles}>
                        <img src={cart} alt="shopping_cart" />
                    </div>
                </Link>
            </div>
        </header>
    );
};
