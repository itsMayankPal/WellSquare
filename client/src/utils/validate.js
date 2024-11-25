import Joi from "joi";

/**
 * Validates the user registration data.
 * @param {Object} data - The user registration data to validate.
 * @returns {Object} - An object containing validation results.
 */
const validateRegistration = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Name is required",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
    age: Joi.number().min(1).required().messages({
      "number.base": "Age must be a number",
      "number.min": "Age must be a positive value",
    }),
    height: Joi.number().positive().required().messages({
      "number.base": "Height must be a number",
      "number.positive": "Height must be a positive value",
    }),
    weight: Joi.number().positive().required().messages({
      "number.base": "Weight must be a number",
      "number.positive": "Weight must be a positive value",
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

/**
 * Validates user login data.
 * @param {Object} data - The user login data to validate.
 * @returns {Object} - An object containing validation results.
 */
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password is required",
    }),
  });

  return schema.validate(data, { abortEarly: false });
};

/**
 * Utility to map Joi validation errors into a more readable format.
 * @param {Array} errorDetails - The array of error details from Joi.
 * @returns {Object} - A mapped object with field-specific error messages.
 */
const mapValidationErrors = (errorDetails) => {
  const errors = {};
  errorDetails.forEach((err) => {
    errors[err.path[0]] = err.message;
  });
  return errors;
};

export { validateRegistration, validateLogin, mapValidationErrors };
