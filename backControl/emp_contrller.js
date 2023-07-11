const empModel = require('../backModel/empModel')

const AddEmployee = async (req, res) => {
    try {
        const empData = new empModel({
            name: req.body.name,
            age: req.body.age,
            state: req.body.state,
            city: req.body.city,
            mobile_no: req.body.mobile_no,
        })
        const data = await empData.save()
        res.status(200).send({ msg: "Data Inserted Successfully", data })
    } catch (err) {
        res.status(400).send(err)
        // console.log(err);
    }

}

const FindAllEmployee = async (req, res) => {
    try {
        const data = await empModel.find()
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
}

const FindEmployee = async (req, res) => {
    try {
        const {name}=req.body
        const data = await empModel.findOne()
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
}
const UpdateEmployee = async (req, res) => {
    try {
        const data = await empModel.find()
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
}
const DeleteEmployee = async (req, res) => {
    try {
        const data = await empModel.findOne()
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
        console.log(err);
    }

}
module.exports = { AddEmployee, FindAllEmployee, FindEmployee, UpdateEmployee, DeleteEmployee }