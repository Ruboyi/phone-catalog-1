'use client';
import React, { useEffect, useState } from 'react';
import useCartStore from '../store/cartStore';
import CartCard from '../components/CartCard/CartCard';
import Button from '../components/Button/Button';
import styles from './Cart.module.css';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const router = useRouter();
    const phonesCart = useCartStore((state: any) => state.cart);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const total = phonesCart.reduce((acc, phone) => acc + phone.price, 0);

    const handleGoHome = () => {
        router.push('/');
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 425);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className={styles.main}>
            <header>Cart ({phonesCart.length})</header>
            <section className={styles.content}>
                {phonesCart.map((phone: any) => (
                    <CartCard key={phone.id} phone={phone} />
                ))}
            </section>
            <footer className={styles.buttonContainer}>
                {isSmallScreen ? (
                    <>
                        <div className={styles.totalMin}>
                            <p>Total:</p>
                            <p>{total} EUR</p>
                        </div>
                        <div className={styles.totalAndPay}>
                            <Button
                                outline
                                className={styles.continueButton}
                                onClick={handleGoHome}
                            >
                                Continue shopping
                            </Button>
                            <Button className={styles.payButton}>Pay</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Button
                            outline
                            className={styles.continueButton}
                            onClick={handleGoHome}
                        >
                            Continue shopping
                        </Button>
                        {phonesCart.length > 0 && (
                            <div className={styles.totalAndPay}>
                                <p className={styles.total}>
                                    Total: {total} EUR
                                </p>
                                <Button className={styles.payButton}>
                                    Pay
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </footer>
        </main>
    );
};

export default Cart;
