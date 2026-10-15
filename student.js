const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:unique,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }
})

const studentModel = mongoose.model("student",studentSchema)

model.exports= {studentSchema, studentModel}
