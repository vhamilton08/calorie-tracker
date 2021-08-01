require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env
const ctrl = require('./controller')
const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('Db is online')
}).catch(err => console.log(`Database error: ${err}`))

//totalCals endpoints
app.get('/api/dailybudget', ctrl.getDailyBudget)
app.put('/api/dailybudget', ctrl.updateBudget)

// breakfast endpoints
app.get('/api/breakfast', ctrl.getBreakfast)
app.post('/api/breakfast', ctrl.addToBreakfast)
app.delete('/api/breakfast/:breakfast_id', ctrl.deleteFromBreakfast)
app.put('/api/breakfast/:breakfast_id', ctrl.editBreakfast)

//lunch endpoints
app.get('/api/lunch', ctrl.getLunch)
app.post('/api/lunch', ctrl.addToLunch)
app.delete('/api/lunch/:lunch_id', ctrl.deleteFromLunch)


//dinner endpoints
app.get('/api/dinner', ctrl.getDinner)
app.post('/api/dinner', ctrl.addToDinner)
app.delete('/api/dinner/:dinner_id', ctrl.deleteFromDinner)


//snacks endpoints
app.get('/api/snacks', ctrl.getSnacks)
app.post('/api/snacks', ctrl.addToSnacks)
app.delete('/api/snacks/:snacks_id', ctrl.deleteFromSnacks)




app.listen(SERVER_PORT, () => console.log(`<---Server Online--->`))