"use client";

import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";

export default function Page() {
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
        <TextField label={"Username"} />
        <TextField label={"Password"} />
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
          <Button variant={"outlined"}>Register</Button>
        </Box>
        <Button variant={"contained"} color={"secondary"}>Guest Mode (Developer)</Button>
      </Stack>
    </Paper>
  );
}