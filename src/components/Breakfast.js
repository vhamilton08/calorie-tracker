import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreakfastSearch from './BreakfastSearch';

const Breakfast = () => {
    const [buttonPopup, setbuttonPopup] = useState(false)
    const [foodList, setFoodlist] = useState('')
    // const Search = () => {
        // setIsSearching(!isSearching)
    // }
    return (
            <div>
                <main>

                <button onClick={() => setbuttonPopup(true)}>open</button>

                    </main>
                <BreakfastSearch trigger={buttonPopup} setTrigger={setbuttonPopup}>
                    {/* <h3>hello</h3> */}
                </BreakfastSearch>
             </div>
    )
}
export default Breakfast;