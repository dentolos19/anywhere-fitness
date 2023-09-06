"use client";

import PageContainer from "@/components/page-container";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";

export default function Page() {
  return (
    <PageContainer enableHorizontalGutters={false} enableVerticalGutters={false} enableNavigationSpacers={false}>
      <Box sx={{ height: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 1.3821108,
            lng: 103.8824889,
          }}
          defaultZoom={20}
        ></GoogleMapReact>
      </Box>
    </PageContainer>
  );
}