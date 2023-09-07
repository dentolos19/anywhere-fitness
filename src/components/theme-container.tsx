"use client";

import settings from "@/lib/settings";
import { useGlobalState } from "@/lib/state";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60bf65",
    },
    secondary: {
      main: "#F6edd9",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#60bf65",
    },
    secondary: {
      main: "#F6edd9",
    },
  },
});

export default function ThemeContainer({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useGlobalState("theme");

  useEnhancedEffect(() => {
    if (settings.theme === "dark") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [])

  return (
    <ThemeProvider theme={theme || darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}