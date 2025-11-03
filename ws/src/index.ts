import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//server event handler
wss.on("connection", function (socket) {
  console.log("socket connected");
 // setInterval(() => {
  //  socket.send("hello");
 // }, 500);

  //client handler
  socket.on("message", (e) => {
      if (e.toString() == "ping") {
        socket.send("pong")
    }
  });
});
