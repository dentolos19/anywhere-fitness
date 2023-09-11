import { Add, FitnessCenter, MonitorHeart, MusicNote, PlayArrow } from "@mui/icons-material";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";

export default function TrackPage() {
  const navigate = useNavigate();

  const handleTodo = () => alert("This feature is not implemented yet!");

  return (
    <Box sx={{ height: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: 1.3791139,
          lng: 103.849472,
        }}
        defaultZoom={16}
      />
      <SpeedDial ariaLabel={""} icon={<Add />} sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, left: 30 }}>
        <SpeedDialAction
          icon={<MusicNote />}
          tooltipTitle={"Music"}
          tooltipPlacement={"right"}
          tooltipOpen
          onClick={handleTodo}
        />
        <SpeedDialAction
          icon={<MonitorHeart />}
          tooltipTitle={"HRM"}
          tooltipPlacement={"right"}
          tooltipOpen
          onClick={handleTodo}
        />
        <SpeedDialAction
          icon={<FitnessCenter />}
          tooltipTitle={"Gym"}
          tooltipPlacement={"right"}
          tooltipOpen
          onClick={() => navigate("/track/gym")}
        />
        <SpeedDialAction
          icon={<PlayArrow />}
          tooltipTitle={"Activities"}
          tooltipPlacement={"right"}
          tooltipOpen
          onClick={handleTodo}
        />
      </SpeedDial>
    </Box>
  );
}