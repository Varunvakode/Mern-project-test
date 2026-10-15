const express = require('express')

const {showproduct,addproduct,updateprouct,delProduct} = require('../controllers_/productcontrol')

const router = express()
router.use(express.json())

router.get('/',showproduct)

router.post('/add',addproduct)

router.patch('/update',updateprouct)

router.delete('/del',delProduct)

model.exports=router