import activities from "@/static/activities.json";
import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function ActivitiesDialog(params: { open: boolean; onClose: (value: string | undefined) => void }) {
  return (
    <Dialog open={params.open} onClose={() => params.onClose(undefined)} maxWidth={"xs"} fullWidth>
      <DialogTitle>Select An Activity</DialogTitle>
      <List sx={{ pt: 0 }}>
        {activities.map((activities) => (
          <ListItem key={activities.name} disablePadding>
            <ListItemButton onClick={() => params.onClose(activities.name)}>
              <ListItemText primary={activities.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}