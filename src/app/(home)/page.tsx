"use client";

import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import PostDialog from "@/dialogs/post-dialog";
import { Post, createPostForm, deletePost, getAuthUser, getPosts } from "@/lib/database";
import { Add } from "@mui/icons-material";
import { Avatar, Box, Fab, Stack, Typography } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";

const stories = [
  {
    cover: "/baymax.jpg",
    name: "Baymax AI",
  },
  {
    cover: "/placeholder.jpg",
    name: "imh",
  },
  {
    cover: "/placeholder-amos.jpg",
    name: "amos",
  },
]

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEnhancedEffect(() => {
    getPosts().then((result) => setPosts(result.items));
  }, []);

  const handleDialogClose = (value?: FormData) => {
    setDialogOpen(false);
    if (value) {
      const user = getAuthUser();
      if (!user) return;
      value.append("author", user.id);
      createPostForm(value).then((result) => {
        if (!result) return;
        setPosts([result, ...posts]);
      });
    }
  };

  const handlePostDelete = (id: string) => {
    deletePost(id);
    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <>
      <PostDialog open={dialogOpen} onClose={handleDialogClose} />
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
            {
              stories.map((item, index) => (
                <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Avatar
                src={item.cover}
                sx={{ width: 80, height: 80, border: "4px solid #0097B2", borderSpacing: 2 }}
              />
              <Typography align={"center"} fontSize={"0.8em"}>{item.name}</Typography>
            </Box>
              ))
            }
          </Stack>
          <Stack spacing={1}>
            {posts.map((item) => (
              <PostContainer key={item.id} post={item} onDelete={handlePostDelete} />
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