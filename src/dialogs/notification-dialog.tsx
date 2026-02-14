import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

type NotificationDialogProps = {
  open: boolean;
  data: { title: string; message: string };
  onClose: () => void;
};

export default function NotificationDialog(props: NotificationDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.data.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.data.message}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
