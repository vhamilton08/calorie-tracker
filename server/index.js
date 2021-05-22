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

// breakfast endpoints
app.get('/api/breakfast', ctrl.getBreakfast)
app.post('/api/breakfast', ctrl.addToBreakfast)
// app.delete('/api/breakfast', ctrl.deleteFromBreakfast)

//lunch endpoinds
app.get('/api/lunch', ctrl.getLunch)

app.listen(SERVER_PORT, () => console.log(`<---Server Online--->`))