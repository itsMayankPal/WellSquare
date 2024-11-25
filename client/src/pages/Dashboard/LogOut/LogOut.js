import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Logout = ({ onLogout }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a, #0d0d0d)",
        color: "#ffffff",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          background: "#1e1e1e",
          borderRadius: "18px",
          padding: 4,
          boxShadow: "0 10px 30px rgba(198, 38, 38, 0.8)",
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
      >
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#ffffff",
          }}
        >
          Are You Sure You Want to Logout?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "#bdbdbd",
          }}
        >
          By logging out, you will be redirected to the login page and will need
          to sign in again to access your account.
        </Typography>
        <Button
          onClick={onLogout}
          variant="contained"
          component={motion.button}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(135deg, #32a852, #28a745)",
          }}
          whileTap={{ scale: 0.95 }}
          sx={{
            background: "linear-gradient(135deg, #2575fc, #6a11cb)",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "25px",
            "&:hover": {
              background: "linear-gradient(135deg, #1d6ed9, #5c1fae)",
            },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ExitToAppIcon />
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Logout;
