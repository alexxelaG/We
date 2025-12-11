import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import MatchPage from './pages/MatchPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import GroupPage from './pages/GroupPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4A58F7, #2D37C8)",
        paddingBottom: "40px",
      }}
    >
      {/* NAVBAR */}
      <AppBar position="static" sx={{ background: '#000000' }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/match">Match</Button>
          <Button color="inherit" component={Link} to="/groups">Groups</Button>
          <Button color="inherit" component={Link} to="/chat">Chat</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}
