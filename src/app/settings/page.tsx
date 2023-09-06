"use client";

import EqualizeContainer from "@/components/equalize-container";
import SettingContainer from "@/components/setting.container";
import { Block, Edit, People, Person } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [theme, setTheme] = useState("dark");
  const [mention, setMention] = useState("followers");

  const themeHandler = (event: any, value: string) => {
    setTheme(value);
  };

  const mentionHandler = (event: any, value: string) => {
    setMention(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Paper sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant={"h5"} align={"center"}>
            Account Information
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton>
                  <Edit />
                </IconButton>
              }
            >
              <Avatar
                src={"/placeholder.jpg"}
                sx={{
                  width: 100,
                  height: 100,
                }}
              />
            </Badge>
          </Box>
          <Stack spacing={1}>
            <TextField type={"text"} label={"Name"} />

            <Button variant={"contained"}>Save</Button>
            <EqualizeContainer>
              <Button variant={"outlined"} color={"secondary"}>Change Email</Button>
              <Button variant={"outlined"} color={"secondary"}>Change Password</Button>
            </EqualizeContainer>
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant={"h5"} align={"center"}>
            Privacy
          </Typography>
          <SettingContainer label={"Make Profile Public"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Show Online Status"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Allow Mentions From"}>
            <ToggleButtonGroup color={"primary"} value={mention} exclusive={true} onChange={mentionHandler}>
              <ToggleButton value={"everyone"}>
                <People />
              </ToggleButton>
              <ToggleButton value={"followers"}>
                <Person />
              </ToggleButton>
              <ToggleButton value={"none"}>
                <Block />
              </ToggleButton>
            </ToggleButtonGroup>
          </SettingContainer>
          <SettingContainer label={"Allow Anonymous Data Collection"}>
            <Checkbox checked />
          </SettingContainer>
        </Stack>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant={"h5"} align={"center"}>
            Notifications
          </Typography>
          <SettingContainer label={"Account Suggestions"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Follower Requests"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Accepted Follow Requests"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Message Requests"}>
            <Checkbox checked />
          </SettingContainer>
          <SettingContainer label={"Unread Messages"}>
            <Checkbox checked />
          </SettingContainer>
        </Stack>
      </Paper>
    </Stack>
  );
}