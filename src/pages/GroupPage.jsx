import React, { useEffect, useState } from "react";
import {
  Container, Typography, Card, CardContent,
  Button, Box, Chip
} from "@mui/material";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";

export default function GroupPage() {
  const [groups, setGroups] = useState([]);

  // Load groups from Firestore
  useEffect(() => {
    async function loadGroups() {
      const querySnap = await getDocs(collection(db, "communities"));
      const list = querySnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGroups(list);
    }
    loadGroups();
  }, []);

  // JOIN GROUP FUNCTION
  const handleJoinGroup = async (group) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.id) {
      alert("Please login first!");
      return;
    }

    // 🔥 DEMO USER MODE — store joined groups locally only
    if (user.id === "aHWFsUxIMbO86C3c74666ynhGyG3") {
      const joined = JSON.parse(localStorage.getItem("demoJoinedGroups")) || [];

      if (!joined.includes(group.id)) {
        joined.push(group.id);
        localStorage.setItem("demoJoinedGroups", JSON.stringify(joined));
      }

      alert(`Joined ${group.title}! (Demo Mode)`);
      return;
    }

    // 🔥 REAL FIREBASE USER — update Firestore
    try {
      await updateDoc(doc(db, "users", user.id), {
        joinedGroups: arrayUnion(group.id)
      });

      await updateDoc(doc(db, "communities", group.id), {
        members: arrayUnion(user.id)
      });

      alert(`Joined ${group.title}!`);
    } catch (err) {
      console.error(err);
      alert("Failed to join group.");
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Sports Groups & Communities
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Join local sports groups, find teammates, chat, and plan meetups.
      </Typography>

      {groups.map(group => {
        const demoJoined =
          JSON.parse(localStorage.getItem("demoJoinedGroups")) || [];
        const alreadyJoined = demoJoined.includes(group.id);

        return (
          <Card key={group.id} sx={{ mb: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {group.title}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                <strong>Sport:</strong> {group.sport}
              </Typography>

              <Typography>
                <strong>Members:</strong> {group.members?.length || 0}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Chip label={group.sport} sx={{ mr: 1, mb: 1 }} />
              </Box>

              <Button
                variant="contained"
                disabled={alreadyJoined}
                onClick={() => handleJoinGroup(group)}
              >
                {alreadyJoined ? "Joined" : "Join Group"}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
