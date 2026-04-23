import { useState } from "react";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login Successful ✅");
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <section>
      <h2>🔐 Login</h2>

      <input 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br />

      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />

      <button onClick={handleLogin}>Login</button>
    </section>
  );
}