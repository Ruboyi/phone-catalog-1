'use client';
import React from 'react';
import Image from 'next/image';
import styles from './PhoneCard.module.css';
import { Phone } from '@/app/lib/definitons';
import { useRouter } from 'next/navigation';

interface PhoneCardProps {
    phone: Phone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
    const router = useRouter(); // Hook para navegación

    const handleCardClick = () => {
        router.push(`/product/${phone.id}`);
    };

    return (
        <div className={styles.phoneCard} onClick={handleCardClick}>
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
