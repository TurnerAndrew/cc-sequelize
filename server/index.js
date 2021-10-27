require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getUserInfo, updateUserInfo, getUserAppt, requestAppt} = require('./controller')

const app = express()
app.use(express.json())
app.use(cors())


//DEV
app.post('/seed', seed)

//USERS
app.get('/user', getUserInfo)
app.put('/user', updateUserInfo)

//APPOINTMENTS
app.get('/appt', getUserAppt)
app.post('/appt', requestAppt)

app.listen(SERVER_PORT, console.log(`listening on ${SERVER_PORT}`))