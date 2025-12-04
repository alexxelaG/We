import React from "react";
import "../styles/Home.css";

import { db } from "../firebase";
import { collection, addDoc} from "firebase/firestore";

async function testAddUser() {
  await addDoc(collection(db, "users"), {
    name: "Test User",
    sport: "Basketball",
    skill: "Beginner"
  });

  alert("User added!");
}

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

          <button onClick={testAddUser}>Add Test User</button>
        </div>
      </div>
    </div>
  );
}
