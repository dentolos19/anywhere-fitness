"use client";

import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import PostDialog from "@/dialogs/post-dialog";
import { Post, createPost, getAuthUser, getPosts, pb } from "@/lib/database";
import { Add } from "@mui/icons-material";
import { Avatar, Box, Fab, Stack } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEnhancedEffect(() => {
    getPosts().then((result) => setPosts(result.items));
  }, []);

  const handleDialogClose = (value?: string) => {
    setDialogOpen(false);
    if (value) {
      const user = getAuthUser();
      if (!user) return;
      createPost(user.id, value).then((result) => {
        if (!result) return;
        setPosts([result, ...posts]);
      })
    }
  }

  return (
    <>
      <PostDialog open={dialogOpen} onClose={handleDialogClose}/>
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
            {posts.map((item) => (
              <PostContainer
                key={item.id}
                author={item.expand.author.name}
                postDate={item.created.toLocaleString()}
                mediaUrl={item.cover && pb.files.getUrl(item, item.cover)}
              >
                {item.message}
              </PostContainer>
            ))}
          </Stack>
          <Fab sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }} onClick={() => setDialogOpen(true)}>
            <Add />
          </Fab>
        </Box>
      </PageContainer>
    </>
  );
}