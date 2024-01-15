import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Load previous messages when the component mounts
    fetch('http://localhost:5000/api/v1/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error loading messages:', error));

    // Listen for new messages
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      // Scroll to the bottom when new messages are added
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const isCurrentUser = (senderId) => {
    // Implement your logic to determine if the message is sent by the current user
    // For example, you might compare senderId with the current user's ID.
    // Return true if it's the current user, false otherwise.
    return senderId === 'currentUserId'; // Replace 'currentUserId' with your actual user ID logic.
  };

  const getMessageClasses = (senderId) => {
    return isCurrentUser(senderId) ? 'bg-blue-500 text-white p-2 rounded-md ml-auto' : 'bg-gray-300 text-black p-2 rounded-md mr-auto';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      // Send the message to the server
      socket.emit('sendMessage', { message });
      // Clear the input field
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="overflow-y-auto flex-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message m-vw w-fit ${getMessageClasses(msg.senderId)}`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border rounded p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
