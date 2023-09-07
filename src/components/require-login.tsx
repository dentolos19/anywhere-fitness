"use client";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EqualizeContainer from "./equalize-container";
import PageContainer from "./page-container";

export default function RequireLogin() {
  const router = useRouter();

  return (
    <PageContainer>
      <Paper
        sx={{
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 4,
        }}
      >
        <Stack spacing={2}>
          <Box>
            <img src={"/title.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
          <Typography variant={"h6"} align={"center"} gutterBottom>
            Welcome to Anywhere Fitness!
          </Typography>
          <Typography variant={"caption"} align={"center"} color={"text.secondary"}>
            Get started on your fitness journey by registering today!
          </Typography>
          <Typography align={"center"}>
            Discover new friends that will be with you in your fitness journey! With Anywhere Fitness, you can find the
            perfect workout routine that fits your schedule and lifestyle.
          </Typography>
          <EqualizeContainer>
            <Button variant={"contained"} onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button variant={"outlined"} onClick={() => router.push("/register")}>
              Register
            </Button>
          </EqualizeContainer>
        </Stack>
      </Paper>
    </PageContainer>
  );
}