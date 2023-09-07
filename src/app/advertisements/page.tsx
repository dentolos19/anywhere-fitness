"use client";

import PageContainer from "@/components/page-container";
import PostAdDialog from "@/dialogs/post-ad-dialog";
import { Advertisement, createAdvertisement, deleteAdvertisement, getAdvertisements } from "@/lib/database";
import { useGlobalState } from "@/lib/state";
import { Add, Comment, Delete, FilterAlt, LocationOn, Sort } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Chip, Fab, IconButton, Stack, Typography } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { useState } from "react";

export default function Page() {
  const [user, _] = useGlobalState("user");
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEnhancedEffect(() => {
    getAdvertisements().then((result) => setAdvertisements(result.items));
  }, []);

  const handleDialogClose = (value: string | undefined) => {
    setDialogOpen(false);
    if (!value) return;
    if (!user) return;
    createAdvertisement(user.id, value, "by your local poly student").then((result) => {
      if (!result) return;
      setAdvertisements([result, ...advertisements]);
    });
  };

  const handleAdvertisementDelete = (id: string) => {
    deleteAdvertisement(id);
    setAdvertisements(advertisements.filter((item) => item.id !== id));
  };

  return (
    <>
      <PostAdDialog open={dialogOpen} onClose={handleDialogClose} />
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
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {advertisement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {advertisement.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <Comment />
                  </IconButton>
                  {user?.id === advertisement.author && (
                    <IconButton onClick={() => handleAdvertisementDelete(advertisement.id)}>
                      <Delete />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            ))}
          </Stack>
          <Fab
            color={"primary"}
            sx={{ position: "fixed", bottom: { xs: 80, sm: 30 }, right: 30 }}
            onClick={() => setDialogOpen(true)}
          >
            <Add />
          </Fab>
        </Box>
      </PageContainer>
    </>
  );
}