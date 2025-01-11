"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSocks = [];
wss.on('connection', (sock) => {
    sock.on("message", (message) => {
        var _a;
        //@ts-ignore
        const parsedMsg = JSON.parse(message);
        if (parsedMsg.type === 'join') {
            allSocks.push({
                socket: sock,
                room: parsedMsg.payload.roomId
            });
        }
        if (parsedMsg.type === 'chat') {
            const currentUserRoom = (_a = allSocks.find((x) => x.socket == sock)) === null || _a === void 0 ? void 0 : _a.room;
            allSocks.forEach((sock) => {
                if (sock.room === currentUserRoom) {
                    sock.socket.send(parsedMsg.payload.message);
                }
            });
        }
    });
});
