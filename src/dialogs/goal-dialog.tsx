import { Goal } from "@/lib/types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";

export default function GoalDialog(params: { open: boolean; onClose: (value: Goal | undefined) => void; data?: Goal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (params.data) {
      setTitle(params.data.title);
      setDescription(params.data.description || "");
      setDate(params.data.due || "");
    } else {
      setTitle("");
      setDescription("");
      setDate("");
    }
  }, [params.data]);

  const handleCancel = () => {
    params.onClose(undefined);
  };

  const handleSave = (event: FormEvent) => {
    event.preventDefault();
    params.onClose({ title, description, due: date });
  };

  return (
    <Dialog
      component={"form"}
      open={params.open}
      onSubmit={handleSave}
      onClose={handleCancel}
      maxWidth={"xs"}
      fullWidth
    >
      <DialogTitle>Goal Setting</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>Describe what you are going to achieve.</Typography>
          <TextField type={"text"} label={"Title"} value={title} onChange={(e) => setTitle(e.target.value)} required />
          <TextField
            type={"text"}
            label={"Description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
          />
          <TextField type={"date"} label={"Date"} value={date} onChange={(e) => setDate(e.target.value)} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button type={"button"} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type={"submit"} variant={"contained"}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}