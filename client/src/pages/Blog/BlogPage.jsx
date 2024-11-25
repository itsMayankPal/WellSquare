import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Backdrop,
  Fade,
  Button,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "10 Simple Habits for a Healthier Lifestyle",
    description:
      "Discover easy-to-follow habits that can help you live a healthier, more active life.",
    image:
      "https://img.freepik.com/free-photo/fit-individual-doing-sport_23-2151764346.jpg?w=1060",
    content:
      "Living a healthier lifestyle doesn't have to be complicated. Start with these simple habits:\nDrink more water\nTake daily walks\nGet enough sleep\nIncorporate stretching into your routine\nEat more whole foods\nPractice mindfulness\nReduce processed foods\nStay consistent with small changes\nManage stress effectively\nSurround yourself with positivity",
  },
  {
    title: "Top 5 Foods for Better Mental Health",
    description:
      "Learn how your diet can impact your mental health and the best foods to eat for a happier mind.",
    image:
      "https://images.getbento.com/accounts/6b9c03fde43e6e24cc89b73ab08aef02/media/images/56037The_HB_Five_Food_Groups_and_the_Science_Behind_Them.jpg?w=1200",
    content:
      "Your mental health is deeply connected to your diet. Incorporate these top foods into your meals for a happier mind:\nFatty fish rich in Omega-3s\nDark leafy greens like spinach and kale\nNuts and seeds for magnesium\nBerries high in antioxidants\nWhole grains to stabilize blood sugar levels.",
  },
  {
    title: "The Benefits of Regular Exercise",
    description:
      "From better mood to improved energy levels, see how exercise can transform your health.",
    image:
      "https://img.freepik.com/premium-photo/fitness-class-exercising-studio_13339-174114.jpg?w=360",
    content:
      "Exercise offers numerous benefits for both your body and mind:\nBoosts mood and reduces anxiety\nImproves cardiovascular health\nIncreases energy levels\nPromotes better sleep\nStrengthens muscles and bones. Aim for at least 30 minutes of moderate exercise daily for optimal results.",
  },
  {
    title: "Hydration: Why Water is Essential for Your Body",
    description:
      "Understand the importance of hydration and how it impacts your overall health.",
    image:
      "https://img.freepik.com/free-photo/woman-standing-relaxing-after-exercising-holding-bottle-water-touch-face_1150-16575.jpg?t=st=1732509250~exp=1732512850~hmac=babbe206e54110991c7a7acc57cd0e268957d4f0ae679816907ef71bd4d9fa05&w=1800",
    content:
      "Staying hydrated is crucial for maintaining bodily functions. Water helps regulate temperature, transport nutrients, and remove waste. To stay hydrated:\nDrink at least 8 cups daily\nEat hydrating fruits like watermelon\nAvoid sugary drinks\nListen to your body's thirst cues.",
  },
  {
    title: "Mindfulness and Nutrition: A Perfect Pair",
    description:
      "Learn how mindfulness can improve your eating habits and overall health.",
    image:
      "https://img.freepik.com/premium-photo/girl-sitting-drinking-from-bottle_102671-5293.jpg?w=1800",
    content:
      "Mindful eating is a powerful way to improve your relationship with food. Practice these habits:\nEat without distractions\nChew slowly to savor flavors\nRecognize hunger and fullness cues\nFocus on nutrient-rich foods\nEnjoy the eating experience fully.",
  },
  {
    title: "Sleep and Its Impact on Weight Management",
    description:
      "Discover how quality sleep is linked to better weight management and overall health.",
    image:
      "https://img.freepik.com/free-photo/putting-adult-slavic-man-sits-armchair-holding-book-face-inside-living-room_141793-67112.jpg?t=st=1732509426~exp=1732513026~hmac=e9d2ceb8f811d7fb016500f749e0170b3432955b06e0f0910749162a83b5369e&w=1800",
    content:
      "Sleep plays a significant role in weight management. Poor sleep disrupts hunger hormones, leading to overeating. Tips for better sleep:\nStick to a consistent sleep schedule\nAvoid caffeine before bed\nCreate a relaxing bedtime routine\nLimit screen time\nEnsure your bedroom is cool and dark.",
  },
  {
    title: "Boost Your Immune System Naturally",
    description:
      "Discover natural ways to strengthen your immune system and fight off illness.",
    image:
      "https://img.freepik.com/free-photo/yawning-woman-holding-cup-kitchen_23-2148389954.jpg?t=st=1732509485~exp=1732513085~hmac=e18a30d92695cc553d7008c1c1d83ef5ee550c0f8f09e20823268a2186f76910&w=1800",
    content:
      "A strong immune system is vital for protecting your body. Boost your immunity with these natural tips:\nEat a variety of fruits and vegetables\nStay active with regular exercise\nGet enough sleep\nManage stress levels\nStay hydrated\nConsume immune-boosting herbs like garlic and ginger.",
  },
  {
    title: "The Power of Positive Thinking",
    description:
      "How cultivating a positive mindset can improve your life and health.",
    image:
      "https://img.freepik.com/free-photo/loop-symbol-inspirational-view_23-2150022262.jpg?t=st=1732509525~exp=1732513125~hmac=59353a4cbf923e84235db4fbc1ff3046cb51fb362b834faa08e1f821c11f7dcd&w=1800",
    content:
      "Positive thinking can change your life by influencing your physical and mental health. To cultivate a positive mindset:\nPractice gratitude daily\nFocus on solutions, not problems\nSurround yourself with positive influences\nVisualize success\nPractice self-compassion and kindness.",
  },
  {
    title: "Healthy Gut, Healthy Life",
    description:
      "Learn about the connection between gut health and overall wellness.",
    image:
      "https://img.freepik.com/free-photo/top-view-different-fresh-fruits-inside-plates-white-background-tropical-ripe-diet-exotic-healthy-life_140725-98383.jpg?t=st=1732509575~exp=1732513175~hmac=64e56c7377fe08787a5517443a7b7ba79edce762e043d64895373f3af955941c&w=1800",
    content:
      "Your gut health is crucial for digestion and overall wellness. To support a healthy gut:\nEat a fiber-rich diet\nConsume probiotic-rich foods like yogurt\nStay hydrated\nAvoid excessive sugar intake\nManage stress and get enough sleep.",
  },
  {
    title: "How to Manage Stress Effectively",
    description:
      "Effective strategies for managing stress and maintaining mental health.",
    image:
      "https://img.freepik.com/free-vector/cartoon-business-people-meditating_23-2148918176.jpg?t=st=1732509670~exp=1732513270~hmac=b06ee167622aa9b97d96b8111e3285915281d49136a538646977622eb8550329&w=1800",
    content:
      "Managing stress is key to maintaining mental health. Here are strategies to help:\nPractice deep breathing exercises\nEngage in physical activities like yoga\nSet aside time for relaxation\nMaintain a healthy work-life balance\nTalk to someone you trust about your stress.",
  },
  {
    title: "The Importance of Mental Health Days",
    description:
      "Understanding why mental health days are essential for well-being and productivity.",
    image:
      "https://img.freepik.com/premium-vector/mental-health-cartel-with-message_603843-3429.jpg?w=1800",
    content:
      "Taking time for your mental health is just as important as taking sick days. To prioritize mental health:\nTake breaks during the day\nRecognize the signs of burnout\nUse mental health days as needed\nEngage in activities that relax and rejuvenate you.",
  },
  {
    title: "Building Healthy Relationships",
    description:
      "Tips for cultivating strong, healthy, and supportive relationships.",
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-couple-having-fun-nature_23-2148262405.jpg?t=st=1732509834~exp=1732513434~hmac=23c7a4330f9179775c2e8a2f613773e35668565a5ee34cc60b8242bb5a072bd5&w=2000",
    content:
      "Healthy relationships are essential for overall well-being. To build and maintain strong relationships:\nCommunicate openly and honestly\nRespect each other’s boundaries\nOffer emotional support when needed\nMake time for quality moments together.",
  },
  {
    title: "The Role of Vitamins in Your Health",
    description:
      "Understanding how essential vitamins support your body and mind.",
    image:
      "https://img.freepik.com/premium-photo/people-healthy-eating-vegetarian-health-care-concept-happy-woman-with-organic-food-vitamins-green-background_380164-86683.jpg?w=1380",
    content:
      "Vitamins play a critical role in maintaining good health. Here’s how they benefit your body:\nVitamin A: Supports vision and immune function\nVitamin C: Boosts immunity and skin health\nVitamin D: Regulates calcium levels and bone health\nVitamin E: Acts as an antioxidant and protects cells\nVitamin B: Boosts energy levels and brain health.",
  },
  {
    title: "The Benefits of a Plant-Based Diet",
    description:
      "Explore how switching to a plant-based diet can benefit your health and the environment.",
    image:
      "https://img.freepik.com/free-photo/happy-young-man-filming-his-video-blog-episode_171337-5489.jpg?t=st=1732509910~exp=1732513510~hmac=2bfa09836da3c37759576fd6cfd5ceaf4e02999da54dc20a53b04eff4cad23f5&w=1800",
    content:
      "A plant-based diet has numerous health benefits. By focusing on whole, plant-derived foods, you can:\nLower your risk of chronic diseases like heart disease, diabetes, and cancer\nImprove digestion with fiber-rich foods\nSupport weight management\nBoost energy levels\nReduce inflammation.",
  },
  {
    title: "The Importance of Routine for Mental Health",
    description:
      "Discover how creating a daily routine can enhance your mental well-being.",
    image:
      "https://img.freepik.com/free-vector/self-care-health-concept_23-2148517203.jpg?t=st=1732509963~exp=1732513563~hmac=515edd465906fbf5dbcd1f4ca6e9a52db9f89ccb925c4368fad9c630d423bc83&w=1060",
    content:
      "Having a consistent routine can help reduce anxiety and improve productivity. Establishing routines for your day-to-day life:\nGives structure and a sense of control\nHelps manage time effectively\nSupports mental clarity and focus\nImproves sleep patterns\nReduces the stress of unpredictability.",
  },
  {
    title: "How to Improve Your Posture",
    description:
      "Learn how improving your posture can help with back pain and overall health.",
    image:
      "https://img.freepik.com/free-vector/man-with-correct-position-wrong-sitting_23-2147634763.jpg?t=st=1732510006~exp=1732513606~hmac=5046874968d7e5d9e6369195029dd4df3afd6d3c8ae9486c0ce30f67d83dcda1&w=1060",
    content:
      "Good posture not only helps with physical appearance but also promotes better health. To improve your posture:\nKeep your shoulders back and relaxed\nAlign your ears with your shoulders\nAvoid slouching when sitting\nTake breaks from sitting to stand or walk\nStrengthen core muscles with exercises.",
  },
  {
    title: "Essential Self-Care Practices for Busy People",
    description:
      "Find simple self-care practices that can fit into even the busiest schedule.",
    image:
      "https://img.freepik.com/premium-photo/young-woman-with-facial-mask-applied-drinking-coffee-while-using-laptop_1391-3020.jpg?w=1800",
    content:
      "Self-care is crucial for maintaining your well-being, especially when life gets hectic. Try these simple self-care practices:\nTake short breaks to breathe deeply and reset\nPrioritize sleep and rest\nSet aside time for hobbies you enjoy\nPractice mindfulness or meditation daily\nStay connected with friends and family.",
  },
  {
    title: "The Power of Deep Breathing for Stress Relief",
    description:
      "Learn how deep breathing exercises can help reduce stress and improve mental clarity.",
    image:
      "https://img.freepik.com/free-photo/balanced-calm-caucasian-young-man-s-modern-portrait-isolated-blue-wall-monochrome-beautiful-male-model-concept-human-emotions-facial-expression-sales-ad-trendy_155003-39604.jpg?t=st=1732510091~exp=1732513691~hmac=9e22690cc0ea1271b0ca6fedf40409a410957596bbcea1fc0a69f4c5d15e6353&w=1800",
    content:
      "Deep breathing is a simple yet effective technique for stress relief. Here's how it can help:\nReduces cortisol levels (stress hormone)\nImproves focus and concentration\nPromotes relaxation and better sleep\nCan be done anywhere and at any time\nCan help lower blood pressure and heart rate.",
  },
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpen = (blog) => setSelectedBlog(blog);
  const handleClose = () => setSelectedBlog(null);

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 6,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to Our Blog
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}
        >
          Explore our latest articles, insights, and tips on health and
          wellness.
        </Typography>
      </Box>

      {/* Blog Post Previews */}
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
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
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {blog.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{ color: "#1e90ff", fontWeight: "bold" }}
                  onClick={() => handleOpen(blog)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Blog Content */}
      {selectedBlog && (
        <Modal
          open={!!selectedBlog}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={!!selectedBlog}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#1c1c1c",
                color: "#e0e0e0",
                padding: 4,
                borderRadius: 4,
                boxShadow: "0 6px 30px rgba(0,0,0,0.7)",
                maxWidth: 650,
                width: "90%",
                animation: "modal-appear 0.5s ease-out",
              }}
            >
              {/* Modal Header with Gradient */}
              <Box
                sx={{
                  background: "linear-gradient(45deg, #1e90ff, #4682b4)",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  {selectedBlog.title}
                </Typography>
              </Box>

              {/* Modal Body */}
              <Box sx={{ mt: 2 }}>
                {/* Introduction text */}
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {selectedBlog.content.split("\n")[0]}
                </Typography>

                {/* List of Habits or Tips */}
                {selectedBlog.content
                  .split("\n")
                  .slice(1)
                  .map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "1.1rem",
                          color: "#1e90ff",
                          fontWeight: "bold",
                          marginRight: 1,
                        }}
                      >
                        {index + 1}.
                      </Typography>
                      <Typography variant="body2" sx={{ flex: 1 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
              </Box>

              {/* Divider for section separation */}
              <Divider sx={{ borderColor: "#4682b4", my: 4 }} />

              {/* Action Buttons */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "#1e90ff",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#4682b4" },
                    width: "48%",
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    color: "#1e90ff",
                    borderColor: "#1e90ff",
                    textTransform: "none",
                    width: "48%",
                    "&:hover": { borderColor: "#4682b4", color: "#4682b4" },
                  }}
                >
                  Back to Blog
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </Box>
  );
};

export default BlogPage;
