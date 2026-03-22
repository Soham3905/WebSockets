import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [socket,setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) =>{
      alert(ev.data);
    }
    ws.onerror = () => {};
    ws.onclose = () => {};
    ws.onopen = () => {};
  }, []);

  return (
    <>
      <div>Welcome to my Chat App</div>
      <input ref={inputRef} type="text" placeholder="Message..." />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default App;
