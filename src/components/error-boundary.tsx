import { Container, Typography } from "@mui/material";
import LayoutContainer from "./layout-container";

export default function ErrorBoundary() {
  return (
    <LayoutContainer>
      <Container sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant={"h5"} gutterBottom>
          404
        </Typography>
        <Typography>The page that you're looking for does not exist.</Typography>
      </Container>
    </LayoutContainer>
  );
}