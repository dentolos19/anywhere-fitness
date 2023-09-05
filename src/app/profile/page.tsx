"use client";

import { Avatar, Box, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("weekly");

  const tabHandler = (event: any, value: string) => {
    setTab(value);
  }

  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          height: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={"/placeholder.jpg"}
            sx={{
              width: 80,
              height: 80,
              marginRight: 2,
            }}
          />
          <Box>
            <Typography variant={"h5"}>Mohamed Bofer Dinesh</Typography>
            <Typography color={"text.secondary"}>Rookie</Typography>
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          height: 100,
          gap: 2,
          "& *": {
            flexGrow: 1,
          },
        }}
      >
        <Paper sx={{ display: "grid", placeItems: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>0</Typography>
            <Typography color={"text.secondary"}>Followings</Typography>
          </Box>
        </Paper>
        <Paper sx={{ display: "grid", placeItems: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>0</Typography>
            <Typography color={"text.secondary"}>Followings</Typography>
          </Box>
        </Paper>
      </Box>
      <Paper>
        <Tabs value={tab} centered onChange={tabHandler}>
          <Tab label={"Weekly"} value={"weekly"}/>
          <Tab label={"Monthly"} value={"monthly"}/>
          <Tab label={"Yearly"} value={"yearly"}/>
        </Tabs>
      </Paper>
      <Box
        sx={{
          display: "flex",
          height: 100,
          gap: 2,
          "& *": {
            flexGrow: 1,
          },
        }}
      >
        <Paper sx={{ display: "grid", placeItems: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography color={"text.secondary"}>Avg. Distance</Typography>
            <Typography variant={"h5"}>0</Typography>
          </Box>
        </Paper>
        <Paper sx={{ display: "grid", placeItems: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography color={"text.secondary"}>Avg. Time</Typography>
            <Typography variant={"h5"}>0</Typography>
          </Box>
        </Paper>
      </Box>
      <Paper sx={{ display: "grid", height: 100, placeItems: "center" }}>
        Activities
      </Paper>
      <Paper sx={{ display: "grid", height: 100, placeItems: "center" }}>
        Goals
      </Paper>
      <Paper sx={{ display: "grid", height: 100, placeItems: "center" }}>
        Upload
      </Paper>
    </Stack>
  );
}