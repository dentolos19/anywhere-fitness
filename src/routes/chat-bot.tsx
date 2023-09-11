import { MoreVert, Send } from "@mui/icons-material";
import { Avatar, Box, Container, Divider, IconButton, Input, Paper, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

export default function ChatBotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Baymax",
      message: "Hello, I am Baymax, your personal healthcare companion.",
      self: false,
    },
  ]);

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    setMessages([{ name: "You", message: input, self: true }, ...messages]);
    setInput("");
  };

  return (
    <Container sx={{ py: 2, height: "100%" }}>
      <Paper sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <Box sx={{ display: "flex", px: 2, py: 1, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={"/assets/baymax.jpg"} />
            <Typography>Baymax</Typography>
          </Box>
          <Box>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{ display: "flex", padding: 2, flexDirection: "column-reverse", flexGrow: 1, overflow: "hidden auto" }}
        >
          {messages.map((message, index) => (
            <>
              <Box key={index} sx={{ py: 1 }}>
                <Typography variant={"h6"}>{message.name}</Typography>
                <Typography>{message.message}</Typography>
              </Box>
              <Divider />
            </>
          ))}
        </Box>
        <Divider />
        <Box component={"form"} onSubmit={handleSend} sx={{ display: "flex", padding: 1 }}>
          <Input value={input} sx={{ flexGrow: 1 }} onChange={(event) => setInput(event.target.value)} />
          <IconButton type={"submit"}>
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}