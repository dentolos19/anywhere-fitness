"use client";

import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Paper
      component={"form"}
      sx={{
        maxWidth: 500,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 2,
        marginBottom: 2,
        padding: 2,
      }}
    >
      <Stack spacing={2}>
        <Typography variant={"h5"} align={"center"}>
          Anywhere Fitness
        </Typography>
        <TextField type={"email"} label={"Email"} value={email} />
        <TextField type={"password"} label={"Password"} value={password} />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            "& *": {
              flexGrow: 1,
            },
          }}
        >
          <Button variant={"contained"}>Login</Button>
          <Button variant={"outlined"} onClick={() => router.push("/register")}>Register</Button>
        </Box>
        <Button variant={"contained"} color={"secondary"}>
          Continue As Guest
        </Button>
      </Stack>
    </Paper>
  );
}