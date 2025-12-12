import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Avatar,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";

import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // USER STATE
  const [userId, setUserId] = useState(null);
  const [isDemo, setIsDemo] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteSport, setFavoriteSport] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [bio, setBio] = useState("");

  // Profile picture (display-only now)
  const [profilePic, setProfilePic] = useState(
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  );

  // Availability
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const demoUser = JSON.parse(localStorage.getItem("user"));

    if (demoUser && demoUser.id) {
      setIsDemo(true);
      setUserId(demoUser.id);
      setName(demoUser.name);
      setEmail(demoUser.email);
      setFavoriteSport(demoUser.favoriteSport || "Basketball");
      setSkillLevel(demoUser.skillLevel || "Beginner");
      setBio(demoUser.bio || "I love staying active and meeting new people!");
      setAvailability(demoUser.availability || []);
      setProfilePic(
        demoUser.profilePic ||
          "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
      );
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      setUserId(user.uid);
      setEmail(user.email);

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        setName(data.name || "");
        setFavoriteSport(data.favoriteSport || "Basketball");
        setSkillLevel(data.skillLevel || "Beginner");
        setBio(data.bio || "I love staying active and meeting new people!");
        setAvailability(data.availability || []);
        setProfilePic(
          data.profilePic ||
            "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        );
      }

      setLoading(false);
    });

    return () => unsub();
  }, [navigate]);

  const handleSave = async () => {
    if (isDemo) {
      const updated = {
        id: userId,
        name,
        email,
        favoriteSport,
        skillLevel,
        bio,
        availability,
        profilePic
      };

      localStorage.setItem("user", JSON.stringify(updated));
      alert("Demo profile updated!");
      return;
    }

    try {
      await updateDoc(doc(db, "users", userId), {
        name,
        favoriteSport,
        skillLevel,
        bio,
        availability,
        profilePic
      });

      alert("Profile updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  const handleLogout = async () => {
    if (isDemo) {
      localStorage.removeItem("user");
      navigate("/login");
      return;
    }

    await signOut(auth);
    navigate("/login");
  };

  if (loading) {
    return (
      <Typography sx={{ mt: 10, textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        My Profile
      </Typography>

      <Card sx={{ p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Avatar
              src={profilePic}
              sx={{ width: 120, height: 120 }}
            />
          </Box>

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email"
            fullWidth
            value={email}
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
          />

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

          <TextField
            select
            label="Skill Level"
            fullWidth
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </TextField>

          <TextField
            label="Bio"
            fullWidth
            multiline
            minRows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Availability */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            Availability
          </Typography>

          <ToggleButtonGroup
            value={availability}
            onChange={(e, newAvailability) =>
              setAvailability(newAvailability)
            }
            size="small"
            sx={{ flexWrap: "wrap", mb: 3 }}
          >
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <ToggleButton key={day} value={day} sx={{ m: 0.5 }}>
                {day}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
