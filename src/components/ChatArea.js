import React, { useState } from 'react';

const ChatArea = ({ contact }) => {
  const [message, setMessage] = useState('');

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const newMessages = [...contact.messages, { sender: 'You', text: message }];
    contact.messages = newMessages; // Update the messages

    setMessage(''); // Clear input field
  };

  return (
    <div className="col-9 bg-white p-4 d-flex flex-column">
      <div className="d-flex align-items-center mb-3">
        <img
          src={contact.image}
          alt={contact.name}
          className="rounded-circle"
          width="50"
          height="50"
        />
        <h5 className="ms-3 mb-0">{contact.name}</h5>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow-1 overflow-auto mb-3">
        {contact.messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex ${msg.sender === 'You' ? 'justify-content-end' : 'justify-content-start'} mb-2`}
          >
            <div
              className={`p-2 rounded ${msg.sender === 'You' ? 'bg-primary text-white' : 'bg-light'}`}
              style={{ maxWidth: '75%' }}
            >
              <small className="d-block text-muted mb-1">{msg.sender}</small>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <form onSubmit={handleSendMessage}>
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
