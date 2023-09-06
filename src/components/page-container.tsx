"use client";

import { User, pb } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import { BottomNavigation, Box, Container, Toolbar } from "@mui/material";
import { useEffect } from "react";
import RequireLogin from "./require-login";

export default function Page({
  children,
  requireLogin,
  enableHorizontalGutters = true,
  enableVerticalGutters = true,
  defineHeight // this fixes the map height and content spacing issues
}: {
  children: React.ReactNode;
  requireLogin?: boolean;
  enableHorizontalGutters?: boolean;
  enableVerticalGutters?: boolean;
  defineHeight?: boolean;
}) {
  const [user, setUser] = useGlobalState("user");

  useEffect(() => {
    if (user) return;
    if (pb.authStore.isValid) {
      console.log("Uses auth store");
      const authUser = pb.authStore.model as User;
      setUser({
        id: authUser.id,
        name: authUser.name,
        avatar: authUser.avatar,
      });
    }
  }, []);

  if (requireLogin && !user) {
    return <RequireLogin />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: defineHeight ? 0 : undefined,
        minHeight: "100vh",
        maxHeight: "100vh",
        flexDirection: "column",
        paddingTop: enableVerticalGutters ? 2 : 0,
        paddingBottom: enableVerticalGutters ? 2 : 0,
      }}
    >
      <Toolbar />
      {enableHorizontalGutters ? (
        <Container sx={{ flexGrow: 1 }}>{children}</Container>
      ) : (
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      )}
      <BottomNavigation sx={{ display: { xs: "block", sm: "none" } }} />
    </Box>
  );
}