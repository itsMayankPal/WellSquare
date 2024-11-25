const multer = require("multer");
const path = require("path");

// Configure multer storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store uploaded files in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${req.user.id}_${Date.now()}${path.extname(file.originalname)}` // Unique filename
    );
  },
});

// File upload middleware using multer
const upload = multer({ storage: storage });

module.exports = upload;
