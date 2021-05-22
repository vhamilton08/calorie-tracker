import axios from 'axios'

const initialState = {
    breakfast: []
    // {name: '', protein: 0, carbs: 0, fat: 0, calories: 0, weight: 0}
}

const GET_BREAKFAST = "GET_BREAKFAST"
const ADD_BREAKFAST = "ADD_BREAKFAST"

export function getBreakfast() {
    const gbreakfast = axios.get('/api/lunch')
    .then(res => res.data)
    // .then(console.log('here', lunch))
    .catch(err => console.log(err))

    return {
        type: GET_BREAKFAST,
        payload: gbreakfast
    }
}

export function addBreakfast(name, calories, protein, carbs, fat, weight) {
    const breakfast = axios.post('/api/breakfast', {name, calories, protein, carbs, fat, weight})
    .then(res => res.data)
    .catch(err => console.log(err))

    return {
        type: ADD_BREAKFAST,
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
        
        case ADD_BREAKFAST + '_REJECTED':
            return state
        case ADD_BREAKFAST + '_FULFILLED':
            if(payload) {
                return {...state, breakfast: payload}
            } else return state
        case ADD_BREAKFAST + '_PENDING':
            return state
    default:
        return state
    }
}