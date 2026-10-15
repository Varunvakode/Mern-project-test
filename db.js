const mongoose = require('mongoose');

const connectDB = mongoose.connect("mongodb://localhost:27017/test2").then(()=>{
    console.log("connect");
    
}).catch((error)=>{
    console.log(error);
})

model.exports = {connectDB} 