import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService"; // Adjust the path as necessary

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const userData = { email, password };
      const response = await authService.loginUser(userData); // Call the login function

      if (response.token) {
        // Successfully logged in, redirect to home or dashboard page
        navigate("/profile"); // Adjust the path as necessary
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
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
          Welcome!
        </Typography>
        <Divider sx={{ backgroundColor: "#1e90ff", mb: 4 }} />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        {/* Password Field */}
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        {/* Error Message */}
        {error && (
          <Typography
            variant="body2"
            sx={{
              color: "red",
              textAlign: "center",
              mb: 2,
            }}
          >
            {error}
          </Typography>
        )}

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
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
          Login
        </Button>

        {/* Links for Sign Up and Forgot Password */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#aaa", mb: 1 }}
        >
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{ color: "#1e90ff", textDecoration: "none" }}
          >
            Sign Up
          </a>
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", color: "#aaa" }}>
          Forgot your password?{" "}
          <a
            href="/forgot-password"
            style={{ color: "#1e90ff", textDecoration: "none" }}
          >
            Reset it
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginForm;
