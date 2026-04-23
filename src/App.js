import './App.css';
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Chatbot from "./Components/Chatbot";
import Login from "./Components/Login";
import ThreeScene from "./Components/ThreeScene";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <Navbar />

      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Hero />
          <Chatbot />
          <ThreeScene />
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;