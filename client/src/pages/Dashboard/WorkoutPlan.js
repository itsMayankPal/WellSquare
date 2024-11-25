import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const workoutData = {
  maintain: {
    Cardio: [
      {
        name: "Jogging - 30 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 30,
      },
      {
        name: "Cycling - 20 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 20,
      },
      {
        name: "Jump Rope - 15 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 15,
      },
      {
        name: "High Knees - 2 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 2,
      },
    ],
    Strength: [
      {
        name: "Push-ups - 3 sets of 15",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Squats - 3 sets of 20",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Plank - 3 sets of 1 minute",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 1,
      },
      {
        name: "Lunges - 3 sets of 15 per leg",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
    ],
    Yoga: [
      {
        name: "Sun Salutation - 5 rounds",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 5,
      },
      {
        name: "Tree Pose - 1 minute per side",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 1,
      },
      {
        name: "Child's Pose - 2 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 2,
      },
      {
        name: "Warrior Pose - 1 minute per side",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 1,
      },
    ],
  },
  loss: {
    Cardio: [
      {
        name: "Running - 45 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 45,
      },
      {
        name: "Burpees - 3 sets of 20",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Mountain Climbers - 2 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 2,
      },
      {
        name: "Jump Squats - 3 sets of 15",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
    ],
    Strength: [
      {
        name: "Dumbbell Rows - 3 sets of 12",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Deadlifts - 3 sets of 10",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Russian Twists - 3 sets of 20 (10 per side)",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
    ],
    Yoga: [
      {
        name: "Downward Dog - 1 minute",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 1,
      },
      {
        name: "Bridge Pose - 2 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 2,
      },
      {
        name: "Cat-Cow Stretch - 5 rounds",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 5,
      },
    ],
  },
  gain: {
    Cardio: [
      {
        name: "Incline Walk - 30 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 30,
      },
      {
        name: "Stair Climber - 15 minutes",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 15,
      },
    ],
    Strength: [
      {
        name: "Bench Press - 3 sets of 10",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Pull-ups - 3 sets of 8",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Bicep Curls - 3 sets of 12",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
      {
        name: "Overhead Press - 3 sets of 10",
        image: "https://via.placeholder.com/150",
        type: "sets",
        sets: 3,
      },
    ],
    Yoga: [
      {
        name: "Pigeon Pose - 2 minutes per side",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 2,
      },
      {
        name: "Half Lord of the Fishes - 1 minute per side",
        image: "https://via.placeholder.com/150",
        type: "timed",
        duration: 1,
      },
    ],
  },
};

const workoutFacts = [
  "Running improves cardiovascular health.",
  "Yoga enhances flexibility and reduces stress.",
  "Strength training helps in building bone density.",
  "Cycling improves leg strength and joint mobility.",
  "Jumping rope boosts coordination and agility.",
  "Plank exercises strengthen your core and back.",
  "Squats engage over 200 muscles in your body.",
  "Push-ups help build upper body strength effectively.",
  "Sun Salutation improves overall posture and balance.",
];

const WorkoutPlan = () => {
  const [goal, setGoal] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [workouts, setWorkouts] = useState([]);

  // Handle workout plan generation
  const handleGeneratePlan = () => {
    if (!goal || !workoutType) {
      alert("Please select both a goal and workout type!");
      return;
    }
    setWorkouts(workoutData[goal][workoutType] || []);
  };

  return (
    <Box
      sx={{
        padding: 5,
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        color: "#333",
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        Personalized Workout Planner
      </Typography>

      {/* Selection Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Goal</InputLabel>
            <Select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              label="Goal"
            >
              <MenuItem value="maintain">Maintain Weight</MenuItem>
              <MenuItem value="loss">Weight Loss</MenuItem>
              <MenuItem value="gain">Gain Muscle</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Workout Type</InputLabel>
            <Select
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              label="Workout Type"
            >
              <MenuItem value="Cardio">Cardio</MenuItem>
              <MenuItem value="Strength">Strength</MenuItem>
              <MenuItem value="Yoga">Yoga</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box textAlign="center" sx={{ mb: 4 }}>
        <Button
          variant="contained"
          onClick={handleGeneratePlan}
          sx={{
            backgroundColor: "#1976d2",
            textTransform: "none",
            padding: "10px 20px",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Generate Workout Plan
        </Button>
      </Box>

      {/* Workout Plan Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
        {workouts.map((workout, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={workout.image}
                  alt={workout.name}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1976d2",
                      mb: 2,
                    }}
                  >
                    {workout.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Facts Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        Interesting Workout Facts
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {workoutFacts.map((fact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e3f2fd",
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", fontSize: "16px" }}
                >
                  {fact}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkoutPlan;
