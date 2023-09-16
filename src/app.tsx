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
import AboutPage from "./pages/about";
import AdvertisementsPage from "./pages/advertisements";
import ChatPage from "./pages/chat";
import ChatBotPage from "./pages/chat-bot";
import CommunityPage from "./pages/community";
import NotificationsPage from "./pages/notifications";
import ProfilePage from "./pages/profile";
import SettingsPage from "./pages/settings";
import TrackPage from "./pages/track";
import TrackGymPage from "./pages/track-gym";

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