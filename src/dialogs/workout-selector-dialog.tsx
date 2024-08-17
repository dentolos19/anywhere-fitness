import workouts from "@/static/workouts.json";
import { Info } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";

export default function WorkoutSelectorDialog(params: {
  open: boolean;
  onClose: (value: { name: string; category: string } | undefined) => void;
}) {
  return (
    <Dialog open={params.open} onClose={() => params.onClose(undefined)} maxWidth={"xs"} fullWidth>
      <DialogTitle>Record A Workout</DialogTitle>
      <List sx={{ paddingTop: 0, "& ul": { padding: 0 } }} subheader={<li />}>
        {workouts.map((workout) => (
          <Box component={"ul"} key={workout.name}>
            <Box component={"li"}>
              <ListSubheader>{workout.name}</ListSubheader>
              {workout.exercises.map((exercise, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton LinkComponent={"a"} edge={"end"} href={exercise.url} target={"_blank"}>
                      <Info />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    onClick={() =>
                      params.onClose({
                        name: exercise.name,
                        category: workout.name,
                      })
                    }
                  >
                    <ListItemText primary={exercise.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </Box>
        ))}
      </List>
    </Dialog>
  );
}