"use client";

import { Chat, ChevronLeft, Home, Info, Menu, Notifications, People, Settings } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavigationContainer({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [isDrawerOpened, setDrawerOpened] = useState(false);

  const navigateLink = (url: string) => {
    router.push(url);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpened(true)}>
            <Menu />
          </IconButton>
          <Typography
            variant={"h6"}
            sx={{
              marginLeft: 2,
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>Anywhere Fitness</Box>
          </Typography>
          <IconButton color={"inherit"} onClick={() => navigateLink("/chat")}>
            <Chat />
          </IconButton>
          <IconButton color={"inherit"} onClick={() => navigateLink("/notifications")}>
            <Badge badgeContent={10} color={"primary"}>
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color={"inherit"} onClick={() => navigateLink("/settings")}>
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpened} onClick={() => setDrawerOpened(false)}>
        <Box width={300}>
          <Toolbar>
            <IconButton>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box>
            <img
              src={"/icon-384x384.png"}
              alt={"Icon"}
              style={{
                width: "100%",
              }}
            />
            <Typography variant={"h6"} align={"center"} marginBottom={2}>
              Anywhere Fitness
            </Typography>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigateLink("/")}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigateLink("/profile")}>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigateLink("/about")}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box>
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}