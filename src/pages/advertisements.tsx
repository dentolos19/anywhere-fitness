import LoadingPlaceholder from "@/components/loading-placeholder";
import PostAdvertisementDialog, {
  PostAdvertisementDialogData,
} from "@/dialogs/post-advertisement-dialog";
import {
  Advertisement,
  createAdvertisement,
  deleteAdvertisement,
  getAdvertisements,
  getFileUrl,
} from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import {
  Add,
  BackHand,
  Chat,
  Delete,
  Edit,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Fab,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";

const AdvertisementContainer = ({
  advertisement,
  onDelete,
}: {
  advertisement: Advertisement;
  onDelete: (id: string) => void;
}) => {
  const [user] = useGlobalState("user");
  const [anchor, setAnchor] = useState<HTMLElement | undefined>();

  const handleTodo = () => alert("This feature is not implemented yet!");

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src={
              advertisement.expand.author.avatar &&
              getFileUrl(
                advertisement.expand.author,
                advertisement.expand.author.avatar
              )
            }
          />
        }
        title={advertisement.expand.author.name}
        subheader={advertisement.created.toString()}
        action={
          advertisement.author === user?.id && (
            <>
              <IconButton onClick={(event) => setAnchor(event.currentTarget)}>
                <MoreVert />
              </IconButton>
              <Menu
                open={anchor !== undefined}
                anchorEl={anchor}
                onClose={() => setAnchor(undefined)}
              >
                <MenuItem onClick={handleTodo}>
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => onDelete(advertisement.id)}>
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </MenuItem>
              </Menu>
            </>
          )
        }
      />
      <CardContent>
        <Typography variant={"h6"}>{advertisement.title}</Typography>
        <Typography color={"text.secondary"}>
          {advertisement.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={"Join"}>
          <IconButton onClick={handleTodo}>
            <BackHand />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Comment"}>
          <IconButton onClick={handleTodo}>
            <Chat />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default function AdvertisementsPage() {
  const [loading, setLoading] = useState(true);
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [open, setOpen] = useState(false);

  useEnhancedEffect(() => {
    getAdvertisements().then((advertisements) => {
      setAdvertisements(advertisements.items);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingPlaceholder />;

  const handlePost = (value: PostAdvertisementDialogData | undefined) => {
    setOpen(false);
    if (!value) return;
    setLoading(true);
    createAdvertisement({
      title: value.title,
      description: value.description,
    }).then(
      (advertisement) => {
        setAdvertisements([advertisement, ...advertisements]);
        setLoading(false);
      },
      () => {
        alert("Unable to create advertisement!");
        setLoading(false);
      }
    );
  };

  const handleDelete = (id: string) => {
    setLoading(true);
    deleteAdvertisement(id).then(
      () => {
        setAdvertisements(
          advertisements.filter((advertisement) => advertisement.id !== id)
        );
        setLoading(false);
      },
      () => {
        alert("Unable to delete post!");
        setLoading(false);
      }
    );
  };

  return (
    <>
      <PostAdvertisementDialog open={open} onClose={handlePost} />
      <Container sx={{ my: 2 }}>
        <Stack spacing={1} sx={{ maxWidth: 500, mx: "auto" }}>
          {advertisements.map((advertisement) => (
            <AdvertisementContainer
              advertisement={advertisement}
              onDelete={handleDelete}
            />
          ))}
        </Stack>
        <Fab
          color={"primary"}
          sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
          onClick={() => setOpen(true)}
        >
          <Add />
        </Fab>
      </Container>
    </>
  );
}