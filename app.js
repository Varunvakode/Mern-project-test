const { Router } = require('express')
const express = require('mongoose')
const {connectDB} =require('../db')

const app = express()

app.use(express.json())

app.use('/',Router)

app.listen(4000,()=>{
    console.log("running.....");
})