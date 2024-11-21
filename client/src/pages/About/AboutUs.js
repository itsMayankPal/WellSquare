import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const AboutUs = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/assets/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          p: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="h6">
            Empowering health through technology and personalized solutions.
          </Typography>
        </motion.div>
      </Box>

      {/* Mission Section */}
      <Box sx={{ padding: 4 }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            At WellSquare, we believe in the power of health and wellness for
            everyone. Our mission is to simplify health management by offering
            personalized, tech-driven solutions that empower individuals to lead
            healthier lives.
          </Typography>
        </motion.div>
      </Box>

      {/* Team Section */}
      <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Alice Johnson",
              role: "Founder & CEO",
              image: "/assets/team-alice.jpg",
            },
            {
              name: "John Smith",
              role: "Head of Technology",
              image: "/assets/team-john.jpg",
            },
            {
              name: "Emma Brown",
              role: "Wellness Expert",
              image: "/assets/team-emma.jpg",
            },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2">{member.role}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action */}
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Join Us on Our Journey
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Be a part of the WellSquare community and take the first step toward
            a healthier life.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/signup"
            sx={{ textTransform: "none" }}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUs;
