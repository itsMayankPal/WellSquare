const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const Joi = require("joi");
const { check } = require("express-validator");

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${req.user.id}_${Date.now()}${path.extname(file.originalname)}`),
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) cb(null, true);
    else cb("Error: Images only!");
  },
});

// **Register a New User**
const registerUser = async (req, res) => {
  try {
    const { name, email, password, age, height, weight } = req.body;

    // Validate inputs using Joi
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      age: Joi.number().min(1).required(),
      height: Joi.number().required(),
      weight: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists!" });

    const hashedPwd = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPwd,
      age,
      height,
      weight,
    });

    console.log("REGISTERED USER ==>", newUser);

    // Respond with user details and token
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      age: newUser.age,
      height: newUser.height,
      weight: newUser.weight,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// **Login User**
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid email or password!" });
    }
    const pwdMatch = await bcrypt.compare(password, user.password);
    console.log("USER FOUND ==>", user);
    if (!pwdMatch) {
      console.log("Password does not match!"); // Additional debug log
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    // Respond with user details and token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      height: user.height,
      weight: user.weight,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// **Get User Profile**
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        height: user.height,
        weight: user.weight,
        healthGoals: user.healthGoals,
        progress: user.progress,
        avatar: user.avatar,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// **Update User Profile with Avatar**
const updateUserProfileWithAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.age = req.body.age || user.age;
      user.height = req.body.height || user.height;
      user.weight = req.body.weight || user.weight;
      user.healthGoals = req.body.healthGoals || user.healthGoals;

      if (req.body.password && req.body.password !== user.password) {
        user.password = await bcrypt.hash(req.body.password.trim(), 10);
      }

      if (req.file) {
        user.avatar = `/uploads/${req.file.filename}`;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        age: updatedUser.age,
        height: updatedUser.height,
        weight: updatedUser.weight,
        healthGoals: updatedUser.healthGoals,
        avatar: updatedUser.avatar,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfileWithAvatar,
};
