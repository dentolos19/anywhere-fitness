import PageContainer from "@/components/page-container";
import { Notifications } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer requireLogin={true}>
      <Stack spacing={1}>
        <Paper sx={{ display: "flex", padding: 2, alignItems: "center", gap: 1 }}>
          <Notifications />
          <Typography variant={"h6"}>You have 1 mail(s) from a unknown source.</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color={"text.secondary"}>2023-09-06</Typography>
        </Paper>
        <Paper sx={{ display: "flex", padding: 2, alignItems: "center", gap: 1 }}>
          <Notifications />
          <Typography variant={"h6"}>Welcome to Anywhere Fitness!</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color={"text.secondary"}>2023-09-06</Typography>
        </Paper>
      </Stack>
    </PageContainer>
  );
}