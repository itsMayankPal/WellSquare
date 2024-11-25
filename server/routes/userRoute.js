const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfileWithAvatar,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router
  .route("/profile")
  .get(protect, getUserProfile) // Ensure this is correct
  .put(protect, upload.single("avatar"), updateUserProfileWithAvatar);

module.exports = router;
