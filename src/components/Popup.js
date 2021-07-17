import React from 'react'
import './Popup.css'

const Popup = ({ handleClose, setClickedFood, clickedFood }) => {
    console.log(clickedFood)
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <h3>hello thereeeeeeee</h3>
                <h3>{clickedFood}</h3>
                <button onClick={() => setClickedFood(0)}>X</button>
                
            </div>
        </div>
    )
}
export default Popup