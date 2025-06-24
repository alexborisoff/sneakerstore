import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { ImageSlider } from '../../components/Home/ImageSlider/ImageSlider';
// import { sneakers } from './sneakers.data';
import styles from './Home.module.scss';
import { SneakerItem } from './SneakerItem/SneakerItem';
import usePagination from '../../hooks/usePagination';

import slide1 from '../../assets/images/slider_images/slide1.jpg';
import slide2 from '../../assets/images/slider_images/slide2.jpg';
import slide3 from '../../assets/images/slider_images/slide3.jpg';
import { useEffect, useState } from 'react';
import { ISneakers } from '../../types/ISneakers';

export const Home = () => {
    const [listSneakers, setListSneakers] = useState<ISneakers[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/sneakers')
            .then((res) => res.json())
            .then((data) => {
                setListSneakers(data);
            });
    }, []);

    const IMAGES = [
        { url: slide1, alt: 'First Slide' },
        { url: slide2, alt: 'Second Slide' },
        { url: slide3, alt: 'Third Slide' },
    ];

    // usePagination hook
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, totalPages } = usePagination({
        contentPerPage: 6,
        count: listSneakers.length,
    });

    /* const filtredSneakers = useMemo(
        () => sneakers.filter((sneaker) => sneaker.price > 150),
        []
    );
     */

    return (
        <main className={styles.main}>
            <section className={styles.image_slider}>
                <ImageSlider images={IMAGES} />
            </section>

            <section className={styles.welcome_text}>
                <span>Welcome to SneakersStore </span> the world of stylish and comfortable sneakers! We
                are happy to welcome you to our website, where <span>every step</span> will become{' '}
                <span>easy </span> and <span>confident</span>. Here you will find a carefully selected
                collection of footwear that combines the latest trends, innovative technologies and the
                highest quality.
            </section>

            <section className={styles.catalog}>
                {listSneakers.length ? (
                    listSneakers
                        .slice(firstContentIndex, lastContentIndex)
                        .map((sneaker) => <SneakerItem key={sneaker.id} shoe={sneaker} />)
                ) : (
                    <p> {`Sorry, we don't have any sneakers :(`} </p>
                )}
            </section>

            <section className={styles.pagination}>
                <p className={styles.text}>
                    <span>{page}</span> / {totalPages}
                </p>
                <div className={styles.flex}>
                    <div className={styles.page} onClick={prevPage}>
                        <ArrowBigLeft aria-label="Previous picture" />
                    </div>

                    <div className={styles.page} onClick={nextPage}>
                        <ArrowBigRight aria-label="Next picture" />
                    </div>
                </div>
            </section>

            <section className={styles.find_us} aria-label="Location and map">
                <p>How do you find us?</p>
                <iframe
                    title="map"
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.5519808883964!2d20.987456676413437!3d52.17883866143235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193323a32b618f%3A0xd4247ada3a3f46cd!2sTa%C5%9Bmowa%204%2C%2002-677%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sby!4v1749467038752!5m2!1sen!2sby"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
};
