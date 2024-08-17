import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function NotificationDialog(params: {
  open: boolean;
  data: { title: string; message: string };
  onClose: () => void;
}) {
  return (
    <Dialog open={params.open} onClose={params.onClose}>
      <DialogTitle>{params.data.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{params.data.message}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}