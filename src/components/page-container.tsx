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
  enableNavigationSpacers = true,
}: {
  children: React.ReactNode;
  requireLogin?: boolean;
  enableHorizontalGutters?: boolean;
  enableVerticalGutters?: boolean;
  enableNavigationSpacers?: boolean;
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

  return enableHorizontalGutters ? (
    <Container sx={{ marginTop: enableVerticalGutters ? 2 : 0, marginBottom: enableVerticalGutters ? 2 : 0 }}>
      {enableNavigationSpacers && <Toolbar />}
      {children}
      {enableNavigationSpacers && <BottomNavigation sx={{ display: { xs: "block", sm: "none" } }} />}
    </Container>
  ) : (
    <Box sx={{ marginTop: enableVerticalGutters ? 2 : 0, marginBottom: enableVerticalGutters ? 2 : 0 }}>
      {enableNavigationSpacers && <Toolbar />}
      {children}
      {enableNavigationSpacers && <BottomNavigation sx={{ display: { xs: "block", sm: "none" } }} />}
    </Box>
  );
}