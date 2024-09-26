const express = require('express')
const app = express()

// function ageMatters(age){
//     if(age>=14){
//         return true
//     }else{
//         return false
//     }
// }

function ageMattersMiddleware(req,res,next){
    const age =req.query.age
    if(age>=14){
        next()
    }else{
        res.json({
            msg:'age is too small to ride'
        })
    }
}
app.use(ageMattersMiddleware)


app.get('/ride1',(req,res)=>{
    {
        res.json({
            msg:"ride 1 ridden"
        })
    }
})
app.get('/ride2',(req,res)=>{
    {
        res.json({
            msg:"ride 2 ridden"
        })
    }
})
app.listen(3000)