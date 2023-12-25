import { useState } from 'react';
import { ISneakers } from '../../types/ISneakers';
import { ImageSlider } from '../../components/Home/ImageSlider';
import { sneakers } from './sneakers.data';
import styles from './Home.module.scss';
import { SneakerItem } from './SneakerItem/SneakerItem';

import slide1 from '../../assets/images/slider_images/slide1.jpg';
import slide2 from '../../assets/images/slider_images/slide2.jpg';
import slide3 from '../../assets/images/slider_images/slide3.jpg';

export const Home = () => {
    //const [listSneakers, setListSneakers] = useState<ISneakers[]>([]);
    const IMAGES = [
        { url: slide1, alt: 'First Slide' },
        { url: slide2, alt: 'Second Slide' },
        { url: slide3, alt: 'Third Slide' },
    ];

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

            <div className={styles.catalog}>
                {sneakers.length ? (
                    sneakers.map((shoe) => <SneakerItem key={shoe.id} shoe={shoe} />)
                ) : (
                    <p> {`Sorry, we don't have any sneakers :(`} </p>
                )}
            </div>
        </main>
    );
};
