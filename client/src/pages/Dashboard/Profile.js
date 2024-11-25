import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { getUserDetails, updateUserDetails } from "../../utils/api"; // Add update API function

const defaultAvatar =
  "https://imgs.search.brave.com/-uuax0nt6jpQ2DOSjBn57yaryr66_jGy6mlsojDyXWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91c2Vy/LXNpZ24taWNvbi1w/ZXJzb24tc3ltYm9s/LWh1bWFuLWF2YXRh/ci1yaWNoLW1hbi04/NDUxOTA4My5qcGc"; // Replace with your preferred default avatar image URL

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Initially null to simulate loading state
  const [editedDetails, setEditedDetails] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserDetails(); // Fetch data from the API
        setUserDetails(data);
        setEditedDetails(data);
        setAvatarUrl(data.avatar || defaultAvatar); // Set avatar URL or default if not provided
      } catch (error) {
        console.error("Failed to load user details", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleAvatarError = () => {
    setAvatarUrl(defaultAvatar); // Fallback to default avatar on error
  };

  const handleEditToggle = async () => {
    if (isEditing) {
      // Save changes to the database
      try {
        setIsLoading(true);
        const updatedData = await updateUserDetails(editedDetails); // Save changes via API
        setUserDetails(updatedData); // Update local state with API response
        setIsEditing(false);
        console.log("Profile updated successfully");
      } catch (error) {
        console.error("Failed to save user details", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsEditing(true); // Enable edit mode
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  // If user data is not loaded yet, show a loading spinner
  if (!userDetails) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          padding: 4,
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
          color: "#444444",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="gray">
          Loading profile...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        color: "#444444",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "#333333",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        Profile
      </Typography>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {/* Avatar Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              background: "linear-gradient(135deg, #ffe259, #ffa751)",
              fontSize: "3rem",
              color: "#ffffff",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            }}
            alt="User Avatar"
            src={avatarUrl}
            imgProps={{ onError: handleAvatarError }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#ffa751",
            }}
          >
            {userDetails.name}
          </Typography>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={5}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            sx={{
              padding: 4,
              background: "linear-gradient(135deg, #ffffff, #d7e1ec)",
              color: "#444444",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Grid container spacing={3}>
              {[
                { label: "Name", value: "name" },
                { label: "Email", value: "email" },
                { label: "Age", value: "age", type: "number" },
                { label: "Weight (kg)", value: "weight", type: "number" },
                { label: "Height (cm)", value: "height", type: "number" },
              ].map(({ label, value, type = "text" }, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <TextField
                    label={label}
                    fullWidth
                    name={value}
                    value={
                      isEditing ? editedDetails[value] : userDetails[value]
                    }
                    onChange={handleInputChange}
                    type={type}
                    disabled={!isEditing}
                    InputLabelProps={{
                      style: { color: "#6a6a6a" }, // Label color
                    }}
                    InputProps={{
                      style: { color: "#444444" }, // Input text color
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffa751",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffe259",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#444444", // Ensures the entered text is visible
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleEditToggle}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          disabled={isLoading}
          sx={{
            background: isEditing
              ? "linear-gradient(135deg, #28a745, #85d692)"
              : "linear-gradient(135deg, #56ccf2, #2f80ed)",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "25px",
            "&:hover": {
              background: isEditing
                ? "linear-gradient(135deg, #218838, #73c077)"
                : "linear-gradient(135deg, #2a6bb9, #4597d8)",
            },
          }}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
