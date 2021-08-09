import React, { useEffect, useState } from 'react'
import '../BreakfastSearch.css'
import axios from 'axios'
import LunchPopup from './LunchPopup'
import { Link } from 'react-router-dom'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const LunchSearch = (props) => {
    const [food, setFood] = useState([])
    const [clickedFood, setClickedFood] = useState([])
    const [searchFood, setSearchFood] = useState('')

    const params = {
        api_key: 'IwqffEyeCXcGtZpcTIO8EqcVEFTE46qCEi7Vkxmd',
        query: searchFood,
        dataType: ["Survey (FNDDS)","Branded","SR Legacy"],
        pageSize: 6
    }

    const getFood = (e) => {
            setSearchFood(e.target.value)

             axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${params.query}&pageSize=${params.pageSize}&dataType=${params.dataType}`)
            .then(res => setFood(res.data.foods))
            .catch(err => console.log(err))
            // console.log(food)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    
    // console.log(mappedFoods)
    console.log(clickedFood, 'dfgdffbdfb')
    console.log(clickedFood.length)
    return ((props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h2>SEARCH FOR A FOOD</h2>
                <CancelPresentationIcon className='closeBtn' fontSize='large' onClick={() => props.setTrigger(false)}/>
                {props.children}
                <input
                    name="dinnerSearch"
                    onChange={getFood}
                    type="text"
                    placeholder="Enter food name"/>
                <div className='custom-entry-div'>
                    <Link to="/lunchadd"><h6 className='custom-entry'>Create custom entry</h6></Link>
                </div>
            <div className="displayedFood">
                <ul>
                    {food.map(foods => <li><button onClick={() => setClickedFood(foods)}>{foods.description}</button></li>)}
                </ul>
            </div>
            <div className="dontDisplay">
                {Object.keys(clickedFood).length >= 1 ? 
                <LunchPopup  clickedFood={clickedFood}
                        setClickedFood={setClickedFood}
                        setTrigger={props.setTrigger}/> : ''
                }
            </div>
            </div>
        </div>
    ) : ''
    )
}
export default LunchSearch