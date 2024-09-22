const {Router} = require('express')

const courseRouter = Router()

courseRouter.get('/all',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})

courseRouter.post('/purchase',(req,res)=>{
    res.json({
        msg:"logged in"
    })
})


module.exports = {
    courseRouter:courseRouter
}