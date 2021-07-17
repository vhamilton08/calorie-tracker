import React, { useState } from 'react'
import './BreakfastSearch.css'
import axios from 'axios'
import Popup from './Popup'

const BreakfastSearch = (props) => {
    const [food, setFood] = useState([])
    const [clickedFood, setClickedFood] = useState([])
    const [isOpen, setIsOpen] = useState(false)

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
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    // const addFood = () => {
        // setCLickedFood(mappedFoods)
        // setIsOpen(true)
    // }
    const mappedFoods = food.map(foods => {
    return <button>{foods.description}</button>
    })
        
    console.log(mappedFoods)
    console.log(clickedFood)
    console.log(clickedFood.length)
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
                {/* <li onClick={addFood}><button>{mappedFoods}</button></li> */}
                {food.map(foods => <li><button onClick={() => setClickedFood(foods.description)}>{foods.description}</button></li>)}
            </ul>
            {/* <AddFood trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/> */}
            </div>
            <div className="dontDisplay">
                {clickedFood.length >= 1 ? 
                <Popup  clickedFood={clickedFood}
                        setClickedFood={setClickedFood}
                        setIsOpen={setIsOpen}/> : ''
                }
            </div>

              

            </div>
        </div>
    ) : ''
    )
}
export default BreakfastSearch