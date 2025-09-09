import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    {user: 'Admin', text: 'Welcome to AK Chat!'}
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, {user: 'You', text: input}]);
    setInput('');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow rounded mt-10 flex flex-col h-[500px]">
      <h2 className="text-2xl font-bold mb-4">Chat Room</h2>
      <div className="flex-grow border rounded p-4 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.user==='You' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          className="flex-grow border rounded-l p-2" 
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition">Send</button>
      </div>
    </div>
  );
}

export default Chat;
