"use client";

import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const activities = [
  {
    name: "None",
  },
  {
    name: "Walking",
  },
  {
    name: "Running",
  },
  {
    name: "Hiking",
  },
  {
    name: "Swimming",
  },
  {
    name: "Mountain Biking",
  },
  {
    name: "Rowing (e.g. Kayaking)",
  },
];

export default function ActivitiesDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: string | undefined) => void;
}) {
  const closeHandler = () => onClose(undefined);
  const clickHandler = (value: string) => onClose(value);

  return (
    <Dialog open={open === true} onClose={closeHandler} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Select An Activity</DialogTitle>
      <List sx={{ pt: 0 }}>
        {activities.map((activities) => (
          <ListItem key={activities.name} disablePadding>
            <ListItemButton onClick={() => clickHandler(activities.name)}>
              <ListItemText primary={activities.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}