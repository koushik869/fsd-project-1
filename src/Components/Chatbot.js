import { useState } from "react";

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const askAI = () => {
    setReply("Thinking...");

    setTimeout(() => {
      setReply("In 2050, AI will teach you personally!");
    }, 1000);
  };

  return (
    <section>
      <h2>🤖 AI Chatbot</h2>
      <input 
        placeholder="Ask something..." 
        onChange={(e) => setMsg(e.target.value)} 
      />
      <button onClick={askAI}>Ask</button>
      <p>{reply}</p>
    </section>
  );
}