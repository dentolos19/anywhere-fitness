import PageContainer from "@/components/page-container";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer>
        <Paper sx={{ padding: 2, maxWidth: 500, marginLeft: "auto", marginRight: "auto", overflow: "hidden" }}>
          <Typography align={"center"}>Achievements</Typography>
          <Typography variant={"h5"} gutterBottom>Calorie</Typography>
          <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: 1 }}>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Stack>
          <Typography variant={"h5"} gutterBottom>Calorie</Typography>
          <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: 1 }}>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
            <Box sx={{ width: 100, height: 100 }}>
                <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Stack>
        </Paper>
    </PageContainer>
  );
}