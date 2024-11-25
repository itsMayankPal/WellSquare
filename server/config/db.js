// db.js
const mongoose = require("mongoose");

/**
 * Connects to the MongoDB database using the URI in environment variables.
 * It handles connection errors gracefully and logs success.
 */
const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`); // Log connection host
  } catch (error) {
    // Log error and terminate the process
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
