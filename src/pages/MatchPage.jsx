import React, { useState } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { toast } from 'react-toastify';

export default function MatchPage() {
  // Mock users — replace with backend later
  const initialUsers = [
    {
      id: 1,
      name: "Chris",
      sport: "Basketball",
      skill: "Intermediate",
      bio: "Likes pickup games and weekend tournaments.",
      image: "https://i.imgur.com/t9HFQvX.jpeg"
    },
    {
      id: 2,
      name: "Jordan",
      sport: "Tennis",
      skill: "Beginner",
      bio: "Just started learning tennis. Looking for rally partners!",
      image: "https://i.imgur.com/4ZYO3Fh.jpeg"
    },
    {
      id: 3,
      name: "Maya",
      sport: "Soccer",
      skill: "Advanced",
      bio: "Plays competitively. Always down for weekend matches.",
      image: "https://i.imgur.com/PvjgF8Z.jpeg"
    }
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleLike = () => {
    const current = users[0];
    toast.success(`You matched with ${current.name}!`);
    setUsers(users.slice(1)); // remove first user
  };

  const handleSkip = () => {
    setUsers(users.slice(1)); // skip first user
  };

  if (users.length === 0) {
    return (
      <Container sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h4" gutterBottom>No More Matches</Typography>
        <Typography color="text.secondary">
          Check back later for new connections!
        </Typography>
      </Container>
    );
  }

  const user = users[0];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Find Sports Buddies
      </Typography>

      {/* Match Card */}
      <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="320"
          image={user.image}
          alt={user.name}
          sx={{ objectFit: 'cover' }}
        />

        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {user.name}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            <strong>Sport:</strong> {user.sport}
          </Typography>

          <Typography sx={{ mt: 0.5 }}>
            <strong>Skill Level:</strong> {user.skill}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2 }}>
            {user.bio}
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
            <Button 
              variant="outlined" 
              color="error"
              sx={{ px: 4 }}
              onClick={handleSkip}
            >
              Skip
            </Button>

            <Button 
              variant="contained" 
              color="primary" 
              sx={{ px: 4 }}
              onClick={handleLike}
            >
              Like
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
