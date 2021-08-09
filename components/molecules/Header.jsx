/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../public/favicons/android-icon-192x192.png'
import styles from '../../styles/molecules/Header.module.scss'

export default function HeadComponent(props) {
    const originalError = console.error

    console.error = (...args) => {
        if (/Warning.*Function components cannot be given refs/.test(args[0])) {
            return
        }
        originalError.call(console, ...args)
    }
    return (
        <header className={styles.header} id={props.id_router}>
            <div className={styles.header_wrapper}>
                <div className={styles.header__logo}>
                    <Link href="/" >
                        <Image
                            src={logo}
                            alt="Iziw Logo"
                            className={styles.header__logo_image}
                        />
                    </Link>
                </div>
                <nav className={styles.header_nav}>
                    <Link href="/" id="nav-home">Home</Link>
                    <Link href="/login" id="nav-login">Login</Link>
                </nav>
            </div>
        </header>
    )
}
