import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import BlogPage from "./pages/Blog/BlogPage";
import FAQs from "./pages/Faqs/Faqs";
import Subscription from "./pages/Subscription/Subscription";
import ContactUs from "./pages/Contact/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginForm from "./pages/Login/LoginForm";
import SignupForm from "./pages/Signup/SignupForm";
import NotFound from "./pages/NotFound/NotFound";
import MealPlanner from "./pages/Dashboard/MealPlanner";
import MindfulnessToolkit from "./pages/Dashboard/MindfulnessToolkit";
import CalorieChecker from "./pages/Dashboard/CalorieChecker";
import WorkoutPlan from "./pages/Dashboard/WorkoutPlan";
import Profile from "./pages/Dashboard/Profile";
import LogOut from "./pages/Dashboard/LogOut/LogOut";
import FitnessChallenges from "./pages/Dashboard/FitnessChallenges";
import FakePayment from "./pages/Subscription/FakePayment";
const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mindfulness-toolkit" element={<MindfulnessToolkit />} />
        <Route path="/Calorie-Checker" element={<CalorieChecker />} />
        <Route path="/workout-plan" element={<WorkoutPlan />} />
        <Route path="/fitness-challenges" element={<FitnessChallenges />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Logout" element={<LogOut />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<NotFound />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/fakePayment" element={<FakePayment />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
