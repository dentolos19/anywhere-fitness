"use client";

import PageContainer from "@/components/page-container";
import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";

export default function Page() {
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
        ></GoogleMapReact>
      </Box>
    </PageContainer>
  );
}