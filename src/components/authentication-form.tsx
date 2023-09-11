import { Box, Button, Container, Paper, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { loginUser, registerUser } from "../lib/database";
import { useGlobalState } from "../lib/state";

export default function LoginForm() {
  const [_, setUser] = useGlobalState("user");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    loginUser({ username, password }).then(
      (user) => {
        setUser(user.record);
      },
      () => {
        alert("Unable to login.");
      }
    );
  };

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your passwords do not match.");
      return;
    }
    registerUser({ name, username, email, password }).then(
      (user) => {
        setUser(user);
      },
      () => {
        alert("Unable to register.");
      }
    );
  };

  const guestHandler = () => {
    loginUser({ username: "Guest", password: "wNkYXSBpFCLHC4C" }).then((user) => {
      setUser(user.record);
    });
  };

  return (
    <Container sx={{ my: 2 }}>
      <Paper sx={{ maxWidth: 400, mx: "auto", padding: 2 }}>
        <Box sx={{ marginBottom: 1 }}>
          <img src={"/assets/title.png"} />
        </Box>
        {mode === "login" ? (
          <Box component={"form"} onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                label={"Username"}
                type={"text"}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <TextField
                label={"Password"}
                type={"password"}
                value={password}
                inputProps={{
                  minLength: 8,
                }}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Stack>
            <Box sx={{ display: "flex", marginTop: 2, gap: 1, "&>*": { flexGrow: 1 } }}>
              <Button type={"submit"} variant={"contained"}>
                Login
              </Button>
              <Button type={"button"} variant={"outlined"} onClick={() => setMode("register")}>
                Register
              </Button>
            </Box>
            <Button color={"secondary"} variant={"contained"} fullWidth sx={{ marginTop: 1 }} onClick={guestHandler}>
              Continue As Guest
            </Button>
          </Box>
        ) : (
          <Box component={"form"} onSubmit={handleRegister}>
            <Stack spacing={2}>
              <TextField
                label={"Name"}
                type={"text"}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <TextField
                label={"Username"}
                type={"text"}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <TextField
                label={"Email"}
                type={"email"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <TextField
                label={"Password"}
                type={"password"}
                value={password}
                inputProps={{
                  minLength: 8,
                }}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <TextField
                label={"Confirm Password"}
                type={"password"}
                value={confirmPassword}
                inputProps={{
                  minLength: 8,
                }}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </Stack>
            <Box sx={{ display: "flex", marginTop: 2, gap: 1, "&>*": { flexGrow: 1 } }}>
              <Button type={"button"} variant={"outlined"} onClick={() => setMode("login")}>
                Login
              </Button>
              <Button type={"submit"} variant={"contained"}>
                Register
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}