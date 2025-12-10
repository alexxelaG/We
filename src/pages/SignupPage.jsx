import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      // Create user auth account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      // Create Firestore user profile document
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        skillLevel: "Beginner",
        sports: [],
        joinedGroups: [],
        createdAt: new Date()
      });

      navigate("/profile");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/email-already-in-use") {
        setError("An account with that email already exists.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Sign Up</Typography>

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField 
              label="Name" 
              fullWidth 
              margin="normal"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
            />

            <TextField 
              label="Email" 
              fullWidth 
              margin="normal"
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />

            <TextField 
              label="Password"
              type="password"
              fullWidth 
              margin="normal"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
            />

            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
