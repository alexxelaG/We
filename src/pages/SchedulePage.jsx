import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';

export default function SchedulePage() {
  const events = [
    { 
      name: 'Sunday Soccer', 
      time: '10:00 AM', 
      location: 'San Jose Park',
      description: 'Casual friendly match. All skill levels welcome!' 
    },
    { 
      name: 'Golf Meetup', 
      time: '2:00 PM', 
      location: 'Sunnyvale Golf Range',
      description: 'Practice swings and short games with local players.' 
    },
    { 
      name: 'Pickleball Doubles', 
      time: '6:00 PM', 
      location: 'Campbell Community Center',
      description: 'Looking for 2–4 players for mixed skill doubles.' 
    }
  ];

  const handleJoin = (eventName) => {
    alert(`You joined: ${eventName}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Upcoming Sports Events
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Join local meetups, casual games, and community sports events.
      </Typography>

      {events.map((event, index) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {event.name}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <strong>⏱ Time:</strong> {event.time}
            </Typography>

            <Typography>
              <strong>📍 Location:</strong> {event.location}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
              {event.description}
            </Typography>

            <Button 
              variant="contained" 
              color="primary"
              onClick={() => handleJoin(event.name)}
            >
              Join Event
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
