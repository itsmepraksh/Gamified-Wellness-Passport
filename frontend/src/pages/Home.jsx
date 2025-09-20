import React from "react";
import Navbar from "../components/Navbar"; // Navbar import
import Footer from "../components/Footer"; // Footer import
import "./Home.css"; // styling ke liye

function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="home-container">
        <header className="hero-section">
          <h1>🌱 Welcome to GenAI Wellness Passport</h1>
          <p>
            Manage stress, anxiety & loneliness with our AI Chatbot, Mood Tracker, Mindfulness content, and Gamified Passport!
          </p>
          <button className="cta-button">Get Started</button>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <h2>🚀 Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span>🤖</span>
              <h3>AI Chatbot</h3>
              <p>24/7 empathetic companion</p>
            </div>
            <div className="feature-card">
              <span>😊</span>
              <h3>Mood Tracker</h3>
              <p>Log daily moods & get insights</p>
            </div>
            <div className="feature-card">
              <span>🏆</span>
              <h3>Gamified Passport</h3>
              <p>Earn badges & streaks for healthy habits</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
