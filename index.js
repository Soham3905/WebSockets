import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", function (socket) {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === "join") {
      console.log("user joined room " + parsedMessage.payload.roomId);
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }
    if (parsedMessage.type === "chat") {
      console.log("user joined chat " + parsedMessage.payload.message);
      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket === socket) {
          currentUserRoom = allSockets[i].room;
        }
      }
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room === currentUserRoom) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
  socket.on("close", () => {
    allSockets = allSockets.filter((x) => x.socket !== socket);
  });
});

// Chat App

// What the user can send ??

// Join a room

// {
//   "type" : "join",
//   "payload" : {
//     "roomId" : "1234",
//     "name" : "Soham",
//     "avatarURL" : "......."
//   }
// }

// Send a message

// {
//   "type" : "chat",
//   "payload" : {
//     "message" : "Hii there.."
//   }
// }


// What the server can send / user receives ??


// ---------------------
// {"type":"join","payload":{"roomId":"1234"}}
// {"type":"chat","payload":{"message":"Hii Soham"}}