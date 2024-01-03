import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles}>
            <div> Section 1 </div>
            <div>
                <a href="tel:+375447771188">+37544 777-11-88</a>
                <p>© Borisoff Inc.</p>
            </div>
            <div> Section 3</div>
        </footer>
    );
};
