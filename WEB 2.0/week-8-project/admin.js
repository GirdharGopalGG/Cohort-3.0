const {Router } = require('express')
const adminRouter = Router()

adminRouter.get('/all',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

adminRouter.post('/purchase',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

adminRouter.post('/login',(req,res)=>{

    res.json({
        msg:"logged in"
    })
})

adminRouter.post('/signup',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

adminRouter.get('/purchases',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

module.exports = {
    adminRouter:adminRouter
}