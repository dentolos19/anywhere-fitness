import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import { Add } from "@mui/icons-material";
import { Avatar, Box, Fab, Stack, Typography } from "@mui/material";

export default function Page() {
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
          <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
            <Typography variant="body2">Test</Typography>
          </PostContainer>
          <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05" mediaUrl={"/placeholder.jpg"}>
            <Typography variant="body2">Test</Typography>
          </PostContainer>
          <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
            <Typography variant="body2">Test</Typography>
          </PostContainer>
          <PostContainer author={"Mohamed Bofer Dinesh"} postDate="2023-09-05">
            <Typography variant="body2">Test</Typography>
          </PostContainer>
        </Stack>
        <Fab sx={{ position: "fixed", bottom: 80, right: 30 }}>
          <Add/>
        </Fab>
      </Box>
    </PageContainer>
  );
}