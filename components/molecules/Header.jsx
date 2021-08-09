/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../public/favicons/android-icon-192x192.png'
import styles from '../../styles/molecules/Header.module.scss'

export default function HeadComponent() {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.header__logo}>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Iziw Logo"
                            className={styles.header__logo_image}
                        />
                    </Link>
                </div>
                <nav className={styles.header_nav}>
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                </nav>
            </div>
        </header>
    )
}
