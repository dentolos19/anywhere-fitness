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
import { ChangeEvent, FormEvent, useState } from "react";

export type PostDialogData = {
  cover?: File;
  message: string;
};

export default function PostDialog(params: {
  open: boolean;
  onClose: (value: PostDialogData | undefined) => void;
}) {
  const [message, setMessage] = useState<string>("");
  const [cover, setCover] = useState<File | undefined>(undefined);

  const handleCancel = () => {
    params.onClose(undefined);
  };

  const handlePost = (event: FormEvent) => {
    event.preventDefault();
    params.onClose({
      cover,
      message,
    });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setCover(event.target.files?.item(0) || undefined);
  };

  return (
    <Dialog
      component={"form"}
      open={params.open}
      onSubmit={handlePost}
      onClose={handleCancel}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <DialogTitle>Create A Post</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>What's on your mind? Share it with the world!</Typography>
          {cover && (
            <>
              <img src={URL.createObjectURL(cover)} />
              <Typography align={"center"}>{cover.name}</Typography>
            </>
          )}
          <TextField
            type={"text"}
            label={"Message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
          />
          <Button component={"label"} color={"info"} variant={"outlined"}>
            Upload Cover
            <input
              type="file"
              accept={"image/*"}
              hidden
              onChange={handleFileUpload}
            />
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button type={"button"} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type={"submit"} variant={"contained"}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}