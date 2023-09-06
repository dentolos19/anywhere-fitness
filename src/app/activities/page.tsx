"use client";

import PageContainer from "@/components/page-container";
import WorkoutsDialog from "@/dialogs/workouts-dialog";
import { Add, FitnessCenter, MonitorHeart, Remove, Sort } from "@mui/icons-material";
import { Box, Chip, IconButton, Paper, SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [workoutOpen, setWorkoutOpen] = useState(false);

  return (
    <>
      <WorkoutsDialog open={workoutOpen} onClose={() => setWorkoutOpen(false)} />
      <PageContainer requireLogin={true}>
        <Stack spacing={2}>
          <Stack spacing={1} direction={"row"}>
            <Chip avatar={<Sort />} label={"Group by Date"} />
          </Stack>
          <Paper sx={{ display: "flex", padding: 2, alignItems: "center" }}>
            <Typography variant={"h4"} fontWeight={600}>
              Leg workouts
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <Remove />
              </IconButton>
              <Typography>1</Typography>
              <IconButton>
                <Add />
              </IconButton>
            </Box>
          </Paper>
        </Stack>
      </PageContainer>
      <SpeedDial ariaLabel={"Actions"} icon={<Add />} sx={{ position: "fixed", bottom: 80, right: 30 }}>
        <SpeedDialAction icon={<MonitorHeart />} tooltipTitle={"Rest Time"} tooltipOpen />
        <SpeedDialAction icon={<FitnessCenter />} tooltipTitle={"Workout"} tooltipOpen onClick={() => setWorkoutOpen(true)}/>
      </SpeedDial>
    </>
  );
}