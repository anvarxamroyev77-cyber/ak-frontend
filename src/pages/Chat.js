import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [aiReply, setAiReply] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/chat/messages`)
      .then(res => setMessages(res.data));
  }, []);

  const sendMessage = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/chat/message`, { sender: "Me", text });
    setMessages([{ sender: "Me", text }, ...messages]);
    setText("");
  };

  const askAI = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/chat/ai`, { prompt: text });
    setAiReply(res.data.reply);
  };

  return (
    <div>
      <h2>Chat</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <button onClick={askAI}>Ask AI</button>
      <div><b>AI:</b> {aiReply}</div>
      <ul>
        {messages.map((m, i) => <li key={i}><b>{m.sender}:</b> {m.text}</li>)}
      </ul>
    </div>
  );
}
