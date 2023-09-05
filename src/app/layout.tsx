"use client";

import "@/styles/globals.css";

import NavigationContainer from "@/components/navigation-container";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anywhere Fitness",
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </head>
      <body className={font.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}