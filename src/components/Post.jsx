import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        bgcolor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e0e0e0",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080"
            alt="User Avatar"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{ color: "#555" }} />
          </IconButton>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: "#333" }}>
              Diogo Forlan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              9 giờ trước
            </Typography>
          </Box>
        }
      />
      <Box sx={{ paddingLeft: "56px" }}>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography variant="body2" sx={{ maxWidth: "480px", color: "#444" }}>
            {caption}
          </Typography>
        </CardContent>
        <Box sx={{ padding: "0 16px" }}>
          <CardMedia
            component="img"
            height="auto"
            image={img}
            alt="Post image"
            sx={{ borderRadius: "12px", border: "1px solid #eee" }}
          />
        </Box>
        <CardActions
          disableSpacing
          sx={{ display: "flex", gap: "60px", px: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon sx={{ fontSize: 20, color: "#e53935" }} />
              ) : (
                <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: 20, color: "#888" }}
                />
              )}
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {likes}K
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon
                sx={{ fontSize: 20, color: "#888" }}
              />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {comment}K
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <TrendingUpOutlinedIcon sx={{ fontSize: 20, color: "#888" }} />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {view}M
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ShareOutlinedIcon sx={{ fontSize: 20, color: "#888" }} />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {share}K
            </Typography>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
