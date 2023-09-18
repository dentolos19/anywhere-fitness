import {
  Box,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

const caloriesAchievements = [
  {
    name: "Burn 69,420 Calories",
    unlocked: true,
    iconUrl: "/assets/fire.png",
  },
  {
    name: "Burn 69,696,969 Calories",
    unlocked: false,
    iconUrl: "/assets/rock.png",
  },
];

const sportsAchievements = [
  {
    name: "Played 10 games of soccer",
    unlocked: true,
    iconUrl: "/assets/goal.png",
  },
  {
    name: "Run 1,000 Kilometers",
    unlocked: false,
    iconUrl: "/assets/finish.png",
  },
];

const activitiesAchievements = [
  {
    name: "Walk 100,000 steps",
    unlocked: true,
    iconUrl: "/assets/100.png",
  },
  {
    name: "Complete 100 Reps In Under 10 Seconds",
    unlocked: false,
    iconUrl: "/assets/time.png",
  },
  {
    name: "Run Over 20 Kilometers Per Hour",
    unlocked: true,
    iconUrl: "/assets/boots.png",
  },
  {
    name: "Slay A Dinosaur",
    unlocked: true,
    iconUrl: "/assets/dinosaur.png",
  },
];

export default function ProfileAchievementsPage() {
  return (
    <Container sx={{ my: 2 }}>
      <Stack
        spacing={1}
        sx={{
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant={"h5"} gutterBottom>
            Calories
          </Typography>
          <Stack
            direction={"row"}
            sx={{ flexWrap: "wrap", justifyContent: "space-evenly" }}
          >
            {caloriesAchievements.map((item, index) => (
              <Tooltip key={index} title={item.name}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    opacity: item.unlocked ? 1 : 0.5,
                  }}
                >
                  <img src={item.iconUrl} />
                </Box>
              </Tooltip>
            ))}
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant={"h5"} gutterBottom>
            Sports
          </Typography>
          <Stack
            direction={"row"}
            sx={{ flexWrap: "wrap", justifyContent: "space-evenly" }}
          >
            {sportsAchievements.map((item, index) => (
              <Tooltip key={index} title={item.name}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    opacity: item.unlocked ? 1 : 0.5,
                  }}
                >
                  <img src={item.iconUrl} />
                </Box>
              </Tooltip>
            ))}
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant={"h5"} gutterBottom>
            Activities
          </Typography>
          <Stack
            direction={"row"}
            sx={{ flexWrap: "wrap", justifyContent: "space-evenly" }}
          >
            {activitiesAchievements.map((item, index) => (
              <Tooltip key={index} title={item.name}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    opacity: item.unlocked ? 1 : 0.5,
                  }}
                >
                  <img src={item.iconUrl} />
                </Box>
              </Tooltip>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}