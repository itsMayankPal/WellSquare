import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const FakePayment = () => {
  const location = useLocation();
  const { plan } = location.state; // Destructure plan from location

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  // Form validation logic
  const validateForm = () => {
    if (!name || !phone || !email || !address) {
      setError("All fields are required");
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Invalid phone number");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Invalid email format");
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (!validateForm()) return;
    setError(null); // Clear any previous errors

    if (otp === "111111") {
      setPaymentStatus("Payment successful! Thank you for subscribing.");
    } else {
      setPaymentStatus("Invalid OTP. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Complete Your Payment
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
        >
          Fill in the details below to complete your payment for the{" "}
          {plan.title}.
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "#1c1c1c",
              borderRadius: "12px",
              padding: 4,
            }}
          >
            <CardContent sx={{ color: "#fff" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Payment Details
              </Typography>

              {/* Personal Information */}
              <TextField
                label="Name"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Phone Number"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Address"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              {/* Payment Methods */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  Payment Method
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#32cd32",
                    color: "#fff",
                    margin: "5px",
                  }}
                >
                  Credit Card
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#1e90ff",
                    color: "#fff",
                    margin: "5px",
                  }}
                >
                  Debit Card
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#ff4500",
                    color: "#fff",
                    margin: "5px",
                  }}
                >
                  UPI
                </Button>
              </Box>

              {/* OTP Verification */}
              <TextField
                label="Enter OTP"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#32cd32" }}
                onClick={handlePayment}
              >
                Verify OTP and Pay
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Payment Status */}
      {paymentStatus && (
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            {paymentStatus}
          </Typography>
        </Box>
      )}

      {/* Error handling */}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={4000}
          onClose={() => setError(null)}
        >
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default FakePayment;
