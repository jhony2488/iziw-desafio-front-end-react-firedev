/* eslint-disable no-shadow */
import { LISTA_SERVICES_REQUEST, REQUEST_SERVICE } from '..'

export const requestServices = (requestServices) => ({
    type: LISTA_SERVICES_REQUEST,
    payload: requestServices,
})

export const requestService = (requestService) => ({
    type: REQUEST_SERVICE,
    requestService,
})
