"use client";

import PageContainer from "@/components/page-container";
import { Send } from "@mui/icons-material";
import { Box, IconButton, Input, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "person",
      message: "hi",
      yourself: false,
    },
  ]);

  const sendHandler = () => {
    setMessages([...messages, { name: "me", message: input, yourself: true }]);
    setInput("");
  };

  return (
    <PageContainer requireLogin={true} defineHeight>
      <Box sx={{ display: "flex", height: "100%", maxHeight: "100%", flexDirection: "column" }}>
        <Stack spacing={1} sx={{ flexGrow: 1 }}>
          {messages.map((message, index) => (
            <Paper key={index} sx={{ padding: 1 }}>
              <Typography color={"text.secondary"}>
                {message.name} {message.yourself && "(You)"}
              </Typography>
              <Typography>{message.message}</Typography>
            </Paper>
          ))}
        </Stack>
        <Paper component={"form"} onSubmit={sendHandler} sx={{ display: "flex", marginTop: 2, padding: 1, gap: 2 }}>
          <Input value={input} onChange={(event) => setInput(event.target.value)} sx={{ flexGrow: 1 }} />
          <IconButton type={"submit"}>
            <Send />
          </IconButton>
        </Paper>
      </Box>
    </PageContainer>
  );
}