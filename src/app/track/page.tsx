"use client";

import PageContainer from "@/components/page-container";
import ActivitiesDialog from "@/dialogs/activities-dialog";
import { Add, FitnessCenter, MonitorHeart, MusicNote, PlayArrow } from "@mui/icons-material";
import { Box, Chip, SpeedDial, SpeedDialAction } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [activity, setActivity] = useState<string | undefined>(undefined);
  const [activitiesDialogOpen, setActivitiesDialogOpen] = useState(false);

  const handleActivitiesDialogClose = (value: string | undefined) => {
    setActivitiesDialogOpen(false);
    if (!value) return;
    if (value === "None") {
      setActivity(undefined);
    } else {
      setActivity(value);
    }
  };

  return (
    <>
      <ActivitiesDialog open={activitiesDialogOpen} onClose={handleActivitiesDialogClose} />
      <PageContainer
        requireLogin={true}
        enableHorizontalGutters={false}
        enableVerticalGutters={false}
        defineHeight={true}
      >
        <Box sx={{ height: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={{
              lat: 1.3821108,
              lng: 103.8824889,
            }}
            defaultZoom={10}
          />
          <SpeedDial
            ariaLabel={"Actions"}
            icon={<Add />}
            sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, left: 30 }}
          >
            <SpeedDialAction icon={<MusicNote />} tooltipTitle={"Music"} tooltipPlacement={"right"} tooltipOpen />
            <SpeedDialAction
              icon={<MonitorHeart />}
              tooltipTitle={"Heart Rate"}
              tooltipPlacement={"right"}
              tooltipOpen
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            />
            <SpeedDialAction
              icon={<FitnessCenter />}
              tooltipTitle={"Gym"}
              tooltipPlacement={"right"}
              tooltipOpen
              onClick={() => router.push("/track/gym")}
            />
            <SpeedDialAction
              icon={<PlayArrow />}
              tooltipTitle={"Activities"}
              tooltipPlacement={"right"}
              tooltipOpen
              onClick={() => setActivitiesDialogOpen(true)}
              sx={{ display: { xs: "inline-flex", sm: "none" } }}
            />
          </SpeedDial>
          {activity && (
            <Chip
              label={activity}
              color={"secondary"}
              sx={{ position: "fixed", top: 100, left: "50%", transform: "translate(-50%, 0)", zIndex: 100 }}
            />
          )}
        </Box>
      </PageContainer>
    </>
  );
}