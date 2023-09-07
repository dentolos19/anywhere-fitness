import { Post, pb } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import { Comment, Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export default function PostContainer({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: (id: string) => void;
}) {
  const [user, _] = useGlobalState("user");
  const [anchor, setAnchor] = useState<HTMLElement | undefined>(undefined);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={pb.files.getUrl(post.expand.author, post.expand.author.avatar)}/>}
        action={
          user?.id === post.author && (
            <>
              <IconButton onClick={(event) => setAnchor(event.currentTarget)}>
                <MoreVert />
              </IconButton>
              <Menu open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(undefined)}>
                <MenuItem
                  onClick={() => {
                    onDelete(post.id);
                    setAnchor(undefined);
                  }}
                >
                  Delete
                </MenuItem>
              </Menu>
            </>
          )
        }
        title={post.expand.author.name}
        subheader={post.created.toLocaleString()}
      />
      {post.cover && <CardMedia component="img" image={pb.files.getUrl(post, post.cover)} />}
      <CardContent>{post.message}</CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Comment />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}