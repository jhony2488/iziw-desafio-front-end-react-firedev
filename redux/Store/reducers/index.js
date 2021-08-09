/* eslint-disable no-param-reassign */
import {
    LISTA_SERVICES,
    SERVICE,
    LISTA_SERVICES_REQUEST,
    REQUEST_SERVICE,
} from '../actions/index.js'

const initialState = {
    services: [],
    service: {},
    requestServices: [],
    requestService: {},
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LISTA_SERVICES:
            state.services = action.servicesGet
            return state
        case SERVICE:
            state.service = action.serviceGet
            return state
        case LISTA_SERVICES_REQUEST:
            state.requestServices = action.requestServices
            return state
        case REQUEST_SERVICE:
            state.requestService = action.requestService
            return state
        default:
            return { ...state }
    }
}

export default Reducer
