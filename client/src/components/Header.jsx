import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2, display: { sm: "none" } }} // Show only on small screens
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu for Mobile */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about-us">
            About Us
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/blog">
            Blog
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/dashboard">
            Dashboard
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/features">
            Features
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/faqs">
            FAQs
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact-us">
            Contact Us
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">
            Login/Signup
          </MenuItem>
        </Menu>

        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          WellSquare
        </Typography>

        {/* Menu Items for Desktop */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about-us">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/features">
            Features
          </Button>
          <Button color="inherit" component={Link} to="/faqs">
            FAQs
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
            Contact Us
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login/Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
