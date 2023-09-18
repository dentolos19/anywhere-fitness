import {
  Add,
  Chat,
  Delete,
  Edit,
  Favorite,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
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
import LoadingBoundary from "../components/loading-boundary";
import PostDialog, { PostDialogResult } from "../dialogs/post-dialog";
import {
  Post,
  createPost,
  deletePost,
  getFileUrl,
  getPosts,
} from "../lib/database";
import { useGlobalState } from "../lib/state";

const PostContainer = ({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: (id: string) => void;
}) => {
  const [user, _] = useGlobalState("user");
  const [anchor, setAnchor] = useState<HTMLElement | undefined>();

  const handleTodo = () => alert("This feature is not implemented yet!");

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src={
              post.expand.author.avatar &&
              getFileUrl(post.expand.author, post.expand.author.avatar)
            }
          />
        }
        title={post.expand.author.name}
        subheader={post.created.toString()}
        action={
          post.author === user?.id && (
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
                <MenuItem onClick={() => onDelete(post.id)}>
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
      {post.cover && (
        <CardMedia component={"img"} src={getFileUrl(post, post.cover)} />
      )}
      <CardContent>
        <Typography>{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={"Like"}>
          <IconButton onClick={handleTodo}>
            <Favorite />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Comment"}>
          <IconButton onClick={handleTodo}>
            <Chat />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Share"}>
          <IconButton onClick={handleTodo}>
            <Share />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default function CommunityPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [open, setOpen] = useState(false);

  useEnhancedEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.items);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingBoundary />;

  const handlePost = (value: PostDialogResult | undefined) => {
    setOpen(false);
    if (!value) return;
    setLoading(true);
    createPost({ message: value.message, cover: value.cover }).then(
      (post) => {
        setPosts([post, ...posts]);
        setLoading(false);
      },
      () => {
        alert("Unable to create post!");
        setLoading(false);
      }
    );
  };

  const handleDelete = (id: string) => {
    setLoading(true);
    deletePost(id).then(
      () => {
        setPosts(posts.filter((post) => post.id !== id));
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
      <PostDialog open={open} onClose={handlePost} />
      <Container sx={{ my: 2 }}>
        <Box sx={{ maxWidth: 500, mx: "auto" }}>
          <Alert severity={"warning"} sx={{ marginBottom: 2 }}>
            This app is not completed and fully-featured yet! Be warned that
            some functions may not work as expected.
          </Alert>
          <Stack spacing={1}>
            {posts.map((post, index) => (
              <PostContainer key={index} post={post} onDelete={handleDelete} />
            ))}
          </Stack>
        </Box>
      </Container>
      <Fab
        color={"primary"}
        sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab>
    </>
  );
}