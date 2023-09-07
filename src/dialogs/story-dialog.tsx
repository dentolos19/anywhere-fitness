import { Dialog } from "@mui/material";

export default function StoryDialog({ open, mediaUrl, onClose }: { open?: boolean; mediaUrl: string; onClose: () => void }) {
  return (
    <Dialog open={open === true} onClose={onClose} maxWidth={"xs"} fullWidth={true}>
      <img src={mediaUrl} />
    </Dialog>
  );
}