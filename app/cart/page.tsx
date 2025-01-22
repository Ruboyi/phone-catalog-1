'use client';
import React from 'react';
import useCartStore from '../store/cartStore';
import CartCard from '../components/CartCard/CartCard';
import Button from '../components/Button/Button';
import styles from './Cart.module.css';

const Cart = () => {
    const phonesCart = useCartStore((state: any) => state.cart);

    const total = phonesCart.reduce((acc, phone) => acc + phone.price, 0);

    return (
        <main className={styles.main}>
            <header>Cart ({phonesCart.length})</header>
            <section className={styles.content}>
                {phonesCart.map((phone: any) => (
                    <CartCard key={phone.id} phone={phone} />
                ))}
            </section>
            <footer className={styles.buttonContainer}>
                <Button outline className={styles.continueButton}>
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
