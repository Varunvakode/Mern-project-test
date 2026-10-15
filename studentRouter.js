const express = require('express')

const {addData,showData} = require('../controller_/studentContrller')

const router = express()

router.use(express.json())

router.get('/',showData)

router.post('/add',addData)

model.exports = router

