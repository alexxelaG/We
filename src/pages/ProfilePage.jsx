import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Avatar,
  MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

  // Load user from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user')) || {
    name: "",
    email: "",
  };

  const [name, setName] = useState(storedUser.name || "");
  const [email] = useState(storedUser.email || "");
  const [bio, setBio] = useState("I love staying active and meeting new people through sports!");
  const [favoriteSport, setFavoriteSport] = useState("Basketball");
  
  const handleSave = () => {
    const updated = { name, email, bio, favoriteSport };
    localStorage.setItem("userProfile", JSON.stringify(updated));
    alert("Profile updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        My Profile
      </Typography>

      <Card sx={{ p: 2, boxShadow: 3 }}>
        <CardContent>

          {/* PROFILE IMAGE */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Avatar
              src="https://i.imgur.com/1Q9Z1Zm.png"
              sx={{ width: 120, height: 120 }}
            />
          </Box>

          {/* NAME */}
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* EMAIL (read-only) */}
          <TextField
            label="Email"
            fullWidth
            value={email}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />

          {/* FAVORITE SPORT */}
          <TextField
            select
            label="Favorite Sport"
            fullWidth
            value={favoriteSport}
            onChange={(e) => setFavoriteSport(e.target.value)}
            sx={{ mb: 2 }}
          >
            {["Basketball", "Soccer", "Tennis", "Running", "Pickleball", "Volleyball"].map((sport) => (
              <MenuItem key={sport} value={sport}>
                {sport}
              </MenuItem>
            ))}
          </TextField>

          {/* BIO */}
          <TextField
            label="Bio"
            fullWidth
            multiline
            minRows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* BUTTONS */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" onClick={handleSave}>
              Save Changes
            </Button>

            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
