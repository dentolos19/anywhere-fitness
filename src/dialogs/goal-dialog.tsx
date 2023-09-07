"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function GoalDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: string | undefined) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <Dialog open={open === true} onClose={() => onClose(undefined)} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Goals</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a goal that you want to achieve.
        </DialogContentText>
        <TextField value={value} onChange={(event) => setValue(event.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(value)}>Cancel</Button>
        <Button variant={"contained"} onClick={() => onClose(value)}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}