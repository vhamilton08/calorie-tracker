import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Breakfast from './breakfast/Breakfast'
import Lunch from './lunch/Lunch'
import Dinner from './dinner/Dinner'
import Snacks from './snacks/Snacks'
import AddBreakfast from './breakfast/AddBreakfast'
import AddLunch from  './lunch/AddLunch'
import AddDinner from './dinner/AddDinner'
import AddSnacks from './snacks/AddSnacks'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/breakfast' component={Breakfast}/>
        <Route path='/lunch' component={Lunch}/>
        <Route path='/dinner' component={Dinner}/>
        <Route path='/snacks' component={Snacks}/>
        <Route path='/breakfastadd' component={AddBreakfast}/>
        <Route path='/lunchadd' component={AddLunch}/>
        <Route path='/dinneradd' component={AddDinner}/>
        <Route path='/snacksadd' component={AddSnacks}/>
    </Switch>
)