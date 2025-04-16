import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "360px",
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#808080" }} />
              </InputAdornment>
            ),
            style: {
              color: "#333",
              backgroundColor: "#f9f9f9",
              borderRadius: "25px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            },
          }}
        />

        {/* Khoảng cách */}
        <Box sx={{ height: "20px" }} />

        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
            padding: "16px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "150px",
          }}
        >
          {/* Danh sách người liên hệ gần đây */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#333",
              }}
            >
              Người liên hệ gần đây
            </Typography>
            <List>
              {contacts.map((contact, index) => (
                <ListItem key={index} sx={{ padding: "8px 0" }}>
                  <ListItemAvatar>
                    <Avatar alt={contact.name} src={contact.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={contact.username}
                    primaryTypographyProps={{ color: "#333" }}
                    secondaryTypographyProps={{ color: "#808080" }}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ marginTop: "8px" }}>
              <Link
                href="#"
                sx={{
                  color: "#6ec207",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <Typography>Xem thêm</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
