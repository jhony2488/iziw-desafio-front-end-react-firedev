/* eslint-disable import/no-named-as-default */
import React from 'react'

import styles from '../../styles/Home.module.scss'
import Title from '../atoms/TItlePage.jsx'
import Footer from '../molecules/Footer.jsx'
import Head from '../molecules/Head.jsx'
import Header from '../molecules/Header.jsx'
import LoginForm from '../molecules/Login.jsx'

export default function Login() {
    return (
        <div className={styles.container}>
            <Head
                title="Login"
                id_router="header-home"
                description="tela home"
            />
            <Header />
            <main className={styles.main}>
                <Title title="Login" />
                <LoginForm />
            </main>
            <Footer />
        </div>
    )
}
