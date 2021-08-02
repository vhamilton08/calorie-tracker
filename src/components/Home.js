import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLunch } from '../redux/lunchReducer';
import { getBreakfast } from '../redux/breakfastReducer';
import { getDinner } from '../redux/dinnerReducer';
import { getSnacks } from '../redux/snackReducer';
import './Home.css'
import axios from 'axios';
const Home = (props) => {
    const [updatingCalories, setupdatingCalories] = useState(false)
    const [calorieBudget, setCalorieBudget] = useState([])
    const [calorieInput, setCalorieInput] = useState(calorieBudget)
    const [caloriesLeft, setCaloriesLeft] = useState(0)

    const inputhandle = (e) => {
        setCalorieInput(e.target.value)
    }

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
        props.getLunch()
        props.getBreakfast()
        props.getDinner()
        props.getSnacks()
        getTotalCals()
        // skerppp()
    }, [])
    const lunchCalories = props.lunchReducer.lunch.reduce((acc, cur) => {
            return (acc + cur.calories)
        }, 0)
    const breakfastCalories = props.breakfastReducer.breakfast.reduce((acc, cur) => {
        return (acc + cur.calories)
    }, 0)
    const dinnerCalories = props.dinnerReducer.dinner.reduce((acc, cur) => {
        return (acc + cur.calories)
    }, 0)
    const snackCalories = props.snackReducer.snacks.reduce((acc, cur) => {
        return (acc + cur.calories)
    }, 0)
    let caloriesConsumed = lunchCalories + breakfastCalories + dinnerCalories + snackCalories
console.log(props)
    console.log(calorieInput)
               
    let displayCalorieBudget = calorieBudget.map(el => el.calories)
    console.log(calorieBudget)
    
    // const skerppp = () => {
    //     let stringCalorieBudget= JSON.stringify(calorieBudget[0].calories)
    //     let numb = Math.round(stringCalorieBudget)
    //     setCaloriesLeft(numb)
    // }
    // console.log(numb)
    return (
        <div className="home">
            <div id="calorie-info">
                <section>
                    <h3>Calorie Budget</h3>
                    {updatingCalories === true ? 
                    <input
                    placeholder="set daily calorie budget"
                    value={calorieInput}
                    onChange={inputhandle}
                    onKeyPress={updateCalories}
                    type="number"
                    name="updatingCalories"/> :
                    <button onClick={() => setupdatingCalories(true)}>{displayCalorieBudget}</button>
                    }
                </section>
                <section>
                    <h3>Calories Consumed</h3>
                    <h4>{caloriesConsumed}</h4>
                </section>
                <section>

                    <h3>Calories Left</h3>
                    {/* <h4>{caloriesLeft - caloriesConsumed}</h4> */}
                </section>
            </div>
            <div id="meals">
                <ul>
                    <Link to='breakfast'><li>Breakfast</li></Link>
                    <p>{breakfastCalories}</p>
                    <Link to="lunch"><li>Lunch</li></Link>
                    <p>{lunchCalories}</p>
                    <Link to="dinner"><li>Dinner</li></Link>
                    <p>{dinnerCalories}</p>
                    <Link to="snacks"><li>Snacks</li></Link>
                    <p>{snackCalories}</p>
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {lunchReducer: reduxState.lunchReducer,
            breakfastReducer: reduxState.breakfastReducer,
            dinnerReducer: reduxState.dinnerReducer,
            snackReducer: reduxState.snackReducer}
}
export default connect(mapStateToProps, {getLunch, getBreakfast, getDinner, getSnacks})(Home);