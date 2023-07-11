const express = require('express')
const router = express.Router()
const emp_contrller = require('../backControl/emp_contrller')


router.post('/add', emp_contrller.AddEmployee)
router.get('/findAll', emp_contrller.FindAllEmployee)
router.post('find', emp_contrller.FindEmployee)
router.put('/update/:age', emp_contrller.UpdateEmployee)
router.put('/delete/:name', emp_contrller.DeleteEmployee)


module.exports = router