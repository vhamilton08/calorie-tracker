import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BreakfastSearch from './BreakfastSearch';
import { connect} from 'react-redux';
import dinnerReducer, { getDinner } from '../redux/dinnerReducer';
import LunchList from './LunchList';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';


const Dinner = (props) => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [addButtonPopup, setaddButtonPopup] = useState(false)


useEffect(() => {
    props.getDinner()
}, [dinnerReducer.dinner])

    console.log('skerpppp', props)
    return (
        <div className='breakfast-page'>
            <nav>
                <ul>
                    <li><Link to='/'><HomeIcon fontSize='large'/></Link></li>
                </ul>
            </nav>
            <div className="foodDetails">
                <h1>Dinner</h1>
            <div className='meal-totals'>
                <section>
                    <h2>Calories</h2>
                    <p>{props.dinnerReducer.dinner.reduce((acc, cur) => {
                            return (acc + cur.calories)
                    }, 0)}</p>
                </section>
                <section>
                    <h2>protein</h2>
                    <p>{props.dinnerReducer.dinner.reduce((acc, cur) => {
                    return (acc + cur.protein)
                    }, 0)}g</p>
                </section>
                <section>
                    <h2>carbs</h2>
                    <p>{props.dinnerReducer.dinner.reduce((acc, cur) => {
                    return (acc + cur.carbs)
                    }, 0)}g</p>
                </section>
                <section>
                    <h2>fat</h2>
                    <p>{props.dinnerReducer.dinner.reduce((acc, cur) => {
                    return (acc + cur.fat)
                    }, 0)}g</p>
                </section>
            </div>
            <div className='food-list'>
                {props.dinnerReducer.dinner.map((element, index) => {
                    return(
                        <LunchList
                        key={index}
                        el={element}/>
                        )
                    })}
            </div>
            <button className='addFoodBtn' onClick={() => setbuttonPopup(true)}><AddIcon/></button>
            <BreakfastSearch trigger={buttonPopup} setTrigger={setbuttonPopup} trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {dinnerReducer: reduxState.dinnerReducer}
}
export default connect(mapStateToProps, {getDinner})(Dinner);