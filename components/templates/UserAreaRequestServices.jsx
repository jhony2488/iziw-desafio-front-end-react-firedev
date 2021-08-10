/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
    const [serviceRequestGetItems, setServicesRequest] = useState([])
    const [service, setService] = useState([])
    const router = useRouter()
    const {
        query: { user },
    } = router

    function redirectRequestService(id) {
        Router.push({
            pathname: `/user/${user}/request-services/${id}`,
        })
    }
    function getService() {
        let servicesGet = []
        axios
            .get('http://api.iziw.com.br/api/servicos')
            .then((items) => {
                servicesGet = items.data
                servicesGet.map((item) => {
                    const subservicosSub = []
                    if (item.sub_servicos.length > 0) {
                        console.log('jhony')
                        subservicosSub.push(...item.sub_servicos)

                        item.sub_servicos.map((itemSub) => {
                            return subservicosSub.push(...itemSub.sub_servicos)
                        })
                        return servicesGet.push(...subservicosSub)
                    }

                    return 0
                })

                setService(servicesGet)
                /* const dispatch = useDispatch()
                        dispatch(services(servicesGet)) */
            })
            .catch((err) => {
                Error(err)
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
                .get('http://api.iziw.com.br/api/solicitacoes-de-servico', {
                    headers: {
                        Authorization: `Bearer ${tokenUser}`,
                    },
                })
                .then((items) => {
                    console.log(items.data)
                    const servicesGet = items.data
                    console.log('get:')
                  
                   
                    setServicesRequest(servicesGet)
                    console.log(serviceRequestGetItems)
                })
                .catch((err) => {
                    Error(err)
                })
            getService()
        }
        loadApiServices()
    }, [])
    return (
        <div className={styles.container}>
            <Head
                title="Serviços solicitados"
                id_router="header-home"
                description="tela home"
            />
            <Header id_router="header-login" />
            <main className={styles.main}>
                <Title title="Solicitaçōes de serviços" />
                <section>
                    {serviceRequestGetItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <h2>{`serviço ${item.servico_id}`}</h2>
                                <h3>{item.status}</h3>
                                <p>{item.valor}</p>
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        redirectRequestService(item.id)
                                    }>
                                    Saiba Mais
                                </Button>
                            </div>
                        )
                    })}
                </section>
            </main>
            <Footer />
        </div>
    )
}
