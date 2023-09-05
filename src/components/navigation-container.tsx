"use client";

import {
  Chat,
  ChevronLeft,
  Home,
  Menu,
  Notifications,
  People,
  Person,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
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
import Image from "next/image";
import { useState } from "react";

export default function NavigationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpened(true)}
            sx={{ mr: 4 }}
          >
            <Menu />
          </IconButton>
          <Typography variant={"h6"} flexGrow={1}>
            Anywhere Fitness
          </Typography>
          <IconButton color={"inherit"}>
            <Chat />
          </IconButton>
          <IconButton color={"inherit"}>
            <Notifications />
          </IconButton>
          <IconButton color={"inherit"}>
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer open={isDrawerOpened}>
          <Box width={300}>
            <Toolbar>
              <IconButton onClick={() => setDrawerOpened(false)}>
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
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
      <div>
        <Toolbar />
        <Container>{children}</Container>
      </div>
    </Box>
  );
}