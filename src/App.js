import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import { database } from "./Firebase/firebase"; 
import { ref, onValue } from "firebase/database"; 

const App = () => {
  const [rooms, setRooms] = useState({});
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    const roomsRef = ref(database, "rooms"); // Path Firebase Anda
    onValue(roomsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data); 
      setRooms(data || {});
    });
  }, []);

  const handleSetCurrentRoom = (roomId) => {
    const selectedRoom = rooms[roomId];
    if (selectedRoom) {
      setCurrentRoom({
        ...selectedRoom,
        id: roomId,
        messages: Object.entries(selectedRoom.messages || {}).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        ),
      });
    }
  };

  return (
    <div className="d-flex">
      <Sidebar rooms={rooms} setCurrentRoom={handleSetCurrentRoom} />
      {currentRoom ? (
        <ChatArea room={currentRoom} />
      ) : (
        <div className="col-9 p-4">Select a room to start chatting</div>
      )}
    </div>
  );
};

export default App;
