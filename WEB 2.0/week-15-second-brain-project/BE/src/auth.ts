import jwt from "jsonwebtoken"
import { userModel } from "./db"
import { NextFunction, Request, Response } from "express"

export async function authMiddleware(req:Request,res:Response,next:NextFunction){
    const token = req.headers.token
    const decodedData:Object= jwt.verify(token as string,process.env.JWT_SECRET as string )
    if(decodedData){
        //@ts-ignore
        req.id = decodedData.id
        next()
    }
    else{
        res.status(403).json({
            msg:'you are not logged in'
        })
    }
}