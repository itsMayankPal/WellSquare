import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  LinearProgress,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const userData = {
    bmi: 22.5,
    heartRate: 78,
    steps: 12000,
    caloriesBurned: 350,
  };

  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <Typography variant="h3" sx={{ color: "#fff", textAlign: "center", mb: 6, pt: 4 }}>
        Welcome to Your Dashboard
      </Typography>

      {/* Main Flex Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          px: 4,
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "20%" },
            backgroundColor: "#1c1c1c",
            borderRadius: 2,
            padding: 2,
          }}
        >
          <Sidebar />
        </Box>

        {/* Right-Side Content */}
        <Box sx={{ flexGrow: 1 }}>
          {/* User Metrics Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ backgroundColor: "#1c1c1c", borderRadius: 2 }}>
                  <CardContent sx={{ textAlign: "center", padding: 3 }}>
                    <Typography variant="h5" sx={{ color: "#1e90ff", mb: 2 }}>
                      BMI
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {userData.bmi}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ backgroundColor: "#1c1c1c", borderRadius: 2 }}>
                  <CardContent sx={{ textAlign: "center", padding: 3 }}>
                    <Typography variant="h5" sx={{ color: "#32cd32", mb: 2 }}>
                      Heart Rate
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {userData.heartRate} BPM
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ backgroundColor: "#1c1c1c", borderRadius: 2 }}>
                  <CardContent sx={{ textAlign: "center", padding: 3 }}>
                    <Typography variant="h5" sx={{ color: "#ff4500", mb: 2 }}>
                      Steps
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {userData.steps} Steps
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(userData.steps / 15000) * 100}
                      sx={{ mt: 2, height: 8, borderRadius: 2 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ backgroundColor: "#1c1c1c", borderRadius: 2 }}>
                  <CardContent sx={{ textAlign: "center", padding: 3 }}>
                    <Typography variant="h5" sx={{ color: "#32cd32", mb: 2 }}>
                      Calories Burned
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {userData.caloriesBurned} kcal
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Activity Section */}
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#fff", mb: 2 }}>
              Recent Activity
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  borderRadius: 2,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                <CardContent sx={{ textAlign: "center", padding: 3 }}>
                  <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                    12 PM - 1 PM: Walked 2 miles
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={60}
                    sx={{
                      color: "#32cd32",
                      width: 100,
                      height: 100,
                      margin: "auto",
                    }}
                  />
                  <Typography variant="h6" sx={{ color: "#fff", mt: 2 }}>
                    60% of Goal Achieved
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>

          {/* CTA Button */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1e90ff",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#4682b4",
                },
              }}
            >
              Update Health Data
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
