const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Set default error message
  let message = err.message || "Server Error";

  // Handle specific types of errors
  if (err.name === "ValidationError") {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    res.status(400); // Bad request error
  } else if (err.name === "CastError") {
    message = `Resource not found with id of ${err.value}`;
    res.status(404); // Not found error
  } else if (err.code === 11000) {
    message = `Duplicate field value entered`;
    res.status(400); // Bad request error
  }

  // Log error details to the server (optional)
  console.error(err);

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
