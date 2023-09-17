import { Add, Check } from "@mui/icons-material";
import {
  Container,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useState } from "react";
import GoalDialog from "../dialogs/goal-dialog";
import settings from "../lib/settings";
import { Goal } from "../lib/types";

export default function ProfileGoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(settings.goals);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<Goal | undefined>(undefined);

  const handleDialogClose = (value: Goal | undefined) => {
    setDialogOpen(false);
    if (!value) return;
    var newGoals: Goal[] = [];
    if (dialogData) {
      const index = goals.indexOf(dialogData);
      if (index !== -1) {
        newGoals = [...goals];
        newGoals[index] = value;
      }
    } else {
      newGoals = [...goals, value];
    }
    setGoals(newGoals);
    settings.goals = newGoals;
  };

  return (
    <>
      <GoalDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        data={dialogData}
      />
      <Container sx={{ my: 2 }}>
        <List sx={{ maxWidth: 600, mx: "auto" }}>
          {goals.map((item, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton>
                  <Check />
                </IconButton>
              }
              disablePadding
            >
              <Paper sx={{ width: "100%" }}>
                <ListItemButton
                  onClick={() => {
                    setDialogData(item);
                    setDialogOpen(true);
                  }}
                >
                  <ListItemText primary={item.title} secondary={item.due && `Due ${item.due}`} />
                </ListItemButton>
              </Paper>
            </ListItem>
          ))}
        </List>
        <Fab
          color={"primary"}
          sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
          onClick={() => {
            setDialogData(undefined);
            setDialogOpen(true);
          }}
        >
          <Add />
        </Fab>
      </Container>
    </>
  );
}