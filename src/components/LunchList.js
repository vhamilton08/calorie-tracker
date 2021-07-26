import axios from 'axios'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const LunchList = (props) => {
    const {breakfast_id, name, protein, calories, carbs, fat, weight} = props.el

    const deleteFoodItem = () => {
        axios.delete(`/api/breakfast/${breakfast_id}`)
    }
    return (
        <div className="lunch-list">
            <div className='lunch-list-data' style={{width: '200px'}}>
            <DeleteIcon onClick={deleteFoodItem} style={{marginLeft: '80%', color: 'white'}}/>
            <h2 style={{marginTop: '-10%', padding:'4px'}}>{name}</h2>
            <p style={{padding: '2px', fontStyle: 'italic'}}>{weight}grams</p>
            <p style={{padding: '2px'}}>{calories} cals</p>
            <p style={{padding: '2px', color: 'purple'}}>protein {protein}g</p>
            <p style={{padding: '2px', color: 'green'}}>carbs {carbs}g</p>
            <p style={{padding: '2px', color: 'yellow'}}>fat {fat}g</p>
            {/* <button onClick={deleteFoodItem}><DeleteIcon style={{fontSize: 'small'}}/></button> */}
            </div>
        </div>
    )
}
export default LunchList