"use client";

import PageContainer from "@/components/page-container";
import NotificationDialog from "@/dialogs/notification-dialog";
import { Notifications } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [notifications, setNotifications] = useState([
    {
      title: "You have 1 mail(s) from an unknown source.",
      message: "im gay",
      date: "2023-09-06",
    },
    {
      title: "Welcome to Anywhere Fitness!",
      message: "Discover new friends that will be with you in your fitness journey! With Anywhere Fitness, you can find the perfect workout routine that fits your schedule and lifestyle.",
      date: "2023-09-06",
    },
  ]);
  const [notificationDialogTitle, setNotificationDialogTitle] = useState("");
  const [notificationDialogMessage, setNotificationDialogMessage] = useState("");
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);

  const handleNotificationDialogClose = () => {
    setNotificationDialogOpen(false);
  };

  return (
    <>
      <NotificationDialog open={notificationDialogOpen} title={notificationDialogTitle} message={notificationDialogMessage} onClose={handleNotificationDialogClose} />
      <PageContainer requireLogin={true}>
        <List>
          {notifications.map((notification, index) => (
            <ListItem key={index}>
              <Paper sx={{ width: "100%" }}>
                <ListItemButton onClick={() => {
                  setNotificationDialogTitle(notification.title)
                  setNotificationDialogMessage(notification.message);
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