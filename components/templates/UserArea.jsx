import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

import styles from '../../styles/Home.module.scss'
import Footer from '../molecules/Footer.jsx'
import Head from '../molecules/Head.jsx'
import Header from '../molecules/Header.jsx'

export default function RequestServices() {
    const router = useRouter()
    const {
        query: { user },
    } = router
    useEffect(() => {
        const userGet = localStorage.getItem('user')
        const tokenUser = localStorage.getItem('token_login')
        if (!tokenUser) {
            if (!userGet) {
                Router.push({
                    pathname: '/login',
                })
            }
        }
    }, [])
    function redirectRequestServices() {
        Router.push({
            pathname: `/user/${user}/request-services`,
        })
    }
    return (
        <div className={styles.container}>
            <Head title={user} description={`Usuario ${user}`} />
            <Header />
            <main className={styles.main}>
                <h1>Olá {user} Sejá Bem Vindo(a) de Volta</h1>
                <Button variant="secondary" onClick={redirectRequestServices}>
                    Ver Solicitações de serviços
                </Button>
            </main>
            <Footer />
        </div>
    )
}
