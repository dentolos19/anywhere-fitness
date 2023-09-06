import { BottomNavigation, Box, Container, Toolbar } from "@mui/material";

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
  return requireLogin ? (
    <div>Login Required</div>
  ) : enableHorizontalGutters ? (
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