import axios from 'axios'
import React, {useState} from 'react'
import CheckIcon from '@material-ui/icons/Check';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import './Popup.css'

const Popup = ({ handleClose, setClickedFood, clickedFood, setTrigger }) => {
    const[foodName, setFoodName] = useState(clickedFood.description)
    const [amount, setAmount] = useState(0)
    const [cals, setCals] = useState(0)
    const [protein, setProtein] = useState(0)
    const[fat, setFat] = useState(0)
    const [carbs, setCarbs] = useState(0)
    // const [weight, setWeight] = useState(0)

    
    let newArr = clickedFood.foodNutrients.filter(value => {
        return value.nutrientId === 1003 || value.nutrientId === 1004 || value.nutrientId === 1005 || value.nutrientId === 1008
    })
    let sortedArr = newArr.sort((a, b) => b.nutrientId - a.nutrientId)
    console.log(sortedArr)

    const handleChange = (e) => {
        setAmount(e.target.value)
        configureRatios()
        
    }
    const configureRatios = (e) => {
        // e.preventDefault()
            if(amount === 100) {
                    setCals(newArr[0].value)
                    setCarbs(newArr[1].value)
                    setFat(newArr[2].value)
                    setProtein(newArr[3].value)
                }
                 else if(amount < 100) {
                    let y = Math.floor(100 / amount)
                    setCals(Math.floor(newArr[0].value / y))
                    setCarbs(Math.floor(newArr[1].value / y))
                    setFat(Math.floor(newArr[2].value / y))
                    setProtein(Math.floor(newArr[3].value / y))
                    
                } else {
                    let y = amount / 100
                    setCals(y * newArr[0].value)
                    setCarbs(y * newArr[1].value)
                    setFat(y * newArr[2].value)
                    setProtein(y * newArr[3].value)
                    // setCals(z)
                    
                }
            }

            const submitFood = () => {
                axios.post('/api/breakfast', {name: foodName, calories: cals, protein: protein, carbs: carbs, fat: fat, weight: amount})
                .then(res => res.data)
                .then(setClickedFood(0))
                .then(setTrigger(false))
                .catch(err => console.log(err))
            }
            // console.log(breakfast)
    // console.log(cals, carbs, fat, protein)
    // console.log(amount)
    console.log(clickedFood.length, 'length')
    return (
        <div className="popup-box2">
            <div className="box2">
                <h3>{clickedFood.description}</h3>
                <input type='number' name='amount' value={amount} onChange={handleChange} placeholder='enter weight in grams'/>
                <CancelPresentationIcon className='close-icon2' fontSize='large' onClick={() => setClickedFood(0)}/>
                <p style={{marginTop: '13px'}}>{cals} cals</p>
                <p style={{color: 'green'}}> carbs {carbs}g</p>
                <p style={{color: 'orange'}}>fat {fat}g</p>
                <p style={{color: 'purple'}}>protein {protein}g</p>
                <button className='check-icon' onClick={submitFood}><CheckIcon/></button>
            </div>
        </div>
    )
}
export default Popup