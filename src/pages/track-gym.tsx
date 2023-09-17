import { Add, Delete, FitnessCenter, MonitorHeart } from "@mui/icons-material";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";
import LoadingBoundary from "../components/loading-boundary";
import WorkoutDialog from "../dialogs/workout-dialog";
import { Profile, getProfile, updateProfile } from "../lib/database";
import { useGlobalState } from "../lib/state";
import { Workout } from "../lib/types";

export default function TrackGymPage() {
  const [user] = useGlobalState("user");
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<Workout | undefined>(undefined);

  useEnhancedEffect(() => {
    if (!user) return;
    getProfile(user.id).then((profile) => {
      setProfile(profile);
      setWorkouts(profile.workouts || []);
      setLoading(false);
    });
    setLoading(false);
  }, []);

  if (loading) return <LoadingBoundary />;

  const handleDialogClose = (value: Workout | undefined) => {
    setDialogOpen(false);
    if (!value) return;
    var newWorkouts: Workout[] = [];
    if (dialogData) {
      const index = workouts.indexOf(dialogData);
      if (index !== -1) {
        newWorkouts = [...workouts];
        newWorkouts[index] = value;
      }
    } else {
      newWorkouts = [...workouts, value];
    }
    // setWorkouts(newWorkouts);
    // settings.workouts = newWorkouts;
    if (!profile) return;
    setLoading(true);
    updateProfile(profile.id, { workouts: newWorkouts }).then((newProfile) => {
      setWorkouts(newWorkouts);
      setProfile(newProfile);
      setLoading(false);
    });
  };

  return (
    <>
      <WorkoutDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        data={dialogData}
      />
      <Container sx={{ my: 2 }}>
        <List sx={{ maxWidth: 500, mx: "auto" }}>
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <ListItem
                secondaryAction={
                  <IconButton>
                    <Delete />
                  </IconButton>
                }
                disablePadding
              >
                <Paper sx={{ width: "100%" }}>
                  <ListItemButton
                    onClick={() => {
                      setDialogData(workout);
                      setDialogOpen(true);
                    }}
                  >
                    <ListItemText
                      primary={workout.name}
                      secondary={workout.category}
                    />
                  </ListItemButton>
                </Paper>
              </ListItem>
            ))
          ) : (
            <Typography align={"center"}>No workouts yet.</Typography>
          )}
        </List>
        <SpeedDial
          ariaLabel={""}
          icon={<Add />}
          sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
        >
          <SpeedDialAction
            icon={<MonitorHeart />}
            tooltipTitle={"Rest"}
            tooltipOpen
          />
          <SpeedDialAction
            icon={<FitnessCenter />}
            tooltipTitle={"Workout"}
            tooltipOpen
            onClick={() => {
              setDialogData(undefined);
              setDialogOpen(true);
            }}
          />
        </SpeedDial>
      </Container>
    </>
  );
}