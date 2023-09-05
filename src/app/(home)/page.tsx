import PostContainer from "@/components/post-container";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack spacing={2} marginTop={2}>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
    </Stack>
  )
}