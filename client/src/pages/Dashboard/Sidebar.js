import React from "react";
import { Box, Button } from "@mui/material";
import {
  Fastfood,
  Spa,
  Calculate,
  FitnessCenter,
  AccountCircle,
  EmojiEvents,
  Logout,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // to highlight the active route

  const menuItems = [
    { text: "Meal Planner", icon: <Fastfood />, link: "/meal-planner" },
    { text: "Mindfulness Toolkit", icon: <Spa />, link: "/mindfulness-toolkit" },
    { text: "Calorie Checker", icon: <Calculate />, link: "/calorie-checker" },
    { text: "Workout Plan", icon: <FitnessCenter />, link: "/workout-plan" },
    {text:"Fitness Challenges", icon:<EmojiEvents/>,link:"/Fitness-challenges"},
    { text: "Profile", icon: <AccountCircle />, link: "/profile" },
    { text: "Log Out", icon: <Logout />, link: "/logout" },
  ];

  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "#1c1c1c",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        padding: "20px 0",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          textAlign: "center",
          padding: "20px 0",
          fontSize: "1.5rem",
          fontWeight: "bold",
          backgroundColor: "#242424",
          color: "#1e90ff",
        }}
      >
        WellSquare
      </Box>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <Button
          key={index}
          component={Link}
          to={item.link}
          startIcon={item.icon}
          sx={{
            justifyContent: "flex-start",
            padding: "10px 20px",
            margin: "5px 10px",
            color: location.pathname === item.link ? "#1e90ff" : "#fff",
            backgroundColor:
              location.pathname === item.link ? "rgba(30, 144, 255, 0.1)" : "transparent",
            borderRadius: "8px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(30, 144, 255, 0.2)",
              color: "#1e90ff",
            },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );
};

export default Sidebar;
