import { createChatCompletions } from "@/lib/ai";
import { MoreVert, Send } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Container,
    Divider,
    IconButton,
    Input,
    Paper,
    Typography,
} from "@mui/material";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { FormEvent, useState } from "react";

const CHAT_NAME = "Baymax";

type Message = {
  self?: boolean;
  content?: string;
};

export default function ChatBotPage() {
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      self: false,
      content: "Hello, I am Baymax, your personal healthcare companion.",
    },
  ]);

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    if (typing) return;
    if (!input) return;
    setMessages((messages) => [{ self: true, content: input }, ...messages]);
    setInput("");
    setTyping(true);
    createChatCompletions([
      {
        role: "system",
        content: "You are an AI companion for fitness and health.",
      },
      ...messages.map((message) => {
        return {
          role: message.self ? "user" : "assistant",
          content: message.content,
        } as ChatCompletionMessageParam;
      }),
      {
        role: "user",
        content: input,
      },
    ]).then(
      (res) => {
        setMessages((messages) => [
          {
            content:
              res.choices[0].message.content ||
              "This message is not available.",
          },
          ...messages,
        ]);
        setTyping(false);
      },
      () => {
        setMessages((messages) => [
          {
            content: "Sorry, I am not available right now.",
          },
          ...messages,
        ]);
        setTyping(false);
      }
    );
  };

  return (
    <Container sx={{ py: 2, height: "100%" }}>
      <Paper sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            px: 2,
            py: 1,
            justifyContent: "space-between",
          }}
        >
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
          sx={{
            display: "flex",
            padding: 2,
            flexDirection: "column-reverse",
            flexGrow: 1,
            overflow: "hidden auto",
          }}
        >
          {typing && <Typography>Typing...</Typography>}
          {messages.map((message, index) => (
            <Box key={index} sx={{ py: 1 }}>
              <Typography variant={"h6"}>
                {message.self ? "You" : CHAT_NAME}
              </Typography>
              <Typography>
                {message.content || "This message's content is not available."}
              </Typography>
              <Divider sx={{ marginTop: 1 }} />
            </Box>
          ))}
        </Box>
        <Box></Box>
        <Divider />
        <Box
          component={"form"}
          onSubmit={handleSend}
          sx={{ display: "flex", padding: 1 }}
        >
          <Input
            value={input}
            sx={{ flexGrow: 1 }}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton type={"submit"}>
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}