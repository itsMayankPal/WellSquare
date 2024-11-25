import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import ClearIcon from "@mui/icons-material/Clear";

const motivationalTips = [
  "Stay hydrated! Water is key to a healthy lifestyle.",
  "Small changes lead to big results. Keep going!",
  "Healthy eating fuels a healthy mind and body.",
  "Consistency is the secret to success.",
  "Every step counts—literally and figuratively!",
];

const nutritionFacts = [
  {
    title: "Protein",
    description:
      "Proteins are essential for building and repairing tissues. They also support enzymes, hormones, and immune functions.",
    tips: [
      "Include lean meats, fish, beans, and tofu in your diet.",
      "Aim for 10-35% of your daily calories from protein.",
    ],
    color: "#1e90ff",
  },
  {
    title: "Carbohydrates",
    description:
      "Carbs are the body's primary energy source, fueling your brain, heart, and muscles.",
    tips: [
      "Focus on whole grains, vegetables, and legumes.",
      "Limit refined sugars and processed carbs.",
    ],
    color: "#00bfff",
  },
  {
    title: "Fats",
    description:
      "Fats provide energy, support cell growth, and assist in nutrient absorption.",
    tips: [
      "Choose healthy fats like avocados, nuts, and seeds.",
      "Avoid trans fats found in fried and processed foods.",
    ],
    color: "#ff6347",
  },
  {
    title: "Fiber",
    description:
      "Dietary fiber promotes healthy digestion and helps regulate blood sugar levels.",
    tips: [
      "Consume fruits, vegetables, whole grains, and legumes.",
      "Aim for 25-30g of fiber daily for optimal health.",
    ],
    color: "#ffcc00",
  },
  {
    title: "Vitamins",
    description:
      "Vitamins like A, B, C, D, and E are essential for growth, immunity, and overall health.",
    tips: [
      "Include colorful fruits and vegetables in your meals.",
      "Consider fortified foods or supplements if needed.",
    ],
    color: "#ff69b4",
  },
  {
    title: "Minerals",
    description:
      "Minerals such as calcium, iron, and potassium are crucial for strong bones, oxygen transport, and muscle function.",
    tips: [
      "Eat dairy products, leafy greens, and nuts.",
      "Stay hydrated to maintain electrolyte balance.",
    ],
    color: "#7fffd4",
  },
  {
    title: "Water",
    description:
      "Water is vital for every bodily function, including temperature regulation and waste elimination.",
    tips: [
      "Drink at least 8 glasses of water daily.",
      "Carry a reusable water bottle to stay hydrated on the go.",
    ],
    color: "#4682b4",
  },
  {
    title: "Antioxidants",
    description:
      "Antioxidants protect your body from harmful free radicals and support healthy aging.",
    tips: [
      "Include berries, dark chocolate, and green tea in your diet.",
      "Eat a variety of colorful foods for a range of antioxidants.",
    ],
    color: "#9932cc",
  },
  {
    title: "Iron",
    description:
      "Iron is essential for oxygen transport in the blood and preventing fatigue.",
    tips: [
      "Eat red meat, spinach, and fortified cereals.",
      "Pair iron-rich foods with vitamin C to enhance absorption.",
    ],
    color: "#b22222",
  },
  {
    title: "Calcium",
    description:
      "Calcium is critical for strong bones, teeth, and muscle contraction.",
    tips: [
      "Include dairy, leafy greens, and fortified plant-based milks.",
      "Avoid excessive sodium, which can hinder calcium retention.",
    ],
    color: "#708090",
  },
  {
    title: "Omega-3 Fatty Acids",
    description:
      "Omega-3s reduce inflammation and promote heart and brain health.",
    tips: [
      "Eat fatty fish like salmon, walnuts, and chia seeds.",
      "Consider a fish oil supplement if your diet is low in omega-3s.",
    ],
    color: "#20b2aa",
  },
  {
    title: "Healthy Eating Habits",
    description:
      "Balanced eating involves portion control, variety, and mindful consumption.",
    tips: [
      "Avoid skipping meals to maintain steady energy levels.",
      "Listen to your body's hunger and fullness cues.",
    ],
    color: "#cd5c5c",
  },
];

const CalorieChecker = () => {
  const [foodItem, setFoodItem] = useState("");
  const [calorieData, setCalorieData] = useState(null);

  const handleSearch = () => {
    if (foodItem.trim() === "") return;
    // Simulated response. Replace with API call for real data.
    const mockData = {
      name: foodItem,
      calories: Math.floor(Math.random() * 500),
      protein: `${Math.floor(Math.random() * 50)}g`,
      carbs: `${Math.floor(Math.random() * 100)}g`,
      fat: `${Math.floor(Math.random() * 30)}g`,
      tip: motivationalTips[
        Math.floor(Math.random() * motivationalTips.length)
      ],
    };
    setCalorieData(mockData);
  };

  const clearResults = () => {
    setFoodItem("");
    setCalorieData(null);
  };

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
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Calorie Checker
      </Typography>

      {/* Search Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
          gap: 2,
        }}
      >
        <TextField
          label="Enter Food Item"
          variant="outlined"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          sx={{
            width: "50%",
            input: { color: "#e0e0e0" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#1e90ff",
              },
              "&:hover fieldset": {
                borderColor: "#1c86ee",
              },
            },
          }}
          InputLabelProps={{
            style: { color: "#e0e0e0" },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#1e90ff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1c86ee",
            },
          }}
        >
          Check
        </Button>
        {calorieData && (
          <IconButton onClick={clearResults} sx={{ color: "#e0e0e0" }}>
            <ClearIcon />
          </IconButton>
        )}
      </Box>

      {/* Results Section */}
      {calorieData && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mt: 4 }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card
                sx={{
                  backgroundColor: "#1c1c1c",
                  color: "#e0e0e0",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                  overflow: "hidden",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mb: 2, color: "#1e90ff" }}
                  >
                    {calorieData.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Calories:</strong> {calorieData.calories} kcal
                  </Typography>
                  <Typography variant="body1">
                    <strong>Protein:</strong> {calorieData.protein}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Carbs:</strong> {calorieData.carbs}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Fat:</strong> {calorieData.fat}
                  </Typography>
                  <Box
                    sx={{
                      mt: 3,
                      backgroundColor: "#1e90ff",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#ffffff" }}>
                      <em>{calorieData.tip}</em>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Nutrition Facts Section */}
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 3,
          textAlign: "center",
          fontWeight: "bold",
          color: "#1e90ff",
        }}
      >
        Learn About Nutrition
      </Typography>
      <Grid container spacing={3}>
        {nutritionFacts.map((fact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1c1c1c",
                color: "#e0e0e0",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: fact.color, fontWeight: "bold", mb: 2 }}
              >
                {fact.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {fact.description}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  padding: 2,
                  backgroundColor: fact.color,
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              >
                {fact.tips.map((tip, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{ fontStyle: "italic", mb: 1 }}
                  >
                    {tip}
                  </Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalorieChecker;
