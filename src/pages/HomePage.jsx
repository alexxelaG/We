import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        p: 4
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        We :)
      </Typography>

      <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>
        Make sports friends. Play more. Connect better.
      </Typography>

      <Typography variant="h6" sx={{ maxWidth: '600px', mb: 4 }}>
        A friendly sports-based social app to match with players nearby,
        join groups, schedule games, and build real friendships.
      </Typography>

      <Box>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          sx={{
            m: 1,
            px: 4,
            py: 1.5,
            backgroundColor: 'white',
            color: '#1976d2',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#f0f0f0' }
          }}
        >
          Login
        </Button>

        <Button
          component={Link}
          to="/signup"
          variant="outlined"
          sx={{
            m: 1,
            px: 4,
            py: 1.5,
            color: 'white',
            borderColor: 'white',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' }
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
