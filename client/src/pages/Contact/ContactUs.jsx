import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS service and template ID here
    emailjs
      .send(
        "service_43wct7d", // Replace with your EmailJS Service ID
        "template_y9tg8wu", // Replace with your EmailJS Template ID
        {
          to_name: "Recipient Name", // You can change this to dynamically fetch the recipient's name
          from_name: formData.name, // This is the sender's name from the form
          message: formData.message, // The message content from the form
        },
        "ox-jqsjL5WpXUJLhI" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log(error.text);
          setStatus("Error sending message. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a", // Dark Navy Blue for a modern look
        color: "#e2e8f0", // Light Gray for text
        minHeight: "100vh",
        py: 8,
        px: { xs: 3, sm: 6 },
      }}
    >
      {/* Header Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#38bdf8", mb: 2 }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: "700px", mx: "auto", color: "#cbd5e1" }}
        >
          We're here to answer your questions and provide the support you need.
          Reach out using the form below or through our contact details.
        </Typography>
      </Box>

      {/* Main Grid */}
      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{
              backgroundColor: "#1e293b", // Deep Navy for contrast
              borderRadius: "12px",
              padding: 4,
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#38bdf8",
                textAlign: "center",
              }}
            >
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="filled"
                InputLabelProps={{
                  style: { color: "#94a3b8" },
                }}
                sx={{
                  mb: 3,
                  backgroundColor: "#334155",
                  "& .MuiFilledInput-root": {
                    color: "#e2e8f0",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="filled"
                InputLabelProps={{
                  style: { color: "#94a3b8" },
                }}
                sx={{
                  mb: 3,
                  backgroundColor: "#334155",
                  "& .MuiFilledInput-root": {
                    color: "#e2e8f0",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                multiline
                rows={4}
                variant="filled"
                InputLabelProps={{
                  style: { color: "#94a3b8" },
                }}
                sx={{
                  mb: 3,
                  backgroundColor: "#334155",
                  "& .MuiFilledInput-root": {
                    color: "#e2e8f0",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#38bdf8",
                  textTransform: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0284c7",
                  },
                }}
                type="submit"
              >
                Send Message
              </Button>
            </form>
            {status && (
              <Typography
                sx={{
                  mt: 3,
                  color: status.includes("Error") ? "red" : "green",
                }}
              >
                {status}
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 4, fontWeight: "bold", color: "#38bdf8" }}
            >
              Get in Touch
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                color: "#cbd5e1",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#0284c7",
                  color: "#fff",
                  marginRight: 2,
                  "&:hover": {
                    backgroundColor: "#0369a1",
                  },
                }}
              >
                <Email />
              </IconButton>
              <Typography variant="body1">Support@WellSquare.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                color: "#cbd5e1",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#16a34a",
                  color: "#fff",
                  marginRight: 2,
                  "&:hover": {
                    backgroundColor: "#15803d",
                  },
                }}
              >
                <Phone />
              </IconButton>
              <Typography variant="body1">+1 (234) 567-8910</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#cbd5e1",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#f59e0b",
                  color: "#fff",
                  marginRight: 2,
                  "&:hover": {
                    backgroundColor: "#d97706",
                  },
                }}
              >
                <LocationOn />
              </IconButton>
              <Typography variant="body1">
                1234 Health St, Wellness City, HC 56789
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
