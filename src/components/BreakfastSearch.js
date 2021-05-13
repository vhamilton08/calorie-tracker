import React from 'react'
import './BreakfastSearch.css'

const BreakfastSearch = (props) => {
    return ((props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">

            <button onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <input
            placeholder="search breakfast"/>
            </div>
        </div>
    ) : ''
    )
}
export default BreakfastSearch