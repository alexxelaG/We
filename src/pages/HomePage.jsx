import React from "react";
import "../styles/Home.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">We :)</h1>

        <h2 className="home-tagline">
          Make sports friends. Play more. Connect better.
        </h2>

        <p className="home-description">
          A friendly sports-based social app to match with players nearby,
          join groups, schedule games, and build real friendships.
        </p>

        <div className="home-buttons">
          <button className="home-login">LOGIN</button>
          <button className="home-signup">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
