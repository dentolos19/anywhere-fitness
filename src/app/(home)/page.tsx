import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import { getFileUrl, getPosts } from "@/lib/database";
import { Add } from "@mui/icons-material";
import { Avatar, Box, Fab, Stack } from "@mui/material";

export default async function Page() {
  const posts = await getPosts();

  return (
    <PageContainer requireLogin={true}>
      <Box
        sx={{
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack
          spacing={2}
          direction={"row"}
          sx={{
            marginBottom: 2,
          }}
        >
          <Avatar
            src={"/placeholder.jpg"}
            sx={{ width: 80, height: 80, border: "4px solid #0097B2", borderSpacing: 2 }}
          />
          <Avatar
            src={"/placeholder.jpg"}
            sx={{ width: 80, height: 80, border: "4px solid #0097B2", borderSpacing: 2 }}
          />
          <Avatar
            src={"/placeholder.jpg"}
            sx={{ width: 80, height: 80, border: "4px solid #0097B2", borderSpacing: 2 }}
          />
        </Stack>
        <Stack spacing={1}>
          {posts.items.map((post) => (
            <PostContainer
              key={post.id}
              author={post.owner.name}
              postDate={"test"}
              mediaUrl={post.cover && getFileUrl("posts", post.id, post.cover)}
            >
              {post.message}
            </PostContainer>
          ))}
        </Stack>
        <Fab sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}>
          <Add />
        </Fab>
      </Box>
    </PageContainer>
  );
}