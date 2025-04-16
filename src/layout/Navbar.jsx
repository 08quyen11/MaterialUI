import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  Avatar,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#333",
        borderBottom: "1px solid #e0e0e0",
        minHeight: 60,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          component="img"
          src="src/assets/Logo.svg"
          alt="Logo"
          sx={{ height: 40 }}
        />

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#1976d2", // Blue
              height: 3,
              borderRadius: "4px",
            },
            marginLeft: "auto",
            marginRight: "auto",
            px: 4,
          }}
        >
          <Tab
            icon={<HomeIcon />}
            sx={{
              color: activeTab === 0 ? "#1976d2" : "#888",
              minWidth: 100,
            }}
          />
          <Tab
            icon={<PersonIcon />}
            sx={{
              color: activeTab === 1 ? "#1976d2" : "#888",
              minWidth: 100,
            }}
          />
          <Tab
            icon={<EmailIcon />}
            sx={{
              color: activeTab === 2 ? "#1976d2" : "#888",
              minWidth: 100,
            }}
          />
          <Tab
            icon={<NotificationsIcon />}
            sx={{
              color: activeTab === 3 ? "#1976d2" : "#888",
              minWidth: 100,
            }}
          />
        </Tabs>

        {/* Profile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ mr: 1, display: { xs: "none", sm: "block" }, color: "#333" }}
          >
            Diogo Forlan
          </Typography>
          <Avatar alt="Diogo Forlan" src="/avatar.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
