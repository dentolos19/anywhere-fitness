import { Workout } from "@/lib/types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import WorkoutSelectorDialog from "./workout-selector-dialog";

export default function WorkoutDialog(params: {
  open: boolean;
  onClose: (value: Workout | undefined) => void;
  data?: Workout;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (params.data) {
      setName(params.data.name);
      setCategory(params.data.category || "");
      setNotes(params.data.notes || "");
      setReps(params.data.reps || 0);
      setSets(params.data.sets || 0);
      setStartTime(params.data.startTime || "");
      setEndTime(params.data.endTime || "");
    } else {
      setName("");
      setCategory("");
      setNotes("");
      setReps(0);
      setSets(0);
      setStartTime("");
      setEndTime("");
    }
  }, [params.data]);

  const handleCancel = () => {
    params.onClose(undefined);
  };

  const handleSave = (event: FormEvent) => {
    event.preventDefault();
    params.onClose({
      name,
      category,
      notes,
      reps,
      sets,
      startTime,
      endTime,
    });
  };

  return (
    <>
      <WorkoutSelectorDialog
        open={dialogOpen}
        onClose={(value) => {
          setDialogOpen(false);
          if (!value) return;
          setName(value.name);
          setCategory(value.category);
        }}
      />
      <Dialog
        component={"form"}
        open={params.open}
        onSubmit={handleSave}
        onClose={handleCancel}
        maxWidth={"sm"}
        fullWidth
      >
        <DialogTitle>Workout Manager</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography>Record your workout here.</Typography>
            <Stack spacing={1}>
              <TextField type={"text"} label={"Name"} value={name} onChange={(e) => setName(e.target.value)} required />
              <TextField
                type={"text"}
                label={"Category"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button variant={"outlined"} onClick={() => setDialogOpen(true)}>
                Select
              </Button>
            </Stack>
            <TextField
              type={"text"}
              label={"Notes"}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              multiline
            />
            <TextField
              type={"number"}
              label={"Reps"}
              value={reps}
              onChange={(e) => setReps(parseInt(e.target.value))}
              inputProps={{ min: 0 }}
            />
            <TextField
              type={"number"}
              label={"Sets"}
              value={sets}
              onChange={(e) => setSets(parseInt(e.target.value))}
              inputProps={{ min: 0 }}
            />
            <TextField
              type={"time"}
              label={"Start Time"}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <TextField type={"time"} label={"End Time"} value={endTime} onChange={(e) => setEndTime(e.target.value)} />
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
    </>
  );
}