import { Container, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Container sx={{ marginTop: 4, textAlign: "center" }}>
      <Typography variant={"h5"} gutterBottom>
        404
      </Typography>
      <Typography>The page that you&apos;re looking for does not exist.</Typography>
    </Container>
  );
}
