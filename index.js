import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
wss.on("connection", function (socket) {
  userCount = userCount + 1;
  allSockets.push(socket);
  console.log("All Sockets Length " + allSockets.length);
  console.log("User Connected #" + userCount);
  socket.on("message", (message) => {
    console.log("message received " + message.toString());
    allSockets.forEach((socket) => {
      socket.send(message.toString() + " sent from the server");
    });
  });
    socket.on("close", () => {
      allSockets = allSockets.filter((x) => x !== socket);
      console.log('User Disconnected');
      console.log('Current allSockets length:', allSockets.length);
  });
  console.log(allSockets.length);
});
