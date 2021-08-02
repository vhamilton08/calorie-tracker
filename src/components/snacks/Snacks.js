import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SnacksSearch from './SnacksSearch';
import { connect} from 'react-redux';
import { getSnacks } from '../../redux/snackReducer';
import SnackList from './SnackList';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import '../Breakfast.css'



const Snacks = (props) => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [addButtonPopup, setaddButtonPopup] = useState(false)


useEffect(() => {
    props.getSnacks()
},[])

    console.log('skerpppp', props)
    return (
        <div className='breakfast-page'>
            <nav>
                <ul>
                    <li><Link to='/'><HomeIcon fontSize='large'/></Link></li>
                </ul>
            </nav>
            <div className="foodDetails">
                <h1>Snacks</h1>
            <div className='meal-totals'>
                <section>
                    <h2>Calories</h2>
                    <p>{props.snackReducer.snacks.reduce((acc, cur) => {
                            return (acc + cur.calories)
                    }, 0)}</p>
                </section>
                <section>
                    <h2>protein</h2>
                    <p>{props.snackReducer.snacks.reduce((acc, cur) => {
                    return (acc + cur.protein)
                    }, 0)}g</p>
                </section>
                <section>
                    <h2>carbs</h2>
                    <p>{props.snackReducer.snacks.reduce((acc, cur) => {
                    return (acc + cur.carbs)
                    }, 0)}g</p>
                </section>
                <section>
                    <h2>fat</h2>
                    <p>{props.snackReducer.snacks.reduce((acc, cur) => {
                    return (acc + cur.fat)
                    }, 0)}g</p>
                </section>
            </div>
            <div className='food-list'>
                {props.snackReducer.snacks.map((element, index) => {
                    return(
                        <SnackList
                        key={index}
                        el={element}/>
                        )
                    })}
            </div>
            <button className='addFoodBtn' onClick={() => setbuttonPopup(true)}><AddIcon/></button>
            <SnacksSearch trigger={buttonPopup} setTrigger={setbuttonPopup} trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/>
            </div>
        </div>
    )
}
const mapStateToProps = reduxState => {
    return {snackReducer: reduxState.snackReducer}
}
export default connect(mapStateToProps, {getSnacks})(Snacks);