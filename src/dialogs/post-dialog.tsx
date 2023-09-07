"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function PostDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (value: FormData | undefined) => void;
}) {
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const closeHandler = () => onClose(undefined);

  const submitHandler = (value: string) => {
    const formData = new FormData();
    formData.append("message", value);
    if (file) formData.append("cover", file);
    onClose(formData);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.item(0) || undefined);
  };

  return (
    <Dialog open={open === true} onClose={closeHandler} maxWidth={"xs"} fullWidth={true}>
      <DialogTitle>Create A Post</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {file && (
            <>
              <img src={URL.createObjectURL(file)} />
              <Typography align={"center"}>{file.name}</Typography>
            </>
          )}
          <TextField value={value} onChange={(event) => setValue(event.target.value)} fullWidth multiline />
          <Button component={"label"} color={"info"} variant={"outlined"} fullWidth>
            Upload Cover
            <VisuallyHiddenInput type="file" accept={".png,.jpg"} onChange={handleFileUpload} />
          </Button>
        </Stack>
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