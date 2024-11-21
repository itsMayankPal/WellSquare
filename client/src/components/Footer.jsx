import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 4,
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            About WellSquare
          </Typography>
          <Typography variant="body2">
            WellSquare is your personalized health and wellness companion. We
            provide tools, resources, and community support to help you achieve
            your health goals.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/" color="inherit" underline="hover" sx={{ mb: 0.5 }}>
              Home
            </Link>
            <Link
              href="/about-us"
              color="inherit"
              underline="hover"
              sx={{ mb: 0.5 }}
            >
              About Us
            </Link>
            <Link
              href="/features"
              color="inherit"
              underline="hover"
              sx={{ mb: 0.5 }}
            >
              Features
            </Link>
            <Link
              href="/faqs"
              color="inherit"
              underline="hover"
              sx={{ mb: 0.5 }}
            >
              FAQs
            </Link>
            <Link href="/contact-us" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: 3,
          borderTop: "1px solid rgba(255,255,255,0.3)",
          paddingTop: 2,
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} WellSquare. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
