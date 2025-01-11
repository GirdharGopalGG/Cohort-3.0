import express from 'express'

const app = express()

app.get('/signin',(req,res)=>{
    res.send({
        msg:'hi there'
    })
})

app.listen(3000)