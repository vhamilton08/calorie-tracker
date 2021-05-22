import React from 'react'

const LunchList = (props) => {
    const {name, protein, calories, carbs, fat, weight} = props.el
    return (
        <div>
            <h2>{name}</h2>
            <p>{weight}grams</p>
            <p>{calories}cals</p>
            <p>protein {protein}g</p>
            <p>carbs {carbs}g</p>
            <p>fat {fat}g</p>
        </div>
    )
}
export default LunchList