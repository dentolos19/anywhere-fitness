"use client";

import PageContainer from "@/components/page-container";
import { ListItemButton, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";

export default function AlignItemsList() {
  const router = useRouter();

  return (
    <PageContainer>
      <Paper
        sx={{
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <List>
          <ListItem disableGutters>
            <ListItemButton onClick={() => router.push("/chat/ai")}>
              <ListItemAvatar>
                <Avatar alt="baymax" />
              </ListItemAvatar>
              <ListItemText primary={"baymax"} secondary={"your ai chat companion"} />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="friend" src="/placeholder.jpg" />
              </ListItemAvatar>
              <ListItemText primary="ur other friend" secondary={"u no friends la"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </PageContainer>
  );
}