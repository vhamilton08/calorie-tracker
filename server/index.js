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
// app.delete('/api/breakfast', ctrl.deleteFromBreakfast)

//lunch endpoints
app.get('/api/lunch', ctrl.getLunch)

//dinner endpoints
app.get('/api/dinner', ctrl.getDinner)

//snacks endpoints
app.get('/api/snacks', ctrl.getSnacks)


app.listen(SERVER_PORT, () => console.log(`<---Server Online--->`))