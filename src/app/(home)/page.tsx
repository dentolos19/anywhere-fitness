import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import { Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer>
      <Stack
        spacing={2}
        sx={{
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </PostContainer>
        <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05" mediaUrl={"/placeholder.jpg"}>
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </PostContainer>
        <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </PostContainer>
        <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </PostContainer>
      </Stack>
    </PageContainer>
  );
}