"use client";

import PageContainer from "@/components/page-container";
import PostContainer from "@/components/post-container";
import PostDialog from "@/dialogs/post-dialog";
import StoryDialog from "@/dialogs/story-dialog";
import { Post, createPostForm, deletePost, getAuthUser, getPosts } from "@/lib/database";
import { Add, Bookmark, Photo } from "@mui/icons-material";
import { Avatar, Box, Button, SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";
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
];

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [storyDialogOpen, setStoryDialogOpen] = useState(false);
  const [storyDialogUrl, setStoryDialogUrl] = useState("/placeholder.jpg");

  useEnhancedEffect(() => {
    getPosts().then((result) => setPosts(result.items));
  }, []);

  const handleDialogClose = (value?: FormData) => {
    setPostDialogOpen(false);
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
      <StoryDialog open={storyDialogOpen} mediaUrl={storyDialogUrl} onClose={() => setStoryDialogOpen(false)} />
      <PostDialog open={postDialogOpen} onClose={handleDialogClose} />
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
            {stories.map((item, index) => (
              <Button key={index} sx={{ display: "flex", flexDirection: "column", gap: 1 }} onClick={() => {
                setStoryDialogUrl(item.cover);
                setStoryDialogOpen(true);
              }}>
                <Avatar
                  src={item.cover}
                  sx={{ width: 80, height: 80, border: "4px solid #0097B2", borderSpacing: 2 }}
                />
                <Typography align={"center"} color={"text.primary"} fontSize={"0.8em"}>
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Stack>
          <Stack spacing={1}>
            {posts.map((item) => (
              <PostContainer key={item.id} post={item} onDelete={handlePostDelete} />
            ))}
          </Stack>
          <SpeedDial
            ariaLabel={"Actions"}
            icon={<Add />}
            sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
          >
            <SpeedDialAction icon={<Bookmark />} tooltipTitle={"Story"} tooltipOpen />
            <SpeedDialAction
              icon={<Photo />}
              tooltipTitle={"Post"}
              tooltipOpen
              onClick={() => setPostDialogOpen(true)}
            />
          </SpeedDial>
        </Box>
      </PageContainer>
    </>
  );
}