import axios from 'axios'

const initialState = {
    breakfast: []
}

const GET_BREAKFAST = "GET_BREAKFAST"

export function getBreakfast() {
    const breakfast = axios.get('/api/breakfast')
    .then(res => res.data)
    // .then(console.log('here', lunch))
    .catch(err => console.log(err))

    return {
        type: GET_BREAKFAST,
        payload: breakfast
    }
}

export default function breakfastReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case GET_BREAKFAST + '_REJECTED':
            return state
        case GET_BREAKFAST + '_FULFILLED':
                if(payload) {
                    console.log(payload)
                    return {...state, breakfast: payload}
                } else return state
        case GET_BREAKFAST + '_PENDING':
            return state
    default:
        return state
    }
}