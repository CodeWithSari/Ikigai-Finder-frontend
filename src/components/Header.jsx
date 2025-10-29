import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        bgcolor: "#264653", // calm teal-blue tone
        borderBottom: "3px solid #2a9d8f",
      }}
    >
      <Toolbar>
        {/* Left side icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>

        {/* App name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <SelfImprovementIcon />
          Ikigai Finder
        </Typography>

        {/* Right side nav items */}
        <Tooltip title="Your saved Ikigai insights" arrow>
          <Button
            component={Link}
            to="/results"
            sx={{
              color: "white",
              bgcolor:
                location.pathname === "/results"
                  ? "rgba(255, 255, 255, 0.15)"
                  : "transparent",
              borderRadius: 2,
              mx: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
            }}
          >
            Results
          </Button>
        </Tooltip>

        <Tooltip title="About Ikigai Finder" arrow>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "white",
              bgcolor:
                location.pathname === "/about"
                  ? "rgba(255, 255, 255, 0.15)"
                  : "transparent",
              borderRadius: 2,
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
            }}
          >
            About
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
