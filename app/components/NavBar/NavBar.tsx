import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav  className={styles.navbar}>
    <Link href="/" >
      <Image src="/logo.svg" alt="logo" width={100} height={100} className={styles.logo} />
    </Link>

    <Link href="/cart" className={styles.cartContainer}> 
        <Image src="/cart.svg" alt="cart" width={9} height={16} className={styles.cart} />
    0
    </Link>
  </nav>
  )
}

export default NavBar