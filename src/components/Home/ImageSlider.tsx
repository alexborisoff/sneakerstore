import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import { useState } from 'react';
import styles from './ImageSlider.module.scss';

type ImageSliderProps = {
    images: {
        url: string;
        alt: string;
    }[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);

    const showPrevSlide = () => {
        setImageIndex((index) => {
            if (index === 0) return images.length - 1;
            return index - 1;
        });
    };

    const showNextSlide = () => {
        setImageIndex((index) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    };

    return (
        <section aria-label='Image Slider' className={styles.slider}>
            <div className={styles.slider_options}>
                {images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        className={styles.img_slider_img}
                        alt={alt}
                        aria-hidden={imageIndex !== index}
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button
                onClick={showPrevSlide}
                className={styles.img_slider_btn}
                style={{ left: 0 }}
                aria-label="View Prev Image"
            >
                <ArrowBigLeft aria-hidden />
            </button>
            <button
                onClick={showNextSlide}
                className={styles.img_slider_btn}
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden />
            </button>
            <div className={styles.modules}>
                {images.map((_, index) => (
                    <button
                        className={styles.dot_btn}
                        key={index}
                        onClick={() => setImageIndex(index)}
                        aria-label={`View Index ${index + 1}`}
                    >
                        {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                    </button>
                ))}
            </div>
        </section>
    );
};
