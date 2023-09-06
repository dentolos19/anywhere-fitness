"use client";

import PageContainer from "@/components/page-container";
import { Avatar, Box, Divider, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("weekly");

  const tabHandler = (event: any, value: string) => {
    setTab(value);
  };

  return (
    <PageContainer>
      <Stack spacing={1}>
        <Paper>
          <Box
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={"/placeholder.jpg"}
              sx={{
                width: 185,
                height: 185,
                marginRight: 2,
              }}
            />
            <Box>
              <Typography variant={"h5"}>Mohamed Bofer Dinesh</Typography>
              <Typography color={"text.secondary"}>Rookie</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: 100,
              gap: 1,
              "& *": {
                flexGrow: 1,
              },
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={"h5"}>0</Typography>
              <Typography color={"text.secondary"}>Followings</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={"h5"}>0</Typography>
              <Typography color={"text.secondary"}>Followings</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper>
          <Tabs value={tab} centered onChange={tabHandler}>
            <Tab label={"Weekly"} value={"weekly"} />
            <Tab label={"Monthly"} value={"monthly"} />
            <Tab label={"Yearly"} value={"yearly"} />
          </Tabs>
          <Box
            sx={{
              display: "flex",
              height: 100,
              gap: 1,
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
        </Paper>
        <Paper>
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>Activities</Box>
          <Divider />
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>Goals</Box>
          <Divider />
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>Upload</Box>
        </Paper>
      </Stack>
    </PageContainer>
  );
}