import { Add, Chat, Delete, Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
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
import PostDialog from "../dialogs/post-dialog";
import { Post, createPost, deletePost, getFileUrl, getPosts } from "../lib/database";
import { useGlobalState } from "../lib/state";

const PostContainer = ({ post, onDelete }: { post: Post; onDelete: (id: string) => void }) => {
  const [user, _] = useGlobalState("user");
  const [anchor, setAnchor] = useState<HTMLElement | undefined>();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={post.expand.author.avatar && getFileUrl(post.expand.author, post.expand.author.avatar)} />}
        title={post.expand.author.name}
        subheader={post.created.toString()}
        action={
          post.author === user?.id && (
            <>
              <IconButton onClick={(event) => setAnchor(event.currentTarget)}>
                <MoreVert />
              </IconButton>
              <Menu open={anchor !== undefined} anchorEl={anchor} onClose={() => setAnchor(undefined)}>
                {/* <MenuItem>
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem> */}
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
      {post.cover && <CardMedia component={"img"} src={getFileUrl(post, post.cover)} />}
      <CardContent>
        <Typography>{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={"Like"}>
          <IconButton>
            <Favorite />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Comment"}>
          <IconButton>
            <Chat />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Share"}>
          <IconButton>
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

  const handlePost = (data: FormData | undefined) => {
    setOpen(false);
    if (!data) return;
    setLoading(true);
    createPost(data).then(
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
        <Stack spacing={1} sx={{ maxWidth: 500, mx: "auto" }}>
          {posts.map((post, index) => (
            <PostContainer key={index} post={post} onDelete={handleDelete} />
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