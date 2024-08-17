import { getFileUrl, logoutAuthUser, updateAuthUser } from "@/lib/database";
import settings from "@/lib/settings";
import { useGlobalState } from "@/lib/state";
import { DarkMode, Edit, LightMode } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { ChangeEvent, useState } from "react";

const SettingContainer = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>{label}</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default function SettingsPage() {
  const [theme, setTheme] = useGlobalState("theme");
  const [user, setUser] = useGlobalState("user");
  const [name, setName] = useState<string>();
  // const [aiBaseUrl] = useState<string>(settings.aiBaseUrl);
  // const [aiApiKey] = useState<string>(settings.aiApiKey);
  // const [aiModel] = useState<string>(settings.aiModel);

  useEnhancedEffect(() => {
    if (!user) return;
    setName(user.name);
  }, [user]);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append("avatar", file);
    updateAuthUser(form).then((user) => {
      setUser(user);
      alert("Your avatar has been updated!");
    });
  };

  const handleUpdate = () => {
    const form = new FormData();
    form.append("name", name!);
    updateAuthUser(form).then((user) => {
      setUser(user);
      alert("Your account has been updated!");
    });
  };

  const handleLogout = () => {
    logoutAuthUser();
    setUser(undefined);
  };

  const handleThemeChange = (value: "light" | "dark") => {
    settings.theme = value as string;
    setTheme(value);
  };

  return (
    <Container sx={{ my: 2 }}>
      <Stack
        spacing={1}
        sx={{
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Typography variant={"h5"} align={"center"} sx={{ marginBottom: 2 }}>
            Account
          </Typography>
          <Box sx={{ display: "flex", my: 2, justifyContent: "center" }}>
            <Badge
              overlap={"circular"}
              anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
              }}
              badgeContent={
                <IconButton component={"label"}>
                  <Edit />
                  <input type={"file"} accept="image/*" hidden onChange={handleUpload} />
                </IconButton>
              }
            >
              <Avatar
                src={user && getFileUrl(user, user.avatar)}
                sx={{
                  width: 100,
                  height: 100,
                }}
              />
            </Badge>
          </Box>
          <Stack spacing={2}>
            <TextField type={"text"} label={"Name"} value={name} onChange={(event) => setName(event.target.value)} />
            <Button variant={"contained"} onClick={handleUpdate}>
              Update
            </Button>
          </Stack>
          <Box
            sx={{
              display: "flex",
              marginTop: 2,
              gap: 1,
              "&>*": { flexGrow: 1 },
            }}
          >
            <Button color={"info"} variant={"outlined"}>
              Change Email
            </Button>
            <Button color={"info"} variant={"outlined"}>
              Change Password
            </Button>
          </Box>
          <Button color={"error"} variant={"contained"} fullWidth sx={{ marginTop: 1 }} onClick={handleLogout}>
            Logout
          </Button>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant={"h5"} align={"center"} sx={{ marginBottom: 2 }}>
            Personalization
          </Typography>
          <Stack spacing={1}>
            <SettingContainer label={"Theme"}>
              <ToggleButtonGroup value={theme as string}>
                <ToggleButton value={"light"} onClick={() => handleThemeChange("light")}>
                  <LightMode />
                </ToggleButton>
                <ToggleButton value={"dark"} onClick={() => handleThemeChange("dark")}>
                  <DarkMode />
                </ToggleButton>
              </ToggleButtonGroup>
            </SettingContainer>
            <SettingContainer label={"Language"}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Chip label={"English"} />
                <IconButton>
                  <Edit />
                </IconButton>
              </Box>
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant={"h5"} align={"center"} sx={{ marginBottom: 2 }}>
            Privacy
          </Typography>
          <Stack spacing={1}>
            <SettingContainer label={"Make Profile Public"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Allow Anonymous Data Collection"}>
              <Checkbox />
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant={"h5"} align={"center"} sx={{ marginBottom: 2 }}>
            Notifications
          </Typography>
          <Stack spacing={1}>
            <SettingContainer label={"Account Suggestions"}>
              <Checkbox />
            </SettingContainer>
            <SettingContainer label={"Message Requests"}>
              <Checkbox />
            </SettingContainer>
          </Stack>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant={"h5"} align={"center"} sx={{ marginBottom: 2 }}>
            Artificial Intelligence
          </Typography>
          <Stack spacing={1}>
            <SettingContainer label={"Base URL"}>
              {/* <Chip label={aiBaseUrl}/> */}
              <Chip label={settings.aiBaseUrl} />
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"API Key"}>
              {/* <Chip label={aiApiKey || "None"} /> */}
              <Chip label={settings.aiApiKey || "None"} />
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
            <SettingContainer label={"Model"}>
              {/* <Chip label={aiModel} /> */}
              <Chip label={settings.aiModel} />
              <IconButton>
                <Edit />
              </IconButton>
            </SettingContainer>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}