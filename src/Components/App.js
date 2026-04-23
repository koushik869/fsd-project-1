import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      
      <div style={{ marginTop: "40px" }}>
        <Hero />
      </div>

      <div style={{ marginTop: "40px" }}>
        <Login />
      </div>

      <div style={{ marginTop: "40px" }}>
        <Chatbot />
      </div>

      <div style={{ marginTop: "40px" }}>
        <ThreeScene />
      </div>
    </div>
  );
}

export default App;