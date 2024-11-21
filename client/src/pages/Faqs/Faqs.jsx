import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is WellSquare?",
      answer:
        "WellSquare is a health tech platform designed to empower users with personalized tools for managing their health and wellness effectively.",
    },
    {
      question: "How do I create a health plan?",
      answer:
        "Simply sign up, navigate to the 'Meal Planner' section, and follow the guided steps to create your personalized health plan.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, your data is secure with us. We use industry-standard encryption and follow strict privacy policies.",
    },
    {
      question: "Can I access the platform offline?",
      answer:
        "Yes, our platform supports offline access through our Progressive Web App (PWA) feature.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach out to our support team through the 'Contact Us' section, available on our website.",
    },
  ];

  const accordionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: "url('/assets/faqs-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Frequently Asked Questions
          </Typography>
        </motion.div>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ maxWidth: "800px", margin: "0 auto", mt: 4 }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={accordionVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-${index}-content`}
                id={`faq-${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default FAQs;
