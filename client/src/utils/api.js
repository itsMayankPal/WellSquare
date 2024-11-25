import axios from "axios";

// Base URL for the backend API
const API_URL = "http://localhost:5001/api";

// Function to get the stored JWT token
const getAuthToken = () => {
  return localStorage.getItem("token"); // Or use sessionStorage depending on your preference
};

// API call to get user details
export const getUserDetails = async () => {
  try {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Assuming the API returns user details
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

// Function to log the user in and save the token
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    const { token } = response.data;

    // Save the token in localStorage
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
};

// API call to update user details
export const updateUserDetails = async (userDetails) => {
  try {
    const token = getAuthToken();

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.put(`${API_URL}/users/profile`, userDetails, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data; // Assuming the API returns the updated user details
  } catch (error) {
    console.error("Error updating user details", error);
    throw error;
  }
};
