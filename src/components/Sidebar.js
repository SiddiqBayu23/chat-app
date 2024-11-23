import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Sidebar = ({ setCurrentChat }) => {
  const contacts = [
    { id: 1, name: 'Alice', lastMessage: 'Hello!', image: 'https://placehold.co/50x50' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?', image: 'https://placehold.co/50x50' },
    // Add more contacts as needed
  ];

  return (
    <div className="col-3 bg-light p-0" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Card className="border-0" style={{ flex: 1 }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://placehold.co/50x50"
              alt="User"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <span className="ms-3 font-weight-bold">Bayu</span>
          </div>
        </Card.Header>
        <Card.Body>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="form-control mb-3"
          />
          <ListGroup variant="flush" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 180px)' }}>
            {contacts.map((contact) => (
              <ListGroup.Item
                key={contact.id}
                action
                onClick={() => setCurrentChat(contact)}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div className="ms-3">
                    <div className="font-weight-bold">{contact.name}</div>
                    <div className="text-muted">{contact.lastMessage}</div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
