import React from 'react';
import Image from 'next/image';
import styles from './PhoneCard.module.css';

const PhoneCard = ({ phone }) => {
    return (
        <div className={styles.phoneCard}>
            <section className={styles.phoneImage}>
                <Image
                    src={phone.imageUrl}
                    alt={`${phone.brand} ${phone.name}`}
                    fill
                    className={styles.image}
                />
            </section>
            <section>
                <h2 className={styles.phoneBrand}>{phone.brand}</h2>
                <div className={styles.phoneInfo}>
                    <p className={styles.phoneName}>{phone.name}</p>
                    <p className={styles.phonePrice}>{phone.basePrice} EUR</p>
                </div>
            </section>
        </div>
    );
};

export default PhoneCard;
