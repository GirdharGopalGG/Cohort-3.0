// const express = require('express')
import jwt from 'jsonwebtoken'
import express, { Request, Response } from 'express'
require('dotenv').config()
const mongoose = require('mongoose')
import { contentModel, userModel } from './db'
import { authMiddleware } from './auth'

const app = express()
app.use(express.json())

app.post('/signup', async(req:Request,res:Response) => {
    const username = req.body.username
    const password = req.body.password

    try{
    await userModel.create({
        username,
        password
    })
    res.json({
    msg:'data added'
})
}catch(e){
res.status(400).json({
        msg:'username already exists'
    })
}
})

app.post('/signin',async(req:Request,res:Response)=>{
    const {username,password} = req.body
    const user = await userModel.findOne({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            id:user._id
        },process.env.JWT_SECRET as string)
        res.json(token)
    }
    else{
        res.status(200).json({
            msg:'wrong credentials'
        })
    }
})

app.post('/content',authMiddleware,async(req,res)=>{
    const {link,type,title} = req.body
    
    await contentModel.create({
        link,type,title,
        //@ts-ignore
        userId:req.id,
        tags:[]

    })

    res.json({
        msg:'content added'
    })
})

app.get('/content',authMiddleware,async(req,res)=>{
        //@ts-ignore
    
    const userId = req.id
   const content =  await contentModel.find({
        userId:userId
    }).populate('userId','username ')     
    res.json({
        content
    })     
})

app.delete('/content',authMiddleware,async (req,res)=>{
    const contentId = req.body.contentId
    
    await contentModel.deleteMany({
    //@ts-ignore
    userId:req.id,
    _id:contentId
    })
    res.json({
        msg:'deleted'
    })
})

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000)
    console.log(`you're connected now to Port 3000`)
}
main()
