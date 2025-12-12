import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  Stack
} from "@mui/material";

export default function GroupPage() {
  // Mock group data (can be replaced with Firestore later)
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const mockGroups = [
      {
        id: 1,
        name: "Downtown Hoopers",
        sport: "Basketball",
        location: "SJSU Gym",
        meetupTime: "6:00 PM – 8:00 PM",
        days: ["Mon", "Wed", "Fri"],
        members: 14,
        description:
          "Casual pickup games with competitive energy. All skill levels welcome."
      },
      {
        id: 2,
        name: "Early Bird Runners",
        sport: "Running",
        location: "Guadalupe River Trail",
        meetupTime: "6:30 AM",
        days: ["Tue", "Thu"],
        members: 9,
        description:
          "Morning runs focusing on endurance and pacing. 3–6 mile routes."
      },
      {
        id: 3,
        name: "Weekend Soccer Crew",
        sport: "Soccer",
        location: "Spartan Soccer Complex",
        meetupTime: "10:00 AM",
        days: ["Sat"],
        members: 18,
        description:
          "Competitive but friendly matches every weekend. Bring cleats!"
      },
      {
        id: 4,
        name: "Sunset Yoga Flow",
        sport: "Yoga",
        location: "MLK Park",
        meetupTime: "7:00 PM",
        days: ["Mon", "Thu"],
        members: 11,
        description:
          "Relaxed outdoor yoga sessions focusing on flexibility and recovery."
      }
    ];

    setGroups(mockGroups);
  }, []);

  const handleJoinGroup = (groupName) => {
    alert(`You joined ${groupName}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Sports Groups
      </Typography>

      <Stack spacing={3}>
        {groups.map((group) => (
          <Card key={group.id} sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {group.name}
                </Typography>
                <Chip label={group.sport} color="primary" />
              </Box>

              <Typography color="text.secondary" sx={{ mt: 1 }}>
                📍 {group.location}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                🕒 <strong>{group.meetupTime}</strong>
              </Typography>

              <Typography sx={{ mt: 0.5 }}>
                📅 {group.days.join(", ")}
              </Typography>

              <Typography sx={{ mt: 0.5 }}>
                👥 {group.members} members
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 2 }}>
                {group.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleJoinGroup(group.name)}
              >
                Join Group
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
