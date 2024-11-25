import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Home = () => {
  return (
    <Box
      sx={{ backgroundColor: "#121212", color: "#e0e0e0", minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 3,
          height: "120vh",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/free-photo/futuristic-shot-woman-wearing-sports-clothes-sneakers_1409-4753.jpg?t=st=1732338138~exp=1732341738~hmac=dbed56c735ab39ea9f0d6f86a56140a67a951358d61f93ee1751a1d30f85ddb8&w=900')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Left Side Content */}
        <Box sx={{ maxWidth: "50%", padding: 4 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to WellSquare
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: "600px" }}>
            Your Personalized Health & Wellness Companion
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/subscription"
            sx={{
              textTransform: "none",
              padding: "10px 30px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
          Why Choose WellSquare?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Personalized Dashboard",
              description: "Track your health metrics and goals in one place.",
              image:
                "https://img.freepik.com/free-photo/person-being-scanned-by-digital-health-app_23-2151891772.jpg?t=st=1732337538~exp=1732341138~hmac=fb961257102dfdd6f9efa6f989ed6bee285b17694e6fb33f90bf40ea396146a9&w=996",
              link: "/dashboard",
            },
            {
              title: "AI-Powered Meal Planner",
              description: "Get tailored meal suggestions to meet your goals.",
              image:
                "https://img.freepik.com/premium-photo/transforming-bodies-diet-plans-exercise-regimens-weight-loss-healthy-living_1036975-117392.jpg?w=1060",
              link: "/meal-planner",
            },
            {
              title: "Mindfulness Toolkit",
              description: "Track mood, practice mindfulness, and de-stress.",
              image:
                "https://img.freepik.com/free-vector/body-chakras-illustration_23-2148564499.jpg?t=st=1732216030~exp=1732219630~hmac=289d10a11f26f658a901f20bd7867dd3a6705494526702798b6165c87ba708c3&w=1060",
              link: "/mindfulness-toolkit",
            },
            {
              title: "Calorie Checker",
              description:
                "Track your calorie intake and manage your diet effectively.",
              image:
                "https://img.freepik.com/premium-vector/diet-plan-app-flat-vector-web-banner-template_1323048-46156.jpg?w=1380",
              link: "/calorie-checker",
            },
            {
              title: "Workout Plan",
              description:
                "Get personalized workout plans to achieve your fitness goals.",
              image:
                "https://img.freepik.com/free-photo/gym-weights-foreground-fitness-center_91128-4458.jpg?t=st=1732337103~exp=1732340703~hmac=ecfbd990d61dc8294c281be7021b3bc0a3857f96eb3398787185cf83045df1f5&w=1380",
              link: "/workout-plan",
            },
            {
              title: "Fitness Challenges",
              description:
                "Participate in exciting challenges to push your limits and win rewards.",
              image:
                "https://img.freepik.com/premium-vector/fitness-design-colorful-background-vector-illustration_1138841-35493.jpg?w=1380",
              link: "/Fitness-challenges",
            },
          ].map((feature, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              component={motion.div}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "#e0e0e0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                  <Button
                    component={Link}
                    to={feature.link}
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: 2,
                      textTransform: "none",
                      padding: "6px 20px",
                      backgroundColor: "#1e90ff",
                      "&:hover": {
                        backgroundColor: "#00bfff",
                      },
                    }}
                  >
                    Click Here!
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box
        sx={{
          padding: 5,
          background: "linear-gradient(to right, #1a1a1a, #212121)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              step: "Step 1",
              description: "Sign up and create your profile.",
              icon: <PersonAddIcon sx={{ fontSize: 50, color: "#1e90ff" }} />,
            },
            {
              step: "Step 2",
              description: "Set your health and wellness goals.",
              icon: (
                <FitnessCenterIcon sx={{ fontSize: 50, color: "#1e90ff" }} />
              ),
            },
            {
              step: "Step 3",
              description: "Track your progress daily.",
              icon: <AssessmentIcon sx={{ fontSize: 50, color: "#1e90ff" }} />,
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                sx={{
                  padding: 3,
                  backgroundColor: "#1c1c1c",
                  color: "#e0e0e0",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#1e90ff",
                  }}
                >
                  {item.step}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
