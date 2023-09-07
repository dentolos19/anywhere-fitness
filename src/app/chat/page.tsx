"use client";

import PageContainer from "@/components/page-container";
import { Box, ListItemButton, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";

export default function AlignItemsList() {
  const router = useRouter();

  return (
    <PageContainer requireLogin={true}>
      <Box
        sx={{
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <List>
          <ListItem disableGutters>
            <Paper sx={{ width: "100%" }}>
              <ListItemButton onClick={() => router.push("/chat/ai")}>
                <ListItemAvatar>
                  <Avatar alt="baymax" src={"baymax.jpg"} />
                </ListItemAvatar>
                <ListItemText primary={"Baymax AI"} secondary={"Your personal healthcare companion!"} />
              </ListItemButton>
            </Paper>
          </ListItem>
          <ListItem disableGutters>
            <Paper sx={{ width: "100%" }}>
              <ListItemButton onClick={() => router.push("/chat/other")}>
                <ListItemAvatar>
                  <Avatar alt="friend" src="/placeholder.jpg" />
                </ListItemAvatar>
                <ListItemText primary="bestieeeee 🥰🥰🥰" secondary={"netflix and chill??"} />
              </ListItemButton>
            </Paper>
          </ListItem>
        </List>
      </Box>
    </PageContainer>
  );
}