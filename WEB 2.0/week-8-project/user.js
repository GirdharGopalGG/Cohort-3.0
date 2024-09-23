const {Router} = require('express')
const {userModel} = require("./db");


const userRouter = Router()

userRouter.post('/login',(req,res)=>{

    res.json({
        msg:"logged in"
    })
})

userRouter.post('/signup',async(req,res)=>{
    const {email, password, firstName, lastName} = req.body
 
   await userModel.create({
        email,
        password,
        firstName,
        lastName
    }
    )
    res.json({
        msg:"signed up"
    })
})

userRouter.get('/purchases',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

module.exports = {
    userRouter:userRouter
}