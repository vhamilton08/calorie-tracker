import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreakfastSearch from './BreakfastSearch';

const Breakfast = () => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [addButtonPopup, setaddButtonPopup] = useState(false)

    // const [foodList, setFoodlist] = useState('')
    // const Search = () => {
        // setIsSearching(!isSearching)
    // }
   
    return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                </nav>
                <div className="foodDetails">
                    <h1>Breakfast</h1>
                    <p>eggs scrambled<br/>toast</p>

                    <p>calories</p>
                    <button className="addFoodBtn" onClick={() => setbuttonPopup(true)}>+</button>
                </div>
                <div className="add">
                </div>
                <BreakfastSearch trigger={buttonPopup} setTrigger={setbuttonPopup} trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}>
                    {/* <h3>hello</h3> */}
                </BreakfastSearch>
                {/* <AddFood trigger2={addButtonPopup} setTrigger2={setaddButtonPopup}/> */}

            </div>
    )   
}
export default Breakfast;