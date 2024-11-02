// src/components/Signup.js
import React, { useState } from "react";
import { signUp } from "../services/authService"; // Ensure this path is correct


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      console.log("User signed up!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
