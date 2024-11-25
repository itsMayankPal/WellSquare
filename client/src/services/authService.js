import axios from "axios";

// Define the base URL for the API
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5001/api/users";

/**
 * Register a new user
 * @param {Object} userData - The user data to send to the API
 * @returns {Object} - The response data from the API
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Failed to register user" };
  }
};

/**
 * Log in an existing user
 * @param {Object} userData - The user credentials (email and password)
 * @returns {Object} - The response data (user info and token)
 */
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      // Save the token in localStorage or cookies (you may choose what fits best for your app)
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in user:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Failed to log in" };
  }
};

/**
 * Logout the user by clearing authentication data from storage
 */
export const logoutUser = () => {
  localStorage.removeItem("token");
  // You may also want to clear other sensitive data or reset the app state here
  console.log("Logged out successfully");
};

/**
 * Get the current user (use the token from localStorage to fetch user data)
 * @returns {Object} - The current user data
 */
export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return axios
      .get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching current user:", error);
        throw error;
      });
  } else {
    throw new Error("No token found, user not logged in.");
  }
};

// Export the authentication methods
const authService = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default authService;
