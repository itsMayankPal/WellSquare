import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";

// Custom Dark Theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4caf50", // Green for health-themed highlights
    },
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: "bold",
      letterSpacing: "0.5px",
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const MealPlanner = () => {
  const [meals, setMeals] = useState({
    breakfast: "Multigrain toast with avocado and boiled eggs",
    lunch: "Grilled chicken with quinoa and roasted veggies",
    dinner: "Lentil soup with steamed spinach and whole grain bread",
    snacks: "Mixed nuts and a fresh apple",
  });

  const generateNewPlan = () => {
    const newPlans = [
      {
        breakfast: "Greek yogurt with chia seeds and mixed berries",
        lunch: "Salmon with brown rice and steamed broccoli",
        dinner: "Vegetable stir-fry with tofu and whole wheat noodles",
        snacks: "Carrot sticks with hummus",
      },
      {
        breakfast: "Oatmeal with almond milk, flaxseeds, and bananas",
        lunch: "Grilled turkey salad with olive oil and lemon dressing",
        dinner: "Grilled paneer with sautéed green beans and sweet potato mash",
        snacks: "Rice cakes with almond butter and a banana",
      },
      {
        breakfast: "Smoothie bowl with spinach, mango, and protein powder",
        lunch: "Chicken and avocado wrap with a side of fresh cucumber salad",
        dinner: "Minestrone soup with whole grain croutons",
        snacks: "A handful of trail mix (nuts and dried fruits)",
      },
    ];

    const randomPlan = newPlans[Math.floor(Math.random() * newPlans.length)];
    setMeals(randomPlan);
  };

  const mealItems = [
    { title: "Breakfast", description: meals.breakfast },
    { title: "Lunch", description: meals.lunch },
    { title: "Dinner", description: meals.dinner },
    { title: "Snacks", description: meals.snacks },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: 5,
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "primary.main",
          }}
        >
          Healthy Meal Planner
        </Typography>

        {/* Meal Cards */}
        <Grid container spacing={4}>
          {mealItems.map((meal, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  borderRadius: "16px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                  "&:hover": {
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    padding: 4,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    {meal.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {meal.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Generate New Plan Button */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            onClick={generateNewPlan}
            sx={{
              backgroundColor: "primary.main",
              color: "text.primary",
              textTransform: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            Generate New Meal Plan
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MealPlanner;
