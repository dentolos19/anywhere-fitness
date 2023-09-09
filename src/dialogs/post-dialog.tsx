import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { ChangeEvent, useState } from "react";
export default function PostDialog({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: (data: FormData | undefined) => void;
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
            <input type="file" accept={"image/*"} hidden onChange={handleFileUpload} />
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>
          Cancel
        </Button>
        <Button variant={"contained"} onClick={() => submitHandler(value)}>
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}