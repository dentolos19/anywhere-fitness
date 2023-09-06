import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import { getPosts } from "@/lib/database";
import { Add } from "@mui/icons-material";
import { Avatar, Box, Fab, Stack } from "@mui/material";

export default async function Page() {
  const posts = await getPosts();

  return (
    <PageContainer requireLogin={true}>
      <Box>
        <Stack
          spacing={2}
          sx={{
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Stack spacing={2} direction={"row"}>
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
          {posts.items.map((post) => (
            <PostContainer author={post.owner.name} postDate={"test"}>
              {post.message}
            </PostContainer>
          ))}
        </Stack>
        <Fab sx={{ position: "fixed", bottom: 80, right: 30 }}>
          <Add/>
        </Fab>
      </Box>
    </PageContainer>
  );
}