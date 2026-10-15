const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const ProductModel = mongoose.model("product",productSchema)

model.exports=ProductModel