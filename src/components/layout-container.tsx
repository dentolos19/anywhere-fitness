import { checkAuthUser, getAuthUser } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import { ThemeProvider } from "@emotion/react";
import {
  AccountCircle,
  ChevronLeft,
  EmojiPeople,
  Home,
  Info,
  Menu,
  Message,
  Notifications,
  Timeline,
} from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  createTheme,
} from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingPlaceholder from "./loading-placeholder";

const navigations = [
  {
    label: "Home",
    icon: <Home />,
    url: "/",
  },
  {
    label: "Track",
    icon: <Timeline />,
    url: "/track",
  },
  {
    label: "Ads",
    icon: <EmojiPeople />,
    url: "/advertisements",
  },
];

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function LayoutContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const navigate = useNavigate();

  const [user, setUser] = useGlobalState("user");
  const [theme] = useGlobalState("theme");
  const [loading, setLoading] = useState(true);
  const [topSpacing, setTopSpacing] = useState(0);
  const [bottomSpacing, setBottomSpacing] = useState(0);
  const [open, setOpen] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEnhancedEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }
    if (!checkAuthUser()) {
      setLoading(false);
      return;
    }
    const authUser = getAuthUser();
    setUser(authUser);
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    if (!topRef.current || !bottomRef.current) return;
    const top = topRef.current.getBoundingClientRect().height;
    const bottom = bottomRef.current.getBoundingClientRect().height;
    setTopSpacing(top);
    setBottomSpacing(bottom);
  }, [topRef, bottomRef]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box>
        <AppBar>
          <Toolbar ref={topRef}>
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              <IconButton onClick={() => setOpen(true)}>
                <Menu />
              </IconButton>
              {/* <Typography sx={{ marginLeft: 1 }}>Anywhere Fitness</Typography> */}
              <Box sx={{ height: 50 }}>
                <img src={"/assets/title.png"} />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton onClick={() => navigate(-1)}>
                <ChevronLeft />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title={"Chat"}>
                <IconButton onClick={() => navigate("/chat")}>
                  <Message />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Notifications"}>
                <IconButton onClick={() => navigate("/notifications")}>
                  <Notifications />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Profile"}>
                <IconButton onClick={() => navigate("/profile")}>
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Tooltip title={"About"}>
                <IconButton onClick={() => navigate("/about")}>
                  <Info />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
          <Drawer open={open} onClose={() => setOpen(false)}>
            <Toolbar>
              <IconButton onClick={() => setOpen(false)}>
                <ChevronLeft />
              </IconButton>
            </Toolbar>
            <Divider />
            <List>
              {navigations.map((navigation, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    width: 300,
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(navigation.url);
                      setOpen(false);
                    }}
                  >
                    <ListItemIcon>{navigation.icon}</ListItemIcon>
                    <ListItemText>{navigation.label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </AppBar>
        <BottomNavigation
          ref={bottomRef}
          showLabels
          sx={{
            display: { xs: "flex", sm: "none" },
            width: "100vw",
            position: "fixed",
            bottom: 0,
          }}
        >
          {navigations.map((navigation, index) => (
            <BottomNavigationAction
              key={index}
              label={navigation.label}
              icon={navigation.icon}
              onClick={() => navigate(navigation.url)}
            />
          ))}
        </BottomNavigation>
        <Box>
          <Box height={topSpacing} />
          <Box
            sx={{
              height: {
                xs: window.innerHeight - topSpacing - bottomSpacing,
                sm: window.innerHeight - topSpacing,
              },
              overflow: "hidden auto",
            }}
          >
            {loading ? (
              <LoadingPlaceholder />
            ) : user ? (
              children || <Outlet />
            ) : (
              <LoginForm />
            )}
          </Box>
          <Box height={bottomSpacing} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}