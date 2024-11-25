import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Function to check if the user is logged in
  const checkLoggedInStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set to true if token exists
  };

  useEffect(() => {
    checkLoggedInStatus(); // Check login status on component mount
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ boxShadow: 3 }}>
      <Toolbar>
        {/* Mobile Hamburger Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{
            mr: 2,
            display: { sm: "none" }, // Show only on small screens
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu for Mobile */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {[
            "Home",
            "About Us",
            "Blog",
            "Dashboard",
            "Subscription",
            "FAQs",
            "Contact Us",
          ].map((item, index) => (
            <MenuItem
              onClick={handleMenuClose}
              key={index}
              component={Link}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </MenuItem>
          ))}
          {/* Conditional Login/Signup or Profile for mobile menu */}
          {isLoggedIn ? (
            <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
              Profile
            </MenuItem>
          ) : (
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">
              Login/Signup
            </MenuItem>
          )}
        </Menu>

        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            WellSquare
          </Typography>
        </motion.div>

        {/* Menu Items for Desktop with Hover Effects */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-end",
            flexGrow: 1,
          }}
        >
          {[
            "Home",
            "About Us",
            "Blog",
            "Dashboard",
            "Subscription",
            "FAQs",
            "Contact Us",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                color="inherit"
                component={Link}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  marginLeft: "20px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
                  },
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
          {/* Conditional Login/Signup or Profile button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {isLoggedIn ? (
              <Button
                color="inherit"
                component={Link}
                to="/profile"
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  marginLeft: "20px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Profile
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  marginLeft: "20px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Login/Signup
              </Button>
            )}
          </motion.div>
          {isLoggedIn && (
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  marginLeft: "20px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Logout
              </Button>
            </motion.div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
