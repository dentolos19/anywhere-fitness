"use client";

import PageContainer from "@/components/page-container";
import NotificationDialog from "@/dialogs/notification-dialog";
import { Notifications } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [notifications, setNotifications] = useState([
    {
      title: "You have 1 mail(s) from a unknown source.",
      date: "2023-09-06",
    },
    {
      title: "Welcome to Anywhere Fitness!",
      date: "2023-09-06",
    },
  ]);
  const [notificationDialogMessage, setNotificationDialogMessage] = useState("");
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);

  const handleNotificationDialogClose = () => {
    setNotificationDialogOpen(false);
  };

  return (
    <>
      <NotificationDialog open={notificationDialogOpen} message={notificationDialogMessage} onClose={handleNotificationDialogClose} />
      <PageContainer requireLogin={true}>
        {/* <Stack spacing={1}>
        <Paper sx={{ display: "flex", padding: 2, alignItems: "center", gap: 1 }}>
          <Notifications />
          <Typography variant={"h6"}>You have 1 mail(s) from a unknown source.</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color={"text.secondary"}>2023-09-06</Typography>
        </Paper>
        <Paper sx={{ display: "flex", padding: 2, alignItems: "center", gap: 1 }}>
          <Notifications />
          <Typography variant={"h6"}>Welcome to Anywhere Fitness!</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography color={"text.secondary"}>2023-09-06</Typography>
        </Paper>
      </Stack> */}
        <List>
          {notifications.map((notification, index) => (
            <ListItem key={index}>
              <Paper sx={{ width: "100%" }}>
                <ListItemButton onClick={() => {
                  setNotificationDialogMessage(notification.title);
                  setNotificationDialogOpen(true);
                }}>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText primary={notification.title} secondary={notification.date} />
                </ListItemButton>
              </Paper>
            </ListItem>
          ))}
        </List>
      </PageContainer>
    </>
  );
}