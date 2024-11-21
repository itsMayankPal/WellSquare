import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Tips for a Healthier Lifestyle",
      description:
        "Discover simple and effective tips to improve your daily health routine.",
      image: "/assets/blog-health-tips.jpg",
      link: "/blog/health-tips",
    },
    {
      title: "Meal Planning for Busy People",
      description:
        "Learn how to plan meals effectively even with a hectic schedule.",
      image: "/assets/blog-meal-planning.jpg",
      link: "/blog/meal-planning",
    },
    {
      title: "Managing Mental Wellness in Stressful Times",
      description:
        "Explore techniques to maintain mental health during challenging periods.",
      image: "/assets/blog-mental-wellness.jpg",
      link: "/blog/mental-wellness",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: "url('/assets/blog-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          mb: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Our Blog
          </Typography>
          <Typography variant="h6">
            Insights, tips, and resources to help you on your health journey.
          </Typography>
        </motion.div>
      </Box>

      {/* Blog Cards Section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={cardVariant}>
                <Card
                  sx={{
                    boxShadow: 3,
                    "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {post.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={post.link}
                      sx={{ textTransform: "none" }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default BlogPage;
