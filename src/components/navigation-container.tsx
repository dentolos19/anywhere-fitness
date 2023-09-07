"use client";

import { pb } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import {
  Chat,
  ChevronLeft,
  EmojiPeople,
  Home,
  Info,
  Login,
  Menu,
  Notifications,
  People,
  Settings,
  StackedLineChart,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import EqualizeContainer from "./equalize-container";

const navigationLinks = [
  {
    title: "Community",
    icon: <Home />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <People />,
    href: "/profile",
  },
  {
    title: "Track",
    icon: <StackedLineChart />,
    mobileOnly: true,
    href: "/track",
  },
  {
    title: "Ads",
    icon: <EmojiPeople />,
    href: "/advertisements",
  },
  {
    title: "About",
    icon: <Info />,
    desktopOnly: true,
    href: "/about",
  },
];

export default function NavigationContainer({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, _] = useGlobalState("user");
  const [isDrawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box sx={{ display: user ? "block" : "none" }}>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpened(true)}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              <Menu />
            </IconButton>
          </Box>
          {/* <Avatar
            src={"/icon-192x192.png"}
            sx={{
              display: { xs: "block", sm: "none" },
              marginTop: 1,
              marginBottom: 1,
            }}
          /> */}
          <IconButton
            onClick={() => router.back()}
            sx={{
              display: { xs: "inline-flex", sm: "none" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <Typography
            variant={"h6"}
            sx={{
              marginLeft: user ? 2 : 0,
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>Anywhere Fitness</Box>
          </Typography>
          <Box sx={{ display: user ? "block" : "none" }}>
            <IconButton color={"inherit"} onClick={() => router.push("/chat")}>
              <Chat />
            </IconButton>
            <IconButton color={"inherit"} onClick={() => router.push("/notifications")}>
              <Badge badgeContent={2} color={"primary"}>
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton color={"inherit"} onClick={() => router.push("/settings")}>
              <Settings />
            </IconButton>
            <IconButton
              color={"inherit"}
              onClick={() => router.push("/about")}
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            >
              <Info />
            </IconButton>
          </Box>
          <Box sx={{ display: user ? "none" : "block" }}>
            <IconButton color={"inherit"} onClick={() => router.push("/chat")}>
              <Login />
            </IconButton>
          </Box>
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
          {user && (
            <>
              <Box
                sx={{
                  display: "flex",
                  padding: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={pb.files.getUrl(user, user.avatar)}
                  sx={{
                    width: 80,
                    height: 80,
                    marginRight: 2,
                  }}
                />
                <Box>
                  <Typography variant={"h5"}>{user.name}</Typography>
                  <Typography color={"text.secondary"}>Rookie</Typography>
                </Box>
              </Box>
              <EqualizeContainer>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant={"h5"}>0</Typography>
                  <Typography color={"text.secondary"}>Followers</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant={"h5"}>0</Typography>
                  <Typography color={"text.secondary"}>Followings</Typography>
                </Box>
              </EqualizeContainer>
            </>
          )}
          <List>
            {navigationLinks.map(
              (link) =>
                !link.mobileOnly && (
                  <ListItem key={link.title} disablePadding>
                    <ListItemButton onClick={() => router.push(link.href)}>
                      <ListItemIcon>{link.icon}</ListItemIcon>
                      <ListItemText>{link.title}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
            )}
          </List>
        </Box>
      </Drawer>
      <Paper
        elevation={3}
        sx={{
          display: { xs: user ? "block" : "none", sm: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <BottomNavigation showLabels value={pathname}>
          {navigationLinks.map(
            (link) =>
              !link.desktopOnly && (
                <BottomNavigationAction
                  key={link.title}
                  label={link.title}
                  icon={link.icon}
                  value={link.href}
                  onClick={() => router.push(link.href)}
                />
              )
          )}
        </BottomNavigation>
      </Paper>
      {children}
    </>
  );
}