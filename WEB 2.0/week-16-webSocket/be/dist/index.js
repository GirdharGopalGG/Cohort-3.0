"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on('connection', function (socket) {
    socket.on('message', function (e) {
        if (e.toString() == 'ping') {
            socket.send('pong');
        }
    });
});