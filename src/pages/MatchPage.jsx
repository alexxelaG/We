import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material';
import { toast } from 'react-toastify';

export default function MatchPage() {

  // Generic avatar image (illustration-style)
  const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png";

  // Mock users — replace with backend later
  const initialUsers = [
    {
      id: 1,
      name: "Chris",
      sport: "Basketball",
      skill: "Intermediate",
      bio: "Likes pickup games and weekend tournaments.",
      image: DEFAULT_AVATAR
    },
    {
      id: 2,
      name: "Jordan",
      sport: "Tennis",
      skill: "Beginner",
      bio: "Just started learning tennis. Looking for rally partners!",
      image: DEFAULT_AVATAR
    },
    {
      id: 3,
      name: "Maya",
      sport: "Soccer",
      skill: "Advanced",
      bio: "Plays competitively. Always down for weekend matches.",
      image: DEFAULT_AVATAR
    },
    {
      id: 4,
      name: "Alex",
      sport: "Basketball",
      skill: "Beginner",
      bio: "Trying to improve my shooting and conditioning.",
      image: DEFAULT_AVATAR
    },
    {
      id: 5,
      name: "Samantha",
      sport: "Yoga",
      skill: "Intermediate",
      bio: "Enjoys morning flows and weekend stretch sessions.",
      image: DEFAULT_AVATAR
    },
    {
      id: 6,
      name: "Daniel",
      sport: "Running",
      skill: "Advanced",
      bio: "Training for half marathons. Looking for pace partners.",
      image: DEFAULT_AVATAR
    },
    {
      id: 7,
      name: "Emily",
      sport: "Volleyball",
      skill: "Intermediate",
      bio: "Plays beach and indoor volleyball.",
      image: DEFAULT_AVATAR
    },
    {
      id: 8,
      name: "Marcus",
      sport: "Weightlifting",
      skill: "Advanced",
      bio: "Focused on powerlifting and strength cycles.",
      image: DEFAULT_AVATAR
    },
    {
      id: 9,
      name: "Nina",
      sport: "Pilates",
      skill: "Beginner",
      bio: "New to Pilates and core training.",
      image: DEFAULT_AVATAR
    },
    {
      id: 10,
      name: "Ryan",
      sport: "Soccer",
      skill: "Intermediate",
      bio: "Plays in local leagues and pickup games.",
      image: DEFAULT_AVATAR
    },
    {
      id: 11,
      name: "Olivia",
      sport: "Swimming",
      skill: "Advanced",
      bio: "Former swim team member, loves long-distance sets.",
      image: DEFAULT_AVATAR
    },
    {
      id: 12,
      name: "Ethan",
      sport: "Cycling",
      skill: "Intermediate",
      bio: "Weekend road rides and endurance training.",
      image: DEFAULT_AVATAR
    },
    {
      id: 13,
      name: "Isabella",
      sport: "Dance",
      skill: "Advanced",
      bio: "Hip-hop and contemporary dancer.",
      image: DEFAULT_AVATAR
    },
    {
      id: 14,
      name: "Kevin",
      sport: "Badminton",
      skill: "Intermediate",
      bio: "Looking for competitive but fun rallies.",
      image: DEFAULT_AVATAR
    },
    {
      id: 15,
      name: "Hannah",
      sport: "Hiking",
      skill: "Beginner",
      bio: "Exploring local trails and nature walks.",
      image: DEFAULT_AVATAR
    },
    {
      id: 16,
      name: "Jason",
      sport: "Boxing",
      skill: "Intermediate",
      bio: "Cardio boxing and mitt work enthusiast.",
      image: DEFAULT_AVATAR
    },
    {
      id: 17,
      name: "Laura",
      sport: "Climbing",
      skill: "Advanced",
      bio: "Indoor bouldering and top-rope climbing.",
      image: DEFAULT_AVATAR
    },
    {
      id: 18,
      name: "Miguel",
      sport: "CrossFit",
      skill: "Intermediate",
      bio: "Loves WODs and group workouts.",
      image: DEFAULT_AVATAR
    }
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleLike = () => {
    const current = users[0];
    toast.success(`You matched with ${current.name}!`);
    setUsers(users.slice(1));
  };

  const handleSkip = () => {
    setUsers(users.slice(1));
  };

  if (users.length === 0) {
    return (
      <Container sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          No More Matches
        </Typography>
        <Typography color="text.secondary">
          Check back later for new connections!
        </Typography>
      </Container>
    );
  }

  const user = users[0];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Find Sports Buddies
      </Typography>

      <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="320"
          image={user.image}
          alt={user.name}
          sx={{
            objectFit: 'contain',
            backgroundColor: '#f5f5f5',
            p: 3
          }}
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              mt: 3
            }}
          >
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
