import { Box } from "@mui/material";

export default function EqualizeContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        "&>*": {
          flexGrow: 1,
        },
      }}
    >
      {children}
    </Box>
  );
}