const express = require('express')
const router = express.Router()
const registrationControl = require('../backControl/registrationControl')

router.post('/register', registrationControl.AddUser)

router.get('/find/:id', registrationControl.FindUser)

router.post('/login', registrationControl.Login)

router.get('/findall', registrationControl.FindAllUsers)

router.delete('/delete/:id', registrationControl.DeleteUser)

router.put('/update/:id', registrationControl.UpdateUser)

module.exports = router