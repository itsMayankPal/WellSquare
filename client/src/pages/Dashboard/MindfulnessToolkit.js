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

const MindfulnessToolkit = () => {
  const toolkitFeatures = [
    {
      title: "Mood Tracker",
      description: "Log your mood daily and monitor your emotional health.",
      image: "https://www.zimyo.com/wp-content/uploads/2023/04/35514474_credit_score_progress_bar_2-1-1.jpg",
      link: "/mood-tracker",
    },
    {
      title: "Guided Meditations",
      description: "Relax with our collection of calming guided meditations.",
      image: "https://pzizz.com/blog/articles/list-of-guided-imagery-visual-meditation/img/cover.webp",
      link: "/guided-meditations",
    },
    {
      title: "De-Stress Exercises",
      description: "Follow simple exercises to reduce stress and anxiety.",
      image: "https://www.vinmec.com/static/uploads/medium_20211027_153820_996104_cach_giam_cang_than_max_1800x1800_jpg_c0dc806809.jpg",
      link: "/de-stress-exercises",
    },
    {
      title: "Breathing Techniques",
      description: "Learn various breathing exercises to calm your mind.",
      image: "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2023/december/wellbeing/deep-breathing-620x400.png?h=400&w=620&rev=4506ebd34dab4476b56c225b6ff3ad60&hash=B3CFFEEE704E4432D101432CEE8B2766",
      link: "/breathing-techniques",
    },
    {
      title: "Sleep Aid Tips",
      description: "Improve your sleep with proven techniques and tips.",
      image: "https://api.watsons.co.th/api/v2/wtcth/blog/wp-content/uploads/pic-1-32.jpg",
      link: "/sleep-aid-tips",
    },
    {
      title: "Mindful Journaling",
      description: "Journal your thoughts to gain clarity and mindfulness.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLdYu2XBsVvivQvd82x4a3T1Evtg7BaUGtUrMs0EPa_ETLirDwijfRBfBxhGotJXgNIw&usqp=CAU",
      link: "/mindful-journaling",
    },
    {
      title: "Gratitude Practice",
      description: "Cultivate gratitude with daily exercises and prompts.",
      image: "https://images.squarespace-cdn.com/content/v1/58b6d511e58c62c7afc44090/1564736491331-DNWNC2D9O9VXJDUFPE7T/gratitude.png?format=750w",
      link: "/gratitude-practice",
    },
    {
      title: "Visualization Techniques",
      description: "Use visualization for stress relief and positive thinking.",
      image: "https://shiminly.com/wp-content/uploads/2023/01/0_dRueYeBlZh2nCaCJ.jpg",
      link: "/visualization-techniques",
    },
    {
      title: "Affirmations",
      description: "Repeat positive affirmations to enhance self-esteem.",
      image: "https://www.explorepsychology.com/wp-content/uploads/2024/03/Affirmations.png",
      link: "/affirmations",
    },
    {
      title: "Mindful Eating",
      description: "Practice mindfulness in your eating habits for better digestion.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXWeut0GvCM9f8L9BSppS0niKKJoRBSdfEDv1br3Qmjnbjj7LVFSr8CPJgFYCJn4ME7K7piJwbIkIc9h-dJQ4RbyVU_i7CVcfi11vuO5jYhcvkQX3tGm-xT93gmejcUSqtMjG5zfveh3b6/s1600/2012-02-09-Mindfulplate.jpg",
      link: "/mindful-eating",
    },
    {
      title: "Self-Care Routines",
      description: "Build a personalized self-care routine for holistic well-being.",
      image: "https://www.solhapp.com/blog/storage/effective-ways-to-create-a-self-care-routine.webp",
      link: "/self-care-routines",
    },
    {
      title: "Yoga for Mindfulness",
      description: "Incorporate yoga to calm the mind and stretch the body.",
      image: "https://media.licdn.com/dms/image/D4D12AQEh7H8mQlqU-Q/article-cover_image-shrink_600_2000/0/1714545892043?e=2147483647&v=beta&t=YwHdAjp8sw0kboHIASAWvBNZEwaQYMnBBFj-At1pGgk",
      link: "/yoga-for-mindfulness",
    },
  ];

  return (
    <Box
      sx={{
        padding: 5,
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#e0e0e0",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "#1e90ff",
        }}
      >
        Mindfulness Toolkit
      </Typography>

      {/* Toolkit Features */}
      <Grid container spacing={4}>
        {toolkitFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              sx={{
                backgroundColor: "#1c1c1c",
                color: "#e0e0e0",
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#292929",
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.7)",
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#1e90ff",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
                <Button
                  variant="contained"
                  href={feature.link}
                  sx={{
                    backgroundColor: "#1e90ff",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#1c86ee",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MindfulnessToolkit;
