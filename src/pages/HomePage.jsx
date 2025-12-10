import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Link as MuiLink } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const handleDemoLogin = () => {
    console.log("DEMO LOGIN CLICKED!");
  
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "aHWFsUxIMbO86C3c74666ynhGyG3",
        name: "Alex Garcia",
        email: "demo@we.com"
      })
    );
  
    console.log("Saved user:", JSON.parse(localStorage.getItem("user")));
    navigate("/profile");
  };
  
  

  return (
    <Container maxWidth="sm" sx={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: '100%', p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          {/* EMAIL LOGIN */}
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>

          {/* DEMO LOGIN */}
          <Button 
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleDemoLogin}
          >
            Continue as Demo User
          </Button>

          <Typography align="center" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <MuiLink component={Link} to="/signup">
              Sign up
            </MuiLink>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
