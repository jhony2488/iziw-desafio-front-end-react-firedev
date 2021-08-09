import React from 'react'

import styles from '../../styles/Home.module.scss'
import Title from '../atoms/TItlePage.jsx'
import Footer from '../molecules/Footer.jsx'
import Head from '../molecules/Head.jsx'
import Header from '../molecules/Header.jsx'
import Services from '../organisms/Services.jsx'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head title="Home" description="tela home" />
            <Header/>
            <main className={styles.main}>
                <Title title="Serviços" />
                <Services />
            </main>
            <Footer />
        </div>
    )
}
