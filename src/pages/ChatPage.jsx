import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';

export default function ChatPage() {
  // Mock conversation list
  const conversations = [
    { id: 1, name: "Chris (Basketball)" },
    { id: 2, name: "Jordan (Tennis)" },
    { id: 3, name: "Maya (Soccer)" }
  ];

  // Active chat state
  const [activeChat, setActiveChat] = useState(1);

  // Mock messages (replace with backend later)
  const [messages, setMessages] = useState([
    { from: "Chris", text: "Hey! You playing this weekend?" },
    { from: "You", text: "Yeah! I'm free Sunday morning." }
  ]);

  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { from: "You", text: newMsg }]);
    setNewMsg('');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Chats
      </Typography>

      <Paper sx={{ display: 'flex', height: '70vh', boxShadow: 3 }}>
        {/* LEFT SIDEBAR: LIST OF CONVERSATIONS */}
        <Box
          sx={{
            width: '30%',
            borderRight: '1px solid #ddd',
            overflowY: 'auto',
            p: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Conversations
          </Typography>

          <List>
            {conversations.map((c) => (
              <ListItem
                button
                key={c.id}
                selected={activeChat === c.id}
                onClick={() => setActiveChat(c.id)}
              >
                <ListItemText primary={c.name} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* MAIN CHAT WINDOW */}
        <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
          {/* MESSAGES */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              p: 2,
              backgroundColor: '#f5f5f5'
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  display: 'flex',
                  justifyContent: msg.from === "You" ? 'flex-end' : 'flex-start'
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    maxWidth: '60%',
                    borderRadius: 2,
                    backgroundColor: msg.from === "You" ? '#1976d2' : 'white',
                    color: msg.from === "You" ? 'white' : 'black',
                    boxShadow: 1
                  }}
                >
                  <Typography variant="body1">
                    <strong>{msg.from}: </strong>{msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* INPUT BOX */}
          <Box sx={{ display: 'flex', p: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message…"
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
            />

            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
