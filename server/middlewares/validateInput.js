const { body, validationResult } = require("express-validator");

// Middleware for validating user registration input
const validateUserRegistration = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("age").isNumeric().withMessage("Age must be a number"),
  body("height").isNumeric().withMessage("Height must be a number"),
  body("weight").isNumeric().withMessage("Weight must be a number"),

  // Validation result handler
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUserRegistration };
