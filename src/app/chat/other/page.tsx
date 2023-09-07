"use client";

import PageContainer from "@/components/page-container";
import { Send } from "@mui/icons-material";
import { Box, Container, IconButton, Input, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "bestieeeee 🥰🥰🥰",
      message: "netflix and chill??",
      yourself: false,
    },
  ]);

  const sendHandler = (event: any) => {
    event.preventDefault();
    setMessages([...messages, { name: "me", message: input, yourself: true }]);
    setInput("");
  };

  return (
    <PageContainer requireLogin={true}>
      <Stack spacing={1}>
        {messages.map((message, index) => (
          <Paper key={index} sx={{ padding: 1 }}>
            <Typography color={"text.secondary"}>
              {message.name} {message.yourself && "(You)"}
            </Typography>
            <Typography>{message.message}</Typography>
          </Paper>
        ))}
      </Stack>
      <Box sx={{ width: "100vw", position: "fixed", bottom: { xs: 80, sm: 30 }, left: 0 }}>
        <Container>
          <Paper
            component={"form"}
            onSubmit={sendHandler}
            sx={{ display: "flex", marginLeft: "auto", marginRight: "auto", padding: 1, gap: 1 }}
          >
            <Input value={input} onChange={(event) => setInput(event.target.value)} sx={{ flexGrow: 1 }} />
            <IconButton type={"submit"}>
              <Send />
            </IconButton>
          </Paper>
        </Container>
      </Box>
    </PageContainer>
  );
}