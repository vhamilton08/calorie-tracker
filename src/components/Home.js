import React from 'react';
import Meals from './Meals';

const Home = () => {
    return (
        <div>
            {/* <div>
                <h1>Daily Calorie Budget</h1>
                <h2>1900</h2>
            </div>
            <div>
                <h1>Calories Consumed</h1>
                <h2>1500</h2>
                <h1>Calories Left</h1>
                <h2>300</h2>
            </div> */}
            <span>
                <Meals/>
            </span>

        </div>
    )
}
export default Home;