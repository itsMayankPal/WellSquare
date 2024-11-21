import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/About/AboutUs";
import BlogPage from "./pages/Blog/BlogPage";
import FAQs from "./pages/Faqs/Faqs";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Features from "./pages/Features/Features";
// import FAQs from "./pages/FAQs/FAQs";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import LoginForm from "./pages/Login/LoginForm";
// import SignupForm from "./pages/Signup/SignupForm";
// import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <Header /> {/* Header will be visible on all pages */}
      <Home />
      <AboutUs />
      <BlogPage />
      <FAQs />
      <Footer />
    </Router>
  );
};

export default App;
