/* eslint-disable import/no-named-as-default */
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Button /* Pagination */ } from 'react-bootstrap'

import styles from '../../styles/Home.module.scss'
import Title from '../atoms/TItlePage.jsx'
import Footer from '../molecules/Footer.jsx'
import Head from '../molecules/Head.jsx'
import Header from '../molecules/Header.jsx'

// import { useSelector, useDispatch } from 'react-redux'

export default function UserAreaRequestServices() {
    const [serviceRequestGetItem, setServiceRequest] = useState({})
    const [service, setService] = useState({})
    const router = useRouter()
    const {
        query: { id, user },
    } = router

    function redirectRequestService() {
        Router.push({
            pathname: `/user/${user}/request-services`,
        })
    }
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
        function loadApiServices() {
            axios
                .get(
                    `http://api.iziw.com.br/api/solicitacoes-de-servico/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${tokenUser}`,
                        },
                    }
                )
                .then((item) => {
                    console.log(item.data)
                    setServiceRequest(item.data)
                    console.log('jhnyyy:')
                    console.log(serviceRequestGetItem)
                    axios
                        .get(
                            `http://api.iziw.com.br/api/servicos/${item.data.servico_id}`
                        )
                        .then((itemService) => {
                            console.log(itemService.data)
                            setService(itemService.data)
                        })
                        .catch((err) => {
                            Error(err)
                        })
                })
                .catch((err) => {
                    Error(err)
                })
        }
        loadApiServices()
    }, [])
    return (
        <div className={styles.container}>
            <Head
                title={`Serviços solicitados ${service}  `}
                id_router="header-home"
                description="tela home"
            />
            <Header id_router="header-login" />
            <main className={styles.main}>
                <Title title={`Serviço de `} />
                <section>
                    <div key={serviceRequestGetItem.id}>
                        <h2>{service.nome}</h2>
                        <h3>{serviceRequestGetItem.status}</h3>
                        <p>{serviceRequestGetItem.valor}</p>
                        <Button
                            variant="primary"
                            onClick={() => redirectRequestService()}>
                            Voltar
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
