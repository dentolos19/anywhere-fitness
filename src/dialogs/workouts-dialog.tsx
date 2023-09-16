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
import { Workout } from "../lib/types";

const workouts = [
  {
    name: "Legs",
    exercises: [
      {
        name: "Leg Curls",
        url: "https://youtu.be/ELOCsoDSmrg",
      },
      {
        name: "Leg Raises",
        url: "https://youtu.be/JB2oyawG9KI",
      },
      {
        name: "Leg Press",
        url: "https://youtu.be/IZxyjW7MPJQ",
      },
      {
        name: "Regular Squats",
        url: "https://youtu.be/YaXPRqUwItQ",
      },
      {
        name: "Sumo Squats",
        url: "https://youtu.be/2C-uNgKwPLE",
      },
    ],
  },
  {
    name: "Back",
    exercises: [
      {
        name: "Pull-Ups",
        url: "https://youtu.be/jFmCrA6fo78",
      },
      {
        name: "Seated Cable Row",
        url: "https://youtu.be/xQNrFHEMhI4",
      },
    ],
  },
  {
    name: "Chest",
    exercises: [
      {
        name: "Push-Ups",
        url: "https://youtu.be/IODxDxX7oi4",
      },
      {
        name: "Chest Press",
        url: "https://youtu.be/xUm0BiZCWlQ",
      },
      {
        name: "Incline Bench Press",
        url: "https://youtu.be/uIzbJX5EVIY",
      },
      {
        name: "Pec Flyes",
        url: "https://youtu.be/gqA9QMKLcGk",
      },
    ],
  },
  {
    name: "Abs",
    exercises: [
      {
        name: "Plank",
        url: "https://youtu.be/pSHjTRCQxIw",
      },
      {
        name: "Sit-Ups",
        url: "https://youtu.be/1fbU_MkV7NE",
      },
    ],
  },
  {
    name: "Shoulders",
    exercises: [
      {
        name: "Overhead Press",
        url: "https://youtu.be/2yjwXTZQDDI",
      },
      {
        name: "Lateral Raises",
        url: "https://youtu.be/3VcKaXpzqRo",
      },
    ],
  },
  {
    name: "Arms",
    exercises: [
      {
        name: "Dumbbell Flyes",
        url: "https://youtu.be/eozdVDA78K0",
      },
      {
        name: "Bicep Curls",
        url: "https://youtu.be/ykJmrZ5v0Oo",
      },
      {
        name: "Hammer Curls",
        url: "https://youtu.be/zC3nLlEvin4",
      },
      {
        name: "Preacher Curls",
        url: "https://youtu.be/fIWP-FRFNU0",
      },
      {
        name: "Skullcrushers",
        url: "https://youtu.be/d_KZxkY_0cM",
      },
      {
        name: "Sam Sulek Forearms",
        url: "https://www.tiktok.com/@samsulektalk/video/7271064931053636896?is_from_webapp=1&sender_device=pc",
      },
    ],
  },
];

export default function WorkoutsDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: Workout | undefined) => void;
}) {
  return (
    <Dialog open={open === true} onClose={() => onClose(undefined)} maxWidth={"xs"} fullWidth={true}>
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
                  <ListItemButton onClick={() => onClose({ name: exercise.name, category: workout.name })}>
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