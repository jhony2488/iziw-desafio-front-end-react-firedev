import { LISTA_SERVICES, SERVICE } from '../index.js'

export const services = (servicesGet) => ({
    type: LISTA_SERVICES,
    servicesGet,
})

export const service = (serviceGet) => ({
    type: SERVICE,
    serviceGet,
})
