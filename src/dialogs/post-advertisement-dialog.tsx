import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

export type PostAdvertisementDialogData = {
  title: string;
  description: string;
};

export default function PostAdvertisementDialog(params: {
  open: boolean;
  onClose: (value: PostAdvertisementDialogData | undefined) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCancel = () => {
    params.onClose(undefined);
  };

  const handlePost = (event: FormEvent) => {
    event.preventDefault();
    params.onClose({
      title,
      description,
    });
  };

  return (
    <Dialog
      component={"form"}
      open={params.open}
      onSubmit={handlePost}
      onClose={handleCancel}
      maxWidth={"xs"}
      fullWidth
    >
      <DialogTitle>Create An Advertisement</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>
            Describe what you are going to do together with other people.
          </Typography>
          <TextField
            type={"text"}
            label={"Title"}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <TextField
            type={"text"}
            label={"Description"}
            value={description}
            multiline
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type={"submit"} variant={"contained"}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}