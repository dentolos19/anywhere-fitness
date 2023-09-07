"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function PostDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: string | undefined) => void;
}) {
  const [value, setValue] = useState<string>("");

  const closeHandler = () => onClose(undefined);
  const submitHandler = (value: string) => onClose(value);

  return (
    <Dialog open={open === true} onClose={closeHandler} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Create A Post</DialogTitle>
      <DialogContent>
        <TextField value={value} onChange={(event) => setValue(event.target.value)} fullWidth multiline />
      </DialogContent>
      <DialogActions>
        <Button variant={"outlined"} color={"error"} onClick={closeHandler}>
          Cancel
        </Button>
        <Button variant={"contained"} color={"success"} onClick={() => submitHandler(value)}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}