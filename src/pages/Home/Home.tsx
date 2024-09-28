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

    // usePagination hook
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
        usePagination({
            contentPerPage: 6,
            count: sneakers.length,
        });

    return (
        <main className={styles.main}>
            <div className={styles.image_slider}>
                <ImageSlider images={IMAGES} />
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
        </main>
    );
};
