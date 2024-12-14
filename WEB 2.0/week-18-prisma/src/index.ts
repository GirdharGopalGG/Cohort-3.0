import express from "express";
const app = express()

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

async function createUser(username:string,age:number,password:string){
    const user = await client.user.create({
        data:{
            username,
            age,
            password,

        }
    })
    console.log(user)
}
// createUser('gg3',7,'gg')

async function createTodo(title:string,desc:string,userId:number){
    const todo = await client.todo.create({
        data:{
            title,
            desc,
            userId,
        }
    })
    console.log(todo)
}

// createTodo('run','go to run',4)

app.get('/users/:username',async (req,res)=>{
    const username = req.params.username
    const user = await client.user.findFirst({
        where:{
            username:username
        },
        select:{
            age:true,
            username:true,
            id:true,
            

        }
    })
    console.log(user)
    
    res.json({
        user
    })
})
// getUser('gg3')



async function getTodo(userId:number){
    const todo = await client.todo.findMany({
        where:{
            userId:userId
        }
    })
    console.log(todo)
}
// getTodo(4)

async function getUserAndTodos(userId:number){
    const todo = await client.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            user:{select:{
                username:true
            }},
            title:true,
            desc:true
        }
    })
    console.log(todo)
}

// getUserAndTodos(4)


app.listen(3001)
