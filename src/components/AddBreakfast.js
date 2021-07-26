import axios from 'axios'
import React, { useState } from 'react'
import './AddBreakfast.css'

const AddBreakfast = (props) => {
    const [foodName, setFoodName] = useState('')
    const [calories, setCalories] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fat, setFat] = useState('')
    const [weight, setWeight] = useState('')

          const addFood = () => {
              axios.post('api/breakfast', {name:foodName, calories: calories, protein:protein, carbs: carbs, fat: fat, weight: weight})
                .then(res => res.data)
                .then(props.history.push('/breakfast'))
                .catch(err => console.log(err))
            }
console.log(calories)
   return (
       <div className='popup-box'>
           <div className='box'>
               <label>
    item name
            <input name='foodName' value={foodName} onChange={(e) => setFoodName(e.target.value)} type='text' placeholder='item name'/>
               </label>
            <label>
                calories
            <input name='calories' value={calories} onChange={(e) => setCalories(e.target.value)} type='number' placeholder='calories'/>
            </label>
            <label>
                protein
            <input name='protein' value={protein} onChange={(e) => setProtein(e.target.value)} type='number' placeholder='protein'/>
            </label>
            <label>
carbs
            <input name='carbs' value={carbs} onChange={(e) => setCarbs(e.target.value)} type='number' placeholder='carbs'/>
            </label>
            <label>
fat
            <input name='fat' value={fat} onChange={(e) => setFat(e.target.value)} type='number' placeholder='fat'/>
            </label>
            <label>
    grams
            <input name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} type='number' placeholder='weight in grams'/>
            </label>
            <button onClick={addFood}>Add</button>
            {/* <span onClick={setIsOpen(false)}>X</span> */}
           </div>
       </div>
   ) 
}
export default AddBreakfast