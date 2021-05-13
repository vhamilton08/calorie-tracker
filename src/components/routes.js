import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Breakfast from './Breakfast'
import BreakfastSearch from './BreakfastSearch'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='breakfastsearch' component={BreakfastSearch}/>

    </Switch>

)