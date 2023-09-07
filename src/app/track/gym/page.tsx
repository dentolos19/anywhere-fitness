"use client";

import PageContainer from "@/components/page-container";
import WorkoutsDialog, { WorkoutsDialogResult } from "@/dialogs/workouts-dialog";
import { Add, Delete, FitnessCenter, MonitorHeart, Remove, Sort } from "@mui/icons-material";
import { Box, Chip, IconButton, Paper, SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [workouts, setWorkouts] = useState([
    {
      name: "Leg Curls",
      category: "Legs",
      count: 0,
    },
  ]);
  const [workoutOpen, setWorkoutOpen] = useState(false);

  const workoutDialogCloseHandler = (value: WorkoutsDialogResult | undefined) => {
    setWorkoutOpen(false);
    if (value)
      setWorkouts((workouts) => [...workouts, { name: value.workoutName, category: value.workoutCategory, count: 0 }]);
  };

  return (
    <>
      <WorkoutsDialog open={workoutOpen} onClose={workoutDialogCloseHandler} />
      <PageContainer requireLogin={true}>
        <Box
          sx={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Stack spacing={1} direction={"row"} sx={{ marginBottom: 2 }}>
            <Chip avatar={<Sort />} label={"Group by Date"} />
          </Stack>
          <Stack spacing={1}>
            {workouts.map((workout, index) => (
              <Paper key={index} sx={{ display: "flex", padding: 2, alignItems: "center" }}>
                <Box>
                  <Typography variant={"h5"} fontWeight={600}>
                    {workout.name}
                  </Typography>
                  <Typography variant={"body2"} color={"text.secondary"}>
                    {workout.category}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    onClick={() =>
                      setWorkouts((state) =>
                        state.map((item, itemIndex) =>
                          itemIndex === index ? { ...item, count: item.count <= 0 ? item.count : --item.count } : item
                        )
                      )
                    }
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{workout.count}</Typography>
                  <IconButton
                    onClick={() =>
                      setWorkouts((state) =>
                        state.map((item, itemIndex) => (itemIndex === index ? { ...item, count: ++item.count } : item))
                      )
                    }
                  >
                    <Add />
                  </IconButton>
                </Box>
                <IconButton
                  onClick={() => setWorkouts((workouts) => workouts.filter((_, itemIndex) => index !== itemIndex))}
                >
                  <Delete />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        </Box>
      </PageContainer>
      <SpeedDial ariaLabel={"Actions"} icon={<Add />} sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}>
        <SpeedDialAction icon={<MonitorHeart />} tooltipTitle={"Rest Time"} tooltipOpen />
        <SpeedDialAction
          icon={<FitnessCenter />}
          tooltipTitle={"Workout"}
          tooltipOpen
          onClick={() => setWorkoutOpen(true)}
        />
      </SpeedDial>
    </>
  );
}