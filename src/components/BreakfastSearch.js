import React, { useState } from 'react'
import './BreakfastSearch.css'
import axios from 'axios'
import Popup from './Popup'
import { Link } from 'react-router-dom'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const BreakfastSearch = (props) => {
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
        // setTimeout(()=> {

             axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${params.query}&pageSize=${params.pageSize}&dataType=${params.dataType}`)
            .then(res => setFood(res.data.foods))
            .catch(err => console.log(err))
            // console.log(food)
        // }, 2000)
    }
    
    // console.log(mappedFoods)
    console.log(clickedFood, 'dfgdffbdfb')
    console.log(clickedFood.length)
    return ((props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h2>SEARCH FOR A FOOD</h2>
                <CancelPresentationIcon className='closeBtn' fontSize='large' onClick={() => props.setTrigger(false)}/>
                <Link to="/breakfastadd"><a className='custom-entry' style={{marginTop: '30px'}}>Create custom entry</a></Link>
                {props.children}
                <input
                    name="breakfastSearch"
                    onChange={getFood}
                    type="text"
                    placeholder="Enter food name"/>
                {/* <button className="closeBtn" onClick={() => props.setTrigger(false)}><CancelPresentationIcon/></button> */}
            <div className="displayedFood">
                <ul>
                    {food.map(foods => <li><button onClick={() => setClickedFood(foods)}>{foods.description}</button></li>)}
                </ul>
            {/* <AddFood trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/> */}
            </div>
            <div className="dontDisplay">
                {Object.keys(clickedFood).length >= 1 ? 
                <Popup  clickedFood={clickedFood}
                        setClickedFood={setClickedFood}
                        setTrigger={props.setTrigger}/> : ''
                }
            </div>
            </div>
        </div>
    ) : ''
    )
}
export default BreakfastSearch