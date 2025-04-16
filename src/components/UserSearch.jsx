import { useState } from "react";
import {
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const dummyUsers = [
  {
    id: 1,
    name: "Diogo Forlan",
    username: "@forlan77",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@jane123",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://via.placeholder.com/40",
  },
];

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 360, mb: 3 }}>
      <TextField
        size="small" // 👈 Làm nhỏ gọn hơn
        placeholder="Tìm người dùng"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#888" }} />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: "#f5f5f5",
            borderRadius: "25px",
            px: 1,
            height: 36, // 👈 Thu gọn chiều cao
          },
        }}
      />

      {searchTerm && (
        <List dense>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <ListItem key={user.id} sx={{ px: 1 }}>
                <ListItemAvatar>
                  <Avatar src={user.avatar} sx={{ width: 32, height: 32 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight="bold">
                      {user.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {user.username}
                    </Typography>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
              Không tìm thấy người dùng nào.
            </Typography>
          )}
        </List>
      )}
    </Box>
  );
}

export default UserSearch;
