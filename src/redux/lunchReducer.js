import axios from 'axios'

const initialState = {
    lunch: []
}

const GET_LUNCH = "GET_LUNCH"

export function getLunch() {
    const lunch = axios.get('/api/lunch')
    .then(res => res.data)
    // .then(console.log('here', lunch))
    .catch(err => console.log(err))

    return {
        type: GET_LUNCH,
        payload: lunch
    }
}

export default function lunchReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_LUNCH + '_REJECTED':
            return state
        case GET_LUNCH + '_FULFILLED':
                if(payload) {
                    console.log(payload)
                    return {...state, lunch: payload}
                } else return state
        case GET_LUNCH + '_PENDING':
            return state
    default:
        return state
    }
}