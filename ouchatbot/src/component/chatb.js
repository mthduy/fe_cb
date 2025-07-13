
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import './chatb.css';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Đây là phản hồi mẫu từ chatbot." }
      ]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // return (
  //   <div className="chat-container">
  //     <div className="header">💬 ChatBot Tuyển Sinh - OU </div>

  //     <div className="messages">
  //       {messages.map((msg, idx) => (
  //         <motion.div
  //           key={idx}
  //           initial={{ opacity: 0, y: 10 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           className={`message ${msg.from === "user" ? "user-message" : "bot-message"}`}
  //         >
  //           {msg.text}
  //         </motion.div>
  //       ))}
  //       <div ref={messagesEndRef}></div>
  //     </div>

  //     <div className="input-area">
  //       <input
  //         type="text"
  //         placeholder="Nhập tin nhắn..."
  //         value={input}
  //         onChange={(e) => setInput(e.target.value)}
  //         onKeyDown={handleKeyPress}
  //       />
  //       <button onClick={handleSend} className="send-button">
  //         <Send size={18} />
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
  <div className="chat-wrapper">
    <div className="chat-container">
      <div className="header">💬 ChatBot Tuyển Sinh - OU</div>

      <div className="messages">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`message ${msg.from === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </motion.div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend} className="send-button">
          <Send size={18} />
        </button>
      </div>
    </div>
  </div>
);

}


