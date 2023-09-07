"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function NotificationDialog({
  open,
  message,
  onClose,
}: {
  open?: boolean;
  message: string;
  onClose: () => void;
}) {
  return (
    <Dialog open={open === true} onClose={onClose} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Notification</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant={"contained"} color={"success"} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}