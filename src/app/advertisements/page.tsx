"use client";

import PageContainer from "@/components/page-container";
import { Add, FilterAlt, LocationOn, Sort } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Fab, Stack, Typography } from "@mui/material";

const advertisements = [
  {
    title: "28 male looking for gym buddy at toa payoh anywhere fitness gym",
  },
  {
    title: "33 female looking for like minded people to jog around east-coast park",
  },
  {
    title: "57 uncle looking for friends to join tai chi masterclass at hougang cc 7pm",
  },
  {
    title: "21 male seeking female friends to hike at Bukit timah hill tomorrow 8am",
  },
];

export default function Page() {
  return (
    <PageContainer requireLogin={true}>
      <Box
        sx={{
          maxWidth: 600,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Stack
          spacing={1}
          direction={"row"}
          sx={{
            marginBottom: 2,
          }}
        >
          <Chip avatar={<Sort />} label={"Sort"} />
          <Chip avatar={<FilterAlt />} label={"Filter"} />
          <Chip avatar={<LocationOn />} label={"Location"} />
        </Stack>
        <Stack spacing={1}>
          {advertisements.map((advertisement, index) => (
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {advertisement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by your local superman
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Fab color={"primary"} sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}>
          <Add />
        </Fab>
      </Box>
    </PageContainer>
  );
}