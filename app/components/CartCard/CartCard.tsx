import React from 'react';
import styles from './CartCard.module.css';
import useCartStore from '@/app/store/cartStore';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const CartCard = ({ phone }) => {
    const deleteCard = useCartStore((state: any) => state.removeFromCart);
    const t = useTranslations('CartCard');
    return (
        <div
            className={styles.container}
            key={phone.id}
            data-testid="cart-item"
        >
            <div className={styles.imageContainer}>
                <Image
                    src={phone.imageUrl}
                    alt={phone.name}
                    className={styles.productImage}
                    fill
                />
            </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{phone.name}</h2>
                <p className={styles.info}>
                    {phone.size} | {phone.colorName}
                </p>

                <p className={styles.price}>
                    {phone.price} {t('EUR')}
                </p>
                <button
                    className={styles.removeButton}
                    onClick={() => deleteCard(phone.id)}
                >
                    {t('removeButton')}
                </button>
            </div>
        </div>
    );
};

export default CartCard;
