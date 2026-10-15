const mongoose = require('mongoose')

const ProductModel = require('../models_/product')

const showproduct = async (req,resp)=>{
    try {
        const data = await ProductModel.find()
        resp.json(data)
    } catch (error) {
        console.log(error);
    }
}

const addproduct = async (req,resp)=>{
    try {
        const {name,description,price,category,quanity}= req.body
        await ProductModel.create(name,description,price,category,quanity)
        resp.json("data added sucessfuly..")
    } catch (error) {
        console.log(error);
    }
}

const updateprouct = async (req,resp)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const delProduct = async (req,resp)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

model.exports={showproduct,addproduct,updateprouct,delProduct}