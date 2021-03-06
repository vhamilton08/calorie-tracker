import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreakfastSearch from './BreakfastSearch';
import { connect } from 'react-redux';
import { getBreakfast } from '../../redux/breakfastReducer';
import BreakfastList from './BreakfastList';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import '../Breakfast.css'

const Breakfast = (props) => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [addButtonPopup, setaddButtonPopup] = useState(false)

   useEffect(() => {
       props.getBreakfast()
   },[/*props.breakfastReducer.breakfast*/])
   console.log(props.breakfastReducer.breakfast, 'lllll')
    return (
            <div className='breakfast-page'>
                <nav>
                    <ul>
                        <li><Link to="/"><HomeIcon fontSize='large'/></Link></li>
                    </ul>
                </nav>
                <div className="foodDetails">
                    <h1>Breakfast</h1>
                <div className='meal-totals'>
                    <section>
                        <h2>calories</h2>
                        <p>{props.breakfastReducer.breakfast.reduce((acc, cur) => {
                            return (acc + cur.calories)
                        }, 0)}</p>
                    </section>
                    <section>
                        <h2>protein</h2>
                        <p>{props.breakfastReducer.breakfast.reduce((acc, cur) => {
                            return (acc + cur.protein)
                        }, 0)}g</p>
                    </section>
                    <section>
                        <h2>carbs</h2>
                        <p>{props.breakfastReducer.breakfast.reduce((acc, cur) => {
                            return (acc + cur.carbs)
                        }, 0)}g</p>
                    </section>
                    <section>
                        <h2>fat</h2>
                        <p>{props.breakfastReducer.breakfast.reduce((acc, cur) => {
                            return (acc + cur.fat)
                        }, 0)}g</p>
                    </section>
                </div>
                <div className='food-list'>
                    {props.breakfastReducer.breakfast.map((element, index) => {
                        return(
                            <BreakfastList
                            key={index}
                            el={element}/>
                            )})}
                </div>
                    <button className="addFoodBtn" onClick={() => setbuttonPopup(true)}><AddIcon/></button>
                <BreakfastSearch 
                    trigger={buttonPopup} setTrigger={setbuttonPopup} 
                    trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}
                />
                </div>
            </div>
    )   
}
const mapStateToProps = reduxState => {
    return {breakfastReducer: reduxState.breakfastReducer}
}
export default connect(mapStateToProps, {getBreakfast})(Breakfast);