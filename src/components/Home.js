import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLunch } from '../redux/lunchReducer';
import './Home.css'
import axios from 'axios';
const Home = (props) => {
    const [updatingCalories, setupdatingCalories] = useState(false)
    const [calorieBudget, setCalorieBudget] = useState([])
    const [calorieInput, setCalorieInput] = useState(calorieBudget)

    // const changeCalories = () => {
    //     setupdatingCalories(!updatingCalories)
    // }

    const inputhandle = (e) => {
        setCalorieInput(e.target.value)
    }
    // let skerp = calorieInput[0]
    const updateCalories = (e) => {
        if(e.key === 'Enter') {
            // setCalorieBudget(calorieInput)
            axios.put('/api/dailybudget', {calories: calorieInput})
            .then(res => res.data)
            .catch(err => console.log(err))
            setupdatingCalories(!updatingCalories)
        }
    }
    
    const getTotalCals = () => {
        axios.get('/api/dailybudget')
        .then(res => setCalorieBudget(res.data))
    }
    useEffect(() => {
        // props.getLunch()
        getTotalCals()
    }, updateCalories)
    const lunchCalories = props.lunchReducer.lunch.reduce((acc, cur) => {
            return (acc + cur.calories)
        }, 0)
    console.log(`hello`, calorieInput)
    console.log(calorieBudget)
    let mappedCalorieBudget = calorieBudget.map((el, index) => {
        return el
        // key={index}
               
    })
    console.log(mappedCalorieBudget)
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
            type="number"
            name/> :
            <button onClick={() => setupdatingCalories(true)}></button>
            
            // <button onClick={() => setupdatingCalories(true)}>{calorieBudget}</button>
        }
        </div>
            
                <div>
                <h3>Calories Consumed</h3>

                <h3>Calories Left</h3>
                {/* <h6>{calorieBudget - lunchCalories}</h6> */}
                </div>
        </div>
            
            <div id="meals">
                {/* <ul> */}
                <Link to='breakfast'><li>Breakfast</li></Link>
                <Link to="lunch"><li>Lunch</li></Link>
                <p>{lunchCalories}</p>
                <Link to="dinner"><li>Dinner</li></Link>
                <Link to="snacks"><li>Snacks</li></Link>
                {/* </ul> */}
            </div>

        </div>
    )
}
const mapStateToProps = reduxState => {
    return {lunchReducer: reduxState.lunchReducer}
}
export default connect(mapStateToProps, {getLunch})(Home);