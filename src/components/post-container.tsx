import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";

export default function PostContainer({
  children,
  author,
  postDate,
  mediaUrl,
}: {
  children: React.ReactNode;
  author: string;
  postDate: string;
  mediaUrl?: string;
}) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>M</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={author}
        subheader={postDate}
      />
      {mediaUrl && <CardMedia component="img" image="/placeholder.jpg" />}
      <CardContent>{children}</CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}