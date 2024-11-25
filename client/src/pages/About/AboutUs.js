import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      {/* Intro Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          About Us
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}
        >
          At WellSquare, we are passionate about empowering individuals to lead
          healthier lives. With cutting-edge technology and personalized
          solutions, we aim to be your ultimate health-tech companion.
        </Typography>
      </Box>

      {/* Mission, Vision, Values Section */}
      <Grid container spacing={4}>
        {[
          {
            title: "Our Mission",
            description:
              "To provide innovative tools and personalized guidance for achieving health and wellness goals.",
            image:
              "https://img.freepik.com/premium-vector/professional-fitness-athletics-illustrations-collection-creative-projects_1120558-6080.jpg?w=1380",
          },
          {
            title: "Our Vision",
            description:
              "To be the leading platform transforming the way individuals approach their physical and mental health.",
            image:
              "https://img.freepik.com/free-photo/happy-woman-wooden-bridge-green-meadow-sunny-day_1150-19354.jpg?t=st=1732213275~exp=1732216875~hmac=1b75531e30f774c49c5b3bf750c81ff92d082abe2dfea6022bb24fcebc503cc4&w=1060",
          },
          {
            title: "Our Values",
            description:
              "Empathy, Innovation, and Integrity form the foundation of everything we do.",
            image:
              "https://img.freepik.com/free-vector/creative-idea-inspiration-innovation-concept_107791-13087.jpg?t=st=1732213359~exp=1732216959~hmac=9d538050ef0a632defaa5c8a9c5cfc194a28822909f9c593fc7c2c8d507a6f39&w=1380",
          },
        ].map((item, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
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
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Team Section */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Meet Our Team
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center", // Centers the content horizontally
            alignItems: "center", // Vertically aligns the content
          }}
        >
          {[
            {
              name: "Nitika Dung",
              role: "Frontend Developer",
              image: "https://via.placeholder.com/150?text=Nitika+Dung",
            },
            {
              name: "Mayank Pal",
              role: "Backend Developer",
              image: "https://via.placeholder.com/150?text=Mayank+Pal",
            },
          ].map((member, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#1c1c1c",
                  borderRadius: "12px",
                  padding: 3,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          mt: 8,
          textAlign: "center",
          padding: 4,
          background: "linear-gradient(90deg, #1a1a1a, #212121)",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Ready to Transform Your Health?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join us today and start your journey towards a healthier, happier you.
        </Typography>
        <motion.a
          href="/signup"
          style={{
            display: "inline-block",
            background: "#1e90ff",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          whileHover={{
            backgroundColor: "#4682b4",
            transition: { duration: 0.3 },
          }}
        >
          Get Started
        </motion.a>
      </Box>
    </Box>
  );
};

export default AboutUs;
