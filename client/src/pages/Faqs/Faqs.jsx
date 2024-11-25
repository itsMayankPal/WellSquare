import React, { useState } from "react";
import "./Faqs.css";

const faqs = [
  {
    question: "What is HealthTech?",
    answer: "HealthTech refers to the use of technology to improve healthcare services and outcomes.",
  },
  {
    question: "How can I access my health records?",
    answer: "You can access your records by logging into your account on our platform and navigating to the 'My Records' section.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard encryption and follow strict privacy policies to ensure your data is safe.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through the 'Contact Us' page or by emailing support@healthtech.com.",
  },
  {
    question: "Do I need an account to access services?",
    answer: "Yes, you need to create an account to access the full range of our services.",
  },
  // {
  //   question: "What services do you provide?",
  //   answer: "We provide telemedicine consultations, health records management, fitness tracking, and personalized health recommendations.",
  // },
  // {
  //   question: "Can I cancel my subscription?",
  //   answer: "Yes, you can cancel your subscription anytime through your account settings page.",
  // },
];

const Faqs = () => {
  return (
    <div className="faqs-page">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-question" onClick={toggleFaq}>
        {question}
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faqs;
