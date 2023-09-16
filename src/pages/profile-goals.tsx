import { Check } from "@mui/icons-material";
import { Container, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";

const goals = [
  {
    name: "get a gf",
  },
];

export default function ProfileGoalsPage() {
  return (
    <Container sx={{ my: 2 }}>
      <List sx={{ maxWidth: 600, mx: "auto" }}>
        {goals.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton>
                <Check />
              </IconButton>
            }
            disablePadding
          >
            <Paper sx={{ width: "100%" }}>
              <ListItemButton>
                <ListItemText>
                  <Typography variant={"h6"}>{item.name}</Typography>
                  <Typography color={"text.secondary"} noWrap>
                    due
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}