import { Box, Typography } from "@mui/material";

export default function SettingContainer({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>{label}</Typography>
      {children}
    </Box>
  );
}