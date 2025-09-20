import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌱 GenAI Wellness</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Chatbot</li>
        <li>Mood Tracker</li>
        <li>Passport</li>
        <li>Profile</li>
      </ul>
      <button className="nav-cta">Get Started</button>
    </nav>
  );
}

export default Navbar;
