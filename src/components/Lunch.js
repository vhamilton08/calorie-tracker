import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { connect} from 'react-redux';
import lunchReducer, { getLunch } from '../redux/lunchReducer';
import LunchList from './LunchList';

const Lunch = (props) => {

useEffect(() => {
    props.getLunch()
}, [])

    console.log('skerpppp', props)
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                </ul>
            </nav>
            <div className="foodDetails">
                <h2>Lunch</h2>
                {/* <h2>{props.lunchReducer.lunch.map(items => <li>{items.name}</li>)}</h2> */}
                {props.lunchReducer.lunch.map((element, index) => {
                    return(
                        <LunchList
                        key={index}
                        el={element}/>
                    )
                })}

            </div>
            <h2>Calories</h2>
            <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.calories)
                }, 0)}</p>
            <div>
                <h2>protein</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.protein)
                }, 0)}g</p>
                <h2>carbs</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.carbs)
                }, 0)}g</p>
                <h2>fat</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.fat)
                }, 0)}g</p>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {lunchReducer: reduxState.lunchReducer}
}
export default connect(mapStateToProps, {getLunch})(Lunch);