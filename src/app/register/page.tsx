"use client";

import { createUser } from "@/lib/database";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
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
    createUser(name, username, email, password).then(
      () => router.push("/login?registered=true"),
      () => {
        // TODO
      }
    );
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
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
        <Button type={"submit"} variant={"contained"}>
          Register
        </Button>
      </Stack>
    </Paper>
  );
}