import React, { useState } from 'react';
import{ Link } from 'react-router-dom';
// import Meals from './Meals';
import './Home.css'
const Home = () => {
    const [updatingCalories, setupdatingCalories] = useState(false)
    const [calorieBudget, setCalorieBudget] = useState(0)
    const [calorieInput, setCalorieInput] = useState('')

    const changeCalories = () => {
        setupdatingCalories(!updatingCalories)
    }

    const inputhandle = (e) => {
        setCalorieInput(e.target.value)
    }

    const updateCalories = (e) => {
        if(e.key === 'Enter') {
            setCalorieBudget(calorieInput)
            setupdatingCalories(!updatingCalories)
        }
    }
    return (
        <div className="home">
            <div id="calorie-info">
                <div>


            <h3>Calorie Budget</h3>
            {updatingCalories === true ? 
            <input
            placeholder="set daily calorie budget"
            value={calorieInput}
            onChange={inputhandle}
            onKeyPress={updateCalories}
            type="text"
            name/> :
            <button onClick={changeCalories}>{calorieBudget}</button>
        }
        </div>
            
                <div>
                <h3>Calories Consumed</h3>

                <h3>Calories Left</h3>
                <h6>3</h6>
                </div>
        </div>
            
            <div id="meals">
                {/* <ul> */}
                <Link to='breakfast'><li>Breakfast</li></Link>
                <Link to="lunch"><li>Lunch</li></Link>
                <Link to="dinner"><li>Dinner</li></Link>
                <Link to="snacks"><li>Snacks</li></Link>
                {/* </ul> */}
            </div>

        </div>
    )
}
export default Home;