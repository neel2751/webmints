"use client";
import { useState } from "react";
// data.js
export const chatData = [
  {
    channel: "general",
    keywords: ["hello", "hi", "hey"],
    response: "Hello! How can I assist you today?",
  },
  {
    channel: "support",
    keywords: ["help", "support", "issue"],
    response: "Sure! Please describe the issue you're facing.",
  },
  {
    channel: "sales",
    keywords: ["price", "cost", "buy"],
    response:
      "Our pricing details can be found on our website. Would you like me to send you the link?",
  },
];

export default function SimpleChat() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    console.log("User input:", input);
    // Find a match where at least one keyword is in the user's input
    const match = chatData.find((item) =>
      item.keywords.some((keyword) => input.includes(keyword))
    );

    return match
      ? match.response
      : "I'm sorry, I don't understand that. Could you try asking about our hours or contact info?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];

    // Get response from local data
    const botResponse = getBotResponse(input);

    setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="messages-log">
        {messages.map((m, i) => (
          <div key={i} className={m.sender === "bot" ? "bot-msg" : "user-msg"}>
            {m.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
