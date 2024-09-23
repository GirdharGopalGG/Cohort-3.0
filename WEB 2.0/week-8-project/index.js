const express = require('express')
const {userRouter} = require('./user')
const {courseRouter} = require('./course')
const { adminRouter } = require('./admin')

const mongoose = require("mongoose");


const app = express()
app.use(express.json())

app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

async function main() {
    await mongoose.connect('mongodb+srv://greatgmang:93XMVP6TPkGDixzm@cluster0.ajhckxw.mongodb.net/hojaaaaabc')
    app.listen(3000);
    console.log("listening on port 3000")
}

main()