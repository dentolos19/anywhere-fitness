"use client";

import { darkTheme, lightTheme, setAppTheme, darkTheme as themeConfig } from "@/lib/settings";
import { useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export default function Page() {
  const [theme, setTheme] = useState("dark");

  const themeHandler = (event: any, value: string) => {
    setTheme(value);
    setAppTheme(value === "light" ? lightTheme : darkTheme);
  }

  return (
    <Stack marginTop={2} marginBottom={2}>
      <Card>
        <CardContent>
          <Stack>
            <Box component={"div"} display={"flex"}>
              <Typography flexGrow={1} display={"flex"} alignItems={"center"}>App Theme</Typography>
              <ToggleButtonGroup value={theme} onChange={themeHandler} exclusive={true}>
                <ToggleButton value={"light"}>
                  <LightMode />
                </ToggleButton>
                <ToggleButton value={"dark"}>
                  <DarkMode />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}