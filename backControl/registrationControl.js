const registrationModel = require('../backModel/registrationModel')
const jwt = require('jsonwebtoken')
const secret = 'Lalita@123'


const AddUser = async (req, res) => {
    try {
        const empData = new registrationModel({
            fName: req.body.fName,
            lName: req.body.lName,
            contact: req.body.contact,
            email: req.body.email,
            password: req.body.password,
           
        })
        const data = await empData.save()
        res.status(200).send({ msg: "Data Inserted Successfully", data })
    } catch (err) {
        console.log(err);
    }

}

const FindAllUsers = async (req, res) => {
    try {
        const data = await registrationModel.find()
        res.status(200).send(data)
    } catch (err) {
        console.log(err);
    }
}

const FindUser = async (req, res) => {
    try {
        const userId = req.params.id
        const data = await registrationModel.findOne({_id:userId})
        res.status(200).send(data)
    } catch (err) {
        console.log(err);
    }
}
const Login = async (req, res) => {

    try {
        const {email, password} = req.body
        const data = await registrationModel.findOne({email, password})

        const atoken = {
            user: data._id
        }

        const token = jwt.sign(atoken, secret)

        res.status(200).send({data, token})
    } catch (err) {
        console.log(err);
    }
}

const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const data = await registrationModel.deleteOne({_id:userId})
        if(data.deletedCount === 0){
            res.status(401).send({msg:"Data not deleted"})
        }else{
            res.status(200).send({msg:"Data deleted successfully"})
        }
    } catch (err) {
        console.log(err);
    }
}

const UpdateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const {email, password, lName, fName, contact} = req.body
        const data = await registrationModel.updateOne({_id:userId}, {$set:{email, password, lName, fName, contact}})
        if(data.modifiedCount === 0){
            res.status(401).send({msg:"Nothing has been updated"})
        }else{
            res.status(200).send({msg:"Data updated successfully"})
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { AddUser, FindAllUsers, DeleteUser, FindUser, Login, UpdateUser }