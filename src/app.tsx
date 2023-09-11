import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import LayoutContainer from "./components/layout-container";
import "./globals.css";
import AboutPage from "./routes/about";
import AdvertisementsPage from "./routes/advertisements";
import ChatPage from "./routes/chat";
import ChatBotPage from "./routes/chat-bot";
import CommunityPage from "./routes/community";
import NotificationsPage from "./routes/notifications";
import ProfilePage from "./routes/profile";
import SettingsPage from "./routes/settings";
import TrackPage from "./routes/track";
import TrackGymPage from "./routes/track-gym";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutContainer />} errorElement={<ErrorBoundary />}>
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AdvertisementsPage />} path="/advertisements" />
      <Route element={<ChatPage />} path="/chat" />
      <Route element={<ChatBotPage />} path="/chat/bot" />
      <Route element={<CommunityPage />} index />
      <Route element={<NotificationsPage />} path="/notifications" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<SettingsPage />} path="/settings" />
      <Route element={<TrackPage />} path="/track" />
      <Route element={<TrackGymPage />} path="/track/gym" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);