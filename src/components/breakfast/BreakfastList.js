import React from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
// import { Link } from 'react-router-dom'


const BreakfastList = (props) => {
    // const [clickedId, setClickedId] = useState([])
    const {breakfast_id, name, protein, calories, carbs, fat, weight} = props.el

    const deleteFoodItem = () => {
        axios.delete(`/api/breakfast/${breakfast_id}`)
        .then(window.location.reload(false))
    }

    return (
        <div className="lunch-list">
            <div className='lunch-list-data' style={{width: '200px', height: '250px', margin:'10px'}}>
                <DeleteIcon onClick={deleteFoodItem} style={{marginLeft: '85%', color: 'black', cursor: 'pointer'}}/>
                <h2 style={{marginTop: '-1%', padding:'4px'}}>{name}</h2>
                <p style={{padding: '2px', fontStyle: 'italic'}}>{weight}grams</p>
                <p style={{padding: '2px'}}>{calories} cals</p>
                <p style={{padding: '2px', color: 'purple'}}>protein {protein}g</p>
                <p style={{padding: '2px', color: 'green'}}>carbs {carbs}g</p>
                <p style={{padding: '2px', color: 'orange'}}>fat {fat}g</p>
            </div>
        </div>
    )
}
export default BreakfastList