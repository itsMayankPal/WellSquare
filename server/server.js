const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoute");
const connectDB = require("./config/db"); // Import the database connection function

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies

// Serve static files (avatars)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
