import { ISneakers } from '../../types/ISneakers';

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { ImageSlider } from '../../components/Home/ImageSlider';
import { sneakers } from './sneakers.data';
import styles from './Home.module.scss';
import { SneakerItem } from './SneakerItem/SneakerItem';
import usePagination from '../../hooks/usePagination';

import slide1 from '../../assets/images/slider_images/slide1.jpg';
import slide2 from '../../assets/images/slider_images/slide2.jpg';
import slide3 from '../../assets/images/slider_images/slide3.jpg';

export const Home = () => {
    const IMAGES = [
        { url: slide1, alt: 'First Slide' },
        { url: slide2, alt: 'Second Slide' },
        { url: slide3, alt: 'Third Slide' },
    ];

    // usePagination hook
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, totalPages } = usePagination({
        contentPerPage: 6,
        count: sneakers.length,
    });

    /* const filtredSneakers = useMemo(
        () => sneakers.filter((sneaker) => sneaker.price > 150),
        []
    );
     */

    return (
        <main className={styles.main}>
            <div className={styles.image_slider}>
                <ImageSlider images={IMAGES} />
            </div>

            <div className={styles.welcome_text}>
                <span>Welcome to SneakersStore </span> the world of stylish and comfortable sneakers! We
                are happy to welcome you to our website, where <span>every step</span> will become{' '}
                <span>easy </span> and <span>confident</span>. Here you will find a carefully selected
                collection of footwear that combines the latest trends, innovative technologies and the
                highest quality.
            </div>

            <div className={styles.catalog}>
                {sneakers.length ? (
                    sneakers
                        .slice(firstContentIndex, lastContentIndex)
                        .map((shoe) => <SneakerItem key={shoe.id} shoe={shoe} />)
                ) : (
                    <p> {`Sorry, we don't have any sneakers :(`} </p>
                )}
            </div>

            <div className={styles.pagination}>
                <p className={styles.text}>
                    <span>{page}</span> / {totalPages}
                </p>
                <div className={styles.flex}>
                    <div className={styles.page} onClick={prevPage}>
                        <ArrowBigLeft />
                    </div>

                    <div className={styles.page} onClick={nextPage}>
                        <ArrowBigRight />
                    </div>
                </div>
            </div>

            <div className={styles.find_us}>
                <p>How do you find us?</p>
                <iframe
                    title="map"
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1037470604424!2d-73.97939322440051!3d40.75974283469214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fbfcb360d7%3A0x47415655d60b3a1a!2s650%205th%20Ave%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2sby!4v1727559117124!5m2!1sen!2sby"
                    loading="lazy"
                ></iframe>
            </div>
        </main>
    );
};
