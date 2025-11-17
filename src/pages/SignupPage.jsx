import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/profile');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" onChange={(e) => setForm({...form, name: e.target.value})} />
        <TextField label="Email" fullWidth margin="normal" onChange={(e) => setForm({...form, email: e.target.value})} />
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setForm({...form, password: e.target.value})} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Create Account</Button>
      </form>
    </Container>
  );
}
