import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function WorkoutConfirmDialog({ open, onClose }: { open?: boolean; onClose: (value: boolean) => void }) {
  return (
    <Dialog open={open === true}>
      <DialogTitle>Confirm Workout</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure that you want to add this workout? You learn more about this workout.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color={"error"} onClick={() => onClose(false)}>Cancel</Button>
        <Button variant={"outlined"} color={"secondary"} onClick={() => onClose(false)}>Learn More</Button>
        <Button variant={"contained"} onClick={() => onClose(true)}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}