"use client";

import PageContainer from "@/components/page-container";
import { Add, FilterAlt, LocationOn, Sort } from "@mui/icons-material";
import { Box, Chip, Fab, Paper, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer requireLogin={true}>
      <Stack
        spacing={2}
        sx={{
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack spacing={1} direction={"row"}>
          <Chip avatar={<Sort />} label={"Sort"} />
          <Chip avatar={<FilterAlt />} label={"Filter"} />
          <Chip avatar={<LocationOn />} label={"Location"} />
        </Stack>
        <Paper sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant={"h6"}>Test</Typography>
            <Typography color={"text.secondary"}>Test</Typography>
          </Box>
          <img style={{ width: 200 }} src={"/placeholder.jpg"}></img>
        </Paper>
        <Paper sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant={"h6"}>Test</Typography>
            <Typography color={"text.secondary"}>Test</Typography>
          </Box>
          <img style={{ width: 200 }} src={"/placeholder.jpg"}></img>
        </Paper>
      </Stack>
      <Fab sx={{ position: "fixed", bottom: 80, right: 30 }}>
        <Add />
      </Fab>
    </PageContainer>
  );
}