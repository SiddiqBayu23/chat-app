import React from 'react';
import { FaComments } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ rooms, setCurrentRoom, currentRoomId }) => {
  return (
    <div
      className="col-3 bg-light p-4 shadow-sm"
      style={{
        height: '100vh', 
        overflowY: 'auto', 
      }}
    >
      <h5 className="mb-4">Rooms</h5>
      <ul className="list-unstyled">
        {Object.entries(rooms).map(([roomId, room]) => (
          <li
            key={roomId}
            className={`d-flex align-items-center p-2 mb-3 rounded cursor-pointer ${
              currentRoomId === roomId ? 'bg-primary text-white' : 'bg-white'
            }`}
            onClick={() => setCurrentRoom(roomId)}
          >
            <FaComments className="me-3 text-primary" size={20} />
            <span className="fs-6">{room.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
