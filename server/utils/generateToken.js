const jwt = require("jsonwebtoken");

// Generates JWT token with user ID
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Set token expiration to 30 days
  });
};

module.exports = generateToken;
