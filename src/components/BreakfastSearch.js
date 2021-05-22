import React, { useState } from 'react'
import './BreakfastSearch.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import AddFood from './AddFood'

const BreakfastSearch = (props) => {
    const [food, setFood] = useState([])
    // const [addButtonPopup, setaddButtonPopup] = useState(false)

    const params = {
        api_key: 'IwqffEyeCXcGtZpcTIO8EqcVEFTE46qCEi7Vkxmd',
        query: 'big mac',
        dataType: ["Survey (FNDDS)","Branded","SR Legacy"],
        pageSize: 6
    }

    const getFood = () => {
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${params.query}&pageSize=${params.pageSize}&dataType=${params.dataType}`)
        .then(res => setFood(res.data.foods))
        console.log(food)
    }
    
    const mappedFood = food.map(el => {
        return el.description
    })
    console.log(mappedFood)
    const skerpde = () => {
        props.setTrigger2(true)
        props.setTrigger(false)
    }
    console.log(food)
    return ((props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">

            {props.children}
            <input
            name="breakfastSearch"
            // value
            type="text"
            placeholder="search breakfast"/>
            <button className="closeBtn" onClick={() => props.setTrigger(false)}>X</button>
            <button onClick={getFood}>search</button>
            <div className="displayedFood">
            <ul>
                {food.map(foods => <li><button onClick={skerpde}>{foods.description}</button></li>)}
                {/* onClick={() => props.setTrigger(true)} */}
            </ul>
            {/* <AddFood trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/> */}
            </div>
            </div>
        </div>
    ) : ''
    )
}
export default BreakfastSearch