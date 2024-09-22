const express = require('express')
const {userRouter} = require('./user')
const {courseRouter} = require('./course')
const { adminRouter } = require('./admin')

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://greatgmang:93XMVP6TPkGDixzm@cluster0.ajhckxw.mongodb.net/week-8-courseProject')
console.log("conneted to")

const app = express()

app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)



app.listen(3000)