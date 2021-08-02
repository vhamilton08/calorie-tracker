import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LunchSearch from './LunchSearch';
import { connect} from 'react-redux';
import lunchReducer, { getLunch } from '../../redux/lunchReducer';
import LunchList from './LunchList';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import '../Breakfast.css'


const Lunch = (props) => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [addButtonPopup, setaddButtonPopup] = useState(false)


useEffect(() => {
    props.getLunch()
}, [lunchReducer.lunch])

    console.log('skerpppp', props)
    return (
        <div className='breakfast-page'>
            <nav>
                <ul>
                    <li><Link to='/'><HomeIcon fontSize='large'/></Link></li>
                </ul>
            </nav>
            <div className="foodDetails">
                <h1>Lunch</h1>
                <div className='meal-totals'>
                    <section>
                <h2>Calories</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                        return (acc + cur.calories)
                    }, 0)}</p>
                    </section>
                    <section>

                <h2>protein</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.protein)
                }, 0)}g</p>
                </section>
                <section>

                <h2>carbs</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.carbs)
                }, 0)}g</p>
                </section>
                <section>

                <h2>fat</h2>
                <p>{props.lunchReducer.lunch.reduce((acc, cur) => {
                    return (acc + cur.fat)
                }, 0)}g</p>
                </section>
                </div>
                {/* <h2>{props.lunchReducer.lunch.map(items => <li>{items.name}</li>)}</h2> */}
                <div className='food-list'>
                {props.lunchReducer.lunch.map((element, index) => {
                    return(
                        <LunchList
                        key={index}
                        el={element}/>
                        )
                    })}
            </div>
            <button className='addFoodBtn' onClick={() => setbuttonPopup(true)}><AddIcon/></button>
            <LunchSearch trigger={buttonPopup} setTrigger={setbuttonPopup} trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {lunchReducer: reduxState.lunchReducer}
}
export default connect(mapStateToProps, {getLunch})(Lunch);