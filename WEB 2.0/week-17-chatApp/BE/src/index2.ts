import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port:8080})

interface User{
    socket:WebSocket,
    room:string
}

let allSocks:User[] = []

wss.on('connection',(sock)=>{

    sock.on("message",(message)=>{
        //@ts-ignore
        const parsedMsg = JSON.parse(message)

        if(parsedMsg.type === 'join'){
            allSocks.push({
                socket:sock,
                room:parsedMsg.payload.roomId
            })
        }

        if(parsedMsg.type === 'chat'){
            const currentUserRoom = allSocks.find((x)=>x.socket==sock)?.room
            
            allSocks.forEach((sock)=>{
                if(sock.room === currentUserRoom){
                    sock.socket.send(parsedMsg.payload.message)
                }
            })
        }

    })
    
})
