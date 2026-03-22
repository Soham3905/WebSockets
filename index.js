import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("User Connected..");
  // setInterval(()=>{
  //     socket.send("Current price of Solana : " + Math.random())
  // },5000)
  socket.on("message", (e) => {
    // console.log(e.toString());
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
