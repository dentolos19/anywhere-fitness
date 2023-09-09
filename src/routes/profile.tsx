import { Edit } from "@mui/icons-material";
import { Avatar, Box, Container, Fab, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFileUrl } from "../lib/database";
import { useGlobalState } from "../lib/state";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [user, _] = useGlobalState("user");
  const [range, setRange] = useState<"weekly" | "monthly" | "yearly">("weekly");

  return (
    <Container sx={{ my: 2 }}>
      <Stack spacing={1} sx={{ maxWidth: 600, mx: "auto" }}>
        <Paper sx={{ display: "flex", padding: 2, flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <Avatar src={user?.avatar && getFileUrl(user, user.avatar)} sx={{ width: 100, height: 100 }} />
            <Box>
              <Typography variant={"h5"}>{user?.name}</Typography>
              <Typography color={"text.secondary"}>Rookie</Typography>
            </Box>
          </Box>
          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Followers</Typography>
              <Typography variant={"h5"}>0</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Followings</Typography>
              <Typography variant={"h5"}>0</Typography>
            </Box>
          </Box> */}
        </Paper>
        <Paper>
          <Tabs value={range} centered onChange={(_, value) => setRange(value)}>
            <Tab label={"Weekly"} value={"weekly"} />
            <Tab label={"Monthly"} value={"monthly"} />
            <Tab label={"Yearly"} value={"yearly"} />
          </Tabs>
          <Box sx={{ display: "flex", height: 100, alignItems: "center", justifyContent: "space-evenly" }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Avg. Distance</Typography>
              <Typography variant={"h5"}>0</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Avg. Time</Typography>
              <Typography variant={"h5"}>0</Typography>
            </Box>
          </Box>
        </Paper>
        <Paper sx={{ display: "grid", height: 100, placeItems: "center" }}>Achievements, Goals & Stuff</Paper>
      </Stack>
      <Fab sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }} onClick={() => navigate("/settings")}>
        <Edit />
      </Fab>
    </Container>
  );
}