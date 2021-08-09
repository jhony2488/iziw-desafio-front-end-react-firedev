/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { services } from '../../redux/Store/actions/services/index.js'
import styles from '../../styles/organisms/Services.module.scss'
import Service from '../molecules/Service.jsx'


export default function Services() {
    const [serviceGetItems, setServices] = useState([])
    const [serviceGet, setService] = useState({})
    function getService(id) {
        setService(id)
        const serviceGetService = serviceGet
        console.log(serviceGetService)
    }

    useEffect(() => {
        let servicesGet = []
        function loadApiServices() {
            if (servicesGet !== []) {
                axios
                    .get('http://api.iziw.com.br/api/servicos')
                    .then((items) => {
                        console.log('items:')
                        console.log(items.data)

                        console.log('jhony:')
                        console.log(servicesGet)

                        servicesGet = items.data
                        console.log(servicesGet)

                        console.log('items Get:')
                        console.log(serviceGetItems)

                        servicesGet.map((item) => {
                            if (item.sub_servicos.length > 0) {
                                return servicesGet.push(...item.sub_servicos)
                            }
                            return 0
                        })
                        console.log('items Get get:')
                        console.log(servicesGet)
                        
                        setServices(servicesGet)
                        const dispatch = useDispatch()
                        dispatch(services(servicesGet))
                    })
                    .catch((err) => {
                        Error(err)
                    })
            } else {
                console.log('trouxa')
            }
        }
        loadApiServices()
    }, [])

    return (
        <section className={styles.services_section}>
           <div className={styles.services_section_wrapper}>
           {
                serviceGetItems.map((item) => {
                    console.log('item html:')    
                    console.log(item)
                    return (
                        <button
                            key={item.id}
                            onClick={() => getService(item.id)} className={styles.services_section__button}>
                            <Service title={item.nome} keyService={item.id} />
                        </button>
                    )
                })}
           </div>
                
        </section>
    )
}
