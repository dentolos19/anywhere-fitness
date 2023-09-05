"use client";

import { useState } from "react";
import { LightMode, DarkMode, Edit, Person, People, Block } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

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
            Personalization
          </Typography>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Profile Picture
            </Typography>
            <IconButton>
              <Edit />
            </IconButton>
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Account Information
            </Typography>
            <IconButton>
              <Edit />
            </IconButton>
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              App Theme
            </Typography>
            <ToggleButtonGroup value={theme} exclusive={true} onChange={themeHandler}>
              <ToggleButton value={"light"}>
                <LightMode />
              </ToggleButton>
              <ToggleButton value={"dark"}>
                <DarkMode />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant={"h5"} align={"center"}>
            Privacy
          </Typography>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Make Profile Public
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Show Online Status
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Allow Mentions From
            </Typography>
            <ToggleButtonGroup value={mention} exclusive={true} onChange={mentionHandler}>
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
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Allow Diagnostic Data Collection
            </Typography>
            <Checkbox />
          </Box>
        </Stack>
      </Paper>

      <Paper sx={{ padding: 2 }}>
        <Stack spacing={1}>
          <Typography variant={"h5"} align={"center"}>
            Notifications
          </Typography>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Account Suggestions
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Follower Requests
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Accepted Follow Requests
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Message Requests
            </Typography>
            <Checkbox />
          </Box>
          <Box component={"div"} display={"flex"}>
            <Typography flexGrow={1} display={"flex"} alignItems={"center"}>
              Unread Messages
            </Typography>
            <Checkbox />
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}