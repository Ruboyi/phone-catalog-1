'use client';
import React from 'react';
import useCartStore from '../store/cartStore';
import CartCard from '../components/CartCard/CartCard';
import Button from '../components/Button/Button';
import styles from './Cart.module.css';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const router = useRouter();
    const phonesCart = useCartStore((state: any) => state.cart);

    const total = phonesCart.reduce((acc, phone) => acc + phone.price, 0);

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <main className={styles.main}>
            <header>Cart ({phonesCart.length})</header>
            <section className={styles.content}>
                {phonesCart.map((phone: any) => (
                    <CartCard key={phone.id} phone={phone} />
                ))}
            </section>
            <footer className={styles.buttonContainer}>
                <Button
                    outline
                    className={styles.continueButton}
                    onClick={handleGoHome}
                >
                    Continue shopping
                </Button>
                {phonesCart.length > 0 && (
                    <div className={styles.totalAndPay}>
                        <p className={styles.total}>Total: {total} EUR</p>
                        <Button className={styles.payButton}>Pay</Button>
                    </div>
                )}
            </footer>
        </main>
    );
};

export default Cart;
