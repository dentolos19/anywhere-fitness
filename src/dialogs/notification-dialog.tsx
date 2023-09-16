import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function NotificationDialog({
  open,
  data,
  onClose,
}: {
  open: boolean;
  data: { title: string; message: string };
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{data.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{data.message}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}