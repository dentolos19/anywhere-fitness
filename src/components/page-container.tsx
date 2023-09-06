import { Box, Container, Toolbar } from "@mui/material";

export default function Page({
  children,
  requireLogin,
  enableHorizontalGutters = true,
  enableVerticalGutters = true,
}: {
  children: React.ReactNode;
  requireLogin?: boolean;
  enableHorizontalGutters?: boolean;
  enableVerticalGutters?: boolean;
}) {
  return requireLogin ? (
    <div>Login Required</div>
  ) : enableHorizontalGutters ? (
    <Container sx={{ marginTop: enableVerticalGutters ? 2 : 0, marginBottom: enableVerticalGutters ? 2 : 0 }}>
      <Toolbar />
      {children}
    </Container>
  ) : (
    <Box sx={{ marginTop: enableVerticalGutters ? 2 : 0, marginBottom: enableVerticalGutters ? 2 : 0 }}>
      <Toolbar />
      {children}
    </Box>
  );
}