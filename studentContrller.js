const mongoose = require('mongoose')

const {studentSchema, studentModel} = require('../model_/student');

const showData = async (req,resp) =>{
    try {
        const data = await studentModel.find()
        resp.json(data)
    } catch (error) {
        console.log(error);
    }
}

const addData = async (req,resp)=>{
    try {
        const{name,Email,age,course,fees}=req.body
        await studentModel.create(name,Email,age,course,fees)
        resp.json("data added.......")
    } catch (error) {
        console.log(error);
    }
}

model.exports = {addData,showData}
