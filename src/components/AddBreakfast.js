import React from 'react'
import { connect } from 'react-redux'
import { addBreakfast } from '../redux/breakfastReducer'

const AddBreakfast = (props) => {
    console.log('propppppps', props.clickedFood)
    return (
        <div>
<h2>placeholder</h2>
{/* <p>{props.clickedFood}</p> */}
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {breakfastReducer: reduxState.breakfastReducer}
}
export default connect(mapStateToProps, {addBreakfast})(AddBreakfast)