"use client";

import PageContainer from "@/components/page-container";
import { Add, FitnessCenter, MonitorHeart, MusicNote } from "@mui/icons-material";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
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
        <SpeedDial ariaLabel={"Actions"} icon={<Add />} sx={{ position: "fixed", bottom: 80, left: 30 }}>
          <SpeedDialAction icon={<MonitorHeart />} tooltipTitle={"Heart Rate"} tooltipPlacement={"right"} tooltipOpen />
          <SpeedDialAction icon={<MusicNote />} tooltipTitle={"Music"} tooltipPlacement={"right"} tooltipOpen />
          <SpeedDialAction
            icon={<FitnessCenter />}
            tooltipTitle={"Activities"}
            tooltipPlacement={"right"}
            tooltipOpen
            onClick={() => router.push("/activities")}
          />
        </SpeedDial>
      </Box>
    </PageContainer>
  );
}