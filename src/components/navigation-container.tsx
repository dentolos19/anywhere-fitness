"use client";

import { pb } from "@/lib/database";
import {
  Chat,
  ChevronLeft,
  EmojiPeople,
  Home,
  Info,
  Logout,
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
import { useState } from "react";

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
    href: "/ads",
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

  const [isDrawerOpened, setDrawerOpened] = useState(false);

  const logoutHandler = () => {
    pb.authStore.clear();
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpened(true)}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            <Menu />
          </IconButton>
          <Avatar
            src={"/icon-192x192.png"}
            sx={{
              display: { xs: "block", sm: "none" },
              marginTop: 1,
              marginBottom: 1,
            }}
          />
          <Typography
            variant={"h6"}
            sx={{
              marginLeft: 2,
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>Anywhere Fitness</Box>
          </Typography>
          <IconButton color={"inherit"} onClick={() => router.push("/chat")}>
            <Chat />
          </IconButton>
          <IconButton color={"inherit"} onClick={() => router.push("/notifications")}>
            <Badge badgeContent={10} color={"primary"}>
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color={"inherit"} onClick={logoutHandler}>
            <Logout />
          </IconButton>
          <IconButton color={"inherit"} onClick={() => router.push("/settings")}>
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
            {navigationLinks.map(
              (link) =>
                !link.mobileOnly && (
                  <ListItem disablePadding>
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
        sx={{ display: { xs: "block", sm: "none" }, position: "fixed", bottom: 0, left: 0, right: 0 }}
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