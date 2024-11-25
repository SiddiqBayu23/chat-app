import React, { useState, useEffect } from 'react';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../Firebase/firebase';

const ChatArea = ({ room }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    const messagesRef = ref(database, `rooms/${room.id}/messages`);
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = Object.entries(data || {}).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setMessages(messagesArray);
    });
  }, [room.id]);

  
  const sendMessageToFirebase = (msg) => {
    const messagesRef = ref(database, `rooms/${room.id}/messages`);
    push(messagesRef, msg)
      .then(() => console.log("Message sent to Firebase:", msg))
      .catch((error) => console.error("Error sending message:", error));
  };

  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const customerMessage = {
      type: 'text',
      message,
      sender: 'You',
      timestamp: Date.now(),
    };

    sendMessageToFirebase(customerMessage);
    setMessage('');

    // Simulate automatic response from Customer Service
    setTimeout(() => {
      const csMessage = {
        type: 'text',
        sender: 'Customer Service',
        timestamp: Date.now(),
        message: message.toLowerCase().includes('pembayaran')
          ? 'Baik, silahkan kirimkan lampiran bukti pembayarannya.'
          : 'Ada yang bisa saya bantu?',
      };

      sendMessageToFirebase(csMessage);
    }, 1000);
  };

  return (
    <div
      className="col-9 d-flex flex-column bg-white p-4"
      style={{ height: '100vh' }} // Full viewport height
    >
      {/* Room Header */}
      <div className="d-flex align-items-center mb-3 border-bottom pb-2">
        <img
          src={room.image_url}
          alt={room.name}
          className="rounded-circle"
          width="50"
          height="50"
        />
        <h5 className="ms-3">{room.name}</h5>
      </div>

      {/* Messages Area */}
      <div
        className="flex-grow-1 overflow-auto mb-3"
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '10px',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex ${
              msg.sender === 'You' ? 'justify-content-end' : 'justify-content-start'
            } mb-2`}
          >
            <div
              className={`p-2 rounded ${
                msg.sender === 'You' ? 'bg-primary text-white' : 'bg-light'
              }`}
              style={{ maxWidth: '75%' }}
            >
              <small className="d-block text-muted">{msg.sender}</small>
              <span>{msg.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="mt-auto">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatArea;
