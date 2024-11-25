import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { registerUser } from "../../services/authService";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    height: "",
    weight: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await registerUser(formData);
      setSuccess(response.message || "Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        height: "",
        weight: "",
      });
    } catch (err) {
      setError(err.message || "Registration failed!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
      }}
    >
      <Paper
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        elevation={10}
        sx={{
          padding: 5,
          borderRadius: 3,
          maxWidth: 400,
          width: "100%",
          backgroundColor: "#1c1c1c",
          color: "#e0e0e0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 3,
            color: "#1e90ff",
          }}
        >
          Create an Account
        </Typography>
        <Divider sx={{ backgroundColor: "#1e90ff", mb: 4 }} />
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <TextField
            fullWidth
            name="age"
            label="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <TextField
            fullWidth
            name="height"
            label="Height (cm)"
            type="number"
            value={formData.height}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <TextField
            fullWidth
            name="weight"
            label="Weight (kg)"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                backgroundColor: "#292929",
              },
              "& .MuiOutlinedInput-root:hover": {
                borderColor: "#1e90ff",
              },
            }}
            InputLabelProps={{
              style: { color: "#aaa" },
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#1e90ff",
              mb: 2,
              padding: "10px 0",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1c86ee",
              },
            }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#aaa", mb: 1 }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#1e90ff", textDecoration: "none" }}>
            Log In
          </a>
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", color: "#aaa" }}>
          By signing up, you agree to our{" "}
          <a href="/terms" style={{ color: "#1e90ff", textDecoration: "none" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            style={{ color: "#1e90ff", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          .
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignupForm;
