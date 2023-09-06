"use client";

import settings from "@/lib/settings";
import { BottomNavigation, Box, Container, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [blocked, setBlocked] = useState<boolean | undefined>();

  useEffect(() => {
    if (!settings.userId) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, []);

  if (blocked === undefined) {
    return <div>pls wait</div>;
  }

  if (requireLogin && blocked === true) {
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