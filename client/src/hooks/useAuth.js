import { useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook for managing user authentication state and logic.
 * @returns {Object} - The hook's state and methods.
 */
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Check for user in localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  /**
   * Handle user login.
   * @param {Object} credentials - The user's login credentials.
   */
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await loginUser(credentials);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle user registration.
   * @param {Object} data - The user's registration details.
   */
  const register = async (data) => {
    try {
      setLoading(true);
      const response = await registerUser(data);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Log out the user.
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
};

export default useAuth;
