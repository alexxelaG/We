import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #4a6bff, #6c82ff, #8fa0ff)",
        padding: "40px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "10px", fontWeight: "bold" }}>
        We :)
      </h1>

      <h3 style={{ fontWeight: "300", marginBottom: "20px" }}>
        Make sports friends. Play more. Connect better.
      </h3>

      <p style={{ maxWidth: "650px", fontSize: "18px", opacity: 0.95, marginBottom: "35px" }}>
        A friendly sports-based social app to match with players nearby, join groups,
        schedule games, and build real connections.
      </p>

      <div style={{ display: "flex", gap: "15px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#4a6bff",
            fontWeight: "bold",
            width: "130px",
          }}
          onClick={() => navigate("/login")}
        >
          LOGIN
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            fontWeight: "bold",
            width: "130px",
          }}
          onClick={() => navigate("/signup")}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}
