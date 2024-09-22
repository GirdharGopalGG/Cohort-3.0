const express = require('express')

const app = express()

app.use(express.json())

var users = [{
    name:'kirat',
    age:'20',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }
]
},
{
    name:'gg',
    age:5,
    kidneys:[{
        healthy:true
    },{
        healthy:true
    }]
}]

app.get('/',(req,res)=>{
    const kiratKid = users[0].kidneys
    const numberOfKid = kiratKid.length
    const healthyKid = kiratKid.filter(kidney=>kidney.healthy===true).length
    const unhealthyKid = kiratKid.filter(kidney=>kidney.healthy===false).length
    res.json({
        name: users[0].name,
        kidneys: numberOfKid,
        healthyKidey: healthyKid,
        unhealthyKidney: unhealthyKid
    })
})

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy
    console.log(req.body)
    
    if(isHealthy===true){
        users[0].kidneys.push({
            healthy:isHealthy
        })
        res.json({
            msg:'kidney Added'
        })
    }
        
})

app.put('/',(req,res)=>{

})

app.delete('/',(req,res)=>{

})

app.listen(3000)