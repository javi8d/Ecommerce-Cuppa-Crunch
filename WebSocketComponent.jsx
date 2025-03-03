import { useEffect, useState } from "react";

const WebSocketComponent = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize WebSocket
    const ws = new WebSocket("http://localhost:5173/");

    ws.onopen = () => console.log("WebSocket connected");
    ws.onmessage = (event) => console.log("Message received:", event.data);
    ws.onclose = () => console.log("WebSocket disconnected");

    setSocket(ws);

    // Close WebSocket on pagehide
    const handlePageHide = () => {
      if (ws) {
        ws.close();
        console.log("WebSocket closed due to page hide");
      }
    };

    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      if (ws) ws.close(); // Ensure cleanup on component unmount
    };
  }, []);

  return <div>WebSocket is running...</div>;
};

export default WebSocketComponent;