'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const cartCookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('cart='));

        if (cartCookie) {
            const cart = JSON.parse(
                decodeURIComponent(cartCookie.split('=')[1])
            );
            const total = cart.reduce(
                (sum: number, item: any) => sum + item.quantity,
                0
            );
            setTotalItems(total);
        }
    }, []);

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className={styles.logo}
                />
            </Link>

            <Link href="/cart" className={styles.cartContainer}>
                <Image
                    src="/cart.svg"
                    alt="cart"
                    width={9}
                    height={16}
                    className={styles.cart}
                />
                {totalItems}
            </Link>
        </nav>
    );
};

export default NavBar;
