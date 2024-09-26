"use client";

import { ChevronRight } from "@mui/icons-material";
import { Avatar, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Container sx={{ my: 2 }}>
      <List sx={{ maxWidth: 600, mx: "auto" }}>
        <ListItem>
          <Paper sx={{ width: "100%" }}>
            <ListItemButton onClick={() => router.push("/chat/bot")}>
              <ListItemIcon>
                <Avatar src={"/assets/baymax.jpg"} />
              </ListItemIcon>
              <ListItemText primary={"Baymax"} secondary={"Hello! I am Baymax, your personal healthcare companion."} />
              <ChevronRight />
            </ListItemButton>
          </Paper>
        </ListItem>
      </List>
    </Container>
  );
}