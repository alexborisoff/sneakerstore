import React, { Fragment } from 'react';
import styles from '../Home.module.scss';
//import { ISneakers } from '../../../types/ISneakers';

// Change ANY type for props
export const SneakerItem = ({ shoe }: any) => {
    return (
        <Fragment key={shoe.id}>
            <div className={styles.card}>
                {shoe.sale === true && (
                    <div>
                        <img className={styles.sale} src="./sale96.png" alt="sale" />
                    </div>
                )}
                {shoe.new === true && (
                    <div>
                        <img className={styles.new} src="./new96.png" alt="new" />
                    </div>
                )}
                <div>
                    <img src={shoe.photo} alt="shoe" />
                </div>

                <p className={styles.product}>
                    {shoe.brand} {shoe.name}
                </p>

                <p className={styles.price}>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'narrowSymbol',
                        maximumSignificantDigits: 5,
                    }).format(shoe.price)}
                </p>

                <p className={styles.color}>{shoe.color}</p>
            </div>
        </Fragment>
    );
};
