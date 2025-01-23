import React from 'react';
import styles from './CartCard.module.css';
import useCartStore from '@/app/store/cartStore';
import Image from 'next/image';

const CartCard = ({ phone }) => {
    const deleteCard = useCartStore((state: any) => state.removeFromCart);

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

                <p className={styles.price}>{phone.price} EUR</p>
                <button
                    className={styles.removeButton}
                    onClick={() => deleteCard(phone.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartCard;
