import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <footer className={styles}>
                <nav className={styles.navigation}>
                    <h4> About Us Section: </h4>
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

                <div className={styles.info_section}>
                    <h4> Address, Office Hours, Phone:</h4>
                    <p> 650 5th Ave, New York, NY 10019, United States </p>
                    <p className={styles.time}> 8 am - 7 pm</p>
                    <Link to="tel:+1-800-663-6453">1-800-663-6453</Link>
                </div>

                <div className={styles.networks}>
                    <h4> Social Networks:</h4>
                    <div className={styles.flex}>
                        <img src="./instagram.png" alt="inst_icon" />
                        <Link to="https://www.instagram.com/borisov____/" target="_blank">
                            <p> Instagram </p>
                        </Link>
                    </div>
                    <div className={styles.flex}>
                        <img src="./linkedin.png" alt="linlein_icon" />
                        <Link to="https://www.linkedin.com/in/sashaborisov/" target="_blank">
                            <p> LinkedIn </p>
                        </Link>
                    </div>
                </div>
            </footer>
            <p className={styles.copyright}>© 2024 Borisoff, Inc. All Rights Reserved</p>
        </>
    );
};
