"use strict";
// import { WebSocket, WebSocketServer } from "ws";
// const wss = new WebSocketServer({port:8080})
// let userCount = 0;
// let allSockets:WebSocket[] = []
// wss.on('connection',(socket)=>{
//     allSockets.push(socket)
//     console.log('user connected #'+userCount)
//     userCount++
//     socket.on('message',(event)=>{
//         console.log("message received: "+event.toString())
//         // socket.send()
//         for(let i = 0; i<allSockets.length;i++){
//             const s = allSockets[i]
//             s.send(event.toString()+": sent from the server")
//         }
//     })
// })
