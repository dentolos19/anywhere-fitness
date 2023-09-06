"use client";

import EqualizeContainer from "@/components/equalize-container";
import PageContainer from "@/components/page-container";
import { pb } from "@/lib/database";
import settings from "@/lib/settings";
import { Avatar, Box, Button, Divider, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page() {
  const [avatarUrl, setAvatarUrl] = useState("/placeholder.jpg");
  const [name, setName] = useState("Mohamed Bofer Dinesh");
  const [tab, setTab] = useState("weekly");

  useEffect(() => {
    const userId = settings.userId;
    if (!userId) return;
    pb.collection("users")
      .getOne(userId)
      .then((user) => {
        setAvatarUrl("");
        setName(user.name);
      });
  }, []);

  const tabHandler = (event: any, value: string) => {
    setTab(value);
  };

  return (
    <PageContainer requireLogin={true}>
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
              src={avatarUrl}
              sx={{
                width: { xs: 75, sm: 185 },
                height: { xs: 75, sm: 185 },
                marginRight: 2,
              }}
            />
            <Box>
              <Typography variant={"h5"}>{name}</Typography>
              <Typography color={"text.secondary"}>Rookie</Typography>
            </Box>
          </Box>
          <EqualizeContainer>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={"h5"}>0</Typography>
              <Typography color={"text.secondary"}>Followers</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={"h5"}>0</Typography>
              <Typography color={"text.secondary"}>Followings</Typography>
            </Box>
          </EqualizeContainer>
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
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography color={"text.secondary"}>Avg. Distance</Typography>
                <Typography variant={"h5"}>0</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography color={"text.secondary"}>Avg. Time</Typography>
                <Typography variant={"h5"}>0</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper>
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>
            <Button>Activities</Button>
          </Box>
          <Divider />
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>
            <Button>Goals</Button>
          </Box>
          <Divider />
          <Box sx={{ display: "grid", height: 100, placeItems: "center" }}>
            <Button>Upload</Button>
          </Box>
        </Paper>
      </Stack>
    </PageContainer>
  );
}