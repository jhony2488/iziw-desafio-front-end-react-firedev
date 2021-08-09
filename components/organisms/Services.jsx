/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { services, service } from '../../redux/Store/actions/services/index.js'
import styles from '../../styles/organisms/Services.module.scss'
import Service from '../molecules/Service.jsx'

export default function Services() {
    const [serviceGetItems, setServices] = useState([])
    const [serviceGet, setService] = useState({})

    const [form, setForm] = useState([])
    const [show, setShow] = useState(false)

    const handle = () => setShow(!show)

    function getDatas(e) {
        const { value, name } = e.target
        form[name].nome = value
        setForm([])
    }
    async function setRequestService() {
        const respostas = await form.perguntas.map((itemForm) => {
            return { pergunta_id: itemForm.id, resposta: 'PHP' }
        })
        await axios
            .post('http://api.iziw.com.br/api/solicitacoes-de-servico', {
                servico_id: serviceGet.id,
                valor: 500,
                aceita_contra_proposta: true,
                presencial: true,
                respostas,
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function loadApiService(id) {
        axios
            .get(`http://api.iziw.com.br/api/servicos/${id}`)
            .then((items) => {
                const serviceGet = items.data
                console.log('service id:')
                console.log(serviceGet)

                setService(serviceGet)
                const dispatch = useDispatch()
                dispatch(service(serviceGet))
            })
            .catch((err) => {
                Error(err)
            })
    }

    useEffect(() => {
        let servicesGet = []
        function loadApiServices() {
            if (servicesGet !== []) {
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

                        setServices(servicesGet)
                        const dispatch = useDispatch()
                        dispatch(services(servicesGet))
                    })
                    .catch((err) => {
                        Error(err)
                    })
            }
        }
        loadApiServices()
    }, [])

    return (
        <section className={styles.services_section}>
            <div className={styles.services_section_wrapper}>
                {serviceGetItems.map((item) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                handle()
                                console.log('item id:')
                                console.log(item.id)
                                loadApiService(item.id)
                            }}
                            className={styles.services_section__button}>
                            <Service title={item.nome} keyService={item.id} />
                        </button>
                    )
                })}
            </div>
            <Modal show={show} onHide={handle}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Solicitar Serviço de {serviceGet.nome}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="" onSubmit={setRequestService}>
                        {serviceGet !== null &&
                        serviceGet !== undefined &&
                        serviceGet !== {} &&
                        serviceGet.perguntas !== null &&
                        serviceGet.perguntas !== undefined &&
                        serviceGet.perguntas.length > 0 ? (
                            serviceGet.perguntas.map((pergunta) => {
                                return (
                                    <div className="inputs" key={pergunta.id}>
                                        <label htmlFor={pergunta.input}>
                                            {pergunta.conteudo}
                                        </label>
                                        {pergunta.escolhas === null ? (
                                            <input
                                                type="text"
                                                name={pergunta.input}
                                                id={pergunta.input}
                                                value={form.email}
                                                placeholder={pergunta.conteudo}
                                                onChange={getDatas}
                                            />
                                        ) : (
                                            <select
                                                name={pergunta.input}
                                                id={pergunta.input}
                                                placeholder={pergunta.conteudo}
                                                onChange={getDatas}>
                                                {pergunta.escolhas.map(
                                                    (escolha) => {
                                                        return (
                                                            <option
                                                                key={escolha}
                                                                value={escolha}>
                                                                {escolha}
                                                            </option>
                                                        )
                                                    }
                                                )}
                                            </select>
                                        )}
                                    </div>
                                )
                            })
                        ) : (
                            <div>
                                <p>Sem perguntas</p>
                            </div>
                        )}
                        <button type="submit">Enviar</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handle}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}
