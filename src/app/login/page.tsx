"use client";

import { loginUser } from "@/lib/database";
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const auth = await loginUser(email, password);
    if (auth) {
      router.push("/profile");
    } else {
      setHasError(true);
    }
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
        {searchParams.get("registered") && <Alert severity={"success"}>Please login using your credentials.</Alert>}
        {hasError && <Alert severity={"error"}>Unable to login into user account.</Alert>}
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
        <Box
          sx={{
            display: "flex",
            gap: 1,
            "& *": {
              flexGrow: 1,
            },
          }}
        >
          <Button type={"submit"} variant={"contained"}>
            Login
          </Button>
          <Button variant={"outlined"} onClick={() => router.push("/register")}>
            Register
          </Button>
        </Box>
        <Button variant={"contained"} color={"secondary"}>
          Continue As Guest
        </Button>
      </Stack>
    </Paper>
  );
}