import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';  // ChatArea Component


const App = () => {
  const [currentChat, setCurrentChat] = useState(null);

  const contacts = [
    { id: 1, name: 'Alice', image: 'https://placehold.co/50x50' },
    { id: 2, name: 'Bob', image: 'https://placehold.co/50x50' },
  ];

  // Simulasi data chat berdasarkan kontak yang dipilih
  const chatData = {
    Alice: [
      { sender: 'Alice', text: 'Hi, how are you?' },
      { sender: 'You', text: 'I\'m good, thanks!' },
    ],
    Bob: [
      { sender: 'Bob', text: 'How\'s it going?' },
      { sender: 'You', text: 'All good, and you?' },
    ],
  };

  // Mengambil chat berdasarkan kontak yang dipilih
  const handleSetCurrentChat = (contact) => {
    setCurrentChat({
      ...contact,
      messages: chatData[contact.name] || [],
    });
  };

  return (
    <div className="d-flex">
      <Sidebar contacts={contacts} setCurrentChat={handleSetCurrentChat} />
      {currentChat ? <ChatArea contact={currentChat} /> : <div className="col-9 p-4">Select a contact to start chatting</div>}
    </div>
  );
};

export default App;
