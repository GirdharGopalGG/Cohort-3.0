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
        if(users[0].kidneys.length < 2){
        users[0].kidneys.push({
            healthy:isHealthy
        })
        res.json({
            msg:'kidney Added'
        })
    }
}
else{
    res.json({
        msg:"provide a good kidney or check whether already 2 kidneys exist"
    })
}
        
})

app.put('/',(req,res)=>{
    users.forEach(user=>{
        user.kidneys.map(kidney=>{
            kidney.healthy = true
        })
    })

    res.json({
        msg:'kidneys fixed',
        users: users
        })
    })


app.delete('/',(req,res)=>{
    let unhealthyKidney = 0
    users.forEach(user=>{
        user.kidneys.forEach(kidney=>{
            if(kidney.healthy===false){
                unhealthyKidney++
                user.kidneys = user.kidneys.filter(kidney=>{
          
                    return kidney.healthy === true
                })
            }
        })
        
        
            
        
    })
    if(unhealthyKidney===0){
        res.json({
            msg:"there are no unhealthy kidneys"

        })
    }else{
        res.json({
            msg:"removed unhealthy kidneys"
        })
    }
   

    
})

app.listen(3000)