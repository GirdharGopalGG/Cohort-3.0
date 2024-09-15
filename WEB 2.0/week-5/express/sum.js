const express = require('express')
const app = express()

app.get('/add',(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        sum:a+b
    })
})

app.get('/subtract',(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        res:a-b
    })
})

app.get('/multiply',(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        product:a*b
    })
})

app.get('/divide',(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.json({
        quotient:a/b
    })
})

app.listen(3000)