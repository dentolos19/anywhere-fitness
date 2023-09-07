"use client";

import EqualizeContainer from "@/components/equalize-container";
import PageContainer from "@/components/page-container";
import { loginUser } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import { Alert, Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [_, setUser] = useGlobalState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const authUser = await loginUser(email, password);
    if (authUser) {
      setUser(authUser);
      router.push("/profile");
    } else {
      setHasError(true);
    }
  };

  const guestHandler = async () => {
    const authUser = await loginUser("Guest", "wNkYXSBpFCLHC4C");
    if (authUser) {
      setUser(authUser);
      router.push("/profile");
    } else {
      setHasError(true);
    }
  }

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
          <EqualizeContainer>
            <Button type={"submit"} variant={"contained"}>
              Login
            </Button>
            <Button variant={"outlined"} onClick={() => router.push("/register")}>
              Register
            </Button>
          </EqualizeContainer>
          <Button color={"secondary"} variant={"outlined"} onClick={guestHandler}>Continue As Guest</Button>
          <Button color={"info"}>Forget Password?</Button>
        </Stack>
      </Paper>
    </PageContainer>
  );
}