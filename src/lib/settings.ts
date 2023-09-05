import { Theme, createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export let currentTheme = darkTheme;

export function setAppTheme(theme: Theme) {
  currentTheme = theme;
  console.log("changed theme")
}