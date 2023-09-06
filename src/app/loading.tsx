import PageContainer from "@/components/page-container";
import { Box, Typography } from "@mui/material";

export default function Loading() {
  return (
    <PageContainer>
      <Box textAlign={"center"} marginTop={4}>
        <Typography variant={"h5"}>Loading</Typography>
        <Typography marginTop={2}>Please wait until the page loads.</Typography>
      </Box>
    </PageContainer>
  );
}