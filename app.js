const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDetails')
.then(()=>{
    console.log('Connected to database')
}).catch((err)=>{
    console.log('Some Error Occure')
    console.log(err);
})

app.use(express.json())

app.use(cors())

// app.get('/',(req, res)=>{
//     res.send('This is homepage')
// })

// app.get('/about',(req, res)=>{
//     res.send('This is About Page')
// })

const empRoute = require('./backRoute/empRoute')
app.use('/employee', empRoute) 

const userRoutes = require('./backRoute/registrationRoute')
app.use('/user', userRoutes)


app.listen(8000,()=>{
    console.log('Server Created')
})

