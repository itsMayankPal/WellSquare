import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "10,000 Steps Challenge",
    description: "Walk 10,000 steps daily for 30 days to boost your stamina.",
    image:
      "https://img.freepik.com/premium-vector/young-female-athlete-climbing-stone-stairs-illustration_1332465-50605.jpg?w=1380",
    type: "steps",
    target: 10000, // Steps target
  },
  {
    title: "Plank Challenge",
    description: "Hold a plank daily and improve your time each day.",
    image:
      "https://img.freepik.com/free-photo/close-up-man-doing-yoga-indoors_23-2150848039.jpg?t=st=1732340554~exp=1732344154~hmac=39335655b08bf7889dc2a7b83277c9e95a1ab0463cc10844ac637153fd8c4a1d&w=1060",
    type: "timed",
    target: 60, // 1 minute in seconds
  },
  {
    title: "Yoga Challenge",
    description: "Practice yoga for 20 minutes daily to improve flexibility.",
    image:
      "https://img.freepik.com/premium-vector/cartoon-man-doing-yoga-room-with-plants-plants_1120557-54225.jpg?w=1380",
    type: "timed",
    target: 1200, // 20 minutes in seconds
  },
  {
    title: "HIIT Challenge",
    description: "Complete a 15-minute HIIT workout daily for endurance.",
    image:
      "https://img.freepik.com/premium-vector/man-running-gym-with-cardio-control-concept_1334819-32175.jpg?w=1380",
    type: "timed",
    target: 900, // 15 minutes in seconds
  },
  {
    title: "Hydration Challenge",
    description: "Drink at least 3 liters of water every day for a month.",
    image:
      "https://img.freepik.com/premium-vector/cartoon-personal-trainer-celebration-illustration_1120558-33453.jpg?w=1380",
    type: "quantity",
    target: 3, // Liters
  },
  {
    title: "Push-Up Challenge",
    description: "Complete 50 push-ups every day to build upper body strength.",
    image:
      "https://img.freepik.com/free-photo/young-man-doing-push-ups-gym_7502-4770.jpg?w=1380&t=st=1732343204~exp=1732346804~hmac=3d4f1c8e1b8816f3a17c34d68e21f6ad420a15156379b8e7ec0e63e711c57cfb",
    type: "reps",
    target: 50, // Reps
  },
  {
    title: "Squat Challenge",
    description: "Perform 100 squats daily to strengthen your lower body.",
    image:
      "https://img.freepik.com/free-vector/online-sport-classes-people-doing-squats_23-2148821210.jpg?t=st=1732511081~exp=1732514681~hmac=84e3ae5cd547753802bea03f5acaac9943c0decc7fcb50165d9b963d02263cac&w=1060",
    type: "reps",
    target: 100, // Reps
  },
  {
    title: "Water Bottle Curl Challenge",
    description: "Use a water bottle to perform 50 arm curls daily.",
    image:
      "https://img.freepik.com/free-photo/portrait-young-man-trying-open-plastic-bottle-t-shirt_176474-61294.jpg?t=st=1732511162~exp=1732514762~hmac=9dc5ac1cfd04cf862aebac2d97f620b73d9ef23a43c8438d0e33ea405bad9c94&w=1800",
    type: "reps",
    target: 50, // Reps
  },
  {
    title: "Meditation Challenge",
    description: "Meditate for 15 minutes daily to reduce stress.",
    image:
      "https://img.freepik.com/premium-photo/photo-concentrated-attractive-woman-sportswear-meditating-with-zen-fingers-using-laptop-while-sitting-floor-home_171337-79944.jpg?w=1800",
    type: "timed",
    target: 900, // 15 minutes in seconds
  },
  {
    title: "Cycling Challenge",
    description: "Cycle for 5 kilometers daily to improve endurance.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-bike-race-illustration_52683-87680.jpg?t=st=1732511225~exp=1732514825~hmac=03b6edea4a0b7307f2bd6c9f02658f5786189c82402dd482fa051a4767f12c1a&w=1800",
    type: "distance",
    target: 5, // Distance in kilometers
  },
  {
    title: "Jump Rope Challenge",
    description: "Complete 500 jump ropes daily for cardio improvement.",
    image:
      "https://img.freepik.com/free-vector/training-home-concept_23-2148496820.jpg?t=st=1732511257~exp=1732514857~hmac=c000299e82c7895e261735bd88699ab557532c28efd166c3f4b527095f909805&w=1060",
    type: "reps",
    target: 500, // Reps
  },
  {
    title: "Stair Climbing Challenge",
    description: "Climb 100 stairs daily to strengthen your legs.",
    image:
      "https://img.freepik.com/free-photo/man-woman-running-steps-working-out_23-2147758019.jpg?t=st=1732511177~exp=1732514777~hmac=cb0114a45ff0f6a83accf69b09ab6a03c7877515c5fc9b9fe5580068f672340a&w=1800",
    type: "steps",
    target: 100, // Stairs
  },
  {
    title: "Stretching Challenge",
    description: "Spend 10 minutes stretching daily for better flexibility.",
    image:
      "https://img.freepik.com/free-photo/full-shot-woman-training-outdoors_23-2150405448.jpg?t=st=1732511342~exp=1732514942~hmac=20d596e0266daa15ab8386bd8159489f45fa13c7f82238096fd9e31c247dfe06&w=1800",
    type: "timed",
    target: 600, // 10 minutes in seconds
  },
  {
    title: "Burpee Challenge",
    description: "Complete 30 burpees daily to build strength and stamina.",
    image:
      "https://img.freepik.com/free-vector/businessman-with-trophy_23-2147616845.jpg?t=st=1732511401~exp=1732515001~hmac=104c849b09f5c6fe3fa29e494e517a3adb91f8cc6a22db3f2e2d0e4eb06cb1da&w=1060",
    type: "reps",
    target: 30, // Reps
  },
];

const FitnessChallenges = () => {
  const [modalData, setModalData] = useState(null);
  const [timer, setTimer] = useState(0); // For timed challenges
  const [progress, setProgress] = useState(0); // For quantity/steps challenges

  const handleStartChallenge = (challenge) => {
    setModalData(challenge);

    if (challenge.type === "timed") {
      setTimer(challenge.target);
    } else {
      setProgress(0);
    }
  };

  const closeModal = () => {
    setModalData(null);
    setTimer(0);
    setProgress(0);
  };

  // Timer logic
  useEffect(() => {
    if (modalData?.type === "timed" && timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, modalData]);

  // Format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        padding: 5,
        backgroundColor: "#121212",
        minHeight: "100vh",
        color: "#e0e0e0",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 5,
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#00bfff",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fitness Challenges
      </Typography>

      <Grid container spacing={4}>
        {challenges.map((challenge, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
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
                image={challenge.image}
                alt={challenge.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#00bfff",
                  }}
                >
                  {challenge.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {challenge.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#00bfff",
                    "&:hover": {
                      backgroundColor: "#1e90ff",
                    },
                  }}
                  onClick={() => handleStartChallenge(challenge)}
                >
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Challenges */}
      {modalData && (
        <Modal open={!!modalData} onClose={closeModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 3,
              boxShadow: 24,
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              {modalData.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              {modalData.description}
            </Typography>
            {modalData.type === "timed" && (
              <Typography variant="h5" sx={{ mb: 2 }}>
                Time Remaining: {formatTime(timer)}
              </Typography>
            )}
            {modalData.type === "steps" || modalData.type === "quantity" ? (
              <>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Progress: {progress}/{modalData.target}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    setProgress((prev) => Math.min(prev + 1, modalData.target))
                  }
                  sx={{
                    backgroundColor: "#00bfff",
                    "&:hover": { backgroundColor: "#1e90ff" },
                  }}
                >
                  +1 Progress
                </Button>
              </>
            ) : null}
            <Button
              variant="contained"
              onClick={closeModal}
              sx={{
                mt: 3,
                backgroundColor: "#00bfff",
                "&:hover": { backgroundColor: "#1e90ff" },
              }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default FitnessChallenges;
