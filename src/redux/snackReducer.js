import axios from 'axios'

const initialState = {
    snacks: []
}

const GET_SNACKS = 'GET_SNACKS'

export function getSnacks() {
    const snacks = axios.get('/api/snacks')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: GET_SNACKS,
        payload: snacks
    }
}

export default function snackReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_SNACKS + '_PENDING':
            return state
        case GET_SNACKS + '_FULFILLED':
            if(payload) {
                return {...state, snacks: payload}
            } else return state
        case GET_SNACKS + '_PENDING':
            return state
        default:
            return state
    }
}