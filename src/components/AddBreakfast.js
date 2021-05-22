import React from 'react'
import { connect } from 'react-redux'
import { addBreakfast } from '../redux/breakfastReducer'

const AddBreakfast = () => {
    return (
        <div>

        </div>
    )
}
const mapStateToProps = reduxState => {
    return {breakfastReducer: reduxState.breakfastReducer}
}
export default connect(mapStateToProps, {addBreakfast})(AddBreakfast)