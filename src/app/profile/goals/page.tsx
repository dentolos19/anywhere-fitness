"use client";

import PageContainer from "@/components/page-container";
import GoalDialog from "@/dialogs/goal-dialog";
import { Add, Check, Delete, Edit } from "@mui/icons-material";
import { Box, Fab, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [goals, setGoals] = useState([
    {
      name: "get a gf",
    },
    {
      name: "get 6pax",
    },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = (value: string | undefined) => {
    setDialogOpen(false);
    if (!value) return;
    setGoals((workouts) => [...workouts, { name: value }]);
  }

  return (
    <>
        <GoalDialog open={dialogOpen} onClose={handleDialogClose}/>
      <PageContainer requireLogin={true}>
        <Stack
          spacing={1}
          sx={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {goals.map((workout, index) => (
            <Paper key={index} sx={{ display: "flex", padding: 2, alignItems: "center" }}>
              <Typography variant={"h5"} fontWeight={600}>
                {workout.name}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                onClick={() => setGoals((workouts) => workouts.filter((_, itemIndex) => index !== itemIndex))}
              >
                <Check />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => setGoals((workouts) => workouts.filter((_, itemIndex) => index !== itemIndex))}
              >
                <Delete />
              </IconButton>
            </Paper>
          ))}
        </Stack>
      </PageContainer>
      <Fab onClick={() => setDialogOpen(true)} sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}>
        <Add />
      </Fab>
    </>
  );
}