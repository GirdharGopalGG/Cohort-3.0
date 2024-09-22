const {Router} = require('express')

const userRouter = Router()

userRouter.post('/login',(req,res)=>{

    res.json({
        msg:"logged in"
    })
})

userRouter.post('/signup',(req,res)=>{
    res.json({
        msg:"logged in"
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