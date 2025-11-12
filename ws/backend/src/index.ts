import { WebSocketServer } from "ws"

const ws = new WebSocketServer({ port: 8080 })

ws.on("connection", function (socket) {
    console.log('New client connected!');

    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong")
        }
    })
})