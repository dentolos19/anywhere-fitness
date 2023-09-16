import { Add, FitnessCenter, MonitorHeart } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  SpeedDial,
  SpeedDialAction,
  Typography
} from "@mui/material";
import { useState } from "react";
import WorkoutsDialog from "../dialogs/workouts-dialog";
import { Workout } from "../lib/types";

export default function TrackGymPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [open, setOpen] = useState(false);

  const handleAdd = (workout: Workout | undefined) => {
    setOpen(false);
    if (!workout) return;
    setWorkouts([...workouts, workout]);
  };

  return (
    <>
      <WorkoutsDialog open={open} onClose={handleAdd} />
      <Container sx={{ my: 2 }}>
        <List sx={{ maxWidth: 500, mx: "auto" }}>
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <ListItem>
                <Paper sx={{ width: "100%" }}>
                  <ListItemButton>
                    <ListItemText primary={workout.name} secondary={workout.category} />
                  </ListItemButton>
                </Paper>
              </ListItem>
            ))
          ) : (
            <Typography align={"center"}>No workouts yet.</Typography>
          )}
        </List>
        <SpeedDial ariaLabel={""} icon={<Add />} sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}>
          <SpeedDialAction icon={<MonitorHeart />} tooltipTitle={"Rest"} tooltipOpen />
          <SpeedDialAction
            icon={<FitnessCenter />}
            tooltipTitle={"Workout"}
            tooltipOpen
            onClick={() => setOpen(true)}
          />
        </SpeedDial>
      </Container>
    </>
  );
}