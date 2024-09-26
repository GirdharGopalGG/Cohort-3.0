const express = require('express')
const app = express()


function loggingMiddleware(req,res,next){
    const method =req.method
    const url = req.url
    const date = new Date()
    console.log(`method is: ${req.method}`)
    console.log(url)
    console.log(date.toLocaleString())
    console.log(new Date())
    next()
}

app.use(loggingMiddleware)

app.get('/sum',function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        sum:a+b
    })
})
app.get('/multiply',function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        product:a*b
    })
})

app.listen(3000)