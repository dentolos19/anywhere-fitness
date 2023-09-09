import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PostAdvertisementDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (data: FormData | undefined) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePost = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    onClose(data);
  };

  const handleClose = () => {
    onClose(undefined);
  };

  return (
    <Dialog open={open === true} onClose={handleClose} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Create An Advertisement</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>Describe what you are going to do together with other people.</Typography>
          <TextField label={"Title"} value={title} onChange={(event) => setTitle(event.target.value)} />
          <TextField
            label={"Description"}
            value={description}
            multiline
            onChange={(event) => setDescription(event.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant={"contained"} onClick={handlePost}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}