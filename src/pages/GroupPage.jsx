import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Chip } from '@mui/material';

export default function GroupPage() {
  const groups = [
    {
      name: 'Weekend Ballers',
      sport: 'Basketball',
      members: 12,
      description: 'Casual pickup basketball. All skill levels welcome.',
      tags: ['Casual', 'Friendly']
    },
    {
      name: 'Pickle Pros',
      sport: 'Pickleball',
      members: 7,
      description: 'Looking for competitive mixed doubles players.',
      tags: ['Competitive', 'Intermediate']
    },
    {
      name: 'Morning Runners Club',
      sport: 'Running',
      members: 18,
      description: '3–5 mile group runs around San Jose. Pace flexible.',
      tags: ['Fitness', 'Social']
    }
  ];

  const handleJoinGroup = (groupName) => {
    alert(`You joined the group: ${groupName}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* Page Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Sports Groups & Communities
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Join local sports groups, find teammates, chat, and plan meetups.
      </Typography>

      {/* Group Cards */}
      {groups.map((group, index) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {group.name}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <strong>Sport:</strong> {group.sport}
            </Typography>

            <Typography>
              <strong>Members:</strong> {group.members}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
              {group.description}
            </Typography>

            {/* Tags */}
            <Box sx={{ mb: 2 }}>
              {group.tags.map((tag, i) => (
                <Chip key={i} label={tag} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>

            {/* Join Button */}
            <Button 
              variant="contained"
              onClick={() => handleJoinGroup(group.name)}
            >
              Join Group
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
