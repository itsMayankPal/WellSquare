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

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/assets/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to WellSquare
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your Personalized Health & Wellness Companion
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/signup"
          sx={{ textTransform: "none" }}
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          Why Choose WellSquare?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Personalized Dashboard",
              description: "Track your health metrics and goals in one place.",
              image: "/assets/dashboard.jpg",
            },
            {
              title: "Meal Planner",
              description:
                "Get AI-driven meal suggestions tailored to your health needs.",
              image: "/assets/meal-planner.jpg",
            },
            {
              title: "Mental Health Toolkit",
              description:
                "Access mood trackers, mindfulness exercises, and more.",
              image: "/assets/mental-health.jpg",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Ready to Take Control of Your Health?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/signup"
          sx={{ textTransform: "none" }}
        >
          Join WellSquare Now
        </Button>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              quote:
                "WellSquare has transformed how I manage my health. The meal planner is a game-changer!",
              name: "Sarah T.",
              image: "/assets/testimonial1.jpg",
            },
            {
              quote:
                "The mental health toolkit helped me stay calm and focused during stressful times.",
              name: "James L.",
              image: "/assets/testimonial2.jpg",
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80, borderRadius: "50%", mr: 2 }}
                    image={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      - {testimonial.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer-Like Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} WellSquare. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
