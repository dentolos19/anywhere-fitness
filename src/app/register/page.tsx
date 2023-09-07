"use client";

import EqualizeContainer from "@/components/equalize-container";
import PageContainer from "@/components/page-container";
import { createUser } from "@/lib/database";
import { Alert, Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setHasError(true);
      return;
    }
    createUser(name, username, email, password).then((success) => {
      if (success) {
        router.push("/login?registered=true");
      } else {
        setHasError(true);
      }
    });
  };

  return (
    <PageContainer>
      <Paper
        component={"form"}
        onSubmit={submitHandler}
        sx={{
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 2,
        }}
      >
        <Stack spacing={2}>
          <Box>
            <img src={"/title.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
          {hasError && <Alert severity={"error"}>Unable to create user account!</Alert>}
          <TextField
            type={"text"}
            label={"Full Name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <TextField
            type={"text"}
            label={"Username"}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <TextField
            type={"email"}
            label={"Email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <TextField
            type={"password"}
            label={"Password"}
            value={password}
            inputProps={{ minLength: 8 }}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <TextField
            type={"password"}
            label={"Confirm Password"}
            value={confirmPassword}
            inputProps={{ minLength: 8 }}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <EqualizeContainer>
            <Button variant={"outlined"} onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button type={"submit"} variant={"contained"}>
              Register
            </Button>
          </EqualizeContainer>
        </Stack>
      </Paper>
    </PageContainer>
  );
}