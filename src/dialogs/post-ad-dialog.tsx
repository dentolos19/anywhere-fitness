"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function PostAdDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: string | undefined) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <Dialog open={open === true} onClose={() => onClose(undefined)} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Create An Advertisements</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Describe what you are going to do together with other people.
        </DialogContentText>
        <TextField value={value} onChange={(event) => setValue(event.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(value)}>Cancel</Button>
        <Button variant={"contained"} onClick={() => onClose(value)}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}