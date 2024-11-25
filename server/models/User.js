const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * User Schema: Defines the structure of the user document in MongoDB.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    age: {
      type: Number,
      required: [true, "Please enter your age"],
      min: [1, "Age must be at least 1"],
    },
    height: {
      type: Number,
      required: [true, "Please enter your height in cm"],
    },
    weight: {
      type: Number,
      required: [true, "Please enter your weight in kg"],
    },
    healthGoals: {
      type: String,
      enum: ["Lose Weight", "Gain Muscle", "Maintain Health"],
      default: "Maintain Health",
    },
    progress: [
      {
        date: { type: Date, default: Date.now },
        steps: { type: Number, default: 0 },
        calories: { type: Number, default: 0 },
      },
    ],
    avatar: {
      type: String,
      default: "https://example.com/default-avatar.png", // Placeholder for a default profile picture
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
