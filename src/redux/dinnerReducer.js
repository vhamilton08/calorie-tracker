import axios from 'axios'

const initialState = {
    dinner: []
}

const GET_DINNER = "GET_DINNER"

export function getDinner() {
    const dinner = axios.get('/api/dinner')
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: GET_DINNER,
        payload: dinner
    }
}

export default function dinnerReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_DINNER + '_REJECTED':
            return state
        case GET_DINNER + '_FULFILLED':
            if(payload) {
                return {...state, dinner: payload}
            } else return state
        case GET_DINNER + '_PENDING':
            return state
        default:
            return state
    }
}