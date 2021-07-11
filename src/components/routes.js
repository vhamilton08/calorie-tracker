import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snacks from './Snacks'
import AddBreakfast from './AddBreakfast'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/breakfast' component={Breakfast}/>
        <Route path='/lunch' component={Lunch}/>
        <Route path='/dinner' component={Dinner}/>
        <Route path='/snacks' component={Snacks}/>
        <Route path='/breakfastadd' component={AddBreakfast}/>

    </Switch>

)