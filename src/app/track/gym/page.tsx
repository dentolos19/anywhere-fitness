"use client";

import PageContainer from "@/components/page-container";
import WorkoutsDialog from "@/dialogs/workouts-dialog";
import { Add, Delete, FitnessCenter, MonitorHeart, Remove, Sort } from "@mui/icons-material";
import { Box, Chip, IconButton, Paper, SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [workouts, setWorkouts] = useState([
    {
      name: "Leg Curls",
      count: 1,
    },
  ]);
  const [workoutOpen, setWorkoutOpen] = useState(false);

  const workoutDialogCloseHandler = (value: string | undefined) => {
    if (value) {
      setWorkouts((workouts) => [...workouts, { name: value, count: 1 }]);
    }
    setWorkoutOpen(false);
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
                <Typography variant={"h5"} fontWeight={600}>
                  {workout.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    onClick={() =>
                      setWorkouts((state) =>
                        state.map((item, itemIndex) =>
                          itemIndex === index
                            ? { name: item.name, count: item.count <= 0 ? item.count : --item.count }
                            : item
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
                        state.map((item, itemIndex) =>
                          itemIndex === index ? { name: item.name, count: ++item.count } : item
                        )
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