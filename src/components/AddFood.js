import React from 'react'
import './AddFood.css'
import { connect } from 'react-redux'
import { addBreakfast } from '../redux/breakfastReducer'

const AddFood = (props) => {

    // let foood = [
    //     name: 'fish',
    //     calories: 250,
    //     protein: 25,
    //     carbs: 5,
    //     fat: 20,
    //     weight: 120
    // ]
    // const { name, calories, protein, carbs, fat, weight } = foood
    return ((props.trigger2) ? (
        <div className="popup2">
        <div className="popup-inner2">
            {props.children}
            <input
            name="addFood"
            type="text"
            placeholder="amount"/>
            <p>grams</p>
            <button>add</button>
            <button onClick={() => props.setTrigger2(false)}>close</button>
        </div>
            {/* <button onClick={() => addBreakfast()}>addddd</button> */}
        </div>
    ) : ''
    )
}
const mapStateToProps = reduxState => {
    return {breakfastReducer: reduxState.breakfastReducer}
}
export default connect(mapStateToProps, {addBreakfast})(AddFood)