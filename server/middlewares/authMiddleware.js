const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * Middleware to protect routes.
 * Verifies the JWT token and attaches the user object to the request.
 */
const protect = async (req, res, next) => {
  let token;

  // Check for token in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token from the header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user details from database (excluding the password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Proceed to the next middleware/controller
    } catch (error) {
      console.error("Token verification error:", error);
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

/**
 * Middleware to authorize admin-only routes.
 */
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};

module.exports = { protect, admin };
