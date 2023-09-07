"use client";

import EqualizeContainer from "@/components/equalize-container";
import PageContainer from "@/components/page-container";
import SettingContainer from "@/components/setting-container";
import { darkTheme, lightTheme } from "@/components/theme-container";
import { pb } from "@/lib/database";
import settings from "@/lib/settings";
import { useGlobalState } from "@/lib/state";
import { Block, DarkMode, Edit, LightMode, People, Person } from "@mui/icons-material";
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
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";

export default function Page() {
  const [user, setUser] = useGlobalState("user");
  const [_, setGlobalTheme] = useGlobalState("theme");
  const [theme, setTheme] = useState("dark");
  const [mention, setMention] = useState("followers");

  useEnhancedEffect(() => {
    if (settings.theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const themeHandler = (event: any, value: string) => {
    settings.theme = value;
    setTheme(value);
    setGlobalTheme(value === "dark" ? darkTheme : lightTheme);
  };

  const mentionHandler = (event: any, value: string) => {
    setMention(value);
  };

  const logoutHandler = () => {
    pb.authStore.clear();
    setUser(undefined);
  };

  return (
    <PageContainer requireLogin={true}>
      <Stack
        spacing={2}
        sx={{
          maxWidth: 600,
          marginTop: 2,
          marginBottom: 2,
          marginLeft: "auto",
          marginRight: "auto",
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
                  src={user && pb.files.getUrl(user, user.avatar)}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </Badge>
            </Box>
            <Stack spacing={1}>
              <TextField type={"text"} label={"Name"} value={user?.name} />
              <TextField type={"date"} label={"Birthday"} value={"2000-01-01"} />
              <EqualizeContainer>
                <Button variant={"outlined"} color={"info"}>
                  Change Email
                </Button>
                <Button variant={"outlined"} color={"info"}>
                  Change Password
                </Button>
              </EqualizeContainer>
              <Button variant={"contained"} color={"error"} onClick={logoutHandler}>
                Logout
              </Button>
            </Stack>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Stack spacing={1}>
            <Typography variant={"h5"} align={"center"}>
              Personalisation
            </Typography>
            <SettingContainer label={"App Theme"}>
              <ToggleButtonGroup color={"primary"} value={theme} exclusive={true} onChange={themeHandler}>
                <ToggleButton value={"light"}>
                  <LightMode />
                </ToggleButton>
                <ToggleButton value={"dark"}>
                  <DarkMode />
                </ToggleButton>
              </ToggleButtonGroup>
            </SettingContainer>
            <SettingContainer label={"Language"}>
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Stack spacing={1}>
            <Typography variant={"h5"} align={"center"}>
              Privacy
            </Typography>
            <SettingContainer label={"Close Friends"}>
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"Blocked Users"}>
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"Story Privacy Settings"}>
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"Comments Privacy Settings"}>
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"Make Profile Public"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Show Online Status"}>
              <Checkbox />
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
              <Checkbox />
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Stack spacing={1}>
            <Typography variant={"h5"} align={"center"}>
              Notifications
            </Typography>
            <SettingContainer label={"Account Suggestions"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Follower Requests"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Accepted Follow Requests"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Message Requests"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Unread Messages"}>
              <Checkbox />
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Stack spacing={1}>
            <Typography variant={"h5"} align={"center"}>
              Advanced Options
            </Typography>
            <EqualizeContainer>
              <Button variant={"outlined"} color={"error"}>
                Deactivate Account
              </Button>
              <Button variant={"outlined"} color={"error"}>
                Delete Account
              </Button>
            </EqualizeContainer>
          </Stack>
        </Paper>
      </Stack>
    </PageContainer>
  );
}