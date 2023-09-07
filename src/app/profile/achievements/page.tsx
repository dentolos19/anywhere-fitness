import PageContainer from "@/components/page-container";
import { Box, Paper, Stack, Tooltip, Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer>
      <Paper sx={{ padding: 2, maxWidth: 500, marginLeft: "auto", marginRight: "auto", overflow: "hidden" }}>
        <Typography variant={"h4"} align={"center"} gutterBottom>
          Achievements
        </Typography>
        <Typography variant={"h5"} gutterBottom>
          Calories
        </Typography>
        <Stack direction={"row"} sx={{ marginBottom: 4, flexWrap: "wrap", gap: 1 }}>
          <Tooltip title={"Burn 69,420 Calories"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/fire.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Tooltip>
          <Tooltip title={"Burn 69,696,969 Calories"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/rock.png"} style={{ maxWidth: "100%", maxHeight: "100%", opacity: 0.5 }} />
            </Box>
          </Tooltip>
        </Stack>
        <Typography variant={"h5"} gutterBottom>
          Sports
        </Typography>
        <Stack direction={"row"} sx={{ marginBottom: 4, flexWrap: "wrap", gap: 1 }}>
          <Tooltip title={"Played 10 games of soccer"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/goal.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Tooltip>
          <Tooltip title={"Run 1,000km"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/finish.png"} style={{ maxWidth: "100%", maxHeight: "100%", opacity: 0.5 }} />
            </Box>
          </Tooltip>
        </Stack>
        <Typography variant={"h5"} gutterBottom>
          Activities
        </Typography>
        <Stack direction={"row"} sx={{ flexWrap: "wrap", gap: 1 }}>
          <Tooltip title={"Do an 100 reps"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/100.png"} style={{ maxWidth: "100%", maxHeight: "100%", opacity: 0.5 }} />
            </Box>
          </Tooltip>
          <Tooltip title={"Complete a shuttle run lap under 8secs"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/time.png"} style={{ maxWidth: "100%", maxHeight: "100%", opacity: 0.5 }} />
            </Box>
          </Tooltip>
          <Tooltip title={"Run over 20km/h"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/boots.png"} style={{ maxWidth: "100%", maxHeight: "100%", opacity: 0.5 }} />
            </Box>
          </Tooltip>
          <Tooltip title={"Slay a dinosaur"}>
            <Box sx={{ width: 100, height: 100 }}>
              <img src={"/dinosaur.png"} style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Box>
          </Tooltip>
        </Stack>
      </Paper>
    </PageContainer>
  );
}