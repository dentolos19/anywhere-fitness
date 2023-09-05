"use client";

import { useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { Box, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function Page() {
  const [theme, setTheme] = useState("dark");

  const themeHandler = (_, value: string) => {
    setTheme(value);
  };

  return (
    <Stack marginTop={2} marginBottom={2}>
      <Paper sx={{ padding: 2 }}>
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
      </Paper>
    </Stack>
  );
}