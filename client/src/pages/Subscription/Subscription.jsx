import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Subscription = () => {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false); // Manage modal visibility

  const plans = [
    {
      title: "Free Plan",
      price: 0,
      features: [
        "Access to 1 basic course",
        "Community access for basic support",
        "Limited content access to basic topics",
      ],
      description:
        "Our Free Plan allows you to explore the basics of health and wellness. It’s perfect for those who are just starting their fitness journey and want to try out some introductory content.",
      color: "#32cd32",
    },
    {
      title: "Basic Plan",
      price: 199,
      features: [
        "Access to 10 premium courses",
        "Basic analytics dashboard to track your progress",
        "Community access with moderated support",
        "Monthly health tips & insights",
        "Weekly progress tracker",
      ],
      description:
        "Take your wellness journey seriously with the Basic Plan. Gain access to a curated set of 10 premium courses that guide you through essential fitness and nutrition topics, along with a personalized analytics dashboard to track your progress.",
      color: "#1e90ff",
    },
    {
      title: "Premium Plan",
      price: 499,
      features: [
        "Unlimited access to all courses",
        "Advanced analytics dashboard for in-depth insights",
        "Personalized health and fitness guidance",
        "Exclusive community access with top experts",
        "Weekly 1-on-1 consultations with health coaches",
        "Custom meal and workout plans",
        "Priority customer support",
      ],
      description:
        "The Premium Plan is the ultimate choice for those who are ready to commit to their health transformation. With unlimited access to all our courses, personalized coaching, exclusive community features, and in-depth analytics, this plan is designed for individuals who are serious about taking their fitness and health to the next level.",
      color: "#ff4500",
    },
  ];

  const handleSubscribe = () => {
    setOpenModal(true); // Show the success modal
  };

  const closeModal = () => {
    setOpenModal(false); // Close the modal
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Choose Your Plan
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
        >
          Unlock your health and wellness potential with our flexible
          subscription plans. Choose the best one that fits your needs and start
          your fitness journey today.
        </Typography>
      </Box>

      {/* Carousel-style Subscription Plan Display */}
      <Box sx={{ position: "relative" }}>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ justifyItems: "center" }}
        >
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: `0 12px 30px ${plans[currentPlanIndex].color}`,
                  transform: "scale(1.05)", // Added scale effect on hover
                },
              }}
            >
              <CardContent
                sx={{ textAlign: "center", padding: 4, color: "#fff" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: plans[currentPlanIndex].color,
                  }}
                >
                  {plans[currentPlanIndex].title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                  ₹{plans[currentPlanIndex].price} / month
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.8, fontStyle: "italic" }}
                >
                  {plans[currentPlanIndex].description}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {plans[currentPlanIndex].features.map((feature, i) => (
                    <Typography key={i} variant="body1" sx={{ mb: 1 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: plans[currentPlanIndex].color,
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: `${plans[currentPlanIndex].color}cc`, // Darker shade on hover
                    },
                  }}
                  onClick={handleSubscribe} // Trigger subscription
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Navigation Arrows */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transform: "translateY(-50%)",
            px: 2,
          }}
        >
          <ArrowBackIos
            sx={{ color: "#fff", cursor: "pointer" }}
            onClick={() =>
              setCurrentPlanIndex((prevIndex) =>
                prevIndex === 0 ? plans.length - 1 : prevIndex - 1
              )
            }
          />
          <ArrowForwardIos
            sx={{ color: "#fff", cursor: "pointer" }}
            onClick={() =>
              setCurrentPlanIndex((prevIndex) =>
                prevIndex === plans.length - 1 ? 0 : prevIndex + 1
              )
            }
          />
        </Box>
      </Box>

      {/* Success Modal */}
      <Modal open={openModal} onClose={closeModal}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            p: 4,
            mx: "auto",
            mt: "20vh",
            textAlign: "center",
            maxWidth: 400,
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Payment Successful!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Thank you for subscribing to the {plans[currentPlanIndex].title}.
            Enjoy your journey to health and wellness!
          </Typography>
          <Button variant="contained" onClick={closeModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Subscription;
